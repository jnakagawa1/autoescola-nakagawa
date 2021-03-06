module.exports = {
  stories: [
    "../src/stories/**/*.stories.@(js|mdx)",
    "../src/components/**/*.stories.@(js|mdx)",
    "../src/styles/**/*.stories.@(js|mdx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/preset-create-react-app",
    "@storybook/addon-viewport",
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
      },
    },
    "@storybook/addon-essentials",
    "@storybook/addon-knobs",
  ],
};
