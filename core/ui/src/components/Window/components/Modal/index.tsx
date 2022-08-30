import React, { useEffect } from 'react'
import Container from './styles'
import ReactDOM from 'react-dom'
interface IModalProps{
    open:boolean;
    modalBackgroundClick?:Function;
    children:React.ReactNode
}
const modalRoot = document.getElementById('modals')

const Modal :React.FC<IModalProps> = ({ open, modalBackgroundClick, children }) => {
  const rootElemRef = React.useRef(document.createElement('div'))

  useEffect(() => {
    if (modalRoot) { modalRoot.appendChild(rootElemRef.current) }
    return function removeElement () {
      rootElemRef.current.remove()
    }
  }, [])

  return ReactDOM.createPortal(
    (
    <Container open={open}>
        <button onClick={() => {
          if (modalBackgroundClick) {
            modalBackgroundClick()
          }
        }} className="button-modal"></button>
        <div>{children}</div>
    </Container>
    ), rootElemRef.current)
}

export default Modal
