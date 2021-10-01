import './App.css';

import { BrowserRouter } from 'react-router-dom';


import Main from './components/Main';
import Head from './components/Head'




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Head />
        <Main/>
      </BrowserRouter>
    </div>

  );
}

export default App;
