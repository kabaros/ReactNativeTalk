import {Dimensions, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');

export const type = {
  base: 'Avenir-Book',
  bold: 'Avenir-Black',
  emphasis: 'HelveticaNeue-Italic',
};

export const size = {
  h1: 32,
  h2: 24,
  regular: 16,
  medium: 14,
  small: 12,
  tiny: 8.5,
};

export const style = {
  h1: {
    fontFamily: type.base,
    fontSize: size.h1,
    fontWeight: 'bold',
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
  horizontalLineHeight: 1,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: Platform.OS === 'ios' ? 64 : 54,
};

export const colors = {
  // background: '#1F0808',
  background: '#FFF',
  text: '#000',
  highlightText: '#1292B4',
  lighterText: '#444',
  title: '#1292B4',
  // border: '#483F53',
  border: '#eaeaea',
};
