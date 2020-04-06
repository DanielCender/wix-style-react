import React from 'react';
import {
  tabs,
  tab,
  description,
  importExample,
  title,
  divider,
  example as baseExample,
} from 'wix-storybook-utils/Sections';
import AllIcons from './AllIcons';

import allComponents from '../../../stories/utils/allComponents';
import { storySettings } from './storySettings';
import * as examples from './examples';

const API_Table = `
| Name | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| className | string |  |   | Set custom class to svg root of icon |
| size | string |  |   | Set the size of the icon |
| style | object |  |   | Set style object to svg root of icon |
| ***All other Props are passed to the SVG element*** | | | | |
`;

const example = config => baseExample({ components: allComponents, ...config });

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
            "import Duplicate from 'wix-ui-icons-common/Duplicate';\n",
          ),

          divider(),

          title('Examples'),

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

          example({
            title: 'Usage',
            source: examples.usageExample,
          }),

          <AllIcons />,
        ],
      }),

      ...[{ title: 'API', sections: [description({ text: API_Table })] }].map(
        tab,
      ),
    ]),
  ],
};
