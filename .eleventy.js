module.exports = function(eleventyConfig) {
    // call functions on eleventyConfig here
    eleventyConfig.addPassthroughCopy("./assets");
    eleventyConfig.addPassthroughCopy("./images");
    // eleventyConfig.addPassthroughCopy("**/*.jpg");

    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
    // return object options in the object starting on the line below.
    return {
        dir: {
            input: "src",
            output: "_site"
        }
    };
}