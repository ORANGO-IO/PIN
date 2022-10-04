import React from 'react';
import Container, { ContainerContentModal } from './styles';
import Content from '@core/ui/src/components/Window/components/Content';
import Main from '@core/ui/src/components/Window/components/Main';
import Button from '@core/ui/src/components/Button';
import Header from '@core/ui/src/components/Window/components/Header';
/* global HTMLButtonElement */

interface IModalProps {
  children: React.ReactNode;
  confirmButton?: React.MouseEventHandler<HTMLButtonElement>;
  goBack?: React.MouseEventHandler<HTMLButtonElement>;
  headerTitle: string;
}

const Modal: React.FC<IModalProps> = ({
  children,
  confirmButton,
  goBack,
  headerTitle,
}) => {
  return (
    <Container>
      <button
        onClick={(e) => {
          if (goBack) {
            goBack(e);
          }
        }}
        className="button-modal"
      ></button>
      <div>
        <ContainerContentModal>
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
          <Content className="content">
            <Main className="content-main">{children}</Main>
          </Content>
        </ContainerContentModal>
      </div>
    </Container>
  );
};

export default Modal;
