import React from 'react'
import Container from './styles'

interface IModalProps{
    open:boolean;
    modalBackgroundClick?:Function;
    children:React.ReactNode
}

const Modal :React.FC<IModalProps> = ({ open, modalBackgroundClick, children }) => (
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
