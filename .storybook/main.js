module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-actions",
    "@storybook/addon-events",
    "@storybook/addon-notes",
    "@storybook/addon-options",
    "@storybook/addon-knobs",
    "@storybook/addon-backgrounds",
    "@storybook/addon-ally",
    "@storybook/addon-jest",
    {
      name: "@storybook/addon-docs",
      options: { configureJSX: true },
    },
  ],
};
