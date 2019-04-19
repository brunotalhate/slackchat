import { createStackNavigator, createAppContainer } from 'react-navigation'
import { ChatScreen } from './containers/ChatScreen'

const Stack = createStackNavigator({
  chat: ChatScreen,
})

export const Navigator = createAppContainer(Stack)
