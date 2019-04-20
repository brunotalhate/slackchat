import { Platform, StyleSheet } from 'react-native'

const isIOS = Platform.OS === 'ios'

export const theme = {
  colors: {
    primary: '#4A154B',
    accent: '#3EB67D',
    success: '#1264A3',
    alert: '#E01E5A',
    surface: '#fff',
    text: '#000',
    textSecondary: 'rgba(0,0,0,0.54)',
    disabled: 'rgba(0,0,0,0.2)',
    textInput: '#868686',
    navBar: isIOS ? '#fff' : '#4A154B',
    divider: '#E5E5E5',
  },
  module: 8,
  borderWidth: StyleSheet.hairlineWidth,
  borderRadius: 8,
  iconSize: {
    standard: 24,
  },
  fontSize: {
    searchBar: isIOS ? 17 : 20,
    input: 16,
    standard: 15,
    button: 14,
    detail: 13,
  },
  fontWeight: {
    regular: isIOS ? { fontWeight: '400' } : { fontFamily: 'sans-serif' },
    medium: isIOS ? { fontWeight: '700' } : { fontFamily: 'sans-serif-medium' },
  },
}
