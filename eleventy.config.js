export default function (eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/blog/img");

  // Collections
  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/blog/*.md")
      .filter(post => !post.data.draft)
      .sort((a, b) => b.date - a.date);
  });

  // Filters
  eleventyConfig.addFilter("dateDisplay", function (date) {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  });

  eleventyConfig.addFilter("isoDate", function (date) {
    return new Date(date).toISOString();
  });

  eleventyConfig.addFilter("excerpt", function (content) {
    const text = content.replace(/<[^>]*>/g, "");
    return text.substring(0, 160) + (text.length > 160 ? "..." : "");
  });

  eleventyConfig.addFilter("limit", function (array, limit) {
    return array.slice(0, limit);
  });

  eleventyConfig.addFilter("htmlToAbsoluteUrls", function (htmlContent, base) {
    if (!htmlContent) return htmlContent;
    return htmlContent
      .replace(/href="\//g, `href="${base}/`)
      .replace(/src="\//g, `src="${base}/`);
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    pathPrefix: "/atomicbytes-marketing/",
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
}
