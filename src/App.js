import React from 'react';
import {
  Box,
  Button,
  Heading,
  Text
} from 'rebass'
import { ThemeProvider } from 'emotion-theming'
import theme from '@rebass/preset'
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App boxApp">
        <Box
          sx={{
            p: 4,
            color: 'text',
            bg: 'background',
            fontFamily: 'body',
            fontWeight: 'body',
            lineHeight: 'body',
          }}>
          <Heading variant='display'>Pomo</Heading>
          <Text mb={4}>your pomodoro tracking app</Text>
          <Button mr={3}>
            Start
          </Button>
          <Button variant='secondary'>
            Stop
          </Button>
        </Box>

      </div>
    </ThemeProvider>
  );
}

export default App;
