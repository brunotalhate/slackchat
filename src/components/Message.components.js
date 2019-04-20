import glamorous from 'glamorous-native'
import { Row } from './Shared/Row'
import { theme } from '../constants/theme'

const Wrap = glamorous(Row)({
  alignItems: 'flex-start',
  marginVertical: theme.module,
  marginHorizontal: theme.module * 2,
})

const Avatar = glamorous.image({
  width: 36,
  height: 36,
  marginTop: theme.module / 2,
  marginRight: theme.module,
  resizeMode: 'cover',
})

const Name = glamorous.text({
  fontSize: theme.fontSize.standard,
  color: theme.colors.text,
  ...theme.fontWeight.medium,
})

const Time = glamorous.text({
  fontSize: theme.fontSize.detail,
  color: theme.colors.textSecondary,
  ...theme.fontWeight.regular,
})

const Description = glamorous.text({
  fontSize: theme.fontSize.standard,
  color: theme.colors.text,
})

export { Wrap, Avatar, Name, Time, Description }
