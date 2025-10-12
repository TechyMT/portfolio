import { themes } from '@storybook/theming';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandImage: './icon.svg',
    brandTitle: 'Mustafa Trunkwala Components',
    brandUrl: 'https://mustafatrunkwala.netlify.app',
  },
});
