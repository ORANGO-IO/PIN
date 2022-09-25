import React, { useEffect } from 'react';
import Container from './styles';
import ReactDOM from 'react-dom';
import Content from '@core/ui/src/components/Window/components/Content';
import Main from '@core/ui/src/components/Window/components/Main';
import Button from '@core/ui/src/components/Button';
import Header from '@core/ui/src/components/Window/components/Header';
/* global HTMLButtonElement */

interface IModalProps {
  open: boolean;
  children: React.ReactNode;
  confirmButton?: React.MouseEventHandler<HTMLButtonElement>;
  goBack?: React.MouseEventHandler<HTMLButtonElement>;
  headerTitle: string;
}

const modalRoot = document.getElementById('modals');

const Modal: React.FC<IModalProps> = ({
  open,
  children,
  confirmButton,
  goBack,
  headerTitle,
}) => {
  const rootElemRef = React.useRef(document.createElement('div'));

  useEffect(() => {
    if (modalRoot) {
      modalRoot.appendChild(rootElemRef.current);
    }
    return function removeElement() {
      rootElemRef.current.remove();
    };
  }, []);

  return ReactDOM.createPortal(
    <Container open={open}>
      <button
        onClick={(e) => {
          if (goBack) {
            goBack(e);
          }
        }}
        className="button-modal"
      ></button>
      <div>
        <div
          style={{
            display: 'flex',
            background: '#fff',
            flexDirection: 'column',
            borderRadius: '5px',
          }}
        >
          <Header
            title={headerTitle}
            buttonLabel="Cancelar"
            rightComponent={
              <Button
                customType="green-confirm"
                type="button"
                onClick={confirmButton}
              >
                Confirmar
              </Button>
            }
            buttonClick={(e) => {
              if (goBack) {
                goBack(e);
              }
            }}
          />
          <Content style={{ background: '#fff' }}>
            <Main style={{ background: '#fff' }}>{children}</Main>
          </Content>
        </div>
      </div>
    </Container>,
    rootElemRef.current
  );
};

export default Modal;
