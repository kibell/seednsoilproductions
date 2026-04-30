// ============================================================
// SEED & SOIL — DATA FILES
// Update these objects to add new songs, videos, and content
// ============================================================

// --- SOCIAL & PLATFORM LINKS ---
// Replace "#" with your actual URLs
export const socialLinks = {
  spotify: "#",
  appleMusic: "#",
  youtube: "https://www.youtube.com/@seednsoilproduction", // Update with your channel
  tiktok: "https://www.tiktok.com/@the_parable_official?lang=en",
  instagram: "https://www.instagram.com/seed_n_soil_productions/",
  email: "mailto:seednsoil@yahoo.com",
};

// --- SONGS / RELEASES ---
// coverArt: path to image in /public/images/ or a URL
// streamingLinks: any of spotify, appleMusic, youtube, youtubeMusic, amazon, soundcloud
export const songs = [
  {
    id: "001",
    title: "not that evident.",
    subtitle: "Single",
    releaseDate: "2026-05-01",
    coverArt: "./Images/not-that-evident.png",
    description:
      "A reflection on unseen growth. Not everything that’s planted shows up right away.This song captures the tension between doubt and faith—the moments where progress feels invisible, yet something deeper is still happening. Part of The Parable — a story told through music and visuals.",
    featured: true,
    streamingLinks: {
      spotify:
        "https://distrokid.com/hyperfollow/echogod/not-that-evident-feat-sapphira",
      appleMusic:
        "https://distrokid.com/hyperfollow/echogod/not-that-evident-feat-sapphira",
      youtube: "https://www.youtube.com/watch?v=2Cn3jO5DiD0",
    },
  },
  {
    id: "002",
    title: "good ground (unreleased)",
    subtitle: "Single",
    releaseDate: "2026-05-08",
    coverArt: "",
    description:
      "A reflection on unseen growth. Not everything that’s planted shows up right away. This song captures the tension between doubt and faith—the moments where progress feels invisible, yet something deeper is still happening. Part of The Parable — a story told through music and visuals.",
    featured: false,
    streamingLinks: {
      spotify:
        "https://distrokid.com/hyperfollow/echogod/good-ground-feat-sapphira",
      appleMusic:
        "https://distrokid.com/hyperfollow/echogod/good-ground-feat-sapphira",
      youtube: "",
    },
  },

  {
    id: "003",
    title: "you found me (unreleased)",
    subtitle: "Single",
    releaseDate: "2026-05-15",
    coverArt: "",
    description:
      "A moment of return. ‘You Found Me’ captures the realization that even in wandering, we were never truly abandoned. Inspired by the Parable of the Prodigal Son, this track reflects on grace, redemption, and the love that welcomes us back home.",
    featured: false,
    streamingLinks: {
      spotify: "",
      appleMusic: "",
      youtube: "",
    },
  },

  {
    id: "004",
    title: "on the rock (unreleased)",
    subtitle: "Single",
    releaseDate: "2026-05-22",
    coverArt: "",
    description:
      "Built to last. ‘On the Rock’ explores what it means to stand firm on a foundation that cannot be shaken. Inspired by the wise builder, this track reflects on obedience, stability, and trusting God through every storm.",
    featured: false,
    streamingLinks: {
      spotify: "",
      appleMusic: "",
      youtube: "",
    },
  },

  {
    id: "005",
    title: "good samaritan (unreleased)",
    subtitle: "Single",
    releaseDate: "2026-05-29",
    coverArt: "",
    description:
      "A call to compassion. ‘Good Samaritan’ challenges the boundaries we place on love and reminds us that kindness is not selective. This track reflects on mercy, action, and what it truly means to love your neighbor.",
    featured: false,
    streamingLinks: {
      spotify: "",
      appleMusic: "",
      youtube: "",
    },
  },

  {
    id: "006",
    title: "wheat and tares. (unreleased)",
    subtitle: "Single",
    releaseDate: "2026-06-05",
    coverArt: "",
    description:
      "Growth isn’t always clear. ‘Wheat and Tares’ explores the tension between what looks good and what truly is. This track reflects on patience, discernment, and trusting God to separate what we cannot.",
    featured: false,
    streamingLinks: {
      spotify: "",
      appleMusic: "",
      youtube: "",
    },
  },

  {
    id: "007",
    title: "lift my hands. (unreleased)",
    subtitle: "Single",
    releaseDate: "2026-06-12",
    coverArt: "",
    description:
      "A posture of surrender. ‘Lift My Hands’ is a moment of worship in the middle of uncertainty. This track reflects on trust, letting go, and choosing faith even when answers aren’t clear.",
    featured: false,
    streamingLinks: {
      spotify: "",
      appleMusic: "",
      youtube: "",
    },
  },

  {
    id: "008",
    title: "believe. (unreleased)",
    subtitle: "Single",
    releaseDate: "2026-06-19",
    coverArt: "",
    description:
      "Faith in motion. ‘Believe’ speaks to holding onto truth even when circumstances say otherwise. This track reflects on perseverance, identity, and trusting what God has spoken.",
    featured: false,
    streamingLinks: {
      spotify: "",
      appleMusic: "",
      youtube: "",
    },
  },

  {
    id: "009",
    title: "pray for me. (unreleased)",
    subtitle: "Single",
    releaseDate: "2026-06-26",
    coverArt: "",
    description:
      "A moment of vulnerability. ‘Pray For Me’ reflects on the weight of life, the need for community, and the power of lifting one another up. This track captures the honesty of asking for help and the strength found in prayer.",
    featured: false,
    streamingLinks: {
      spotify: "",
      appleMusic: "",
      youtube: "",
    },
  },
];

// --- YOUTUBE VIDEOS ---
// Replace embedId with the actual YouTube video ID (part after v= in the URL)
// Example: https://youtube.com/watch?v=dQw4w9WgXcQ → embedId: "dQw4w9WgXcQ"
export const videos = [
  {
    id: "v001",
    title: "The Parable — Episode 1: The Parable of the Talents",
    embedId: "ANnSN18mdZg", // Replace with real YouTube video ID
    category: "episode",
    categoryLabel: "Episode",
    description: "The Parable, Episode 1: The Parable of the Talents.",
    date: "2026-04-20",
    featured: false,
  },
  {
    id: "v002",
    title: "The Parable — Episode 2: The Parable of the Sower",
    embedId: "DXiB55HYgxs", // Replace with real YouTube video ID
    category: "episode",
    categoryLabel: "Episode",
    description: "The Parable, Episode 2: The Parable of the Sower",
    date: "2026-04-30",
    featured: true,
  },
  {
    id: "v003",
    title: "not that evident. — Lyric Video",
    embedId: "2Cn3jO5DiD0", // Replace with lyric video YouTube video ID
    category: "lyric-video",
    categoryLabel: "Lyric Video",
    description:
      "Official lyric video for not that evident., highlighting the full message and lyrics.",
    date: "2026-05-01",
    featured: false,
  },
];

export const videoCategories = [
  { id: "all", label: "All Videos" },
  { id: "episode", label: "Episodes" },
  { id: "lyric-video", label: "Lyric Videos" },
  { id: "devotional", label: "Devotionals" },
  { id: "behind-the-scenes", label: "Behind the Scenes" },
  { id: "performance", label: "Performances" },
];

// --- THE PARABLE EPISODES ---
export const episodes = [
  {
    id: "ep1",
    number: "01",
    title: "The Parable of the Talents",
    subtitle: "What Will You Do With What You've Been Given?",
    status: "available",
    releaseDate: "2026-04-20",
    embedId: "ANnSN18mdZg", // Replace with real YouTube video ID
    scriptureRef: "Matthew 25:14–30",
    scripture:
      "For it will be like a man going on a journey, who called his servants and entrusted to them his property.",
    summary:
      "Episode 1 of The Parable introduces the tension between calling and responsibility. Each servant is entrusted with something different, yet all are expected to respond. This episode explores what it means to receive a gift from God and the weight of choosing whether to use it or bury it. Are we multiplying what we've been given, or hiding it out of fear?",
    reflectionQuestions: [
      "What has God entrusted to you that you may be overlooking or underestimating?",
      "Are you actively using what you've been given, or have you buried it out of fear or doubt?",
      "What would it look like to take one step toward stewarding your calling today?",
    ],
    themes: ["Stewardship", "Calling", "Faith vs Fear", "Responsibility"],
    songs: ["Not That Evident"],
  },

  {
    id: "ep2",
    number: "02",
    title: "The Parable of the Sower",
    subtitle: "What Kind of Soil Are You?",
    status: "available",
    releaseDate: "2026-04-30",
    embedId: "DXiB55HYgxs",
    scriptureRef: "Luke 8:4–15",
    scripture:
      "A farmer went out to sow his seed. As he was scattering the seed, some fell along the path; it was trampled on, and the birds ate it up.",
    summary:
      "Episode 2 shifts the focus from what we've been given to how we receive it. Echo reflects on moments in his life where truth was planted but never took root. Through the lens of the Sower, we see how distraction, pressure, and lack of depth can prevent growth. This episode challenges us to examine the condition of our hearts and what we allow to take root.",
    reflectionQuestions: [
      "Which type of soil do you relate to most right now — path, rocky, thorns, or good ground?",
      "What distractions or pressures might be choking out growth in your life?",
      "What would it look like to intentionally create space for God’s word to take root?",
    ],
    themes: ["Growth", "Distraction", "Spiritual Depth", "Transformation"],
    songs: ["Good Ground"],
  },
];

// --- DEVOTIONALS / REFLECTIONS ---
export const devotionals = [
  {
    id: "d001",
    title: "What Kind of Soil Are You?",
    scriptureRef: "Matthew 13:1–9",
    excerpt:
      "Jesus didn't just tell this parable once. He told it to crowds, then explained it privately to His disciples. That alone should make us pay attention. The soil isn't just a metaphor — it's a mirror.",
    date: "2024-01-10",
    category: "Scripture",
    readTime: "4 min",
    relatedSong: "Good Ground",
    slug: "what-kind-of-soil",
  },
];

// --- LINKS PAGE DATA ---
// Used for the bio link page
export const linkPageData = {
  title: "Seed & Soil",
  subtitle: "Faith. Music. Story.",
  avatar: "/images/artist-photo.jpg",
  links: [
    {
      id: "l1",
      label: "🎵 Listen — not that evident (Latest Single)",
      href: "#",
      style: "featured",
    },
    {
      id: "l2",
      label: "📺 Watch — The Parable Series",
      href: "https://www.youtube.com/watch?v=ANnSN18mdZg&list=PLXh_U_UxehHPptEaZavB7SlM2cxCnDtN0&index=1",
      style: "featured",
    },
    {
      id: "l3",
      label: "Spotify",
      href: "#",
      style: "platform",
      platform: "spotify",
    },
    {
      id: "l4",
      label: "Apple Music",
      href: "https://music.apple.com/us/artist/echo-god/1895140285",
      style: "platform",
      platform: "apple",
    },
    {
      id: "l5",
      label: "YouTube",
      href: "https://www.youtube.com/@seednsoilproduction",
      style: "platform",
      platform: "youtube",
    },
    {
      id: "l6",
      label: "Instagram",
      href: "https://www.instagram.com/",
      style: "platform",
      platform: "instagram",
    },
    {
      id: "l7",
      label: "TikTok",
      href: "https://www.tiktok.com/@the_parable_official?lang=en",
      style: "platform",
      platform: "tiktok",
    },
    {
      id: "l8",
      label: "📖 Read Devotionals",
      href: "/devotion",
      style: "secondary",
    },
  ],
};
