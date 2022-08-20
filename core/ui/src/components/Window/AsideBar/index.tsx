import useDimension from '../../../services/hooks/useDimension'
import React, { useEffect, useRef, useState } from 'react'
import OptionBar from './components/OptionBar'
import Container, { ButtonStyle, ButtonContainer } from './styles'
import Button from '../../Button'
/* global HTMLButtonElement */
/* global HTMLElement */
const AsideBar = () => {
  const ref = useRef<HTMLButtonElement>(null)
  const refAside = useRef<HTMLElement>(null)
  const { width: widthAside } = useDimension(refAside)
  const { width } = useDimension(ref)
  const [sizeType, setSizeType] = useState<'normal'|'small'>('normal')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    console.log(width)
    let newSizeType:'normal'|'small' = 'normal'

    if (width <= 600) {
      newSizeType = 'small'
      setOpen(false)
    }

    setSizeType(newSizeType)
  }, [width])

  return (
    <>
    <Container width={widthAside} ref={refAside} sizeType={sizeType} open={open}>
        <button ref={ref} className="modal" onClick={() => setOpen(false)}></button>
        <ul>
            <OptionBar status='Normal' text='teste' element={<svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg"></svg>}/>
            <OptionBar status='Normal' text='teste2' element={<svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg"></svg>}/>
            <OptionBar status='Normal' text='teste3' element={<svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg"></svg>}/>
        </ul>
    </Container>
    {!open && sizeType === 'small' && <>
    <ButtonContainer></ButtonContainer>
    <Button style={{ position: 'absolute', top: '8px', left: '8px' }} onClick={() => setOpen(!open)} typeColor='secondary' content={<ButtonStyle>
        <span className='span1'/>
        <span className='span2' />
        <span className='span3'/>
    </ButtonStyle>} />
    </>}
    </>
  )
}

export default AsideBar
