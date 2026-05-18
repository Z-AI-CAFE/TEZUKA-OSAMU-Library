// ================================================================
// ★★★ VIDEO DATA — Edit here to add or update videos ★★★
// ================================================================
// HOW TO ADD A NEW VIDEO:
// Add one object to the VIDEOS array below, then git push.
// The site rebuilds and deploys automatically via GitHub Actions.
//
// {
//   id: 'YouTube video ID',   // the string after ?v= in the URL
//   title: 'Work title',
//   chapter: 'sf',            // sf / romance / noir / others
//   tags: ['Tag 1', 'Tag 2'],
//   lead: 'Short introduction (2–3 sentences)'
// },
// ================================================================

const CHAPTERS = {
  sf: {
    num: 'Ⅰ',
    title: 'SF, AI & The Human Soul',
    lead: "Prophecies written decades before AI became reality — resonating more urgently with every passing year.<br>Welcome to the intellectual, philosophical world of Tezuka's science fiction."
  },
  romance: {
    num: 'Ⅱ',
    title: 'Dark Romance & Love for the Grotesque',
    lead: 'Love that crosses every boundary of the human form.<br>Romance with the grotesque, obsession, and bittersweet tragedy.'
  },
  noir: {
    num: 'Ⅲ',
    title: 'Noir & Twisted Whims',
    lead: 'Dark fables for adults.<br>A world of twisted human desire and strangely absurd fate.'
  },
  others: {
    num: 'Ⅳ',
    title: 'For the Earth & All Living Things',
    lead: 'Tezuka Osamu — who spent a lifetime drawing his love for the earth, his longing for peace, and the preciousness of life.'
  }
};

const VIDEOS = [

  // ── Chapter Ⅰ: SF, AI & The Human Soul ──────────────────────
  {
    id: 'rO-FUyd8KoQ',
    title: 'Haetатаki — The Fly Swatter',
    chapter: 'sf',
    tags: ['SF', 'AI', 'Psychology'],
    lead: 'A world where every household has a domestic robot. A story of marriage — read in the age of AI.'
  },
  {
    id: 'bzPb77V3j6k',
    title: 'W3 — Wonder Three',
    chapter: 'sf',
    tags: ['SF', 'Cosmic', 'Humanist'],
    lead: 'When aliens arrive to assess the earth, what do they make of humanity? The truth about this planet — as seen by three visitors disguised as animals.'
  },

  // ── Chapter Ⅱ: Dark Romance & Love for the Grotesque ─────────
  {
    id: 'nbbvk6nIMPc',
    title: 'Balbora',
    chapter: 'romance',
    tags: ['Aesthetic', 'Madness', 'Obsession'],
    lead: 'A brilliant writer meets a filthy, mysterious girl on the street. A decadent story of madness, art, and love.'
  },
  {
    id: 'o6oB8gAbN9s',
    title: 'Fukuro — The Sac',
    chapter: 'romance',
    tags: ['Medical', 'Grotesque', 'Horror'],
    lead: 'What if someone else were living inside your body? A medical horror short story.'
  },
  {
    id: 'psun761jHLE',
    title: 'Sareba Ārī — Farewell, Ārī',
    chapter: 'romance',
    tags: ['Grotesque', 'Desert', 'Farewell'],
    lead: 'A girl with the ears of a wildcat, encountered in the desert. Neither fully human nor beast — a fragile, dangerous farewell.'
  },
  {
    id: 'uaH56m0rxCY',
    title: 'MW',
    chapter: 'romance',
    tags: ['Controversial', 'Evil', 'Obsession'],
    lead: "Every form of evil embodied in one beautiful man. Love and hatred, the sacred and the sinful intertwined — Tezuka's most controversial work."
  },
  {
    id: 'fE-9l2iWVOE',
    title: 'Yoru no Koe — Voice in the Night',
    chapter: 'romance',
    tags: ['Secret', 'Night', 'Mystery'],
    lead: 'The Prince and the Pauper — for adults.'
  },
  {
    id: 'aRy660pbBgU',
    title: "Apollo's Song",
    chapter: 'romance',
    tags: ['Love & Curse', 'Reincarnation', 'Obsession'],
    lead: 'A man cursed never to love, who returns again and again across lifetimes in search of it. A story of obsession and fate that transcends time.'
  },

  // ── Chapter Ⅲ: Noir & Twisted Whims ──────────────────────────
  {
    id: 'vjYQi6q_gX8',
    title: 'Yarō to Dangai — The Cliff',
    chapter: 'noir',
    tags: ['Absurd', 'Black Humor', 'Human Folly'],
    lead: 'A cliff known as the Cliff of Delusion. An escaped convict barricades himself in its cave, holding a hostage.'
  },
  {
    id: 'uOV_9MVW5RU',
    title: "Mogami-dono Shimatsu — The Lord's Double",
    chapter: 'noir',
    tags: ['Period Drama', 'Revenge', 'Noir'],
    lead: "A peasant forced to serve as his lord's body double plots his revenge. The revenge succeeds — but..."
  },
  {
    id: 'Wbx3n2rkgRs',
    title: 'Rakuban — Cave-in',
    chapter: 'noir',
    tags: ['Psychological', 'Memory', 'Suspense'],
    lead: 'Memory always lies. A quiet psychological duel between two men, played out in a sealed room.'
  },
  {
    id: 'FxHleQyPnH8',
    title: 'The Blue Shadow at the Backstop',
    chapter: 'noir',
    tags: ['Mystery', 'Baseball', 'The Price'],
    lead: 'A mysterious drug that reveals a "blue shadow" — follow its guidance, and success will follow. But every drug has its price.'
  },
  {
    id: 'oxsXud2-4Xk',
    title: 'Tako no Ashi — Octopus Legs',
    chapter: 'noir',
    tags: ['Black Humor', 'Flash Fiction', 'Shocking'],
    lead: 'Seven minutes. That is all it takes to leave a lasting wound. A merciless flash story by Tezuka Osamu — black humour at its darkest.'
  },
  {
    id: 's56PSEiik4A',
    title: 'Bypass no Yoru — Night on the Bypass',
    chapter: 'noir',
    tags: ['Night', 'Absurd', 'Short Story'],
    lead: 'A bypass road at midnight. A strange encounter in the lightless dark.'
  },

  // ── Chapter Ⅳ: For the Earth & All Living Things ─────────────
  {
    id: '9qirDT_0BVk',
    title: "Korosuke's Bridge",
    chapter: 'others',
    tags: ['Humanist', 'Life'],
    lead: 'A friendship between a boy and a wild deer. On living alongside nature.'
  },
  {
    id: '5CB-o5q896k',
    title: 'Kami no Toride — Paper Fortress',
    chapter: 'others',
    tags: ['War', 'Peace', 'Autobiographical'],
    lead: "Tezuka Osamu's own wartime childhood, drawn from memory."
  }

]; // ← Add new videos above this line
