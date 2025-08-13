export async function GET() {
  const body = `Owner: Ice Mount'n — Elite TV & Home Audio Installations
Contact: contact@icemountn.com
Homepage: https://www.icemountn.com
Policy: https://www.icemountn.com/terms
Sitemap: https://www.icemountn.com/sitemap.xml
User-Agent: GPTBot
Allow: /
User-Agent: ChatGPT-User
Allow: /
User-Agent: CCBot
Allow: /
User-Agent: ClaudeBot
Allow: /
User-Agent: Claude-Web
Allow: /
User-Agent: PerplexityBot
Allow: /
Crawl-Delay: 5
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, must-revalidate"
    }
  });
}
