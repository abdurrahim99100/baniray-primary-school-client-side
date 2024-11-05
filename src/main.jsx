import ReactDOM from 'react-dom/client';
import './index.css';

import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Router/Router.jsx';
import AuthProviders from './Providers/AuthProvider.jsx';
import { HelmetProvider } from 'react-helmet-async';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProviders>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </HelmetProvider>,
  </AuthProviders>
)
