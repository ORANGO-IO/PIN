import React from 'react';
import options from '@core/ui/src/mocks/options.json';

import ListOption from '@core/ui/src/components/ListOption';
import Input from '@core/ui/src/components/Form/components/Input';
import HeaderChart from '@core/ui/src/components/Window/components/HeaderChart';
import profileIcon from '@core/ui/src/assets/icons/profile.svg';
import ModalForm from '@core/ui/src/components/Modals/components/ModalForm';
import {
  ContainerContent,
  ContainerParagraphe,
  OptionListContainer,
} from './styles';
import { useModalContext } from '@core/ui/src/services/modalContext';
const Main = () => {
  const { addModal } = useModalContext();

  return (
    <>
      <HeaderChart fixed>
        <p>Filipe Rocha Lopes, Masculino. 56 anos</p>
        <p>Comorbidades: Hipertensão Arterial Sistêmica, Diabetes</p>
        <p>Alergias:</p>
      </HeaderChart>
      <ContainerContent>
        <div
          style={{
            maxWidth: '447px',
            width: '100%',
            marginBottom: '30px',
          }}
        >
          <Input style={{ maxWidth: '106px' }} label="Label" />
        </div>
        <ContainerParagraphe>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a urna
            vel ex tempus blandit. Curabitur rutrum diam arcu, vel euismod magna
            tincidunt ac. Vestibulum posuere augue eget lorem porttitor pretium.
            Nullam pharetra orci a tortor gravida sollicitudin. In molestie
            tristique massa, non imperdiet nibh. Nunc vel tristique lectus.
            Integer sit amet libero quam.
          </p>
          <p>
            Nunc vestibulum pretium nisl, a mattis leo mattis eu. Nullam
            porttitor pulvinar ex et rhoncus. Morbi rutrum vehicula nibh, ac
            porta augue gravida sed. Vestibulum semper hendrerit nunc at
            vehicula. Etiam eros ex, tincidunt in varius in, tristique nec
            velit. Aenean et ipsum vitae justo mattis elementum vitae at dui.
            Curabitur lobortis tincidunt nulla eget consectetur. Nullam cursus
            iaculis lorem, at interdum nisl blandit at.
          </p>
        </ContainerParagraphe>
        <div
          style={{
            maxWidth: '447px',
            width: '100%',
          }}
        >
          <Input
            style={{ maxWidth: '106px', marginBottom: '23px' }}
            labelPosition="top"
            placeholder="Placeholder"
            label="Label"
            id="placeholder"
          />
          <h2>Lista de Usuários</h2>
        </div>
        <OptionListContainer>
          {options.map((option) => (
            <ListOption
              key={option.id}
              buttonElement={
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.71 2.6325C18.1 3.0225 18.1 3.6525 17.71 4.0425L15.88 5.8725L12.13 2.1225L13.96 0.2925C14.35 -0.0975 14.98 -0.0975 15.37 0.2925L17.71 2.6325ZM0 18.0025V14.2525L11.06 3.1925L14.81 6.9425L3.75 18.0025H0Z"
                    fill="black"
                    fill-opacity="0.54"
                  />
                </svg>
              }
              text={option.text}
              element={<img src={profileIcon} alt="" />}
              buttonOptions={{
                onClick: () => {
                  addModal({
                    content: <ModalForm />,
                    title: 'titulo',
                  });
                },
              }}
            />
          ))}
        </OptionListContainer>
      </ContainerContent>
    </>
  );
};

export default Main;
