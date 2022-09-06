import { createRoot } from 'react-dom/client'
import React, { FC, useEffect, useState } from 'react'
import Header from './components/Window/components/Header'
import AsideBar from './components/Window/components/AsideBar'
import Main from './components/Window/components/Main'
import Menu from './components/Window/components/Menu'
import { MultiSelect } from './components/Form/components/MultiSelect'
import Content from './components/Window/components/Content'
import ListOption from './components/ListOption'
import Modal from './components/Window/components/Modal'
import Button from './components/Button'
import Input from './components/Form/components/Input'
import ItemNavBar from './components/Window/components/AsideBar/components/ItemNavBar'
import options from './mocks/options.json'
import menu from './mocks/menu.json'
import card from './mocks/card.json'
import programs from './mocks/programs.json'
import tool from './assets/icons/tool.svg'
import Card from './components/Card'
import Search from './components/Search'
import ContainerWindow from './components/Window/components/ContainerWindow'
import background from './assets/background.jpeg'
import Chart from './components/Window/components/Chart'
import Badge from './components/Badge'
import profileIcon from './assets/icons/profile.svg'
import GlobalSyles from './theme/globalSyles'

const App: FC = () => {
  const [openModal, setOpenModal] = useState(false)
  const [userFilter, setUserFilter] = useState('')
  const [typeMenu, setTypeMenu] = useState('normal')
  const [cardFilter, setCardFilter] = useState(card)
  const [usersMenu, setUsersMenu] = useState(false)

  useEffect(() => {
    const newCardFilter = card.filter((card) =>
      card.title.includes(userFilter)
    )
    setCardFilter(newCardFilter)
  }, [userFilter])

  return (
    <>
    <GlobalSyles/>
      <img style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', objectFit: 'cover' }} src={background} alt="fundo"/>
      <div
        style={{
          position: 'fixed',
          top: '16px',
          right: '16px',
          zIndex: 10,
          background: '#fff'
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
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Modal
          open={openModal}
        >
          <div
            style={{
              padding: '14px 18px',
              borderBottom: '1px solid #D5CFC7'
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
              borderBottom: '1px solid #D5CFC7'
            }}
          >
            <MultiSelect
              labelOptions={{ style: { minWidth: '115px' } }}
              label="Permissões"
              labelPosition="Left"
            />
          </div>
          <div
            style={{
              borderBottom: '1px solid #D5CFC7',
              padding: '14px 18px'
            }}
          >
            <Button>Desabilitar Usuário</Button>
          </div>
        </Modal>
        <ContainerWindow style={{ height: '80vh' }}>
          <Header
            title="Hospital Maternidade Luís Eduardo Magalhães - Recepção"
            buttonLabel="Sair"
          />
          <Content>
            <AsideBar>
              {typeMenu === 'normal'
                ? (
                    menu.map((option) => (
                  <ItemNavBar
                    key={option.id}
                    status={option.status as any}
                    onClick={() => setUsersMenu(!usersMenu)}
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
                    ))
                  )
                : (
                <div>
                  <Search
                    inputProps={{
                      value: userFilter,
                      onChange: (e) => setUserFilter(e.target.value)
                    }}
                    containerProps={{
                      style: { padding: '16px', boxSizing: 'border-box' }
                    }}
                  />
                  {cardFilter.map((card) => (
                    <Card
                      key={card.id}
                      subtitleTexts={card.subtitlesTexts}
                      title={
                      <>
                      {card.title}
                      <Badge>
                        INTERNADO
                      </Badge>
                      </>
                    }
                    />
                  ))}
                </div>
                  )}
            </AsideBar>
            <Main
              style={{
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              {
                usersMenu
                  ? <div style={{ height: '100%', width: '100%' }}>
                    <Chart>
                      <p>oi</p>
                    </Chart>
                  </div>

                  : <div
                style={{
                  display: 'flex',
                  background: '#fff',
                  width: '100%',
                  maxWidth: '447px',
                  height: '100%',
                  boxSizing: 'border-box',
                  maxHeight: '292px',
                  border: '1px solid #C9C6C3',
                  flexDirection: 'column'
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
                    element={<img src={profileIcon} alt=""/>}
                    buttonOptions={{
                      onClick: () => setOpenModal(true)
                    }}
                  />
                ))}
              </div>
              }
            </Main>
          </Content>
        </ContainerWindow>
      </div>
        <Menu
          programs={programs.map(program => ({
            ...program,
            ExplicationProgramIcon: (
              <img
                src={tool}
                style={{ width: '100%', objectFit: 'contain' }}
              />
            ),
            ProgramIcon: <img src={tool} />
          }))
          }
        />
    </>
  )
}

const container = document.getElementById('app')
const root = createRoot(container!)
root.render(<App />)
