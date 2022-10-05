import { useModalContext } from '@core/ui/src/service/modalContext';
import { ContainerFormInput, Form } from './styles';
import Input from '@core/ui/src/components/Form/components/Input';
import { MultiSelect } from '@core/ui/src/components/Form/components/MultiSelect';
import Button from '@core/ui/src/components/Button';
import React from 'react';

const ModalForm = () => {
  const { addModal } = useModalContext();

  return (
    <>
      <Form>
        <ContainerFormInput>
          <Input
            labelOptions={{ style: { minWidth: '115px' } }}
            label="Nome Completo"
            labelPosition="left"
          />
        </ContainerFormInput>
        <ContainerFormInput>
          <MultiSelect
            options={[
              { value: 'teste', label: 'teste' },
              { value: 'teste2', label: 'teste2' },
              { value: 'teste3', label: 'teste3' },
              { value: 'teste5', label: 'teste5' },
              { value: 'teste6', label: 'teste6' },
              { value: 'teste7', label: 'teste7' },
              { value: 'teste8', label: 'teste8' },
              { value: 'teste9', label: 'teste9' },
              { value: 'teste10', label: 'teste10' },
              { value: 'teste11', label: 'teste11' },
              { value: 'teste11', label: 'teste11' },

              { value: 'teste12', label: 'teste12' },

              { value: 'teste13', label: 'teste13' },

              { value: 'teste14', label: 'teste14' },

              { value: 'teste15', label: 'teste15' },
            ]}
            labelOptions={{ style: { minWidth: '115px' } }}
            label="Permissões"
            labelPosition="Left"
          />
        </ContainerFormInput>
        <ContainerFormInput>
          <Button
            type="button"
            onClick={() => {
              addModal({
                title: 'Atenção',
                content: (
                  <p
                    style={{ maxWidth: '338px', margin: '21px 56px 17px 41px' }}
                  >
                    Tem certeza que deseja desabilitar esse usuário? Depois
                    dessa ação ele não mais terá acesso ao sistema!
                  </p>
                ),
              });
            }}
          >
            Desabilitar Usuário
          </Button>
        </ContainerFormInput>
      </Form>
    </>
  );
};

export default ModalForm;
