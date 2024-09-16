import { useState } from 'react';
import './App.css';
import AppNav from './components/AppNav';
import AppRoutes from './routes/AppRoutes';

const App = () => {

  const [user, setUser]= useState(JSON.parse(localStorage.getItem('user')));

  return (
    <div className="App">
      <AppNav />
      <AppRoutes user={user} setUser={setUser}/>
    </div>
  );
}

export default App;
