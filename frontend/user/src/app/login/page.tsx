'use client';

import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { useAppSelector, useAppDispatch } from '@/lib/hooks'
import  { setUser, logOut, selectUser } from '@/lib/features/auth/authSlice'

import styles from '@/app/ui/login.module.css';

export default function Home() {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleFormSubmit = (event: any) => {
    event.preventDefault();
    const { login, password } = event.target;
    if (password.value == '1') {
      dispatch(setUser({ username: login.value, isLoggedIn: true }));
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Box
       component="form"
       noValidate
       autoComplete="off"
       onSubmit={handleFormSubmit}
      >
        <div className='flex flex-col'>
          <TextField
           required
           id="login"
           label="Username"
           sx={{ mb: 1 }}
          />

          <FormControl
            variant="outlined"
          >
            <InputLabel htmlFor="password">Password</InputLabel>
            <OutlinedInput
              id="password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </div>
      </Box>
    </main>
  );
}
