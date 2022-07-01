module.exports = {
    stories: [
        "../**/*.stories.mdx",
        "../**/*.stories.@(js|jsx|ts|tsx)",
        "../**/*.stories.mdx",
        "../**/**/*.stories.@(js|jsx|ts|tsx)",
        "../**/**/*.stories.mdx"
    ],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        {
            name: "@storybook/addon-docs",
            options: { transcludeMarkdown: true }
        }
    ],
    framework: "@storybook/web-components"
}
