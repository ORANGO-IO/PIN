import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import Main from '@core/ui/src/pages/Main';
import Window from '../templates/Window';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Window />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
    ],
  },
  {
    path: '/atendimento',
    element: <Window />,
    children: [
      {
        path: '/atendimento',
        element: <div></div>,
      },
    ],
  },
]);

export default () => <RouterProvider router={router} />;
