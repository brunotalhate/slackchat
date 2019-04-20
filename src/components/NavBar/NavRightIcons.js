import React from 'react'
import { Platform } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Icon } from '../Shared/Icon'
import { theme } from '../../constants/theme'
import { Row } from '../Shared/Row'
import { searchActiveSelector } from '../../redux/reducers/chat/selectors'
import {
  searchStart,
  searchReset,
} from '../../redux/actions/sync/chatSyncActions'

function NavRightIconsComponent({ isSearchActive, startSearch, resetSearch }) {
  const color =
    Platform.OS === 'ios' ? theme.colors.textSecondary : theme.colors.surface
  return (
    <Row>
      {isSearchActive ? (
        <Icon name='close' onPress={resetSearch} />
      ) : (
        <React.Fragment>
          <Icon name='search' color={color} onPress={startSearch} />
          <Icon name='more' color={color} />
        </React.Fragment>
      )}
    </Row>
  )
}

NavRightIconsComponent.propTypes = {
  isSearchActive: PropTypes.bool.isRequired,
  startSearch: PropTypes.func.isRequired,
  resetSearch: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  isSearchActive: searchActiveSelector(state),
})

const mapDispatchToProps = {
  startSearch: searchStart,
  resetSearch: searchReset,
}

export const NavRightIcons = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavRightIconsComponent)
