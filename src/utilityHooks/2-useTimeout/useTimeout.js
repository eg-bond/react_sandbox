import { useCallback, useEffect, useRef } from 'react'

// works exactly like setTimeout, but also returns clear and reset functions..
// which alows us to manually clear or reset timeoun if necessary
export default function useTimeout(callback, delay) {
  // callbackRef used to make sure that callback received in useTimeout will..
  // always be the same, even if useTimeout calls multiple times
  const callbackRef = useRef(callback)
  const timeoutRef = useRef()

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  const set = useCallback(() => {
    timeoutRef.current = setTimeout(() => callbackRef.current(), delay)
  }, [delay])

  const clear = useCallback(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current)
  }, [])

  // main useEffect, which sets timeout and clear it if delay changes
  useEffect(() => {
    set()
    return clear
  }, [delay, set, clear])

  // setTimeout again
  const reset = useCallback(() => {
    clear()
    set()
  }, [clear, set])

  return { reset, clear }
}
