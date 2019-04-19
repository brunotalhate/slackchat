import PropTypes from 'prop-types'

export const messagePropTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  time: PropTypes.instanceOf(Date).isRequired,
  formattedTime: PropTypes.string.isRequired,
})
