import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  viteFinal: async (config) => {
    // Ensure proper handling of workspace packages
    if (config.optimizeDeps) {
      config.optimizeDeps.include = config.optimizeDeps.include || []
      config.optimizeDeps.include.push('@company/ui', '@company/tokens')
    }
    
    // Ensure PostCSS and Tailwind CSS work correctly
    config.css = config.css || {}
    config.css.postcss = {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    }
    
    return config
  },
}

export default config