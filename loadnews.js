window.loadNews = function () {
  const list = document.getElementById("news-list");

  if (!window.NEWS_DATA || !Array.isArray(window.NEWS_DATA)) {
    console.error("NEWS_DATA not found or invalid.");
    list.innerHTML = "<li>No news data available.</li>";
    return;
  }

  // Sort newest to oldest by publish date
  const sorted = window.NEWS_DATA.slice().sort((a, b) =>
    new Date(b.published_at) - new Date(a.published_at)
  );

  for (const article of sorted) {
    const li = document.createElement("li");
    function getNewsLink(slug) {
      const isInNewsFolder = window.location.pathname.includes('/news/');
      return isInNewsFolder ? `${slug}.html` : `news/${slug}.html`;
    }
    const link = document.createElement('a');
    link.href = getNewsLink(article.slug);
    li.innerHTML = `
      <a href="${link.href}"><b>${article.title}</b></a><br/>
      <small>By ${article.author.name} • ${new Date(article.published_at).toLocaleString()}</small><br/>
      <span>${article.summary}</span>
    `;
    list.appendChild(li);
  }
};
