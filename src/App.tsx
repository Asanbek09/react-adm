import React from 'react';
import Dashboard from './secure/dashboard/Dashboard';
import Users from './secure/users/Users';
import UserCreate from './secure/users/UserCreate';
import UserEdit from './secure/users/UserEdit';
import Login from './public/Login';
import Roles from './secure/roles/Roles';
import RoleCreate from './secure/roles/RoleCreate';
import RoleEdit from './secure/roles/RoleEdit';
import Products from './secure/products/Products';
import ProductEdit from './secure/products/ProductEdit';
import ProductCreate from './secure/products/ProductCreate';
import Orders from './secure/orders/Orders';
import OrderItems from './secure/orders/OrderItems';
import Profile from './secure/profile/Profile';
import RedirectToDashboard from './secure/components/RedirectToDashboard';
import { BrowserRouter, Route } from 'react-router-dom';
import Register from './public/Register';
import './App.css';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Route path={'/'} exact component={RedirectToDashboard} />
          <Route path={'/dashboard'} component={Dashboard} />
          <Route path={'/profile'} component={Profile} />
          <Route path={'/users'} exact component={Users} />
          <Route path={'/login'} component={Login} />
          <Route path={'/register'} component={Register} />
          <Route path={'/users/create'} component={UserCreate} />
          <Route path={'/users/:id/edit'} component={UserEdit} />
          <Route path={'/roles'} component={Roles} exact />
          <Route path={'/roles/create'} component={RoleCreate} />
          <Route path={'/roles/:id/edit'} component={RoleEdit} />
          <Route path={'/products'} component={Products}  exact/>
          <Route path={'/products/create'} component={ProductCreate} />
          <Route path={'/products/:id/edit'} component={ProductEdit} />
          <Route path={'/orders'} component={Orders} exact />
          <Route path={'/orders/:id'} component={OrderItems} />
        </BrowserRouter>
    </div>
  );
}

export default App;
