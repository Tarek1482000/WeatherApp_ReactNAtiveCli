import {PixelRatio} from 'react-native';
const FontScale = PixelRatio.getFontScale();

/* All required themes fonts size and color */
export const SIZE = {
  small: FontScale * 10,
  medium: FontScale * 15,
  large: FontScale * 20,
  xLarge: FontScale * 25,
};

export const COLOR = {
  bg: '#FFF',
  white: '#FFF',
  brown: '#734F2F',
  ofWhite: '#F2E9DD',
  black: '#151515',
  gray: '#A7AEBB',
  purple: '#5b4dbc',
  orange: '#FF8C00',
  orangeIcon: '#FF4500',
  blueFacebook: '#1877F2',
  blueTwitter: '#1DA1F2',
  google: '#4285F4',
};

export const FONT = {
  bold: 'InterBold',
  light: 'InterLight',
  medium: 'InterMedium',
  regular: 'InterRegular',
  semiBold: 'InterSemiBold',
};
