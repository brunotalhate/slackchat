import glamorous from 'glamorous-native'
import { theme } from '../../constants/theme'

const Button = glamorous.view(({ disabled }) => ({
  borderWidth: disabled ? 1 : 0,
  borderColor: theme.colors.divider,
  backgroundColor: disabled ? 'transparent' : theme.colors.success,
  borderRadius: theme.borderRadius,
}))

const Text = glamorous.text(({ disabled }) => ({
  color: disabled ? theme.colors.textSecondary : theme.colors.surface,
  fontSize: theme.fontSize.button,
  paddingVertical: theme.module,
  paddingHorizontal: theme.module * 1.5,
  textAlign: 'center',
  ...theme.fontWeight.medium,
}))

export { Button, Text }
