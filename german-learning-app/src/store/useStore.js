import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { v4 as uuidv4 } from 'uuid';
import { defaultUser, calculateLevel, xpConfig, leaderboardData } from '../data/database';

const useStore = create(
  persist(
    (set, get) => ({
      // Kullanıcı durumu
      user: null,
      isLoggedIn: false,

      // Uygulama durumu
      currentTheme: null,
      currentQuestion: 0,
      score: 0,
      answers: [],

      // Online eşleştirme
      matchmaking: {
        isSearching: false,
        opponent: null,
        gameId: null,
        myScore: 0,
        opponentScore: 0,
        questions: [],
        currentQuestion: 0,
        gameStatus: 'idle' // idle, searching, playing, finished
      },

      // Lider tablosu
      leaderboard: leaderboardData,

      // Kullanıcı işlemleri
      login: (username) => {
        const newUser = {
          ...defaultUser,
          id: uuidv4(),
          username,
          lastActive: new Date().toISOString()
        };
        set({ user: newUser, isLoggedIn: true });
      },

      logout: () => {
        set({ user: null, isLoggedIn: false });
      },

      updateUser: (updates) => {
        set((state) => ({
          user: state.user ? { ...state.user, ...updates } : null
        }));
      },

      // XP ekleme
      addXp: (amount) => {
        set((state) => {
          if (!state.user) return state;
          const newTotalXp = Math.max(0, state.user.totalXp + amount);
          const newLevel = calculateLevel(newTotalXp);
          return {
            user: {
              ...state.user,
              xp: state.user.xp + amount,
              totalXp: newTotalXp,
              level: newLevel
            }
          };
        });
      },

      // Tema işlemleri
      setCurrentTheme: (theme) => set({ currentTheme: theme, currentQuestion: 0, score: 0, answers: [] }),

      nextQuestion: () => set((state) => ({ currentQuestion: state.currentQuestion + 1 })),

      answerQuestion: (isCorrect) => {
        const { addXp } = get();
        set((state) => ({
          score: isCorrect ? state.score + 1 : state.score,
          answers: [...state.answers, isCorrect]
        }));
        addXp(isCorrect ? xpConfig.correctAnswer : xpConfig.wrongAnswer);
      },

      completeTheme: (themeId) => {
        const { addXp } = get();
        set((state) => {
          if (!state.user) return state;
          const completedThemes = state.user.completedThemes.includes(themeId)
            ? state.user.completedThemes
            : [...state.user.completedThemes, themeId];
          return {
            user: {
              ...state.user,
              completedThemes
            }
          };
        });
        addXp(xpConfig.completeTheme);
      },

      // Wordle skoru
      addWordleScore: (score) => {
        const { addXp } = get();
        set((state) => {
          if (!state.user) return state;
          return {
            user: {
              ...state.user,
              wordleScores: [...state.user.wordleScores, { score, date: new Date().toISOString() }]
            }
          };
        });
        if (score > 0) addXp(xpConfig.wordleWin);
      },

      // Crossword skoru
      addCrosswordScore: (score) => {
        const { addXp } = get();
        set((state) => {
          if (!state.user) return state;
          return {
            user: {
              ...state.user,
              crosswordScores: [...state.user.crosswordScores, { score, date: new Date().toISOString() }]
            }
          };
        });
        addXp(xpConfig.crosswordComplete);
      },

      // PvP
      startMatchmaking: () => {
        set((state) => ({
          matchmaking: {
            ...state.matchmaking,
            isSearching: true,
            gameStatus: 'searching'
          }
        }));

        // Simüle edilmiş eşleştirme (gerçek uygulamada WebSocket kullanılır)
        setTimeout(() => {
          const opponents = [
            { id: 'bot_1', username: 'AlmancaBot', level: 'A2', avatar: '🤖' },
            { id: 'bot_2', username: 'DeutschMeister', level: 'B1', avatar: '👨‍🎓' },
            { id: 'bot_3', username: 'SprachFreund', level: 'A1', avatar: '👩‍💻' },
          ];
          const opponent = opponents[Math.floor(Math.random() * opponents.length)];

          set((state) => ({
            matchmaking: {
              ...state.matchmaking,
              isSearching: false,
              opponent,
              gameId: uuidv4(),
              gameStatus: 'playing',
              myScore: 0,
              opponentScore: 0,
              currentQuestion: 0
            }
          }));
        }, 2000 + Math.random() * 3000);
      },

      cancelMatchmaking: () => {
        set((state) => ({
          matchmaking: {
            ...state.matchmaking,
            isSearching: false,
            gameStatus: 'idle'
          }
        }));
      },

      pvpAnswer: (isCorrect) => {
        set((state) => {
          const newMyScore = isCorrect ? state.matchmaking.myScore + 1 : state.matchmaking.myScore;
          // Bot rastgele cevap verir
          const botCorrect = Math.random() > 0.4;
          const newOpponentScore = botCorrect ? state.matchmaking.opponentScore + 1 : state.matchmaking.opponentScore;

          return {
            matchmaking: {
              ...state.matchmaking,
              myScore: newMyScore,
              opponentScore: newOpponentScore,
              currentQuestion: state.matchmaking.currentQuestion + 1
            }
          };
        });
      },

      endPvpGame: (won) => {
        const { addXp } = get();
        set((state) => {
          if (!state.user) return state;
          return {
            user: {
              ...state.user,
              pvpWins: won ? state.user.pvpWins + 1 : state.user.pvpWins,
              pvpLosses: won ? state.user.pvpLosses : state.user.pvpLosses + 1
            },
            matchmaking: {
              ...state.matchmaking,
              gameStatus: 'finished'
            }
          };
        });
        addXp(won ? xpConfig.pvpWin : xpConfig.pvpLoss);
      },

      resetPvp: () => {
        set({
          matchmaking: {
            isSearching: false,
            opponent: null,
            gameId: null,
            myScore: 0,
            opponentScore: 0,
            questions: [],
            currentQuestion: 0,
            gameStatus: 'idle'
          }
        });
      },

      // Günlük streak
      updateStreak: () => {
        set((state) => {
          if (!state.user) return state;
          const today = new Date().toDateString();
          const lastActive = state.user.lastActive ? new Date(state.user.lastActive).toDateString() : null;
          const yesterday = new Date(Date.now() - 86400000).toDateString();

          let newStreak = state.user.streak;
          if (lastActive === yesterday) {
            newStreak += 1;
          } else if (lastActive !== today) {
            newStreak = 1;
          }

          return {
            user: {
              ...state.user,
              streak: newStreak,
              lastActive: new Date().toISOString()
            }
          };
        });
      },

      // Ayarlar
      toggleSound: () => {
        set((state) => ({
          user: state.user ? {
            ...state.user,
            settings: {
              ...state.user.settings,
              soundEnabled: !state.user.settings.soundEnabled
            }
          } : null
        }));
      },

      toggleDarkMode: () => {
        set((state) => ({
          user: state.user ? {
            ...state.user,
            settings: {
              ...state.user.settings,
              darkMode: !state.user.settings.darkMode
            }
          } : null
        }));
      },

      // Lider tablosunu güncelle
      updateLeaderboard: () => {
        set((state) => {
          if (!state.user) return state;

          // Kullanıcıyı lider tablosuna ekle veya güncelle
          let newLeaderboard = [...state.leaderboard];
          const userIndex = newLeaderboard.findIndex(u => u.id === state.user.id);

          const userEntry = {
            id: state.user.id,
            username: state.user.username,
            level: state.user.level,
            xp: state.user.totalXp,
            avatar: '🧑'
          };

          if (userIndex >= 0) {
            newLeaderboard[userIndex] = userEntry;
          } else {
            newLeaderboard.push(userEntry);
          }

          // XP'ye göre sırala
          newLeaderboard.sort((a, b) => b.xp - a.xp);

          return { leaderboard: newLeaderboard.slice(0, 100) };
        });
      }
    }),
    {
      name: 'german-learning-storage',
      partialize: (state) => ({
        user: state.user,
        isLoggedIn: state.isLoggedIn,
        leaderboard: state.leaderboard
      })
    }
  )
);

export default useStore;
