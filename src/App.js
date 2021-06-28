import React from 'react';
import { Switch, Route } from 'react-router-dom'

// Painel do administrador
import Admin from './pages/admin/admin'
import Dashboard from './pages/admin/dashboard'

// Paginas globais
import Home from './pages/global/home'

function App() {
  return (
      
    <Switch>

      <Route exact path='/' component={Home}></Route>
      <Route path='/admin' component={Admin}></Route>   
      <Route pate='/painel-administrador' component={Dashboard}></Route>  

    </Switch>

  );
}

export default App;
