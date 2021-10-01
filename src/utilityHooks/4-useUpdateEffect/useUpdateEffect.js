import { useEffect, useRef } from 'react'

// The normal UE calls after first component render and when each time..
// its deps changed

// This useUpdateEffect hook changes default UE behavior in a way that..
// UE isn't calling after first render
export default function useUpdateEffect(callback, dependencies) {
  const firstRenderRef = useRef(true)

  useEffect(() => {
    // firstRenderRef.current === true - make it false and don't execute code
    if (firstRenderRef.current) {
      firstRenderRef.current = false
      return
    }
    // depending on desired behavior we can call callback directly of..
    // by returning it from the UE
    return callback()
    //callback()
  }, dependencies)
}
