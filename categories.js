// Default categories — shared between popup and options page
const DEFAULT_CATEGORIES = [
  {
    id: "work",
    name: "Productivity",
    color: "purple",
    patterns: [
      // Local dev
      "localhost", "127.0.0.1", "192.168.",
      // Project management
      "atlassian.net", "jira.", "confluence.", "linear.app",
      "trello.com", "asana.com", "monday.com", "basecamp.com",
      "clickup.com", "height.app", "shortcut.com",
      // Code & repos
      "github.com", "gitlab.com", "bitbucket.org", "codepen.io",
      "replit.com", "codesandbox.io", "stackblitz.com",
      // Hosting & infra
      "vercel.app", "netlify.app", "render.com", "railway.app",
      "heroku.com", "fly.io", "digitalocean.com", "aws.amazon.com",
      "cloud.google.com", "azure.microsoft.com", "supabase.co",
      "firebase.google.com", "planetscale.com", "neon.tech",
      // Docs & notes
      "notion.so", "app.notion.com", "www.notion.so",
      "confluence.", "coda.io", "slab.com",
      // Design
      "figma.com", "sketch.com", "zeplin.io", "invisionapp.com",
      "framer.com", "canva.com",
      // API & testing
      "postman.co", "insomnia.rest", "hoppscotch.io",
      // App stores / consoles
      "play.google.com/console", "appstoreconnect.apple.com",
      "developer.apple.com", "chromewebstore.google.com",
      "console.firebase.google.com", "console.cloud.google.com",
      // Job / freelance
      "skillsire.com", "upwork.com", "toptal.com",
      // Docs
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
      // Video
      "youtube.com", "youtu.be",
      "netflix.com", "hulu.com", "disneyplus.com", "primevideo.com",
      "max.com", "peacocktv.com", "paramountplus.com", "appletv.com",
      "crunchyroll.com", "funimation.com",
      // Streaming / free movies
      "watchluna.com", "hurawatch", "fmovies", "123movies",
      "putlocker", "soap2day", "lookmovie",
      // Live & sports
      "twitch.tv", "kick.com",
      "score808", "livescore", "sofascore.com", "espn.com",
      "bbc.co.uk/sport", "skysports.com", "goal.com",
      // Music
      "spotify.com", "music.youtube.com", "soundcloud.com",
      "tidal.com", "deezer.com", "music.apple.com",
      // Gaming
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
      "grey.co", "chipper"
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
