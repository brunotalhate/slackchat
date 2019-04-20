import React from 'react'
import { Platform } from 'react-native'
import { theme } from './theme'
import { Logo } from '../components/NavBar/Logo'
import { NavRightIcons } from '../components/NavBar/NavRightIcons'
import { appInfo } from './appInfo'
import { StaticIcon } from '../components/Shared/StaticIcon'
import { SearchInput } from '../components/NavBar/SearchInput'

const isIOS = Platform.OS === 'ios'

const appTitle = isIOS ? `#${appInfo.channelName}` : appInfo.appName

export function chatNavBar(isSearchActive) {
  return {
    headerStyle: {
      backgroundColor: isSearchActive
        ? theme.colors.surface
        : theme.colors.navBar,
    },
    headerTintColor: isIOS ? theme.colors.text : theme.colors.surface,
    ...Platform.select({
      ios: {
        headerTitleStyle: { textAlign: 'left', flex: 1, marginHorizontal: 0 },
      },
    }),
    headerTitle: isSearchActive ? <SearchInput /> : appTitle,
    headerLeft: isSearchActive ? <StaticIcon name='search' /> : <Logo />,
    headerRight: <NavRightIcons />,
  }
}
