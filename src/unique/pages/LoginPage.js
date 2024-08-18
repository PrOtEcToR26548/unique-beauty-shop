import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Link, IconButton, InputAdornment } from '@mui/material';
import { Google as GoogleIcon, Visibility, VisibilityOff } from '@mui/icons-material';
import '../styles/components/LoginStyles.css'; // Adjust the path as needed

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const validateForm = () => {
    setErrorMessage(''); // Reset error message
    // Validate email format
    if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return false;
    }
    // Validate password complexity
    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long.');
      return false;
    }

    return true; // All validations passed
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (validateForm()) {
      // Proceed with login logic (e.g., API call)
      console.log('Login successful:', { email, password });
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      bgcolor="#f5f5f5"
    >
      <Box
        width="100%"
        maxWidth={400}
        p={4}
        bgcolor="white"
        boxShadow={2}
        borderRadius={4}
        textAlign="center"
      >
        <GoogleIcon style={{ fontSize: 60, color: '#4285F4' }} />
        <Typography variant="h5" component="h2" gutterBottom>
          Sign in
        </Typography>
        <Typography variant="body1" color="textSecondary" gutterBottom>
          to continue to your account
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email or Phone"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={handleEmailChange}
          />
          <TextField
            label="Password"
            variant="outlined"
            type={showPassword ? 'text' : 'password'}
            fullWidth
            margin="normal"
            value={password}
            onChange={handlePasswordChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          {errorMessage && (
            <Typography color="error" variant="body2">
              {errorMessage}
            </Typography>
          )}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: '16px' }}
          >
            Next
          </Button>
        </form>
        <Link href="/signup" variant="body2" style={{ display: 'block', marginTop: '16px' }}>
          Create account
        </Link>
      </Box>
    </Box>
  );
};

export default LoginPage;
