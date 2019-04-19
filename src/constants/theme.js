import { Platform } from 'react-native'

const isIOS = Platform.OS === 'ios'

export const theme = {
  colors: {
    primary: '#4A154B',
    accent: '#3EB67D',
    alert: '#E01E5A',
    surface: '#fff',
    text: '#000',
    textSecondary: 'rgba(0,0,0,0.54)',
  },
  module: 8,
  fontWeight: {
    regular: isIOS ? { fontWeight: '400' } : { fontFamily: 'sans-serif' },
    medium: isIOS ? { fontWeight: '600' } : { fontFamily: 'sans-serif-medium' },
  },
}
