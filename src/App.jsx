import React from 'react';
import Portfolio5 from './components/Portfolio5';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <Toaster position="top-center" reverseOrder={false} />
      <Portfolio5 />
    </div>
  );
}

export default App;