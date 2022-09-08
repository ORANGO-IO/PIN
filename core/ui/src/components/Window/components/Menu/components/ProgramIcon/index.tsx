import React, { ButtonHTMLAttributes, useEffect, useRef, useState } from 'react'
import Container from './styles'
/* global HTMLButtonElement */
/* global HTMLDivElement */
interface IProgramIconProp extends ButtonHTMLAttributes<HTMLButtonElement>{
    icon?:React.ReactNode
    text:string
    open:boolean
}

const ProgramIcon:React.FC<IProgramIconProp> = ({ icon, text, open, ...rest }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [addListener, setAddListener] = useState(false)
  const [windowSizes, setWindowSizes] = useState<{
    width:null| number,
    height:null | number
  }>({
    width: null,
    height: null
  })
  const [distances, setDistances] = useState<{
    Y:null | number;
    X: null | number
  }>({
    Y: null,
    X: null
  })

  useEffect(() => {
    if (!ref.current) {
      return
    }

    const el = ref.current?.getBoundingClientRect()
    if (!el) {
      return
    }
    const distanceY = window.innerHeight - el?.top
    const distanceX = el.left + 10
    setDistances({
      X: distanceX * -1,
      Y: distanceY
    })
  }, [windowSizes, ref])

  useEffect(() => {
    function getDistances () {
      setWindowSizes({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    if (!addListener) {
      window.addEventListener('resize', getDistances)
      getDistances()
      setAddListener(true)
    }
  }, [addListener])

  return (
    <Container open={open} width={distances.X} height={distances.Y} ref={ref}>
        <button type="button" {...rest}>
            <div>
            {icon}
            </div>
            <p>{text}</p>
        </button>
    </Container>
  )
}

export default ProgramIcon
