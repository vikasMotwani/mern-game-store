import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import { searchContext } from './context/searchContext';

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  const [searchInput, setSearchInput ] = useState('')

  const searchInfo = {
    searchInput,
    setSearchInput
  }

  return (
    <div className="App">
      <searchContext.Provider value={searchInfo}>
        <BrowserRouter>
          <Header />
          <Main />
        </BrowserRouter>
      </searchContext.Provider>
        <Footer />
    </div>
  );
}

export default App;
