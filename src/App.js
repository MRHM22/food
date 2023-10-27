
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import { Navbar } from './food/components/Navbar';
import { AppRouter } from './router/AppRouter';
import { Provider } from 'react-redux';
import {store } from './store';

function App() {

  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
