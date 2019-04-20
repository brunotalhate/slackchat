import React from 'react'
import { TextInput } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { searchTermSelector } from '../../redux/reducers/chat/selectors'
import { searchTermUpdate } from '../../redux/actions/sync/chatSyncActions'
import { theme } from '../../constants/theme'

const SearchInputComponent = ({ termToSearch, updateTerm }) => {
  return (
    <TextInput
      autoFocus
      style={{ flex: 1, height: '100%', fontSize: theme.fontSize.searchBar }}
      value={termToSearch}
      onChangeText={updateTerm}
    />
  )
}

SearchInputComponent.propTypes = {
  termToSearch: PropTypes.string.isRequired,
  updateTerm: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  termToSearch: searchTermSelector(state),
})

const mapDispatchToProps = {
  updateTerm: term => searchTermUpdate(term),
}

export const SearchInput = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchInputComponent)
