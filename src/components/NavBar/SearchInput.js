import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import glamorous from 'glamorous-native'
import { searchTermSelector } from '../../redux/reducers/chat/selectors'
import { searchTermUpdate } from '../../redux/actions/sync/chatSyncActions'
import { theme } from '../../constants/theme'

const StyledSearchInput = glamorous.textInput({
  flex: 1,
  height: '100%',
  fontSize: theme.fontSize.searchBar,
})

const SearchInputComponent = ({ termToSearch, updateTerm }) => {
  return (
    <StyledSearchInput
      autoFocus
      value={termToSearch}
      onChangeText={updateTerm}
      placeholder='Search in #chat'
      placeholderTextColor={theme.colors.textInput}
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
