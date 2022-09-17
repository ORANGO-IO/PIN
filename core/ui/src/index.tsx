import { createRoot } from 'react-dom/client';
import React, { FC, useEffect, useState } from 'react';
import Header from './components/Window/components/Header';
import AsideBar from './components/Window/components/AsideBar';
import Main from './components/Window/components/Main';
import Menu from './components/Window/components/Menu';
import { MultiSelect } from './components/Form/components/MultiSelect';
import Content from './components/Window/components/Content';
import ListOption from './components/ListOption';
import Modal from './components/Window/components/Modal';
import Button from './components/Button';
import Input from './components/Form/components/Input';
import ItemNavBar from './components/Window/components/AsideBar/components/ItemNavBar';

/* Mocks */
import options from './mocks/options.json';
import menu from './mocks/menu.json';
import card from './mocks/card';
import programs from './mocks/programs.json';

import tool from './assets/icons/tool.svg';
import Card from './components/Card';
import Search from './components/Search';
import ContainerWindow from './components/Window/components/ContainerWindow';
import background from './assets/background.jpeg';
import HeaderChart from './components/Window/components/HeaderChart';
import profileIcon from './assets/icons/profile.svg';
import GlobalSyles from './theme/globalSyles';

const App: FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openModalConfirm, setOpenModalConfirm] = useState(false);

  const [userFilter, setUserFilter] = useState('');
  const [typeMenu, setTypeMenu] = useState('normal');
  const [cardFilter, setCardFilter] = useState(card);

  useEffect(() => {
    const newCardFilter = card.filter(
      (card) =>
        card.label.includes(userFilter) ||
        card.contentLabel?.includes(userFilter)
    );
    setCardFilter(newCardFilter);
  }, [userFilter]);

  return (
    <>
      <GlobalSyles />
      <img
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          objectFit: 'cover',
        }}
        src={background}
        alt="fundo"
      />
      <div
        style={{
          position: 'fixed',
          top: '16px',
          right: '16px',
          zIndex: 10,
          background: '#fff',
        }}
      >
        <h4>Tipo de menu</h4>
        <button type="button" onClick={() => setTypeMenu('userSearch')}>
          Com pesquisa de usuario
        </button>
        <button type="button" onClick={() => setTypeMenu('normal')}>
          Menu de rotas
        </button>
      </div>
      <Modal
        headerTitle="Editar Usuário"
        open={openModal}
        goBack={() => setOpenModal(false)}
      >
        <form style={{ minHeight: '359px', width: '435px' }}>
          <div
            style={{
              padding: '14px 18px',
              borderBottom: '1px solid #D5CFC7',
            }}
          >
            <Input
              labelOptions={{ style: { minWidth: '115px' } }}
              label="Nome Completo"
              labelPosition="Left"
            />
          </div>
          <div
            style={{
              padding: '14px 18px',
              borderBottom: '1px solid #D5CFC7',
            }}
          >
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
          </div>
          <div
            style={{
              borderBottom: '1px solid #D5CFC7',
              padding: '14px 18px',
            }}
          >
            <Button type="button" onClick={() => setOpenModalConfirm(true)}>
              Desabilitar Usuário
            </Button>
          </div>
        </form>
      </Modal>
      <Modal
        headerTitle="Alerta"
        open={openModalConfirm}
        goBack={() => setOpenModalConfirm(false)}
      >
        <p style={{ maxWidth: '338px', margin: '21px 56px 17px 41px' }}>
          Tem certeza que deseja desabilitar esse usuário? Depois dessa ação ele
          não mais terá acesso ao sistema!
        </p>
      </Modal>
      <ContainerWindow style={{ height: '80vh' }}>
        <Header
          title="Hospital Maternidade Luís Eduardo Magalhães - Recepção"
          buttonLabel="Sair"
          disabled
        />
        <Content>
          <AsideBar>
            {typeMenu === 'normal' && (
              <div style={{ overflow: 'auto', height: '100%' }}>
                {menu.map((option) => (
                  <ItemNavBar
                    key={option.id}
                    status={option.status as any}
                    text={option.text}
                    element={
                      <svg
                        width="15"
                        height="17"
                        viewBox="0 0 15 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12.6512 12.2558V7.51163C12.6512 4.86279 10.7851 2.64884 8.30233 2.11116V1.18605C8.30233 0.529767 7.77256 0 7.11628 0C6.46 0 5.93023 0.529767 5.93023 1.18605V2.11116C3.44744 2.64884 1.5814 4.86279 1.5814 7.51163V12.2558L0 13.8372V14.6279H14.2326V13.8372L12.6512 12.2558ZM7.11629 17C7.98605 17 8.68978 16.2963 8.68978 15.4265H5.5428C5.5428 16.2963 6.24652 17 7.11629 17ZM7.90698 9.10093H10.2791V7.51163H7.90698V5.13953H6.32558V7.51163H3.95349V9.10093H6.32558V11.473H7.90698V9.10093Z"
                          fill="black"
                        />
                      </svg>
                    }
                  />
                ))}
              </div>
            )}

            {typeMenu !== 'normal' && (
              <div style={{ height: '100%' }}>
                <Search
                  inputProps={{
                    value: userFilter,
                    onChange: (e) => setUserFilter(e.target.value),
                  }}
                  containerProps={{
                    style: { padding: '16px', boxSizing: 'border-box' },
                  }}
                />
                <div style={{ height: '100%', overflow: 'auto' }}>
                  {cardFilter.map((card) => (
                    <Card
                      key={card.id}
                      subtitleTexts={card.content}
                      title={card.title}
                    />
                  ))}
                </div>
              </div>
            )}
          </AsideBar>
          <Main>
            <HeaderChart fixed>
              <p>Filipe Rocha Lopes, Masculino. 56 anos</p>
              <p>Comorbidades: Hipertensão Arterial Sistêmica, Diabetes</p>
              <p>Alergias:</p>
            </HeaderChart>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                flex: 1,
                paddingTop: '60px',
              }}
            >
              <div
                style={{
                  maxWidth: '447px',
                  width: '100%',
                }}
              >
                <Input style={{ maxWidth: '106px' }} label="Label" />
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  maxWidth: '447px',
                  rowGap: '32px',
                  marginBottom: '12px',
                }}
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a
                  urna vel ex tempus blandit. Curabitur rutrum diam arcu, vel
                  euismod magna tincidunt ac. Vestibulum posuere augue eget
                  lorem porttitor pretium. Nullam pharetra orci a tortor gravida
                  sollicitudin. In molestie tristique massa, non imperdiet nibh.
                  Nunc vel tristique lectus. Integer sit amet libero quam.
                </p>
                <p>
                  Nunc vestibulum pretium nisl, a mattis leo mattis eu. Nullam
                  porttitor pulvinar ex et rhoncus. Morbi rutrum vehicula nibh,
                  ac porta augue gravida sed. Vestibulum semper hendrerit nunc
                  at vehicula. Etiam eros ex, tincidunt in varius in, tristique
                  nec velit. Aenean et ipsum vitae justo mattis elementum vitae
                  at dui. Curabitur lobortis tincidunt nulla eget consectetur.
                  Nullam cursus iaculis lorem, at interdum nisl blandit at.
                </p>
              </div>
              <div
                style={{
                  maxWidth: '447px',
                  width: '100%',
                }}
              >
                <Input
                  style={{ maxWidth: '106px', marginBottom: '23px' }}
                  labelPosition="Top"
                  placeholder="Placeholder"
                  label="Label"
                />
                <h2>Lista de Usuários</h2>
              </div>
              <div
                style={{
                  display: 'flex',
                  background: '#fff',
                  width: '100%',
                  maxWidth: '447px',
                  height: '100%',
                  boxSizing: 'border-box',
                  maxHeight: '292px',
                  border: '1px solid #C9C6C3',
                  flexDirection: 'column',
                }}
              >
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
                      onClick: () => setOpenModal(true),
                    }}
                  />
                ))}
              </div>
            </div>
          </Main>
        </Content>
      </ContainerWindow>
      <Menu
        programs={programs.map((program) => ({
          ...program,
          ExplicationProgramIcon: (
            <img src={tool} style={{ width: '100%', objectFit: 'contain' }} />
          ),
          ProgramIcon: <img src={tool} />,
        }))}
      />
    </>
  );
};

const container = document.getElementById('app');
const root = createRoot(container!);
root.render(<App />);
