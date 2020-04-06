import React from 'react';
import {
  header,
  tabs,
  tab,
  description,
  importExample,
  title,
  divider,
  example as baseExample,
  code as baseCode,
  api,
} from 'wix-storybook-utils/Sections';
import Markdown from 'wix-storybook-utils/Markdown';
import Readme from '../README.md';
import allComponents from '../../../stories/utils/allComponents';
import { storySettings } from './storySettings';
import * as examples from './examples';

const componentsWithIcons = { ...allComponents, ...allComponents.Icons };

const example = config =>
  baseExample({ components: componentsWithIcons, ...config });

const code = config => baseCode({ components: componentsWithIcons, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  sections: [
    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text:
              'To use icons, please install a separate `wix-ui-icons-common` package.',
          }),

          importExample(
            "import ChevronDown from 'wix-ui-icons-common/ChevronDown';\n",
          ),

          divider(),

          title('Examples'),

          example({
            title: 'All Icons',
            source: `<Duplicate style={{ color: 'blue' }} />`,
          }),

          example({
            title: 'Custom Icon color',
            description:
              'The icon color can be customized using the `style` prop or `className` prop. These are the recommended colors.',
            source: examples.colorsExample,
          }),

          example({
            title: 'Custom Icon size',
            source: examples.sizesExample,
          }),

          example({
            title: 'LTR and RTL Icons',
            description: 'Icons can be used either `RTL` or `LTR` (default).',
            source: examples.RTL_LTR_Example,
          }),
        ],
      }),

      ...[{ title: 'API', sections: [api()] }].map(tab),
    ]),
  ],
};
