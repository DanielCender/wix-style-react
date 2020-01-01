import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import textDriverFactory from '../Text/Text.driver';
import { testkitFactoryCreator } from 'wix-ui-test-utils/vanilla';

const textTestkitFactory = testkitFactoryCreator(textDriverFactory);

export const thumbnailDriverFactory = base => {
  const byHook = hook => base.$(`[data-hook*="${hook}"]`);
  const getThumbnailWrapper = () => byHook('thumbnail-wrapper');
  const getStyle = async (element, rule) =>
    (await element.attr('style')).match(new RegExp(`${rule}: (.*?);`))[1];

  const titleDriver = async () =>
    textTestkitFactory({
      wrapper: await byHook('thumbnail-title').getNative(), // eslint-disable-line no-restricted-properties
      dataHook: 'thumbnail-title',
    });

  return {
    ...baseUniDriverFactory(base),

    /** Get thumbnail title */
    getTitle: async () => (await titleDriver()).getText(),

    /** Get thumbnail description */
    getDescription: () => byHook('thumbnail-description').text(),

    /** Get selected icon */
    getSelectedIcon: () => byHook('thumbnail-selected-icon'),

    getBackgroundImage: () => byHook('thumbnail-background-image'),

    /** Is Thumbnail selected */
    isSelected: async () =>
      (await getThumbnailWrapper().attr('data-selected')) === 'true',

    /** Is Thumbnail disabled */
    isDisabled: async () =>
      (await getThumbnailWrapper().attr('data-disabled')) === 'true',

    /** Get thumbnail image */
    getImage: () => byHook('thumbnail-image'),

    /** Get thumbnail width, if it's set through `width` prop */
    getWidth: async () => await getStyle(base, 'width'),

    /** Get thumbnail height, if it's set through `height` prop */
    getHeight: async () =>
      await getStyle(await getThumbnailWrapper(), 'height'),
  };
};
