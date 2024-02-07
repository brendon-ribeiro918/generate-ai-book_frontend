
import { MantineProvider, createTheme } from '@mantine/core';
import Layouts from "components/layouts"
import HomePage from "pages/home"
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import 'assets/css/App.css';
import '@mantine/core/styles.css';

function App() {

  // Custom styles
  const theme = createTheme({});

  return (
    <MantineProvider theme={theme}>
      <div className="App">
        <Layouts>
          <HomePage/>
        </Layouts>
      </div>
      <ToastContainer />
    </MantineProvider>
  );
}

export default App;
