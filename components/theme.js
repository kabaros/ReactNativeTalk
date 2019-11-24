import {Dimensions, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');

const baseFontSize = 16;

export const Sizes = {
  h1: baseFontSize * 2,
  h2: baseFontSize * 1.5,
  regular: baseFontSize,
  medium: baseFontSize * 0.9,
  small: baseFontSize * 0.8,
  tiny: baseFontSize * 0.5,
};

export const FontType = {
  base: 'Avenir-Book',
  bold: 'Avenir-Black',
  emphasis: 'HelveticaNeue-Italic',
};

export const Styles = {
  h1: {
    fontFamily: FontType.base,
    fontSize: Sizes.h1,
  },
  h2: {
    fontFamily: FontType.base,
    fontSize: Sizes.h2,
  },
  normal: {
    fontFamily: FontType.base,
    fontSize: Sizes.regular,
  },
  medium: {
    fontFamily: FontType.base,
    fontSize: Sizes.medium,
  },
  small: {
    fontFamily: FontType.base,
    fontSize: Sizes.small,
  },
  description: {
    fontFamily: FontType.base,
    fontSize: Sizes.medium,
  },
};

export const Metrics = {
  marginHorizontal: 10,
  marginVertical: 10,

  padding: 10,
  doublePadding: 20,

  section: 25,
  baseMargin: 10,
  doubleBaseMargin: 20,
  smallMargin: 5,
  doubleSection: 50,
  horizontalLineHeight: 0.4,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: Platform.OS === 'ios' ? 64 : 54,
};

export const Colors = {
  text: '#000',
  lighterText: '#444',
  background: '#FFF',
  footer: '#fff',
  highlightText: '#1292B4',
  border: '#eaeaea',
};

// export const Colors = {
//   background: '#252525',
//   footer: '#252525',
//   text: '#ffda1f',
//   lighterText: '#ffda1f',
//   highlightText: '#ffbe00',
//   border: '#fbe6b7a8',
// };

const scale = size => {
  const {width: deviceWidth} = Dimensions.get('window');
  return (deviceWidth * size) / 375; // iphone6 width
};
