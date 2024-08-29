import { ComponentProps, FC } from 'react';
import {
  Box,
  CssBaseline,
} from '@mui/material';
import { MenuDrawer } from './Drawer';


export interface LayoutProps extends ComponentProps<'div'> {}

export const Layout: FC<LayoutProps> = ({ children }) => {
  


  return (
    <Box sx={{ display: 'flex', width: '100vw', height: '100vh', }}>
      <CssBaseline />
      <MenuDrawer />
      {children}
    </Box>
  );
};
