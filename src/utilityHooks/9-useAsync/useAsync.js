import { useCallback, useEffect, useState } from 'react'

// Hook takes callback, which has always! return promise and may also..
// take some deps array for this callback to call again
export default function useAsync(callback, dependencies = []) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()
  const [value, setValue] = useState()

  const callbackMemoized = useCallback(() => {
    setLoading(true)
    setError(undefined)
    setValue(undefined)
    callback()
      .then(setValue)
      .catch(setError)
      .finally(() => setLoading(false))
  }, dependencies)

  // recall function if deps changed
  useEffect(() => {
    callbackMemoized()
  }, [callbackMemoized])

  // hook return boolean loading state and error if promise rejected or..
  // value if promise fullfilled
  return { loading, error, value }
}
