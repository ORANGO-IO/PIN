import React, { useEffect } from 'react'
import Container from './styles'
import ReactDOM from 'react-dom'
import Content from '../Content'
import Main from '../Main'
import Button from '../../../Button'
import Header from '../Header'
/* global HTMLButtonElement */

interface IModalProps{
    open:boolean;
    modalBackgroundClick?:Function;
    children:React.ReactNode
    confirmButton?:React.MouseEventHandler<HTMLButtonElement>
    goBack?:React.MouseEventHandler<HTMLButtonElement>
}
const modalRoot = document.getElementById('modals')

const Modal :React.FC<IModalProps> = ({ open, modalBackgroundClick, children, confirmButton, goBack }) => {
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
        <div>
        <div
            style={{
              display: 'flex',
              background: '#fff',
              flexDirection: 'column',
              height: '40vh',
              width: '435px'
            }}
          >
             <Header
              title="Editar Usuário"
              buttonLabel="Cancelar"
              rightComponent={
                <Button
                  customType='green-confirm'
                  type="button"
                  onClick={confirmButton}
                >
                  Confirmar
                </Button>
              }
              buttonClick={goBack}
            />
            <Content style={{ background: '#fff' }}>
              <Main style={{ background: '#fff' }}>

                {children}
              </Main>
            </Content>

          </div>
          </div>
    </Container>
    ), rootElemRef.current)
}

export default Modal
