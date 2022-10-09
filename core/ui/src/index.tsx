import { createRoot } from 'react-dom/client';
import React from 'react';
import ModalContextProvider from '@core/ui/src/services/modalContext';
import Routes from '@core/ui/src/routes';

const container = document.getElementById('app');
const root = createRoot(container!);
root.render(
  <ModalContextProvider>
    <Routes />
  </ModalContextProvider>
);
