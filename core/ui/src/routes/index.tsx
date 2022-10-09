import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import Main from '@core/ui/src/pages/Main';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/atendimento',
    element: <div></div>,
  },
]);

export default () => <RouterProvider router={router} />;
