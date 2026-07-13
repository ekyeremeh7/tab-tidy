// Default categories — shared between popup and options page
const DEFAULT_CATEGORIES = [
  {
    id: "work",
    name: "Work & Dev",
    color: "purple",
    patterns: [
      "localhost", "127.0.0.1", "192.168.",
      "atlassian.net", "jira.", "confluence.",
      "github.com", "gitlab.com", "bitbucket.org",
      "vercel.app", "netlify.app", "render.com", "railway.app", "heroku.com",
      "notion.so", "app.notion.com",
      "postman.co", "insomnia.rest",
      "figma.com", "sketch.com",
      "linear.app", "trello.com", "asana.com", "monday.com",
      "slack.com", "discord.com",
      "supabase.co", "firebase.google.com",
      "stackoverflow.com", "docs.", "developer.",
      "skillsire.com"
    ]
  },
  {
    id: "ai",
    name: "AI & Tools",
    color: "cyan",
    patterns: [
      "claude.ai", "anthropic.com", "platform.claude.com", "code.claude.com",
      "chatgpt.com", "openai.com",
      "gemini.google.com", "bard.google.com",
      "composio.dev", "login.composio.dev", "dashboard.composio.dev",
      "cursor.sh", "cursor.com",
      "copilot.microsoft.com",
      "perplexity.ai", "poe.com",
      "huggingface.co", "replicate.com"
    ]
  },
  {
    id: "social",
    name: "Social & Email",
    color: "blue",
    patterns: [
      "mail.google.com", "gmail.com", "outlook.com", "mail.yahoo.com",
      "x.com", "twitter.com",
      "instagram.com", "facebook.com", "threads.net",
      "linkedin.com",
      "reddit.com",
      "tiktok.com",
      "whatsapp.com", "web.telegram.org"
    ]
  },
  {
    id: "entertainment",
    name: "Entertainment",
    color: "red",
    patterns: [
      "youtube.com", "youtu.be",
      "netflix.com", "hulu.com", "disneyplus.com", "primevideo.com", "max.com",
      "twitch.tv",
      "spotify.com", "music.youtube.com", "soundcloud.com",
      "score808", "livescore", "sofascore.com", "espn.com", "bbc.co.uk/sport"
    ]
  },
  {
    id: "shopping",
    name: "Shopping",
    color: "green",
    patterns: [
      "amazon.com", "ebay.com", "etsy.com",
      "shopify.com", "shop.", "store.",
      "aliexpress.com"
    ]
  },
  {
    id: "news",
    name: "News & Reading",
    color: "yellow",
    patterns: [
      "bbc.com", "bbc.co.uk",
      "cnn.com", "nytimes.com", "theguardian.com", "reuters.com",
      "medium.com", "substack.com", "dev.to", "hackernews.com", "news.ycombinator.com"
    ]
  }
];
