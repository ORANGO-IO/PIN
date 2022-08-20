import React from 'react'
import Container from './styles'

interface ModalProps{
    open:boolean;
    modalBackgroundClick?:Function;
    children:React.ReactNode
}

const Modal :React.FC<ModalProps> = ({ open, modalBackgroundClick, children }) => (
    <Container open={open}>
        <button onClick={() => {
          if (modalBackgroundClick) {
            modalBackgroundClick()
          }
        }} className="button-modal"></button>
        <div>{children}</div>
    </Container>
)

export default Modal
