import { useRef, useState, useEffect, MutableRefObject } from 'react'
import ResizeObserver from 'resize-observer-polyfill'

const initialState = { width: 0, height: 0 }

/**
 * const divRef = useRef(null);
 * const { height, width } = useDimension(divRef);
 * <div ref={divRef}>
 * @param {*} ref is the reference to the element whose height and with is required
 * @returns
 */

// eslint-disable-next-line no-undef
const useDimension = (ref:MutableRefObject<HTMLElement | null>) => {
  const [dimensions, setdDimensions] = useState(initialState)
  const resizeObserverRef = useRef<ResizeObserver>()

  useEffect(() => {
    resizeObserverRef.current = new ResizeObserver((entries = []) => {
      entries.forEach(entry => {
        const { width, height } = entry.contentRect
        setdDimensions({ width, height })
      })
    })
    if (ref.current) resizeObserverRef.current.observe(ref.current)
    return () => {
      if (resizeObserverRef.current) resizeObserverRef.current.disconnect()
    }
  }, [ref])
  return dimensions
}

export default useDimension
