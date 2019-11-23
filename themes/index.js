import {Dimensions, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');

export const type = {
  base: 'Avenir-Book',
  bold: 'Avenir-Black',
  emphasis: 'HelveticaNeue-Italic',
};

const baseFontSize = 16;

export const size = {
  h1: baseFontSize * 2,
  h2: baseFontSize * 1.5,
  regular: baseFontSize,
  medium: baseFontSize * 0.9,
  small: baseFontSize * 0.8,
  tiny: baseFontSize * 0.5,
};

export const style = {
  h1: {
    fontFamily: type.base,
    fontSize: size.h1,
  },
  h2: {
    fontFamily: type.base,
    fontSize: size.h2,
  },
  normal: {
    fontFamily: type.base,
    fontSize: size.regular,
  },
  medium: {
    fontFamily: type.base,
    fontSize: size.medium,
  },
  small: {
    fontFamily: type.base,
    fontSize: size.small,
  },
  description: {
    fontFamily: type.base,
    fontSize: size.medium,
  },
};

export const metrics = {
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

export const colors = {
  text: '#000',
  lighterText: '#444',
  background: '#FFF',
  footer: '#fff',
  highlightText: '#1292B4',
  border: '#eaeaea',
};

// export const colors = {
//   background: '#252525',
//   footer: '#252525',
//   text: '#ffda1f',
//   lighterText: '#ffda1f',
//   highlightText: '#ffbe00',
//   border: '#fbe6b7a8',
// };
