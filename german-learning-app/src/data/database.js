// =====================================================
// ALMANCA ÖĞRENME UYGULAMASI - VERİTABANI
// Bu dosyayı düzenleyerek içerikleri özelleştirebilirsiniz
// =====================================================

// SEVİYELER
export const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

// =====================================================
// TEMALAR - Sonsuz tema ekleyebilirsiniz
// =====================================================
export const themes = [
  {
    id: 'theme_1',
    name: 'Günlük Konuşmalar',
    description: 'Temel günlük yaşam diyalogları',
    icon: '💬',
    level: 'A1',
    color: '#4CAF50',
    words: [
      { german: 'Hallo', turkish: 'Merhaba', example: 'Hallo, wie geht es dir?' },
      { german: 'Guten Morgen', turkish: 'Günaydın', example: 'Guten Morgen, Herr Müller!' },
      { german: 'Guten Tag', turkish: 'İyi günler', example: 'Guten Tag, kann ich Ihnen helfen?' },
      { german: 'Guten Abend', turkish: 'İyi akşamlar', example: 'Guten Abend, schön Sie zu sehen.' },
      { german: 'Auf Wiedersehen', turkish: 'Hoşçakalın', example: 'Auf Wiedersehen, bis morgen!' },
      { german: 'Tschüss', turkish: 'Görüşürüz', example: 'Tschüss, mach\'s gut!' },
      { german: 'Danke', turkish: 'Teşekkürler', example: 'Danke für Ihre Hilfe!' },
      { german: 'Bitte', turkish: 'Rica ederim / Lütfen', example: 'Bitte, gern geschehen.' },
      { german: 'Entschuldigung', turkish: 'Özür dilerim', example: 'Entschuldigung, wo ist der Bahnhof?' },
      { german: 'Ja', turkish: 'Evet', example: 'Ja, das stimmt.' },
      { german: 'Nein', turkish: 'Hayır', example: 'Nein, das ist falsch.' },
      { german: 'Wie geht es dir?', turkish: 'Nasılsın?', example: 'Hallo Maria, wie geht es dir?' },
      { german: 'Mir geht es gut', turkish: 'İyiyim', example: 'Danke, mir geht es gut.' },
      { german: 'Wie heißt du?', turkish: 'Adın ne?', example: 'Wie heißt du? Ich heiße Hans.' },
      { german: 'Ich verstehe', turkish: 'Anlıyorum', example: 'Ja, ich verstehe das.' },
    ],
    questions: [
      {
        question: '"Merhaba" Almanca\'da nasıl söylenir?',
        options: ['Hallo', 'Tschüss', 'Danke', 'Bitte'],
        correct: 0
      },
      {
        question: '"Guten Morgen" ne anlama gelir?',
        options: ['İyi akşamlar', 'Günaydın', 'İyi geceler', 'İyi günler'],
        correct: 1
      },
      {
        question: '"Teşekkürler" Almanca\'da nasıl söylenir?',
        options: ['Bitte', 'Entschuldigung', 'Danke', 'Hallo'],
        correct: 2
      },
      {
        question: '"Auf Wiedersehen" ne demek?',
        options: ['Merhaba', 'Hoşçakalın', 'Teşekkürler', 'Lütfen'],
        correct: 1
      },
      {
        question: '"Nasılsın?" sorusu Almanca\'da hangisidir?',
        options: ['Wie heißt du?', 'Wie geht es dir?', 'Wo wohnst du?', 'Was machst du?'],
        correct: 1
      },
    ]
  },
  {
    id: 'theme_2',
    name: 'Sayılar',
    description: '0-100 arası sayılar',
    icon: '🔢',
    level: 'A1',
    color: '#2196F3',
    words: [
      { german: 'null', turkish: 'sıfır', example: 'Die Temperatur ist null Grad.' },
      { german: 'eins', turkish: 'bir', example: 'Ich habe eins Bruder.' },
      { german: 'zwei', turkish: 'iki', example: 'Zwei Kaffee, bitte.' },
      { german: 'drei', turkish: 'üç', example: 'Ich habe drei Kinder.' },
      { german: 'vier', turkish: 'dört', example: 'Das Haus hat vier Zimmer.' },
      { german: 'fünf', turkish: 'beş', example: 'Fünf Euro, bitte.' },
      { german: 'sechs', turkish: 'altı', example: 'Der Bus kommt um sechs Uhr.' },
      { german: 'sieben', turkish: 'yedi', example: 'Eine Woche hat sieben Tage.' },
      { german: 'acht', turkish: 'sekiz', example: 'Ich arbeite acht Stunden.' },
      { german: 'neun', turkish: 'dokuz', example: 'Die Schule beginnt um neun.' },
      { german: 'zehn', turkish: 'on', example: 'Zehn Minuten zu Fuß.' },
      { german: 'zwanzig', turkish: 'yirmi', example: 'Er ist zwanzig Jahre alt.' },
      { german: 'dreißig', turkish: 'otuz', example: 'Das kostet dreißig Euro.' },
      { german: 'fünfzig', turkish: 'elli', example: 'Mein Vater ist fünfzig.' },
      { german: 'hundert', turkish: 'yüz', example: 'Hundert Prozent richtig!' },
    ],
    questions: [
      {
        question: '"Fünf" ne demek?',
        options: ['Üç', 'Dört', 'Beş', 'Altı'],
        correct: 2
      },
      {
        question: '"Yedi" Almanca\'da nasıl söylenir?',
        options: ['sechs', 'sieben', 'acht', 'neun'],
        correct: 1
      },
      {
        question: '"Zehn" kaçtır?',
        options: ['8', '9', '10', '11'],
        correct: 2
      },
      {
        question: '"Yirmi" Almanca\'da hangisidir?',
        options: ['dreißig', 'zwanzig', 'vierzig', 'fünfzig'],
        correct: 1
      },
      {
        question: '"Hundert" ne anlama gelir?',
        options: ['Bin', 'Yüz', 'On', 'Milyon'],
        correct: 1
      },
    ]
  },
  {
    id: 'theme_3',
    name: 'Renkler',
    description: 'Temel renkler',
    icon: '🎨',
    level: 'A1',
    color: '#9C27B0',
    words: [
      { german: 'rot', turkish: 'kırmızı', example: 'Die Rose ist rot.' },
      { german: 'blau', turkish: 'mavi', example: 'Der Himmel ist blau.' },
      { german: 'grün', turkish: 'yeşil', example: 'Das Gras ist grün.' },
      { german: 'gelb', turkish: 'sarı', example: 'Die Sonne ist gelb.' },
      { german: 'schwarz', turkish: 'siyah', example: 'Die Nacht ist schwarz.' },
      { german: 'weiß', turkish: 'beyaz', example: 'Der Schnee ist weiß.' },
      { german: 'orange', turkish: 'turuncu', example: 'Die Orange ist orange.' },
      { german: 'rosa', turkish: 'pembe', example: 'Das Kleid ist rosa.' },
      { german: 'braun', turkish: 'kahverengi', example: 'Der Bär ist braun.' },
      { german: 'grau', turkish: 'gri', example: 'Die Wolken sind grau.' },
      { german: 'lila', turkish: 'mor', example: 'Die Blume ist lila.' },
      { german: 'gold', turkish: 'altın rengi', example: 'Der Ring ist gold.' },
    ],
    questions: [
      {
        question: '"Rot" ne renktir?',
        options: ['Mavi', 'Kırmızı', 'Yeşil', 'Sarı'],
        correct: 1
      },
      {
        question: '"Mavi" Almanca\'da hangisidir?',
        options: ['grün', 'blau', 'gelb', 'rot'],
        correct: 1
      },
      {
        question: '"Schwarz" hangi renktir?',
        options: ['Beyaz', 'Gri', 'Siyah', 'Kahverengi'],
        correct: 2
      },
      {
        question: '"Yeşil" Almanca\'da nasıl söylenir?',
        options: ['grün', 'gelb', 'grau', 'gold'],
        correct: 0
      },
      {
        question: '"Weiß" ne anlama gelir?',
        options: ['Siyah', 'Gri', 'Beyaz', 'Mavi'],
        correct: 2
      },
    ]
  },
  {
    id: 'theme_4',
    name: 'Aile',
    description: 'Aile üyeleri',
    icon: '👨‍👩‍👧‍👦',
    level: 'A1',
    color: '#FF5722',
    words: [
      { german: 'die Mutter', turkish: 'anne', example: 'Meine Mutter kocht sehr gut.' },
      { german: 'der Vater', turkish: 'baba', example: 'Mein Vater arbeitet viel.' },
      { german: 'die Schwester', turkish: 'kız kardeş', example: 'Meine Schwester ist jünger.' },
      { german: 'der Bruder', turkish: 'erkek kardeş', example: 'Mein Bruder spielt Fußball.' },
      { german: 'die Großmutter', turkish: 'büyükanne', example: 'Meine Großmutter ist 80 Jahre alt.' },
      { german: 'der Großvater', turkish: 'büyükbaba', example: 'Mein Großvater liest gern.' },
      { german: 'die Tante', turkish: 'teyze/hala', example: 'Meine Tante wohnt in Berlin.' },
      { german: 'der Onkel', turkish: 'dayı/amca', example: 'Mein Onkel hat ein Auto.' },
      { german: 'der Cousin', turkish: 'kuzen (erkek)', example: 'Mein Cousin studiert Medizin.' },
      { german: 'die Cousine', turkish: 'kuzen (kız)', example: 'Meine Cousine ist sehr nett.' },
      { german: 'das Kind', turkish: 'çocuk', example: 'Das Kind spielt im Garten.' },
      { german: 'die Eltern', turkish: 'anne-baba', example: 'Meine Eltern sind zu Hause.' },
    ],
    questions: [
      {
        question: '"Die Mutter" ne demek?',
        options: ['Baba', 'Anne', 'Kardeş', 'Teyze'],
        correct: 1
      },
      {
        question: '"Baba" Almanca\'da hangisidir?',
        options: ['die Mutter', 'der Bruder', 'der Vater', 'der Onkel'],
        correct: 2
      },
      {
        question: '"Die Schwester" kimi ifade eder?',
        options: ['Erkek kardeş', 'Kız kardeş', 'Anne', 'Teyze'],
        correct: 1
      },
      {
        question: '"Büyükanne" Almanca\'da nasıl söylenir?',
        options: ['die Mutter', 'die Tante', 'die Großmutter', 'die Cousine'],
        correct: 2
      },
      {
        question: '"Das Kind" ne anlama gelir?',
        options: ['Ebeveyn', 'Çocuk', 'Aile', 'Kardeş'],
        correct: 1
      },
    ]
  },
  {
    id: 'theme_5',
    name: 'Yiyecekler',
    description: 'Temel yiyecekler ve içecekler',
    icon: '🍕',
    level: 'A2',
    color: '#E91E63',
    words: [
      { german: 'das Brot', turkish: 'ekmek', example: 'Ich esse Brot zum Frühstück.' },
      { german: 'der Käse', turkish: 'peynir', example: 'Der Käse kommt aus der Schweiz.' },
      { german: 'die Milch', turkish: 'süt', example: 'Trinken Sie Milch?' },
      { german: 'das Wasser', turkish: 'su', example: 'Ich möchte ein Glas Wasser.' },
      { german: 'der Kaffee', turkish: 'kahve', example: 'Ein Kaffee mit Milch, bitte.' },
      { german: 'der Tee', turkish: 'çay', example: 'Möchten Sie Tee oder Kaffee?' },
      { german: 'das Fleisch', turkish: 'et', example: 'Das Fleisch ist sehr lecker.' },
      { german: 'der Fisch', turkish: 'balık', example: 'Ich esse gern Fisch.' },
      { german: 'das Gemüse', turkish: 'sebze', example: 'Gemüse ist gesund.' },
      { german: 'das Obst', turkish: 'meyve', example: 'Obst enthält viele Vitamine.' },
      { german: 'der Apfel', turkish: 'elma', example: 'Ein Apfel am Tag...' },
      { german: 'die Kartoffel', turkish: 'patates', example: 'Kartoffeln mit Fleisch.' },
      { german: 'der Reis', turkish: 'pilav', example: 'Reis mit Gemüse.' },
      { german: 'die Suppe', turkish: 'çorba', example: 'Die Suppe ist heiß.' },
    ],
    questions: [
      {
        question: '"Das Brot" ne demek?',
        options: ['Et', 'Ekmek', 'Süt', 'Peynir'],
        correct: 1
      },
      {
        question: '"Kahve" Almanca\'da hangisidir?',
        options: ['der Tee', 'die Milch', 'der Kaffee', 'das Wasser'],
        correct: 2
      },
      {
        question: '"Die Milch" ne anlama gelir?',
        options: ['Su', 'Süt', 'Çay', 'Meyve suyu'],
        correct: 1
      },
      {
        question: '"Sebze" Almanca\'da nasıl söylenir?',
        options: ['das Obst', 'das Gemüse', 'das Fleisch', 'der Fisch'],
        correct: 1
      },
      {
        question: '"Der Apfel" ne demek?',
        options: ['Portakal', 'Muz', 'Elma', 'Armut'],
        correct: 2
      },
    ]
  },
  {
    id: 'theme_6',
    name: 'Fiiller',
    description: 'Temel fiiller',
    icon: '🏃',
    level: 'A2',
    color: '#00BCD4',
    words: [
      { german: 'sein', turkish: 'olmak', example: 'Ich bin müde.' },
      { german: 'haben', turkish: 'sahip olmak', example: 'Ich habe ein Auto.' },
      { german: 'machen', turkish: 'yapmak', example: 'Was machst du?' },
      { german: 'gehen', turkish: 'gitmek', example: 'Ich gehe nach Hause.' },
      { german: 'kommen', turkish: 'gelmek', example: 'Wann kommst du?' },
      { german: 'essen', turkish: 'yemek', example: 'Wir essen zusammen.' },
      { german: 'trinken', turkish: 'içmek', example: 'Ich trinke Wasser.' },
      { german: 'schlafen', turkish: 'uyumak', example: 'Ich schlafe acht Stunden.' },
      { german: 'arbeiten', turkish: 'çalışmak', example: 'Er arbeitet viel.' },
      { german: 'lernen', turkish: 'öğrenmek', example: 'Ich lerne Deutsch.' },
      { german: 'sprechen', turkish: 'konuşmak', example: 'Sprechen Sie Deutsch?' },
      { german: 'lesen', turkish: 'okumak', example: 'Ich lese ein Buch.' },
      { german: 'schreiben', turkish: 'yazmak', example: 'Ich schreibe einen Brief.' },
      { german: 'sehen', turkish: 'görmek', example: 'Ich sehe einen Film.' },
      { german: 'hören', turkish: 'duymak', example: 'Ich höre Musik.' },
    ],
    questions: [
      {
        question: '"Sein" ne anlama gelir?',
        options: ['Yapmak', 'Olmak', 'Gitmek', 'Gelmek'],
        correct: 1
      },
      {
        question: '"Gitmek" Almanca\'da hangisidir?',
        options: ['kommen', 'gehen', 'machen', 'haben'],
        correct: 1
      },
      {
        question: '"Essen" ne demek?',
        options: ['İçmek', 'Yemek', 'Uyumak', 'Çalışmak'],
        correct: 1
      },
      {
        question: '"Öğrenmek" Almanca\'da nasıl söylenir?',
        options: ['arbeiten', 'sprechen', 'lernen', 'lesen'],
        correct: 2
      },
      {
        question: '"Sprechen" ne anlama gelir?',
        options: ['Okumak', 'Yazmak', 'Konuşmak', 'Duymak'],
        correct: 2
      },
    ]
  },
  {
    id: 'theme_7',
    name: 'Meslek ve İş',
    description: 'Meslekler ve iş hayatı',
    icon: '💼',
    level: 'B1',
    color: '#795548',
    words: [
      { german: 'der Arzt', turkish: 'doktor', example: 'Der Arzt untersucht den Patienten.' },
      { german: 'der Lehrer', turkish: 'öğretmen', example: 'Der Lehrer erklärt die Grammatik.' },
      { german: 'der Ingenieur', turkish: 'mühendis', example: 'Der Ingenieur plant das Gebäude.' },
      { german: 'der Anwalt', turkish: 'avukat', example: 'Der Anwalt verteidigt den Klienten.' },
      { german: 'die Krankenschwester', turkish: 'hemşire', example: 'Die Krankenschwester hilft dem Arzt.' },
      { german: 'der Koch', turkish: 'aşçı', example: 'Der Koch bereitet das Essen vor.' },
      { german: 'der Polizist', turkish: 'polis', example: 'Der Polizist regelt den Verkehr.' },
      { german: 'die Arbeit', turkish: 'iş', example: 'Die Arbeit ist interessant.' },
      { german: 'das Büro', turkish: 'ofis', example: 'Ich arbeite im Büro.' },
      { german: 'die Firma', turkish: 'şirket', example: 'Die Firma hat 100 Mitarbeiter.' },
      { german: 'der Chef', turkish: 'patron', example: 'Der Chef leitet die Firma.' },
      { german: 'das Gehalt', turkish: 'maaş', example: 'Das Gehalt kommt am Ende des Monats.' },
    ],
    questions: [
      {
        question: '"Der Arzt" ne demek?',
        options: ['Öğretmen', 'Doktor', 'Mühendis', 'Avukat'],
        correct: 1
      },
      {
        question: '"Öğretmen" Almanca\'da hangisidir?',
        options: ['der Arzt', 'der Lehrer', 'der Koch', 'der Chef'],
        correct: 1
      },
      {
        question: '"Das Büro" ne anlama gelir?',
        options: ['Şirket', 'Maaş', 'Ofis', 'İş'],
        correct: 2
      },
      {
        question: '"Şirket" Almanca\'da nasıl söylenir?',
        options: ['die Arbeit', 'das Büro', 'die Firma', 'das Gehalt'],
        correct: 2
      },
      {
        question: '"Der Koch" hangi mesleği ifade eder?',
        options: ['Polis', 'Hemşire', 'Aşçı', 'Avukat'],
        correct: 2
      },
    ]
  },
  {
    id: 'theme_8',
    name: 'Seyahat',
    description: 'Seyahat ve ulaşım',
    icon: '✈️',
    level: 'B1',
    color: '#3F51B5',
    words: [
      { german: 'das Flugzeug', turkish: 'uçak', example: 'Das Flugzeug fliegt nach Berlin.' },
      { german: 'der Zug', turkish: 'tren', example: 'Der Zug fährt um 10 Uhr ab.' },
      { german: 'das Auto', turkish: 'araba', example: 'Wir fahren mit dem Auto.' },
      { german: 'der Bus', turkish: 'otobüs', example: 'Der Bus kommt in 5 Minuten.' },
      { german: 'der Bahnhof', turkish: 'tren istasyonu', example: 'Ich warte am Bahnhof.' },
      { german: 'der Flughafen', turkish: 'havalimanı', example: 'Der Flughafen ist weit.' },
      { german: 'das Hotel', turkish: 'otel', example: 'Das Hotel ist sehr schön.' },
      { german: 'das Ticket', turkish: 'bilet', example: 'Ich kaufe ein Ticket.' },
      { german: 'der Koffer', turkish: 'bavul', example: 'Mein Koffer ist schwer.' },
      { german: 'die Reise', turkish: 'seyahat', example: 'Die Reise war wunderbar.' },
      { german: 'der Urlaub', turkish: 'tatil', example: 'Ich mache Urlaub in Italien.' },
      { german: 'die Karte', turkish: 'harita/kart', example: 'Haben Sie eine Karte?' },
    ],
    questions: [
      {
        question: '"Das Flugzeug" ne demek?',
        options: ['Tren', 'Otobüs', 'Uçak', 'Araba'],
        correct: 2
      },
      {
        question: '"Tren" Almanca\'da hangisidir?',
        options: ['das Auto', 'der Bus', 'der Zug', 'das Flugzeug'],
        correct: 2
      },
      {
        question: '"Der Bahnhof" ne anlama gelir?',
        options: ['Havalimanı', 'Tren istasyonu', 'Otel', 'Otogar'],
        correct: 1
      },
      {
        question: '"Tatil" Almanca\'da nasıl söylenir?',
        options: ['die Reise', 'der Urlaub', 'das Hotel', 'der Koffer'],
        correct: 1
      },
      {
        question: '"Das Ticket" ne demek?',
        options: ['Harita', 'Bavul', 'Bilet', 'Pasaport'],
        correct: 2
      },
    ]
  },
];

// =====================================================
// WORDLE KELİMELERİ - Seviyeye göre
// =====================================================
export const wordleWords = {
  A1: [
    { word: 'HAUS', hint: 'Ev', turkish: 'Ev' },
    { word: 'BUCH', hint: 'Kitap', turkish: 'Kitap' },
    { word: 'TISCH', hint: 'Masa', turkish: 'Masa' },
    { word: 'STUHL', hint: 'Sandalye', turkish: 'Sandalye' },
    { word: 'AUTO', hint: 'Araba', turkish: 'Araba' },
    { word: 'GELD', hint: 'Para', turkish: 'Para' },
    { word: 'KIND', hint: 'Çocuk', turkish: 'Çocuk' },
    { word: 'FRAU', hint: 'Kadın', turkish: 'Kadın' },
    { word: 'MANN', hint: 'Adam', turkish: 'Erkek' },
    { word: 'HUND', hint: 'Köpek', turkish: 'Köpek' },
  ],
  A2: [
    { word: 'SCHULE', hint: 'Okul', turkish: 'Okul' },
    { word: 'ARBEIT', hint: 'İş', turkish: 'İş' },
    { word: 'FREUND', hint: 'Arkadaş', turkish: 'Arkadaş' },
    { word: 'TELEFON', hint: 'Telefon', turkish: 'Telefon' },
    { word: 'KAFFEE', hint: 'Kahve', turkish: 'Kahve' },
    { word: 'WASSER', hint: 'Su', turkish: 'Su' },
    { word: 'ZIMMER', hint: 'Oda', turkish: 'Oda' },
    { word: 'MORGEN', hint: 'Sabah', turkish: 'Sabah' },
    { word: 'ABEND', hint: 'Akşam', turkish: 'Akşam' },
    { word: 'MONAT', hint: 'Ay', turkish: 'Ay' },
  ],
  B1: [
    { word: 'WICHTIG', hint: 'Önemli', turkish: 'Önemli' },
    { word: 'SCHNELL', hint: 'Hızlı', turkish: 'Hızlı' },
    { word: 'LANGSAM', hint: 'Yavaş', turkish: 'Yavaş' },
    { word: 'GESUND', hint: 'Sağlıklı', turkish: 'Sağlıklı' },
    { word: 'GEFAHR', hint: 'Tehlike', turkish: 'Tehlike' },
    { word: 'ERFOLG', hint: 'Başarı', turkish: 'Başarı' },
    { word: 'BEISPIEL', hint: 'Örnek', turkish: 'Örnek' },
    { word: 'MEINUNG', hint: 'Fikir', turkish: 'Görüş' },
    { word: 'ZUKUNFT', hint: 'Gelecek', turkish: 'Gelecek' },
    { word: 'PROBLEM', hint: 'Sorun', turkish: 'Problem' },
  ],
  B2: [
    { word: 'ENTWICKLUNG', hint: 'Gelişim', turkish: 'Gelişme' },
    { word: 'GESELLSCHAFT', hint: 'Toplum', turkish: 'Toplum' },
    { word: 'BEDEUTUNG', hint: 'Anlam', turkish: 'Anlam' },
    { word: 'ERFAHRUNG', hint: 'Deneyim', turkish: 'Tecrübe' },
    { word: 'BEZIEHUNG', hint: 'İlişki', turkish: 'İlişki' },
    { word: 'UNTERSCHIED', hint: 'Fark', turkish: 'Fark' },
    { word: 'VERHALTEN', hint: 'Davranış', turkish: 'Davranış' },
    { word: 'WISSENSCHAFT', hint: 'Bilim', turkish: 'Bilim' },
  ],
  C1: [
    { word: 'VORAUSSETZUNG', hint: 'Ön koşul', turkish: 'Ön koşul' },
    { word: 'ZUSAMMENHANG', hint: 'Bağlam', turkish: 'Bağlam' },
    { word: 'VERANTWORTUNG', hint: 'Sorumluluk', turkish: 'Sorumluluk' },
    { word: 'GERECHTIGKEIT', hint: 'Adalet', turkish: 'Adalet' },
    { word: 'NACHHALTIGKEIT', hint: 'Sürdürülebilirlik', turkish: 'Sürdürülebilirlik' },
  ],
  C2: [
    { word: 'AUSEINANDERSETZUNG', hint: 'Tartışma', turkish: 'Münakaşa' },
    { word: 'WELTANSCHAUUNG', hint: 'Dünya görüşü', turkish: 'Dünya görüşü' },
    { word: 'FINGERSPITZENGEFÜHL', hint: 'İnce zeka', turkish: 'Hassasiyet' },
  ],
};

// =====================================================
// CROSSWORD BULMACALARI
// =====================================================
export const crosswordPuzzles = [
  {
    id: 'crossword_1',
    level: 'A1',
    title: 'Temel Kelimeler',
    grid: [
      ['H', 'A', 'U', 'S', ' ', ' '],
      ['U', ' ', ' ', 'C', 'H', 'U'],
      ['N', ' ', ' ', 'H', 'A', 'L'],
      ['D', 'A', 'N', 'K', 'E', ' '],
      [' ', ' ', ' ', ' ', ' ', ' '],
    ],
    words: [
      { word: 'HAUS', direction: 'across', row: 0, col: 0, clue: 'Ev' },
      { word: 'HUND', direction: 'down', row: 0, col: 0, clue: 'Köpek' },
      { word: 'SCHULE', direction: 'down', row: 0, col: 3, clue: 'Okul' },
      { word: 'DANKE', direction: 'across', row: 3, col: 0, clue: 'Teşekkürler' },
    ]
  },
  {
    id: 'crossword_2',
    level: 'A2',
    title: 'Günlük Yaşam',
    grid: [
      ['W', 'A', 'S', 'S', 'E', 'R'],
      ['O', ' ', ' ', ' ', ' ', ' '],
      ['H', 'E', 'U', 'T', 'E', ' '],
      ['N', ' ', ' ', ' ', ' ', ' '],
      ['E', 'S', 'S', 'E', 'N', ' '],
      ['N', ' ', ' ', ' ', ' ', ' '],
    ],
    words: [
      { word: 'WASSER', direction: 'across', row: 0, col: 0, clue: 'Su' },
      { word: 'WOHNEN', direction: 'down', row: 0, col: 0, clue: 'Oturmak/Yaşamak' },
      { word: 'HEUTE', direction: 'across', row: 2, col: 0, clue: 'Bugün' },
      { word: 'ESSEN', direction: 'across', row: 4, col: 0, clue: 'Yemek' },
    ]
  },
];

// =====================================================
// HİKAYELER - Çizgi dizi formatında
// =====================================================
export const stories = [
  {
    id: 'story_1',
    title: 'Berlin\'de İlk Gün',
    description: 'Türkiye\'den Berlin\'e taşınan Elif\'in ilk günü',
    level: 'A1',
    thumbnail: '🏙️',
    duration: '5 dk',
    episodes: [
      {
        id: 'ep_1',
        title: 'Bölüm 1: Havalimanı',
        scenes: [
          {
            character: 'Elif',
            image: '👩',
            german: 'Hallo! Ich bin Elif. Ich komme aus der Türkei.',
            turkish: 'Merhaba! Ben Elif. Türkiye\'den geliyorum.',
            audio: null // Ses dosyası eklenebilir
          },
          {
            character: 'Passagier',
            image: '👨',
            german: 'Willkommen in Deutschland! Wohin möchten Sie?',
            turkish: 'Almanya\'ya hoş geldiniz! Nereye gitmek istiyorsunuz?',
            audio: null
          },
          {
            character: 'Elif',
            image: '👩',
            german: 'Ich möchte nach Berlin fahren. Wo ist der Bus?',
            turkish: 'Berlin\'e gitmek istiyorum. Otobüs nerede?',
            audio: null
          },
          {
            character: 'Passagier',
            image: '👨',
            german: 'Der Bus ist dort drüben. Gute Reise!',
            turkish: 'Otobüs şurada. İyi yolculuklar!',
            audio: null
          },
          {
            character: 'Elif',
            image: '👩',
            german: 'Vielen Dank! Auf Wiedersehen!',
            turkish: 'Çok teşekkürler! Hoşça kalın!',
            audio: null
          }
        ]
      },
      {
        id: 'ep_2',
        title: 'Bölüm 2: Yeni Ev',
        scenes: [
          {
            character: 'Elif',
            image: '👩',
            german: 'Das ist meine neue Wohnung. Sie ist klein aber schön.',
            turkish: 'Bu benim yeni dairem. Küçük ama güzel.',
            audio: null
          },
          {
            character: 'Nachbar',
            image: '👴',
            german: 'Guten Tag! Ich bin Herr Schmidt, Ihr Nachbar.',
            turkish: 'İyi günler! Ben Bay Schmidt, komşunuzum.',
            audio: null
          },
          {
            character: 'Elif',
            image: '👩',
            german: 'Freut mich! Ich bin Elif. Ich komme aus Istanbul.',
            turkish: 'Memnun oldum! Ben Elif. İstanbul\'dan geliyorum.',
            audio: null
          },
          {
            character: 'Nachbar',
            image: '👴',
            german: 'Sehr schön! Wenn Sie Hilfe brauchen, ich bin hier.',
            turkish: 'Çok güzel! Yardıma ihtiyacınız olursa, buradayım.',
            audio: null
          }
        ]
      }
    ]
  },
  {
    id: 'story_2',
    title: 'Almanca Kursu',
    description: 'Elif\'in Almanca kursundaki ilk dersi',
    level: 'A2',
    thumbnail: '📚',
    duration: '7 dk',
    episodes: [
      {
        id: 'ep_1',
        title: 'Bölüm 1: İlk Ders',
        scenes: [
          {
            character: 'Lehrerin',
            image: '👩‍🏫',
            german: 'Guten Morgen! Willkommen im Deutschkurs. Ich bin Frau Weber.',
            turkish: 'Günaydın! Almanca kursuna hoş geldiniz. Ben Bayan Weber.',
            audio: null
          },
          {
            character: 'Elif',
            image: '👩',
            german: 'Guten Morgen, Frau Weber! Ich freue mich, hier zu sein.',
            turkish: 'Günaydın, Bayan Weber! Burada olmaktan mutluyum.',
            audio: null
          },
          {
            character: 'Lehrerin',
            image: '👩‍🏫',
            german: 'Heute lernen wir die Zahlen. Eins, zwei, drei...',
            turkish: 'Bugün sayıları öğreniyoruz. Bir, iki, üç...',
            audio: null
          },
          {
            character: 'Klasse',
            image: '👥',
            german: 'Eins, zwei, drei, vier, fünf!',
            turkish: 'Bir, iki, üç, dört, beş!',
            audio: null
          }
        ]
      }
    ]
  },
  {
    id: 'story_3',
    title: 'Restoranda',
    description: 'Elif restoranda yemek sipariş ediyor',
    level: 'B1',
    thumbnail: '🍽️',
    duration: '6 dk',
    episodes: [
      {
        id: 'ep_1',
        title: 'Bölüm 1: Sipariş',
        scenes: [
          {
            character: 'Kellner',
            image: '🧑‍🍳',
            german: 'Guten Abend! Haben Sie reserviert?',
            turkish: 'İyi akşamlar! Rezervasyonunuz var mı?',
            audio: null
          },
          {
            character: 'Elif',
            image: '👩',
            german: 'Ja, auf den Namen Elif für zwei Personen.',
            turkish: 'Evet, Elif adına iki kişilik.',
            audio: null
          },
          {
            character: 'Kellner',
            image: '🧑‍🍳',
            german: 'Perfekt! Hier ist die Speisekarte. Was möchten Sie trinken?',
            turkish: 'Mükemmel! İşte menü. Ne içmek istersiniz?',
            audio: null
          },
          {
            character: 'Elif',
            image: '👩',
            german: 'Ich hätte gern ein Glas Wasser und die Tomatensuppe, bitte.',
            turkish: 'Bir bardak su ve domates çorbası istiyorum, lütfen.',
            audio: null
          },
          {
            character: 'Kellner',
            image: '🧑‍🍳',
            german: 'Sehr gerne! Und als Hauptgericht?',
            turkish: 'Tabii ki! Ve ana yemek olarak?',
            audio: null
          },
          {
            character: 'Elif',
            image: '👩',
            german: 'Ich nehme das Schnitzel mit Kartoffelsalat.',
            turkish: 'Patates salatalı şnitzel alacağım.',
            audio: null
          }
        ]
      }
    ]
  }
];

// =====================================================
// SÖZLÜK - Kapsamlı Almanca-Türkçe sözlük
// =====================================================
export const dictionary = [
  // A harfi
  { german: 'aber', turkish: 'ama, fakat', type: 'bağlaç', example: 'Ich möchte kommen, aber ich habe keine Zeit.' },
  { german: 'Abend', turkish: 'akşam', type: 'isim', article: 'der', example: 'Guten Abend!' },
  { german: 'Abendessen', turkish: 'akşam yemeği', type: 'isim', article: 'das', example: 'Das Abendessen ist fertig.' },
  { german: 'alt', turkish: 'yaşlı, eski', type: 'sıfat', example: 'Das Haus ist sehr alt.' },
  { german: 'Anfang', turkish: 'başlangıç', type: 'isim', article: 'der', example: 'Am Anfang war es schwer.' },
  { german: 'Antwort', turkish: 'cevap', type: 'isim', article: 'die', example: 'Was ist die Antwort?' },
  { german: 'Apfel', turkish: 'elma', type: 'isim', article: 'der', example: 'Der Apfel ist rot.' },
  { german: 'Arbeit', turkish: 'iş', type: 'isim', article: 'die', example: 'Ich gehe zur Arbeit.' },
  { german: 'arbeiten', turkish: 'çalışmak', type: 'fiil', example: 'Ich arbeite jeden Tag.' },
  { german: 'Arzt', turkish: 'doktor', type: 'isim', article: 'der', example: 'Der Arzt hilft mir.' },
  { german: 'auch', turkish: 'de, da, ayrıca', type: 'zarf', example: 'Ich komme auch.' },
  { german: 'auf', turkish: 'üzerinde, üzerine', type: 'edat', example: 'Das Buch liegt auf dem Tisch.' },
  { german: 'Auge', turkish: 'göz', type: 'isim', article: 'das', example: 'Sie hat blaue Augen.' },
  { german: 'aus', turkish: '-den, -dan', type: 'edat', example: 'Ich komme aus der Türkei.' },
  { german: 'Auto', turkish: 'araba', type: 'isim', article: 'das', example: 'Das Auto ist neu.' },

  // B harfi
  { german: 'Bahn', turkish: 'tren, demiryolu', type: 'isim', article: 'die', example: 'Ich fahre mit der Bahn.' },
  { german: 'bald', turkish: 'yakında', type: 'zarf', example: 'Bis bald!' },
  { german: 'Baum', turkish: 'ağaç', type: 'isim', article: 'der', example: 'Der Baum ist groß.' },
  { german: 'beginnen', turkish: 'başlamak', type: 'fiil', example: 'Der Film beginnt um acht.' },
  { german: 'bei', turkish: 'yanında, -de', type: 'edat', example: 'Ich wohne bei meinen Eltern.' },
  { german: 'Beispiel', turkish: 'örnek', type: 'isim', article: 'das', example: 'Zum Beispiel...' },
  { german: 'bekommen', turkish: 'almak, elde etmek', type: 'fiil', example: 'Ich bekomme ein Geschenk.' },
  { german: 'benutzen', turkish: 'kullanmak', type: 'fiil', example: 'Ich benutze das Handy.' },
  { german: 'Berg', turkish: 'dağ', type: 'isim', article: 'der', example: 'Der Berg ist hoch.' },
  { german: 'besser', turkish: 'daha iyi', type: 'sıfat', example: 'Das ist besser.' },
  { german: 'beste', turkish: 'en iyi', type: 'sıfat', example: 'Du bist der Beste!' },
  { german: 'Bild', turkish: 'resim', type: 'isim', article: 'das', example: 'Das Bild ist schön.' },
  { german: 'billig', turkish: 'ucuz', type: 'sıfat', example: 'Das ist sehr billig.' },
  { german: 'bis', turkish: 'kadar, -e kadar', type: 'edat', example: 'Bis morgen!' },
  { german: 'bitte', turkish: 'lütfen, rica ederim', type: 'zarf', example: 'Bitte schön!' },
  { german: 'bleiben', turkish: 'kalmak', type: 'fiil', example: 'Ich bleibe zu Hause.' },
  { german: 'Blume', turkish: 'çiçek', type: 'isim', article: 'die', example: 'Die Blume ist rot.' },
  { german: 'brauchen', turkish: 'ihtiyaç duymak', type: 'fiil', example: 'Ich brauche Hilfe.' },
  { german: 'Brief', turkish: 'mektup', type: 'isim', article: 'der', example: 'Ich schreibe einen Brief.' },
  { german: 'bringen', turkish: 'getirmek', type: 'fiil', example: 'Ich bringe das Buch.' },
  { german: 'Brot', turkish: 'ekmek', type: 'isim', article: 'das', example: 'Das Brot ist frisch.' },
  { german: 'Bruder', turkish: 'erkek kardeş', type: 'isim', article: 'der', example: 'Mein Bruder ist älter.' },
  { german: 'Buch', turkish: 'kitap', type: 'isim', article: 'das', example: 'Ich lese ein Buch.' },

  // C harfi
  { german: 'Chance', turkish: 'şans, fırsat', type: 'isim', article: 'die', example: 'Das ist eine gute Chance.' },
  { german: 'Computer', turkish: 'bilgisayar', type: 'isim', article: 'der', example: 'Der Computer ist neu.' },

  // D harfi
  { german: 'da', turkish: 'orada, çünkü', type: 'zarf', example: 'Da ist er!' },
  { german: 'dabei', turkish: 'yanında, bu sırada', type: 'zarf', example: 'Ich bin dabei.' },
  { german: 'dafür', turkish: 'bunun için', type: 'zarf', example: 'Danke dafür!' },
  { german: 'damals', turkish: 'o zaman', type: 'zarf', example: 'Damals war ich jung.' },
  { german: 'damit', turkish: 'bununla, böylece', type: 'bağlaç', example: 'Damit bin ich fertig.' },
  { german: 'danach', turkish: 'ondan sonra', type: 'zarf', example: 'Danach gehe ich.' },
  { german: 'danke', turkish: 'teşekkürler', type: 'zarf', example: 'Danke schön!' },
  { german: 'dann', turkish: 'sonra, o zaman', type: 'zarf', example: 'Dann komme ich.' },
  { german: 'darauf', turkish: 'onun üzerine', type: 'zarf', example: 'Ich freue mich darauf.' },
  { german: 'darf', turkish: 'izin verilmek (dürfen)', type: 'fiil', example: 'Darf ich fragen?' },
  { german: 'darum', turkish: 'bu yüzden', type: 'zarf', example: 'Darum bin ich hier.' },
  { german: 'das', turkish: 'bu, o (article)', type: 'artikel', example: 'Das ist gut.' },
  { german: 'denken', turkish: 'düşünmek', type: 'fiil', example: 'Ich denke oft an dich.' },
  { german: 'denn', turkish: 'çünkü', type: 'bağlaç', example: 'Ich bleibe, denn ich bin müde.' },
  { german: 'deshalb', turkish: 'bu yüzden', type: 'zarf', example: 'Deshalb komme ich.' },
  { german: 'deutsch', turkish: 'Almanca', type: 'sıfat', example: 'Ich lerne Deutsch.' },
  { german: 'Deutschland', turkish: 'Almanya', type: 'isim', article: '-', example: 'Ich wohne in Deutschland.' },
  { german: 'Dienstag', turkish: 'Salı', type: 'isim', article: 'der', example: 'Am Dienstag arbeite ich.' },
  { german: 'diese', turkish: 'bu, şu', type: 'zamir', example: 'Diese Frau ist nett.' },
  { german: 'Ding', turkish: 'şey', type: 'isim', article: 'das', example: 'Was ist dieses Ding?' },
  { german: 'doch', turkish: 'ama, yine de', type: 'zarf', example: 'Doch, das stimmt!' },
  { german: 'Donnerstag', turkish: 'Perşembe', type: 'isim', article: 'der', example: 'Am Donnerstag habe ich frei.' },
  { german: 'Dorf', turkish: 'köy', type: 'isim', article: 'das', example: 'Das Dorf ist klein.' },
  { german: 'dort', turkish: 'orada', type: 'zarf', example: 'Dort ist mein Haus.' },
  { german: 'draußen', turkish: 'dışarıda', type: 'zarf', example: 'Ich bin draußen.' },
  { german: 'drei', turkish: 'üç', type: 'sayı', example: 'Ich habe drei Kinder.' },
  { german: 'drin', turkish: 'içeride', type: 'zarf', example: 'Ich bin drin.' },
  { german: 'du', turkish: 'sen', type: 'zamir', example: 'Du bist mein Freund.' },
  { german: 'dumm', turkish: 'aptal', type: 'sıfat', example: 'Das war dumm.' },
  { german: 'dunkel', turkish: 'karanlık', type: 'sıfat', example: 'Es ist dunkel.' },
  { german: 'durch', turkish: 'içinden, vasıtasıyla', type: 'edat', example: 'Ich gehe durch den Park.' },
  { german: 'dürfen', turkish: 'izin verilmek', type: 'fiil', example: 'Darf ich?' },

  // E harfi
  { german: 'eben', turkish: 'az önce, işte', type: 'zarf', example: 'Eben habe ich gegessen.' },
  { german: 'egal', turkish: 'farketmez', type: 'sıfat', example: 'Das ist mir egal.' },
  { german: 'Ei', turkish: 'yumurta', type: 'isim', article: 'das', example: 'Ich esse ein Ei.' },
  { german: 'eigen', turkish: 'kendi', type: 'sıfat', example: 'Mein eigenes Haus.' },
  { german: 'eigentlich', turkish: 'aslında', type: 'zarf', example: 'Eigentlich hast du recht.' },
  { german: 'ein', turkish: 'bir', type: 'artikel', example: 'Ein Mann kommt.' },
  { german: 'einfach', turkish: 'basit, kolay', type: 'sıfat', example: 'Das ist einfach.' },
  { german: 'einmal', turkish: 'bir kez', type: 'zarf', example: 'Noch einmal, bitte.' },
  { german: 'Eltern', turkish: 'anne-baba', type: 'isim', article: 'die', example: 'Meine Eltern sind hier.' },
  { german: 'Ende', turkish: 'son', type: 'isim', article: 'das', example: 'Am Ende des Films.' },
  { german: 'endlich', turkish: 'sonunda', type: 'zarf', example: 'Endlich bist du da!' },
  { german: 'Entschuldigung', turkish: 'özür dilerim', type: 'isim', article: 'die', example: 'Entschuldigung!' },
  { german: 'er', turkish: 'o (erkek)', type: 'zamir', example: 'Er ist mein Freund.' },
  { german: 'Erde', turkish: 'dünya, toprak', type: 'isim', article: 'die', example: 'Die Erde ist rund.' },
  { german: 'erkennen', turkish: 'tanımak', type: 'fiil', example: 'Ich erkenne dich.' },
  { german: 'erst', turkish: 'önce, ancak', type: 'zarf', example: 'Erst die Arbeit, dann das Spiel.' },
  { german: 'erzählen', turkish: 'anlatmak', type: 'fiil', example: 'Erzähl mir eine Geschichte.' },
  { german: 'es', turkish: 'o (nötr)', type: 'zamir', example: 'Es regnet.' },
  { german: 'essen', turkish: 'yemek', type: 'fiil', example: 'Ich esse gern Pizza.' },
  { german: 'etwas', turkish: 'bir şey', type: 'zamir', example: 'Möchtest du etwas essen?' },
  { german: 'Euro', turkish: 'Euro', type: 'isim', article: 'der', example: 'Das kostet fünf Euro.' },

  // F harfi
  { german: 'fahren', turkish: 'sürmek, gitmek', type: 'fiil', example: 'Ich fahre nach Berlin.' },
  { german: 'Fahrrad', turkish: 'bisiklet', type: 'isim', article: 'das', example: 'Ich fahre Fahrrad.' },
  { german: 'Fall', turkish: 'durum, düşüş', type: 'isim', article: 'der', example: 'In diesem Fall...' },
  { german: 'fallen', turkish: 'düşmek', type: 'fiil', example: 'Die Blätter fallen.' },
  { german: 'falsch', turkish: 'yanlış', type: 'sıfat', example: 'Das ist falsch.' },
  { german: 'Familie', turkish: 'aile', type: 'isim', article: 'die', example: 'Meine Familie ist groß.' },
  { german: 'fangen', turkish: 'yakalamak', type: 'fiil', example: 'Ich fange den Ball.' },
  { german: 'Farbe', turkish: 'renk', type: 'isim', article: 'die', example: 'Welche Farbe ist das?' },
  { german: 'fast', turkish: 'neredeyse', type: 'zarf', example: 'Ich bin fast fertig.' },
  { german: 'Februar', turkish: 'Şubat', type: 'isim', article: 'der', example: 'Im Februar ist es kalt.' },
  { german: 'fehlen', turkish: 'eksik olmak', type: 'fiil', example: 'Du fehlst mir.' },
  { german: 'Fehler', turkish: 'hata', type: 'isim', article: 'der', example: 'Das war ein Fehler.' },
  { german: 'feiern', turkish: 'kutlamak', type: 'fiil', example: 'Wir feiern Geburtstag.' },
  { german: 'Fenster', turkish: 'pencere', type: 'isim', article: 'das', example: 'Öffne das Fenster!' },
  { german: 'fertig', turkish: 'hazır, bitmiş', type: 'sıfat', example: 'Ich bin fertig.' },
  { german: 'fest', turkish: 'sıkı, festival', type: 'sıfat', example: 'Das ist fest.' },
  { german: 'Feuer', turkish: 'ateş', type: 'isim', article: 'das', example: 'Das Feuer brennt.' },
  { german: 'finden', turkish: 'bulmak', type: 'fiil', example: 'Ich finde es gut.' },
  { german: 'Finger', turkish: 'parmak', type: 'isim', article: 'der', example: 'Ich habe zehn Finger.' },
  { german: 'Fisch', turkish: 'balık', type: 'isim', article: 'der', example: 'Ich esse gern Fisch.' },
  { german: 'Flasche', turkish: 'şişe', type: 'isim', article: 'die', example: 'Die Flasche ist voll.' },
  { german: 'Fleisch', turkish: 'et', type: 'isim', article: 'das', example: 'Ich esse kein Fleisch.' },
  { german: 'fliegen', turkish: 'uçmak', type: 'fiil', example: 'Der Vogel fliegt.' },
  { german: 'Flugzeug', turkish: 'uçak', type: 'isim', article: 'das', example: 'Das Flugzeug ist groß.' },
  { german: 'Fluss', turkish: 'nehir', type: 'isim', article: 'der', example: 'Der Fluss ist lang.' },
  { german: 'folgen', turkish: 'takip etmek', type: 'fiil', example: 'Folge mir!' },
  { german: 'Foto', turkish: 'fotoğraf', type: 'isim', article: 'das', example: 'Ich mache ein Foto.' },
  { german: 'Frage', turkish: 'soru', type: 'isim', article: 'die', example: 'Ich habe eine Frage.' },
  { german: 'fragen', turkish: 'sormak', type: 'fiil', example: 'Darf ich fragen?' },
  { german: 'Frau', turkish: 'kadın, bayan', type: 'isim', article: 'die', example: 'Die Frau ist nett.' },
  { german: 'frei', turkish: 'özgür, boş', type: 'sıfat', example: 'Ich habe frei.' },
  { german: 'Freitag', turkish: 'Cuma', type: 'isim', article: 'der', example: 'Am Freitag gehe ich aus.' },
  { german: 'fremd', turkish: 'yabancı', type: 'sıfat', example: 'Das ist mir fremd.' },
  { german: 'Freude', turkish: 'sevinç', type: 'isim', article: 'die', example: 'Große Freude!' },
  { german: 'freuen', turkish: 'sevinmek', type: 'fiil', example: 'Ich freue mich.' },
  { german: 'Freund', turkish: 'arkadaş (erkek)', type: 'isim', article: 'der', example: 'Er ist mein Freund.' },
  { german: 'Freundin', turkish: 'arkadaş (kadın)', type: 'isim', article: 'die', example: 'Sie ist meine Freundin.' },
  { german: 'freundlich', turkish: 'arkadaş canlısı', type: 'sıfat', example: 'Er ist sehr freundlich.' },
  { german: 'frisch', turkish: 'taze', type: 'sıfat', example: 'Das Brot ist frisch.' },
  { german: 'froh', turkish: 'mutlu', type: 'sıfat', example: 'Ich bin froh.' },
  { german: 'früh', turkish: 'erken', type: 'sıfat', example: 'Ich stehe früh auf.' },
  { german: 'Frühling', turkish: 'ilkbahar', type: 'isim', article: 'der', example: 'Im Frühling ist es warm.' },
  { german: 'Frühstück', turkish: 'kahvaltı', type: 'isim', article: 'das', example: 'Das Frühstück ist fertig.' },
  { german: 'fühlen', turkish: 'hissetmek', type: 'fiil', example: 'Ich fühle mich gut.' },
  { german: 'führen', turkish: 'yönetmek', type: 'fiil', example: 'Er führt die Firma.' },
  { german: 'fünf', turkish: 'beş', type: 'sayı', example: 'Ich habe fünf Euro.' },
  { german: 'für', turkish: 'için', type: 'edat', example: 'Das ist für dich.' },
  { german: 'Fuß', turkish: 'ayak', type: 'isim', article: 'der', example: 'Ich gehe zu Fuß.' },
  { german: 'Fußball', turkish: 'futbol', type: 'isim', article: 'der', example: 'Ich spiele Fußball.' },

  // G harfi
  { german: 'ganz', turkish: 'tamamen, bütün', type: 'sıfat', example: 'Das ist ganz gut.' },
  { german: 'gar', turkish: 'hiç', type: 'zarf', example: 'Gar nicht schlecht!' },
  { german: 'Garten', turkish: 'bahçe', type: 'isim', article: 'der', example: 'Der Garten ist schön.' },
  { german: 'geben', turkish: 'vermek', type: 'fiil', example: 'Gib mir das Buch!' },
  { german: 'Geburtstag', turkish: 'doğum günü', type: 'isim', article: 'der', example: 'Heute ist mein Geburtstag.' },
  { german: 'Gedanke', turkish: 'düşünce', type: 'isim', article: 'der', example: 'Das ist ein guter Gedanke.' },
  { german: 'gefährlich', turkish: 'tehlikeli', type: 'sıfat', example: 'Das ist gefährlich.' },
  { german: 'gefallen', turkish: 'hoşuna gitmek', type: 'fiil', example: 'Das gefällt mir.' },
  { german: 'Gefühl', turkish: 'his, duygu', type: 'isim', article: 'das', example: 'Ich habe ein gutes Gefühl.' },
  { german: 'gegen', turkish: 'karşı', type: 'edat', example: 'Ich bin gegen das.' },
  { german: 'gehen', turkish: 'gitmek, yürümek', type: 'fiil', example: 'Ich gehe nach Hause.' },
  { german: 'gehören', turkish: 'ait olmak', type: 'fiil', example: 'Das gehört mir.' },
  { german: 'Geld', turkish: 'para', type: 'isim', article: 'das', example: 'Ich habe kein Geld.' },
  { german: 'genau', turkish: 'kesin, tam', type: 'sıfat', example: 'Genau so!' },
  { german: 'genug', turkish: 'yeterli', type: 'zarf', example: 'Das ist genug.' },
  { german: 'gerade', turkish: 'şu anda, düz', type: 'zarf', example: 'Ich esse gerade.' },
  { german: 'gern', turkish: 'sevmek (ile)', type: 'zarf', example: 'Ich esse gern Pizza.' },
  { german: 'Geschichte', turkish: 'hikaye, tarih', type: 'isim', article: 'die', example: 'Erzähl mir eine Geschichte.' },
  { german: 'Geschwister', turkish: 'kardeşler', type: 'isim', article: 'die', example: 'Ich habe zwei Geschwister.' },
  { german: 'Gesicht', turkish: 'yüz', type: 'isim', article: 'das', example: 'Dein Gesicht ist rot.' },
  { german: 'gestern', turkish: 'dün', type: 'zarf', example: 'Gestern war ich müde.' },
  { german: 'gesund', turkish: 'sağlıklı', type: 'sıfat', example: 'Bleib gesund!' },
  { german: 'gewinnen', turkish: 'kazanmak', type: 'fiil', example: 'Ich möchte gewinnen.' },
  { german: 'Glas', turkish: 'bardak, cam', type: 'isim', article: 'das', example: 'Ein Glas Wasser, bitte.' },
  { german: 'glauben', turkish: 'inanmak', type: 'fiil', example: 'Ich glaube dir.' },
  { german: 'gleich', turkish: 'aynı, hemen', type: 'sıfat', example: 'Ich komme gleich.' },
  { german: 'Glück', turkish: 'şans, mutluluk', type: 'isim', article: 'das', example: 'Viel Glück!' },
  { german: 'glücklich', turkish: 'mutlu', type: 'sıfat', example: 'Ich bin glücklich.' },
  { german: 'Gott', turkish: 'Tanrı', type: 'isim', article: 'der', example: 'Mein Gott!' },
  { german: 'groß', turkish: 'büyük', type: 'sıfat', example: 'Das Haus ist groß.' },
  { german: 'Großmutter', turkish: 'büyükanne', type: 'isim', article: 'die', example: 'Meine Großmutter ist alt.' },
  { german: 'Großvater', turkish: 'büyükbaba', type: 'isim', article: 'der', example: 'Mein Großvater ist weise.' },
  { german: 'grün', turkish: 'yeşil', type: 'sıfat', example: 'Das Gras ist grün.' },
  { german: 'Grund', turkish: 'sebep, zemin', type: 'isim', article: 'der', example: 'Aus diesem Grund...' },
  { german: 'Gruppe', turkish: 'grup', type: 'isim', article: 'die', example: 'Die Gruppe ist groß.' },
  { german: 'gut', turkish: 'iyi', type: 'sıfat', example: 'Das ist gut.' },

  // H harfi
  { german: 'Haar', turkish: 'saç', type: 'isim', article: 'das', example: 'Dein Haar ist schön.' },
  { german: 'haben', turkish: 'sahip olmak', type: 'fiil', example: 'Ich habe ein Auto.' },
  { german: 'halb', turkish: 'yarım', type: 'sıfat', example: 'Es ist halb acht.' },
  { german: 'halten', turkish: 'tutmak, durmak', type: 'fiil', example: 'Halt!' },
  { german: 'Hand', turkish: 'el', type: 'isim', article: 'die', example: 'Gib mir deine Hand.' },
  { german: 'Handy', turkish: 'cep telefonu', type: 'isim', article: 'das', example: 'Wo ist mein Handy?' },
  { german: 'hart', turkish: 'sert, zor', type: 'sıfat', example: 'Das ist hart.' },
  { german: 'Haupt-', turkish: 'ana, baş', type: 'önek', example: 'Hauptsache...' },
  { german: 'Haus', turkish: 'ev', type: 'isim', article: 'das', example: 'Das Haus ist groß.' },
  { german: 'Haut', turkish: 'cilt, deri', type: 'isim', article: 'die', example: 'Die Haut ist weich.' },
  { german: 'heben', turkish: 'kaldırmak', type: 'fiil', example: 'Heb die Hand!' },
  { german: 'heißen', turkish: 'adı olmak', type: 'fiil', example: 'Ich heiße Max.' },
  { german: 'helfen', turkish: 'yardım etmek', type: 'fiil', example: 'Kannst du mir helfen?' },
  { german: 'hell', turkish: 'aydınlık', type: 'sıfat', example: 'Es ist hell.' },
  { german: 'Herbst', turkish: 'sonbahar', type: 'isim', article: 'der', example: 'Im Herbst fallen die Blätter.' },
  { german: 'Herr', turkish: 'bay', type: 'isim', article: 'der', example: 'Guten Tag, Herr Müller!' },
  { german: 'Herz', turkish: 'kalp', type: 'isim', article: 'das', example: 'Mein Herz schlägt.' },
  { german: 'heute', turkish: 'bugün', type: 'zarf', example: 'Heute ist Montag.' },
  { german: 'hier', turkish: 'burada', type: 'zarf', example: 'Ich bin hier.' },
  { german: 'Himmel', turkish: 'gökyüzü, cennet', type: 'isim', article: 'der', example: 'Der Himmel ist blau.' },
  { german: 'hin', turkish: 'oraya doğru', type: 'zarf', example: 'Hin und zurück.' },
  { german: 'hinten', turkish: 'arkada', type: 'zarf', example: 'Ich sitze hinten.' },
  { german: 'hinter', turkish: 'arkasında', type: 'edat', example: 'Hinter dem Haus.' },
  { german: 'hoch', turkish: 'yüksek', type: 'sıfat', example: 'Der Berg ist hoch.' },
  { german: 'hoffen', turkish: 'ummak', type: 'fiil', example: 'Ich hoffe es.' },
  { german: 'Hoffnung', turkish: 'umut', type: 'isim', article: 'die', example: 'Ich habe Hoffnung.' },
  { german: 'holen', turkish: 'getirmek, almak', type: 'fiil', example: 'Ich hole das Buch.' },
  { german: 'hören', turkish: 'duymak, dinlemek', type: 'fiil', example: 'Ich höre Musik.' },
  { german: 'Hose', turkish: 'pantolon', type: 'isim', article: 'die', example: 'Die Hose ist blau.' },
  { german: 'Hotel', turkish: 'otel', type: 'isim', article: 'das', example: 'Das Hotel ist schön.' },
  { german: 'Hund', turkish: 'köpek', type: 'isim', article: 'der', example: 'Der Hund bellt.' },
  { german: 'Hunger', turkish: 'açlık', type: 'isim', article: 'der', example: 'Ich habe Hunger.' },
];

// =====================================================
// KULLANICI VERİLERİ (LocalStorage ile yönetilir)
// =====================================================
export const defaultUser = {
  id: null,
  username: '',
  email: '',
  level: 'A1',
  xp: 0,
  totalXp: 0,
  streak: 0,
  lastActive: null,
  completedThemes: [],
  wordleScores: [],
  crosswordScores: [],
  pvpWins: 0,
  pvpLosses: 0,
  achievements: [],
  settings: {
    soundEnabled: true,
    notifications: true,
    darkMode: false
  }
};

// =====================================================
// LİDER TABLOSU (Örnek veriler)
// =====================================================
export const leaderboardData = [
  { id: 1, username: 'AlmancaMaster', level: 'B2', xp: 15420, avatar: '👨‍🎓' },
  { id: 2, username: 'BerlinFan', level: 'B1', xp: 12350, avatar: '👩‍💼' },
  { id: 3, username: 'DeutschLerner', level: 'B1', xp: 11200, avatar: '👨‍🏫' },
  { id: 4, username: 'SprachGenie', level: 'A2', xp: 9800, avatar: '👩‍🔬' },
  { id: 5, username: 'MünchenKid', level: 'A2', xp: 8500, avatar: '👦' },
  { id: 6, username: 'WienLiebe', level: 'A2', xp: 7200, avatar: '👧' },
  { id: 7, username: 'HamburgHero', level: 'A1', xp: 5100, avatar: '🦸‍♂️' },
  { id: 8, username: 'KölnKing', level: 'A1', xp: 4200, avatar: '👑' },
  { id: 9, username: 'FrankfurtFan', level: 'A1', xp: 3100, avatar: '⚽' },
  { id: 10, username: 'DresdenDream', level: 'A1', xp: 2000, avatar: '🌟' },
];

// =====================================================
// XP VE SEVİYE SİSTEMİ
// =====================================================
export const xpConfig = {
  correctAnswer: 10,
  wrongAnswer: -2,
  completeTheme: 50,
  wordleWin: 30,
  crosswordComplete: 40,
  pvpWin: 50,
  pvpLoss: 5,
  storyComplete: 25,
  dailyStreak: 15,
};

export const levelRequirements = {
  A1: { min: 0, max: 500 },
  A2: { min: 501, max: 1500 },
  B1: { min: 1501, max: 3500 },
  B2: { min: 3501, max: 6500 },
  C1: { min: 6501, max: 10000 },
  C2: { min: 10001, max: Infinity },
};

// Seviye hesaplama fonksiyonu
export const calculateLevel = (totalXp) => {
  for (const [level, req] of Object.entries(levelRequirements)) {
    if (totalXp >= req.min && totalXp <= req.max) {
      return level;
    }
  }
  return 'C2';
};

// Sonraki seviyeye kalan XP
export const xpToNextLevel = (totalXp, currentLevel) => {
  const req = levelRequirements[currentLevel];
  if (req.max === Infinity) return 0;
  return req.max - totalXp + 1;
};

// Seviye ilerleme yüzdesi
export const levelProgress = (totalXp, currentLevel) => {
  const req = levelRequirements[currentLevel];
  if (req.max === Infinity) return 100;
  const levelXp = totalXp - req.min;
  const levelTotal = req.max - req.min;
  return Math.round((levelXp / levelTotal) * 100);
};
