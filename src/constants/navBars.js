import React from 'react'
import { Platform } from 'react-native'
import { theme } from './theme'
import { Logo } from '../components/NavBar/Logo'
import { NavRightIcons } from '../components/NavBar/NavRightIcons'

const isIOS = Platform.OS === 'ios'

export const chatNavBar = {
  headerStyle: {
    backgroundColor: isIOS ? theme.colors.surface : theme.colors.primary,
  },
  headerTintColor: isIOS ? theme.colors.text : theme.colors.surface,
  ...Platform.select({
    ios: {
      headerTitleStyle: { textAlign: 'left', flex: 1, marginHorizontal: 0 },
    },
  }),
  title: 'Chat',
  headerLeft: <Logo />,
  headerRight: <NavRightIcons />,
}
