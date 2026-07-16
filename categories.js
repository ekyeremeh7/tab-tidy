// Default categories — shared between popup, background, and options page

const DEFAULT_CATEGORIES = [
  {
    id: "work",
    name: "Productivity",
    color: "purple",
    patterns: [
      "localhost", "127.0.0.1", "192.168.",
      "atlassian.net", "jira.", "confluence.", "linear.app",
      "trello.com", "asana.com", "monday.com", "basecamp.com",
      "clickup.com", "height.app", "shortcut.com", "wrike.com",
      "github.com", "gitlab.com", "bitbucket.org", "codepen.io",
      "replit.com", "codesandbox.io", "stackblitz.com", "glitch.me",
      "vercel.app", "netlify.app", "render.com", "railway.app",
      "heroku.com", "fly.io", "digitalocean.com", "aws.amazon.com",
      "cloud.google.com", "azure.microsoft.com", "supabase.co",
      "firebase.google.com", "planetscale.com", "neon.tech",
      "notion.so", "app.notion.com", "www.notion.so", "notion.com",
      "coda.io", "slab.com", "obsidian.md",
      "figma.com", "sketch.com", "zeplin.io", "invisionapp.com",
      "framer.com", "canva.com", "miro.com", "lucidchart.com",
      "diagram.net", "draw.io",
      "postman.co", "insomnia.rest", "hoppscotch.io",
      "play.google.com/console", "appstoreconnect.apple.com",
      "developer.apple.com", "chromewebstore.google.com",
      "console.firebase.google.com", "console.cloud.google.com",
      "console.aws.amazon.com",
      "skillsire.com", "upwork.com", "toptal.com", "fiverr.com",
      "stackoverflow.com", "stackexchange.com", "serverfault.com",
      "developer.mozilla.org", "w3schools.com", "devdocs.io",
      "docs.flutter.dev", "pub.dev", "npmjs.com", "pypi.org", "crates.io",
      "docs.google.com", "drive.google.com", "sheets.google.com",
      "slides.google.com", "calendar.google.com", "keep.google.com",
      "meet.google.com", "docs.google",
      "office.com", "office365.com", "outlook.office.com",
      "teams.microsoft.com", "sharepoint.com", "onedrive.live.com",
      "onedrive.com", "microsoft365.com",
      "zoom.us", "zoom.com", "whereby.com", "around.co",
      "dropbox.com", "box.com", "icloud.com",
      "airtable.com", "smartsheet.com", "notion.site",
      "hubspot.com", "salesforce.com", "zendesk.com", "intercom.com",
      "freshdesk.com", "freshworks.com",
      "loom.com", "calendly.com", "docusign.com",
      "typeform.com", "surveymonkey.com", "tally.so",
      "sentry.io", "datadoghq.com", "grafana.com", "newrelic.com",
      "docker.com", "kubernetes.io",
      "wikipedia.org", "wikimedia.org", "wiktionary.org",
      "1password.com", "bitwarden.com", "lastpass.com", "dashlane.com",
      "grammarly.com", "overleaf.com", "roamresearch.com",
      "evernote.com", "todoist.com", "ticktick.com", "any.do"
    ]
  },
  {
    id: "ai",
    name: "AI & Tools",
    color: "cyan",
    patterns: [
      "claude.ai", "anthropic.com", "platform.claude.com", "code.claude.com",
      "chatgpt.com", "openai.com", "chat.openai.com",
      "gemini.google.com", "bard.google.com", "aistudio.google.com",
      "deepseek.com", "chat.deepseek.com",
      "composio.dev", "login.composio.dev", "dashboard.composio.dev",
      "cursor.sh", "cursor.com",
      "copilot.microsoft.com", "copilot.github.com",
      "perplexity.ai", "poe.com", "you.com", "phind.com",
      "huggingface.co", "replicate.com", "together.ai",
      "mistral.ai", "groq.com", "cohere.com", "ai21.com",
      "grok.com", "x.ai",
      "v0.dev", "bolt.new", "lovable.dev", "replit.com/ai",
      "meetaugust.ai", "notion.ai",
      "character.ai", "pi.ai", "jan.ai",
      "blackbox.ai", "codeium.com", "tabnine.com",
      "runway.ml", "elevenlabs.io", "midjourney.com",
      "stability.ai", "leonardo.ai", "firefly.adobe.com"
    ]
  },
  {
    id: "education",
    name: "Education",
    color: "pink",
    patterns: [
      "classroom.google.com",
      "coursera.org", "udemy.com", "khanacademy.org", "edx.org",
      "skillshare.com", "pluralsight.com", "linkedin.com/learning",
      "duolingo.com", "memrise.com", "busuu.com",
      "codecademy.com", "freecodecamp.org", "udacity.com",
      "brilliant.org", "masterclass.com",
      "instructure.com", "moodle.org", "moodle.com", "blackboard.com",
      "quizlet.com", "chegg.com", "coursehero.com",
      "scholar.google.com", "researchgate.net", "academia.edu",
      "arxiv.org", "semanticscholar.org",
      "khanacademy.org", "pbs.org/learning"
    ]
  },
  {
    id: "social",
    name: "Social & Email",
    color: "blue",
    patterns: [
      "mail.google.com", "gmail.com",
      "outlook.live.com", "outlook.com", "hotmail.com",
      "mail.yahoo.com", "protonmail.com", "proton.me", "hey.com",
      "fastmail.com", "icloud.com/mail",
      "x.com/", "twitter.com",
      "instagram.com", "facebook.com", "messenger.com", "threads.net",
      "linkedin.com",
      "reddit.com",
      "tiktok.com",
      "whatsapp.com", "web.telegram.org", "web.whatsapp.com",
      "discord.com", "slack.com",
      "pinterest.com", "snapchat.com",
      "bsky.app", "mastodon.", "tumblr.com",
      "quora.com"
    ]
  },
  {
    id: "entertainment",
    name: "Entertainment",
    color: "red",
    patterns: [
      "youtube.com", "youtu.be",
      "netflix.com", "hulu.com", "disneyplus.com", "primevideo.com",
      "max.com", "peacocktv.com", "paramountplus.com", "appletv.com",
      "crunchyroll.com", "funimation.com",
      "watchluna.com", "hurawatch", "fmovies", "123movies",
      "putlocker", "soap2day", "lookmovie", "justwatch.com",
      "vimeo.com", "dailymotion.com", "rumble.com",
      "pluto.tv", "tubi.tv", "crackle.com",
      "showmax.com", "dstv.com", "britbox.com", "iplayer.bbc",
      "twitch.tv", "kick.com",
      "score808", "livescore", "sofascore.com", "flashscore.com",
      "espn.com", "bbc.co.uk/sport", "skysports.com", "goal.com",
      "spotify.com", "music.youtube.com", "soundcloud.com",
      "tidal.com", "deezer.com", "music.apple.com", "pandora.com",
      "store.steampowered.com", "epicgames.com", "itch.io", "gog.com",
      "imdb.com", "letterboxd.com", "trakt.tv", "rottentomatoes.com",
      "chess.com", "lichess.org"
    ]
  },
  {
    id: "finance",
    name: "Finance",
    color: "green",
    patterns: [
      "ibkr.com", "interactivebrokers.com",
      "robinhood.com", "etrade.com", "fidelity.com", "schwab.com",
      "webull.com", "trading212.com", "etoro.com", "tdameritrade.com",
      "coinbase.com", "binance.com", "kraken.com", "crypto.com",
      "paypal.com", "wise.com", "revolut.com", "venmo.com",
      "stripe.com", "mercury.com", "brex.com",
      "mint.com", "ynab.com", "monarchmoney.com",
      "polymarket.com", "kalshi.com",
      "bloomberg.com", "finance.yahoo.com", "investing.com",
      "marketwatch.com", "seekingalpha.com",
      "grey.co", "chipper", "paystack.com", "flutterwave.com",
      "chase.com", "bankofamerica.com", "wellsfargo.com",
      "citi.com", "capitalone.com", "americanexpress.com",
      "monzo.com", "starlingbank.com", "n26.com"
    ]
  },
  {
    id: "shopping",
    name: "Shopping",
    color: "yellow",
    patterns: [
      "amazon.com", "amazon.co.uk", "amazon.de", "amazon.fr",
      "ebay.com", "etsy.com",
      "shopify.com", "aliexpress.com", "shein.com", "temu.com",
      "walmart.com", "target.com", "bestbuy.com", "costco.com",
      "jumia.com", "konga.com", "takealot.com",
      "flipkart.com", "mercadolibre.com", "rakuten.com",
      "wayfair.com", "ikea.com", "homedepot.com", "lowes.com",
      "wish.com", "poshmark.com", "depop.com"
    ]
  },
  {
    id: "travel",
    name: "Travel",
    color: "grey",
    patterns: [
      "booking.com", "airbnb.com", "expedia.com", "kayak.com",
      "skyscanner.net", "google.com/travel", "hotels.com",
      "tripadvisor.com", "agoda.com", "hostelworld.com",
      "uber.com", "lyft.com", "bolt.eu",
      "maps.google.com", "google.com/maps",
      "waze.com", "citymapper.com",
      "delta.com", "united.com", "aa.com", "britishairways.com",
      "ryanair.com", "easyjet.com"
    ]
  },
  {
    id: "news",
    name: "News & Reading",
    color: "orange",
    patterns: [
      "bbc.com", "bbc.co.uk",
      "cnn.com", "nytimes.com", "theguardian.com", "reuters.com",
      "apnews.com", "nbcnews.com", "foxnews.com", "washingtonpost.com",
      "aljazeera.com", "dailymail.co.uk", "independent.co.uk",
      "techcrunch.com", "theverge.com", "wired.com", "arstechnica.com",
      "engadget.com", "techradar.com", "tomsguide.com",
      "medium.com", "substack.com", "dev.to",
      "news.ycombinator.com", "hackernews.com",
      "producthunt.com", "indiehackers.com",
      "feedly.com", "flipboard.com", "pocket.com"
    ]
  }
];

// Smart keyword fallback — URL + page title + hostname hints
const SMART_KEYWORDS = [
  {
    id: "ai",
    keywords: [
      "chatgpt", "openai", "claude", "anthropic", "gemini", "copilot",
      "deepseek", "perplexity", "huggingface", "midjourney", "stable diffusion",
      "artificial intelligence", " ai ", " llm", "machine learning",
      "prompt", "gpt-", "gpt4", "grok", "mistral", "cohere",
      "text generator", "ai assistant", "ai chat", "chat bot", "chatbot"
    ]
  },
  {
    id: "education",
    keywords: [
      "online course", "learn online", "tutorial", "lesson", "lecture",
      "certification", "certificate", "homework", "assignment", "syllabus",
      "study guide", "flashcard", "quiz", "exam prep", "university",
      "college", "school portal", "student portal", "learning platform",
      "mooc", "e-learning", "elearning", "course material"
    ]
  },
  {
    id: "entertainment",
    keywords: [
      "netflix", "hulu", "disney+", "disney plus", "prime video", "hbo",
      "watch online", "watch free", "free movie", "full movie",
      "movie", "movies", "film", "films", "cinema", "tv series", "tv show",
      "episode", "season ", "anime", "cartoon", "documentary",
      "football live", "soccer live", "live score", "livestream", "live stream",
      "match highlights", "highlights", "premier league", "champions league",
      "twitch", "spotify", "soundcloud", "podcast", "gaming", "gameplay",
      "trailer", "watch party", "on demand", "video on demand", "vod",
      "stream now", "binge", "box office"
    ]
  },
  {
    id: "finance",
    keywords: [
      "interactive brokers", "ibkr", "robinhood", "coinbase", "binance",
      "bank account", "online banking", "banking", "broker", "brokerage",
      "trading", "trade ", "invest", "investment", "portfolio",
      "stock market", "stock", "stocks", "equity", "share price",
      "crypto", "bitcoin", "ethereum", "wallet", "payment", "invoice",
      "billing", "finance", "financial", "forex", "exchange rate",
      "credit card", "mortgage", "loan application", "wire transfer"
    ]
  },
  {
    id: "work",
    keywords: [
      "dashboard", "admin panel", "admin portal", "control panel",
      "developer portal", "api reference", "api docs", "documentation",
      "project management", "backlog", "sprint", "kanban", "roadmap",
      "pull request", "merge request", "code review", "issue tracker",
      "notion", "jira", "figma", "github", "gitlab", "deploy",
      "staging", "preview", "localhost", "whiteboard", "spreadsheet",
      "video meeting", "video call", "team meeting", "standup",
      "status page", "incident", "on-call", "devops", "ci/cd"
    ]
  },
  {
    id: "travel",
    keywords: [
      "flight", "flights", "airline", "airport", "boarding pass",
      "hotel", "hotels", "hostel", "accommodation", "check-in", "check in",
      "booking confirmation", "itinerary", "car rental", "rent a car",
      "travel guide", "things to do", "vacation", "holiday package"
    ]
  },
  {
    id: "news",
    keywords: [
      " breaking ", "breaking news", "headline", "headlines", "newsletter",
      "newspaper", " daily ", " times ", " post ", " journal",
      "tribune", " herald", "reuters", "associated press",
      "article", "magazine", "editorial", "opinion piece", "live updates"
    ]
  },
  {
    id: "shopping",
    keywords: [
      "add to cart", "added to cart", "shopping cart", "checkout",
      "buy now", "shop now", "marketplace", "free shipping",
      "online store", "ecommerce", "e-commerce", "order confirmation",
      "track order", "delivery status", "product details"
    ]
  },
  {
    id: "social",
    keywords: [
      "inbox", "gmail", "outlook mail", "email", "e-mail",
      "messenger", "whatsapp", "telegram", "direct message", "dm ",
      "social network", "news feed", "timeline", "followers", "following",
      "instagram", "facebook", "linkedin", "reddit", "tiktok",
      "compose message", "send message", "friend request"
    ]
  }
];

// High-confidence hostname rules (runs before keyword scoring)
const HOSTNAME_HINTS = [
  { id: "education", test: h => h.endsWith(".edu") || h.endsWith(".ac.uk") || h.endsWith(".edu.au") || h.includes(".edu.") },
  { id: "education", test: h => h.includes("classroom.google") || h.includes("moodle.") || h.includes("instructure.com") },
  { id: "work", test: h => h.startsWith("docs.") || h.startsWith("drive.") || h.includes(".docs.") },
  { id: "work", test: h => h.startsWith("console.") || h.includes("admin.") && !h.includes("wordpress") },
  { id: "travel", test: h => h.includes("booking.") || h.includes("airbnb") || h.includes("expedia") },
  { id: "finance", test: h => h.includes("bank") || h.includes("broker") || h.includes("trading") },
  { id: "entertainment", test: h => h.startsWith("watch.") },
];

function getHostname(url) {
  try {
    return new URL(url).hostname.toLowerCase();
  } catch {
    return "";
  }
}

function matchesPattern(url, pattern) {
  const lowerUrl = url.toLowerCase();
  const lowerPattern = pattern.toLowerCase();
  const host = getHostname(url);

  if (lowerPattern.includes("/")) {
    return lowerUrl.includes(lowerPattern);
  }

  if (lowerPattern.includes(".")) {
    return host === lowerPattern ||
      host.endsWith("." + lowerPattern) ||
      host.includes(lowerPattern);
  }

  return lowerUrl.includes(lowerPattern) || host.includes(lowerPattern);
}

function hostnameHint(host) {
  if (!host) return null;
  for (const { id, test } of HOSTNAME_HINTS) {
    if (test(host)) return id;
  }
  return null;
}

function smartCategorize(url, title) {
  const host = getHostname(url);

  const hint = hostnameHint(host);
  if (hint) return hint;

  const haystack = ` ${host} ${(url || "").toLowerCase()} ${(title || "").toLowerCase()} `;

  let best = null;
  let bestScore = 0;

  for (const { id, keywords } of SMART_KEYWORDS) {
    for (const kw of keywords) {
      const needle = kw.toLowerCase();
      if (!haystack.includes(needle)) continue;

      let score = needle.length;
      const compact = needle.replace(/\s/g, "");
      if (host.includes(compact)) score += 8;
      if (host.endsWith(compact) || host.startsWith(compact + ".")) score += 5;
      // Title matches are slightly stronger than random URL substring
      if ((title || "").toLowerCase().includes(needle)) score += 3;

      if (score > bestScore) {
        bestScore = score;
        best = id;
      }
    }
  }

  return bestScore >= 4 ? best : null;
}

function categorize(url, title, cats, userRules) {
  if (!url) return null;

  const host = getHostname(url);

  if (userRules && host && userRules[host]) {
    const ruleCat = cats.find(c => c.id === userRules[host]);
    if (ruleCat) return ruleCat;
  }

  for (const cat of cats) {
    for (const p of cat.patterns || []) {
      if (matchesPattern(url, p)) return cat;
    }
  }

  const smartId = smartCategorize(url, title);
  if (smartId) {
    return cats.find(c => c.id === smartId) || null;
  }

  return null;
}
