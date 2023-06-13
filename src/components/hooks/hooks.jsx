import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

export const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => JSON.parse(window.localStorage.getItem(key)) ?? defaultValue)
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])
  
  return [state, setState]
}

useLocalStorage.propTypes = {
  key: PropTypes.string.isRequired,
  defaultValue: PropTypes.array.isRequired,
}