// Font size tokens in a separate file since they require calculations based on a base font size

const baseFontSize = '16'; // px

module.exports = {
  font: {
    size: {
      'heading-level-1': {
        default: { value: `${2.25 * baseFontSize}px` },
        'at-480': { value: `${2.5 * baseFontSize}px` },
        'at-768': { value: `${3 * baseFontSize}px` },
        'at-1000': { value: `${4 * baseFontSize}px` },
      },
      'heading-level-2': {
        default: { value: `${1.728 * baseFontSize}px` },
        'at-480': { value: `${1.953 * baseFontSize}px` },
        'at-768': { value: `${2.369 * baseFontSize}px` },
        'at-1000': { value: `${2.827 * baseFontSize}px` },
      },
      'heading-level-3': {
        default: { value: `${1.44 * baseFontSize}px` },
        'at-480': { value: `${1.563 * baseFontSize}px` },
        'at-768': { value: `${1.777 * baseFontSize}px` },
        'at-1000': { value: `${2 * baseFontSize}px` },
      },
      'heading-level-4': {
        default: { value: `${1.2 * baseFontSize}px` },
        'at-480': { value: `${1.25 * baseFontSize}px` },
        'at-768': { value: `${1.333 * baseFontSize}px` },
        'at-1000': { value: `${1.414 * baseFontSize}px` },
      },
      'heading-eyebrow': {
        default: { value: '13px' },
        'at-480': { value: '14px' },
        'at-768': { value: '15px' },
        'at-1000': { value: '15px' },
      },
      'body-l': {
        default: { value: `${1.2 * baseFontSize}px` },
        'at-480': { value: `${1.25 * baseFontSize}px` },
        'at-768': { value: `${1.33 * baseFontSize}px` },
        'at-1000': { value: `${1.414 * baseFontSize}px` },
      },
      'body-lead': {
        default: { value: `${1.3 * baseFontSize}px` },
        'at-480': { value: `${1.4 * baseFontSize}px` },
        'at-768': { value: `${1.6 * baseFontSize}px` },
        'at-1000': { value: `${1.8 * baseFontSize}px` },
      },
      'body-m': {
        default: { value: `${1 * baseFontSize}px` },
        'at-480': { value: `${1 * baseFontSize}px` },
        'at-768': { value: `${1.2 * baseFontSize}px` },
        'at-1000': { value: `${1.2 * baseFontSize}px` },
      },
      'body-s': {
        default: { value: `${0.75 * baseFontSize}px` },
        'at-480': { value: `${0.85 * baseFontSize}px` },
        'at-768': { value: `${0.9 * baseFontSize}px` },
        'at-1000': { value: `${0.9 * baseFontSize}px` },
      },
    },
  },
};
