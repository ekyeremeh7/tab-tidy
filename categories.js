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
      "clickup.com", "height.app", "shortcut.com",
      "github.com", "gitlab.com", "bitbucket.org", "codepen.io",
      "replit.com", "codesandbox.io", "stackblitz.com",
      "vercel.app", "netlify.app", "render.com", "railway.app",
      "heroku.com", "fly.io", "digitalocean.com", "aws.amazon.com",
      "cloud.google.com", "azure.microsoft.com", "supabase.co",
      "firebase.google.com", "planetscale.com", "neon.tech",
      "notion.so", "app.notion.com", "www.notion.so", "notion.com",
      "coda.io", "slab.com",
      "figma.com", "sketch.com", "zeplin.io", "invisionapp.com",
      "framer.com", "canva.com",
      "postman.co", "insomnia.rest", "hoppscotch.io",
      "play.google.com/console", "appstoreconnect.apple.com",
      "developer.apple.com", "chromewebstore.google.com",
      "console.firebase.google.com", "console.cloud.google.com",
      "skillsire.com", "upwork.com", "toptal.com",
      "stackoverflow.com", "developer.mozilla.org", "w3schools.com",
      "docs.flutter.dev", "pub.dev"
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
      "perplexity.ai", "poe.com",
      "huggingface.co", "replicate.com",
      "mistral.ai", "groq.com", "cohere.com",
      "grok.com", "x.ai",
      "v0.dev", "bolt.new", "lovable.dev",
      "meetaugust.ai", "notion.ai"
    ]
  },
  {
    id: "social",
    name: "Social & Email",
    color: "blue",
    patterns: [
      "mail.google.com", "gmail.com",
      "outlook.com", "mail.yahoo.com", "protonmail.com", "hey.com",
      "x.com/", "twitter.com",
      "instagram.com", "facebook.com", "threads.net",
      "linkedin.com",
      "reddit.com",
      "tiktok.com",
      "whatsapp.com", "web.telegram.org",
      "discord.com", "slack.com",
      "pinterest.com", "snapchat.com"
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
      "putlocker", "soap2day", "lookmovie",
      "twitch.tv", "kick.com",
      "score808", "livescore", "sofascore.com", "espn.com",
      "bbc.co.uk/sport", "skysports.com", "goal.com",
      "spotify.com", "music.youtube.com", "soundcloud.com",
      "tidal.com", "deezer.com", "music.apple.com",
      "store.steampowered.com", "epicgames.com", "itch.io"
    ]
  },
  {
    id: "finance",
    name: "Finance",
    color: "green",
    patterns: [
      "ibkr.com", "interactivebrokers.com",
      "robinhood.com", "etrade.com", "fidelity.com", "schwab.com",
      "coinbase.com", "binance.com", "kraken.com",
      "paypal.com", "wise.com", "revolut.com",
      "stripe.com", "mercury.com",
      "mint.com", "ynab.com",
      "polymarket.com",
      "bloomberg.com", "finance.yahoo.com", "investing.com",
      "grey.co", "chipper", "paystack.com", "flutterwave.com"
    ]
  },
  {
    id: "shopping",
    name: "Shopping",
    color: "yellow",
    patterns: [
      "amazon.com", "ebay.com", "etsy.com",
      "shopify.com", "aliexpress.com", "shein.com",
      "jumia.com", "konga.com"
    ]
  },
  {
    id: "news",
    name: "News & Reading",
    color: "orange",
    patterns: [
      "bbc.com", "bbc.co.uk",
      "cnn.com", "nytimes.com", "theguardian.com", "reuters.com",
      "techcrunch.com", "theverge.com", "wired.com", "arstechnica.com",
      "medium.com", "substack.com", "dev.to",
      "news.ycombinator.com", "hackernews.com",
      "producthunt.com"
    ]
  }
];

// Smart keyword fallback — catches unknown domains by URL + page title
// Checked in priority order (most specific first)
const SMART_KEYWORDS = [
  {
    id: "ai",
    keywords: [
      "chatgpt", "openai", "claude", "anthropic", "gemini", "copilot",
      "deepseek", "perplexity", "huggingface", "midjourney", "stable diffusion",
      "artificial intelligence", " ai ", " llm", "machine learning",
      "prompt", "gpt-", "grok", "mistral", "cohere"
    ]
  },
  {
    id: "entertainment",
    keywords: [
      "netflix", "hulu", "disney+", "disney plus", "prime video", "hbo",
      "stream", "streaming", "watch online", "watch free", "free movie",
      "movie", "movies", "film", "films", "cinema", "tv series", "tv show",
      "episode", "season ", "anime", "cartoon", "documentary",
      "football live", "soccer live", "live score", "livestream", "live stream",
      "twitch", "spotify", "soundcloud", "podcast", "gaming", "gameplay",
      "trailer", "full movie", "watch party"
    ]
  },
  {
    id: "finance",
    keywords: [
      "interactive brokers", "ibkr", "robinhood", "coinbase", "binance",
      "bank", "banking", "broker", "brokerage", "trading", "trade ",
      "invest", "investment", "portfolio", "stock", "stocks", "equity",
      "crypto", "bitcoin", "ethereum", "wallet", "payment", "invoice",
      "billing", "finance", "financial", "forex", "exchange rate"
    ]
  },
  {
    id: "work",
    keywords: [
      "dashboard", "console", "admin panel", "admin portal", "workspace",
      "developer", "documentation", "docs", "api reference",
      "project management", "backlog", "sprint", "kanban", "roadmap",
      "notion", "jira", "figma", "github", "gitlab", "deploy",
      "staging", "preview", "localhost", "pull request", "merge request"
    ]
  },
  {
    id: "news",
    keywords: [
      " breaking ", "headline", "headlines", "newsletter", "newspaper",
      " daily ", " times ", " post ", " journal", " tribune", " herald",
      "reuters", "associated press", "article", "magazine", "editorial"
    ]
  },
  {
    id: "shopping",
    keywords: [
      "add to cart", "shopping cart", "checkout", "buy now", "marketplace",
      "free shipping", "shop now", "online store", "ecommerce", "e-commerce"
    ]
  },
  {
    id: "social",
    keywords: [
      "inbox", "gmail", "outlook mail", "email", "e-mail",
      "messenger", "whatsapp", "telegram", "direct message",
      "social network", "news feed", "timeline", "followers", "following",
      "instagram", "facebook", "linkedin", "reddit", "tiktok"
    ]
  }
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

  // Path-sensitive patterns (e.g. x.com/, play.google.com/console)
  if (lowerPattern.includes("/")) {
    return lowerUrl.includes(lowerPattern);
  }

  // Domain-like patterns: prefer hostname match to avoid false positives
  if (lowerPattern.includes(".")) {
    return host === lowerPattern ||
      host.endsWith("." + lowerPattern) ||
      host.includes(lowerPattern);
  }

  // Short tokens (localhost, score808, etc.)
  return lowerUrl.includes(lowerPattern) || host.includes(lowerPattern);
}

function smartCategorize(url, title) {
  const host = getHostname(url);
  const haystack = ` ${host} ${(url || "").toLowerCase()} ${(title || "").toLowerCase()} `;

  let best = null;
  let bestScore = 0;

  for (const { id, keywords } of SMART_KEYWORDS) {
    for (const kw of keywords) {
      const needle = kw.toLowerCase();
      if (haystack.includes(needle)) {
        const score = needle.length + (host.includes(needle.replace(/\s/g, "")) ? 5 : 0);
        if (score > bestScore) {
          bestScore = score;
          best = id;
        }
      }
    }
  }

  return best;
}

function categorize(url, title, cats, userRules) {
  if (!url) return null;

  const host = getHostname(url);

  // 1. User-learned domain rules (future: right-click "always group as…")
  if (userRules && host && userRules[host]) {
    const ruleCat = cats.find(c => c.id === userRules[host]);
    if (ruleCat) return ruleCat;
  }

  // 2. Explicit URL patterns
  for (const cat of cats) {
    for (const p of cat.patterns || []) {
      if (matchesPattern(url, p)) return cat;
    }
  }

  // 3. Smart keyword fallback from URL + title
  const smartId = smartCategorize(url, title);
  if (smartId) {
    return cats.find(c => c.id === smartId) || null;
  }

  return null;
}
