// GitHub: skills/search.js
await sendToTelegram(chatId, "🔍 Diving into the web... one moment.", env);

try {
  // We use DuckDuckGo's free API for this test
  const query = "Latest AI news February 2026"; 
  const response = await fetch(`https://api.duckduckgo.com/?q=${encodeURIComponent(query)}&format=json&no_html=1`);
  const data = await response.json();

  const result = data.AbstractText || "I found some data, but the abstract was empty. Try a different topic!";
  const source = data.AbstractSource || "Web Search";

  await sendToTelegram(chatId, `📑 **Results from ${source}:**\n\n${result}`, env);
} catch (e) {
  await sendToTelegram(chatId, "❌ Search failed. Check your internet connection!", env);
}
