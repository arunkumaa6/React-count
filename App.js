import React from 'react';
import { Counter } from './features/counter/Counter';

function App() {

  function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }
  
  const user = {
    firstName: 'Harper',
    lastName: 'Perez'
  };
  
  const element = (
    <h1>
      Hello, {formatName(user)}!
    </h1>
  );
  

  
  return (
    <div>
        <Counter />
        <h2>{element}</h2>        
    </div>
  );
}

export default App;
