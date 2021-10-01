import { useEffect } from 'react'
import useTimeout from '../2-useTimeout/useTimeout'

export default function useDebounce(callback, delay, deps) {
  const { reset, clear } = useTimeout(callback, delay)
  // main UE which reset timeout every time when deps or reset func changed
  useEffect(reset, [...deps, reset])
  // this effect prevents callback to be called..
  // when useDebounce called the first time
  useEffect(clear, [])
}
