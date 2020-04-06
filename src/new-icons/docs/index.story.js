import React from 'react';
import {
  tabs,
  tab,
  description,
  importExample,
  title,
  divider,
  example as baseExample,
  api,
} from 'wix-storybook-utils/Sections';
import CodeExample from 'wix-storybook-utils/CodeExample';
import AllIcons from './AllIcons';
import AllIconsRaw from '!raw-loader!./AllIcons';

import allComponents from '../../../stories/utils/allComponents';
import { storySettings } from './storySettings';
import * as examples from './examples';

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

          <CodeExample title="All Icons" code={AllIconsRaw}>
            <AllIcons />
          </CodeExample>,
        ],
      }),

      ...[{ title: 'API', sections: [api()] }].map(tab),
    ]),
  ],
};
