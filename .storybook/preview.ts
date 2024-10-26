import type { Preview } from '@storybook/react';

import { i18n } from '../src/i18n.js';
import theme from './theme.js';

import '../src/tailwind/globals.css';

i18n.init();

const preview: Preview = {
  globals: {
    locale: 'en',
    locales: {
      en: 'English',
      fr: 'Français'
    }
  },
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    docs: {
      theme,
      toc: true
    }
  }
};

export default preview;
