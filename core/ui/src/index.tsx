import { createRoot } from 'react-dom/client'
import React, { FC, useState } from 'react'
import Header from './components/Window/Header'
import AsideBar from './components/Window/AsideBar'
import Main from './components/Window/Main'
import Menu from './components/Window/Menu'
import { MultiSelect } from './components/Form/MultiSelect'
import Content from './components/Window/Content'
import ListOption from './components/ListOption'
import Modal from './components/Window/Modal'
import Button from './components/Button'
import Input from './components/Form/Input'
import ButtonConfirm from './components/ButtonConfirm'
import OptionBar from './components/Window/AsideBar/components/OptionBar'
import options from './mocks/options.json'
import menu from './mocks/menu.json'
import tool from './assets/icons/tool.svg'
import loja from './assets/icons/loja.svg'

const App: FC = () => {
  const [openModal, setOpenModal] = useState(false)
  const [typeMenu, setTypeMenu] = useState('normal')

  return (
    <div>
      <Modal open={openModal} modalBackgroundClick={() => setOpenModal(false)}>
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
            title="teste"
            buttonLabel='Cancelar'
            rightComponent={<ButtonConfirm type="button" onClick={() => setOpenModal(false)}>Confirmar</ButtonConfirm>}
            buttonClick={() => setOpenModal(false)}
          />
          <Content style={{ background: '#fff' }}>
            <Main style={{ background: '#fff' }}>
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
            </Main>
          </Content>
        </div>
      </Modal>
      <div style={{ display: 'flex', flexDirection: 'column', height: '80vh' }}>
        <Header title="teste" buttonLabel='buttonLabel' />
        <Content>
          <AsideBar>
            {menu.map((option, index) => (
                <OptionBar
                key={option.id}
                status={index % 2 === 0 ? 'Normal' : 'Active'}
                text={option.text}
                element={
                  <svg
                    width="15"
                    height="16"
                    viewBox="0 0 15 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  ></svg>
                }
                />
            ))}
          </AsideBar>
          <Main
            style={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
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
                flexDirection: 'column'
              }}
            >
              {options.map(option => (

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
                  element={
                    <svg
                      width="27"
                      height="32"
                      viewBox="0 0 27 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.7"
                        d="M26.8915 27.5181C26.8915 28.7067 25.4749 29.8467 22.9533 30.6873C20.4317 31.5278 17.0118 32 13.4457 32C9.87971 32 6.45973 31.5278 3.93817 30.6873C1.4166 29.8467 0 28.7067 0 27.5181C0 26.3294 1.4166 25.1894 3.93817 24.3489C6.45973 23.5083 9.87971 23.0361 13.4457 23.0361C17.0118 23.0361 20.4317 23.5083 22.9533 24.3489C25.4749 25.1894 26.8915 26.3294 26.8915 27.5181Z"
                        fill="url(#paint0_radial_179_218)"
                      />
                      <path
                        d="M10.0847 12.2048C10.4285 13.8308 10.6204 15.0608 10.3415 16.6868C8.16725 18.4907 2.60645 19.3012 2.61466 21.1687L1.86768 26.7711C1.86768 28.6276 7.05147 30.1325 13.446 30.1325C19.8405 30.1325 25.0243 28.6276 25.0243 26.7711L24.2773 21.1687C24.2684 19.5704 18.6749 18.5542 16.5273 16.6868C16.3439 15.1776 16.4899 13.714 16.8074 12.2048H10.0845H10.0847Z"
                        fill="url(#paint1_radial_179_218)"
                        stroke="url(#paint2_linear_179_218)"
                      />
                      <path
                        d="M10.9483 12.9518C11.1759 14.2145 11.3299 15.3956 11.0884 16.8034C11.0569 16.9887 10.9569 17.1553 10.8083 17.2703C9.52211 18.3374 7.56231 18.9542 5.92954 19.6046C5.11316 19.9298 4.38634 20.2544 3.92201 20.5617C3.45768 20.869 3.36134 21.0737 3.36177 21.1686C3.36371 21.1997 3.36371 21.2309 3.36177 21.262L2.61478 26.771C2.61478 26.7733 2.6147 26.792 2.61478 26.7944C2.61889 26.9127 2.72689 27.1477 3.19837 27.4713C3.6793 27.8014 4.46399 28.1385 5.46264 28.4284C7.45993 29.0082 10.3076 29.3854 13.4464 29.3854C16.5853 29.3854 19.4326 29.0082 21.4303 28.4284C22.4289 28.1384 23.2136 27.8014 23.6945 27.4713C24.166 27.1477 24.274 26.9127 24.2781 26.7944V26.771L23.5311 21.262C23.5292 21.2309 23.5292 21.1997 23.5311 21.1686C23.5312 21.187 23.5429 21.1707 23.4611 21.0752C23.3793 20.9798 23.2113 20.8519 22.9709 20.7018C22.4901 20.4015 21.7416 20.0612 20.9167 19.7213C19.2668 19.0415 17.3039 18.3478 16.0379 17.2469C15.898 17.128 15.8066 16.9619 15.7812 16.7801C15.6229 15.4779 15.7382 14.2099 15.9446 12.9518H10.9491L10.9483 12.9518Z"
                        stroke="url(#paint3_linear_179_218)"
                      />
                      <path
                        d="M13.4457 1C10.3516 1 7.84326 3.34106 7.84326 6.22892C7.86751 7.29763 7.95872 8.56729 8.59025 11.4578C8.96374 12.5783 12.2952 15.5663 12.3252 15.9398C13.0495 16.3133 14.1927 16.3133 14.9396 15.9398C14.9396 15.5663 17.9276 12.5783 18.3011 11.4578C19.0118 8.45367 19.01 7.3494 19.0481 6.22892C19.0481 3.34106 16.5398 1 13.4457 1Z"
                        fill="url(#paint4_radial_179_218)"
                        stroke="url(#paint5_linear_179_218)"
                      />
                      <path
                        opacity="0.3"
                        d="M6.72282 29.1614C4.95821 27.6808 5.79961 24.3935 5.97583 22.2892C5.22884 23.7831 5.22884 28.2651 3.73486 28.2651C4.75271 28.6076 5.78878 28.9865 6.72282 29.1614Z"
                        fill="url(#paint6_linear_179_218)"
                      />
                      <path
                        opacity="0.3"
                        d="M20.1685 29.1614C21.9239 27.8589 21.0325 24.3166 20.9154 22.2892C21.6624 23.7831 21.6624 28.2651 23.1564 28.2651C22.1386 28.6076 21.1025 28.9865 20.1685 29.1614Z"
                        fill="url(#paint7_linear_179_218)"
                      />
                      <path
                        opacity="0.2"
                        d="M9.94385 17.0602C10.4565 18.3636 11.8254 19.3012 13.4454 19.3012C15.0653 19.3012 16.4342 18.3636 16.9469 17.0602H9.94385Z"
                        fill="url(#paint8_radial_179_218)"
                      />
                      <path
                        opacity="0.7"
                        d="M13.4452 1.74854C10.7337 1.74854 8.60515 3.75652 8.59134 6.19886C8.59145 6.20358 8.59123 6.21759 8.59134 6.22228C8.61522 7.25206 8.70872 8.45692 9.31824 11.2582C9.3487 11.3306 9.56943 11.6951 9.90445 12.1014C10.2501 12.5206 10.6847 12.9963 11.1238 13.4599C11.5629 13.9236 12.0072 14.3837 12.3431 14.7482C12.5111 14.9305 12.6472 15.0913 12.7652 15.2401C12.7758 15.2536 12.7783 15.2736 12.7886 15.287C13.2237 15.4578 13.9816 15.4597 14.4535 15.287C14.5587 15.1343 14.6787 14.9551 14.8287 14.7717C15.1286 14.4047 15.512 13.9713 15.9073 13.5068C16.3025 13.0423 16.7168 12.5458 17.0328 12.1248C17.3332 11.7248 17.5262 11.3928 17.5721 11.2816C17.5746 11.2712 17.5696 11.2686 17.5721 11.2582C18.2643 8.32808 18.2611 7.35144 18.299 6.22228C18.299 6.21436 18.2991 6.20676 18.299 6.19886C18.2853 3.75652 16.1567 1.74854 13.4452 1.74854H13.4452Z"
                        stroke="url(#paint9_linear_179_218)"
                        stroke-width="1.00395"
                      />
                      <defs>
                        <radialGradient
                          id="paint0_radial_179_218"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(13.4457 27.5182) scale(13.4457 4.48189)"
                        >
                          <stop />
                          <stop offset="1" stop-opacity="0" />
                        </radialGradient>
                        <radialGradient
                          id="paint1_radial_179_218"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(9.71124 20.0481) scale(15.6867 4.46125)"
                        >
                          <stop stop-color="#F5F5F5" />
                          <stop offset="1" stop-color="#D2D2D2" />
                        </radialGradient>
                        <linearGradient
                          id="paint2_linear_179_218"
                          x1="13.4462"
                          y1="15.6298"
                          x2="13.4462"
                          y2="30.506"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#BDBDBD" />
                          <stop offset="1" stop-color="#8C8C8C" />
                        </linearGradient>
                        <linearGradient
                          id="paint3_linear_179_218"
                          x1="12.6335"
                          y1="7.62505"
                          x2="12.6993"
                          y2="29.7591"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="white" />
                          <stop offset="1" stop-color="white" stop-opacity="0" />
                        </linearGradient>
                        <radialGradient
                          id="paint4_radial_179_218"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(10.7889 4.95197) rotate(-4.62126) scale(9.83365 9.5021)"
                        >
                          <stop stop-color="#F5F5F5" />
                          <stop offset="1" stop-color="#D2D2D2" />
                        </radialGradient>
                        <linearGradient
                          id="paint5_linear_179_218"
                          x1="13.4457"
                          y1="0.626506"
                          x2="13.4457"
                          y2="30.2662"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#BDBDBD" />
                          <stop offset="1" stop-color="#8C8C8C" />
                        </linearGradient>
                        <linearGradient
                          id="paint6_linear_179_218"
                          x1="7.4698"
                          y1="26.0241"
                          x2="3.73486"
                          y2="24.8573"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop />
                          <stop offset="1" stop-opacity="0" />
                        </linearGradient>
                        <linearGradient
                          id="paint7_linear_179_218"
                          x1="19.4215"
                          y1="26.0241"
                          x2="23.1564"
                          y2="25.7253"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop />
                          <stop offset="1" stop-opacity="0" />
                        </linearGradient>
                        <radialGradient
                          id="paint8_radial_179_218"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(13.4465 19.3015) scale(5.3503 1.61374)"
                        >
                          <stop />
                          <stop offset="1" stop-opacity="0" />
                        </radialGradient>
                        <linearGradient
                          id="paint9_linear_179_218"
                          x1="13.4452"
                          y1="-0.867391"
                          x2="13.4452"
                          y2="17.8078"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="white" />
                          <stop offset="1" stop-color="white" stop-opacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  }
                  buttonOptions={{
                    onClick: () => setOpenModal(true)
                  }}
                />
              ))}
            </div>
          </Main>
        </Content>
      </div>
      <Menu
        programs={[
          {
            key: 0,
            ExplicationProgramIcon: <img src={tool} style={{ width: '100%', objectFit: 'contain' }}/>,
            ProgramIcon: <img src={tool}/>,
            programText: 'o321312312312312312i',
            TitleExplication: 'titulo',
            ExplicationProgramText: 'Explicação'
          },
          {
            key: 1,
            ExplicationProgramIcon: <img src={loja} style={{ width: '100%', objectFit: 'contain' }}/>,
            ProgramIcon: <img src={loja}/>,
            programText: 'oi2',
            TitleExplication: 'titulo2',
            ExplicationProgramText: 'Explicação2'
          },
          {
            key: 2,
            ExplicationProgramIcon: <img src={tool} style={{ width: '100%', objectFit: 'contain' }}/>,
            ProgramIcon: <img src={tool}/>,
            programText: 'oi',
            TitleExplication: 'titulo',
            ExplicationProgramText: 'Explicação'
          }
        ]}
      />
    </div>
  )
}

const container = document.getElementById('app')
const root = createRoot(container!)
root.render(<App />)
