document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Mobile Menu Toggle ---
    const navLinks = document.querySelector('.nav-links');
    // You can add a burger icon in HTML and target it here
    // For now, this ensures the nav is ready for responsive behavior

    // --- 2. Dynamic News Loader ---
    // This function runs only on the news.html page
    if (document.getElementById('news-feed')) {
        loadNews();
    }
});

/**
 * Fetches the list of posts from your GitHub repository 
 * via the Netlify/GitHub API and renders them.
 */
async function loadNews() {
    const newsFeed = document.getElementById('news-feed');
    const repoOwner = "YOUR_GITHUB_USERNAME"; // Change this
    const repoName = "dr-sadek-portfolio";    // Change this
    const folderPath = "posts";               // Where CMS saves .md files

    try {
        // Fetch the list of files in the /posts folder
        const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/contents/${folderPath}`);
        const files = await response.json();

        // Clear the static placeholders
        newsFeed.innerHTML = '';

        // Loop through the files (Markdown files)
        for (const file of files) {
            if (file.name.endsWith('.md')) {
                const postData = await fetchPostContent(file.download_url);
                renderPost(postData, newsFeed);
            }
        }
    } catch (error) {
        console.error("Error loading news:", error);
        newsFeed.innerHTML = "<p>Unable to load news at this time.</p>";
    }
}

/**
 * Helper to fetch and simple-parse Markdown content
 */
async function fetchPostContent(url) {
    const res = await fetch(url);
    const text = await res.text();

    // Simple RegEx to pull out YAML frontmatter (Title, Date, Description)
    // Decap CMS saves data between --- lines
    const title = text.match(/title:\s*"(.*)"/) || text.match(/title:\s*(.*)/);
    const date = text.match(/date:\s*(.*)/);
    const desc = text.match(/description:\s*"(.*)"/) || text.match(/description:\s*(.*)/);

    return {
        title: title ? title[1].replace(/"/g, '') : "Untitled Post",
        date: date ? date[1].split('T')[0] : "",
        description: desc ? desc[1].replace(/"/g, '') : "Read more about this update...",
    };
}

/**
 * Injects the post HTML into the grid
 */
function renderPost(post, container) {
    const article = document.createElement('article');
    article.className = 'news-card';
    article.innerHTML = `
        <div class="news-image-placeholder">
            <span>Update</span>
        </div>
        <div class="news-content">
            <span class="news-date">${post.date}</span>
            <h3>${post.title}</h3>
            <p>${post.description}</p>
            <a href="#" class="read-more">Read Full Post →</a>
        </div>
    `;
    container.appendChild(article);
}