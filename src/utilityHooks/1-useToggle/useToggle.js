import { useState } from 'react'

export default function useToggle(defaultValue) {
  const [value, setValue] = useState(defaultValue)

  // toggleValue if called without argument or with non boolean arg..
  // just switches the value to opposite
  function toggleValue(value) {
    setValue(currentValue =>
      typeof value === 'boolean' ? value : !currentValue
    )
  }

  return [value, toggleValue]
}
