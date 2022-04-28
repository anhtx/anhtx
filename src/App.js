import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MailInputLayout from './MailInputLayout';
import MailViewPage from './MailViewPage';

class App extends React.Component {
    render(){
        return (
          <Routes>
            <Route path='/' element={<MailInputLayout />} />
            <Route path='/mail-view' element={<MailViewPage />} />
          </Routes>
        );
    }
};

export default App;