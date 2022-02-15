import './App.css';
import { Box } from '@material-ui/core';
import Header from './Components/Home/Header';
import Home from './Components/Home/Home';




function App() {
  return (
    <>
      <Header />
      <Box style={{ marginTop: 64 }}>
        <Home />
      </Box>
    </>
  );
}

export default App;
