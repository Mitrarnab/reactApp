
import './App.css';


import React, { useState } from 'react';

import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForms from './components/TextForms';
import Foot from './components/Foot';





function App() {

  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#282828'
      alertChanger('changed to light mode.', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = '#fff'
      alertChanger('changed to dark mode.', 'success');
    }
  }



  const [alert, setAlert] = useState(null);
  const alertChanger = (message, type) => {
    setAlert({
      msg: message,
      typ: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  return (
    <>
      {/* <Router> */}
      <Navbar
        titles="TextFormatting"
        linkName1="About"
        mode={mode}
        toggleMode={toggleMode}

      />
      <Alert alert={alert} />
      < TextForms mode={mode} alertChanger={alertChanger} />


      <Foot mode={mode} />
      {/* <div className="container">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={< TextForms mode={mode} alertChanger={alertChanger} />} />
          </Routes>
        </div> */}


      {/* </Router > */}
    </>
  );
}

export default App