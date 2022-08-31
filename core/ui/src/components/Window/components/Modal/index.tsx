import React, { useEffect } from 'react'
import Container from './styles'
import ReactDOM from 'react-dom'
import Content from '../Content'
import Main from '../Main'
import Button from '../../../Button'
import Header from '../Header'
/* global HTMLButtonElement */

interface IModalProps{
  open:boolean
  children:React.ReactNode
  confirmButton?:React.MouseEventHandler<HTMLButtonElement>
  goBack?:React.MouseEventHandler<HTMLButtonElement>
}

const modalRoot = document.getElementById('modals')

const Modal :React.FC<IModalProps> = ({ open, children, confirmButton, goBack }) => {
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
        <button onClick={(e) => {
          if (goBack) {
            goBack(e)
          }
          rootElemRef.current.remove()
        }} className="button-modal"></button>
        <div>
        <div
            style={{
              display: 'flex',
              background: '#fff',
              flexDirection: 'column',
              height: '40vh',
              width: '435px',
              borderRadius: '5px'
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
              buttonClick={(e) => {
                if (goBack) {
                  goBack(e)
                }
                rootElemRef.current.remove()
              }}
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
