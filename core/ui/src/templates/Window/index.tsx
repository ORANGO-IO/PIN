import React, { FC, useEffect, useState } from 'react';
import Header from '@core/ui/src/components/Window/components/Header';
import AsideBar from '@core/ui/src/components/Window/components/AsideBar';
import Menu from '@core/ui/src/components/Window/components/Menu';
import Content from '@core/ui/src/components/Window/components/Content';
import ItemNavBar from '@core/ui/src/components/Window/components/AsideBar/components/ItemNavBar';

/* Mocks */
import menu from '@core/ui/src/mocks/menu.json';
import card from '@core/ui/src/mocks/card';
import programs from '@core/ui/src/mocks/programs.json';

import tool from '@core/ui/src/assets/icons/tool.svg';
import Card from '@core/ui/src/components/Card';
import Search from '@core/ui/src/components/Search';
import ContainerWindow from '@core/ui/src/components/Window/components/ContainerWindow';
import GlobalSyles from '@core/ui/src/theme/globalSyles';
import Background from '@core/ui/src/components/Window/components/Background';
import { ContainerSearch } from './styles';
import Main from '@core/ui/src/components/Window/components/Main';

import { Link, Outlet } from 'react-router-dom';

const Window: FC = () => {
  const [userFilter, setUserFilter] = useState('');
  const [typeMenu, setTypeMenu] = useState('normal');
  const [cardFilter, setCardFilter] = useState(card);

  useEffect(() => {
    const newCardFilter = card.filter(
      (card) =>
        card.keywords.includes(userFilter) ||
        card.labelTitle?.includes(userFilter)
    );
    setCardFilter(newCardFilter);
  }, [userFilter]);

  return (
    <>
      <GlobalSyles />
      <Background />
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
                  <Link key={option.id} to={option?.link || '/'}>
                    <ItemNavBar
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
                  </Link>
                ))}
              </div>
            )}

            {typeMenu !== 'normal' && (
              <div style={{ height: '100%' }}>
                <ContainerSearch>
                  <Search
                    inputProps={{
                      value: userFilter,
                      onChange: (e) => setUserFilter(e.target.value),
                    }}
                  />
                </ContainerSearch>
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
            <Outlet />
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

export default Window;
