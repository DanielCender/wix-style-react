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
  playground,
  api,
} from 'wix-storybook-utils/Sections';

import { storySettings } from './storySettings';
import * as Icons from 'wix-ui-icons-common';
import { Layout, Cell } from 'wix-style-react';

const example = config =>
  baseExample({ components: Object.assign(Icons, Layout, Cell), ...config });
const code = config =>
  baseCode({ components: Object.assign(Icons, Layout, Cell), ...config });

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
            source: `<Duplicate style={{ color: 'blue' }} />`,
          }),

          example({
            title: 'Custom Icon size',
            source: `<div>
                        <Duplicate size="24px" />
                        <Duplicate size="48px" />
                        <Duplicate size="72px" />
                    </div>
                   `,
          }),

          example({
            title: 'RTL Icon',
            source: `<Duplicate style={{ transform: 'scaleX(-1)'}} />`,
          }),
        ],
      }),

      ...[{ title: 'API', sections: [api()] }].map(tab),
    ]),
  ],
};
