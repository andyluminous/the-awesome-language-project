import React, { useState } from 'react';
import {
  BrowserRouter,
  createBrowserRouter,
  RouteObject,
  RouterProvider,
  useRoutes,
} from 'react-router-dom';
import { StyledEngineProvider, ThemeProvider } from '@mui/material';

import { AuthProvider } from '@/state/auth.provider';
import { WSProvider } from '@/state/ws.provider';
import { Layout } from '@/components/Layout';
import Login from '@/pages/Login';
import CreateQuest from '@/pages/CreateQuest';
import ViewQuests from '@/pages/ViewQuests';
import theme from '@/theme';
import { CreateQuestProvider } from './state/createQuest.provider';

// import { useWSContext } from './state/ws.context';
// import { useAuthContext } from './state/auth.context';

// interface DataItem {
//   value: number;
//   timestamp: number;
// }

const App: React.FC = () => {
  const [count, setCount] = useState(0);
  // const [history, setHistory] = useState<DataItem[]>([]);

  // useEffect(() => {
  //   if (authToken) {
  //     const socket = new WebSocket(`ws://localhost:8080?token=${authToken}`);

  //     socket.onmessage = function(event) {
  //       console.log('Received data from the server:', event.data);
  //       setHistory((history) => ([...history, { value: parseInt(event.data), timestamp: Date.now() }]));
  //     }
  //     connectWebSocket(authToken);
  //     localStorage.setItem('auth_token', authToken);
  //   } else {
  //     closeWebSocket();
  //   }
  // }, [authToken])

  // useEffect(() => {
  //   console.log('WS', isReady, value)
  //   if (isReady && value) {
  //     setHistory([...history.slice(-9), { value: parseInt(value), timestamp: Date.now() }])
  //   }
  // }, [isReady, value])

  const router: RouteObject[] = [
    {
      path: '/',
      element: <div className='card'>Hello!</div>,
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/quests',
      children: [
        {
          path: '',
          element: <ViewQuests />,
        },
        {
          path: 'create',
          element: <CreateQuest />,
        }
      ]
    }
  ];

  const outlet = useRoutes(router);

  return (
    <AuthProvider>
      <WSProvider>
        <ThemeProvider theme={theme}>
          <CreateQuestProvider>
            <Layout>
              { outlet }
            </Layout>
          </CreateQuestProvider>
        </ThemeProvider>
      </WSProvider>
    </AuthProvider>
  )
}

export default App
