import React from 'react'
import Home from './pages/Home';
import Hader from './components/Hader';
import Fotter from './components/Fotter';
import { createBrowserRouter,Outlet,RouterProvider,ScrollRestoration,} from "react-router-dom";
import Cart from './pages/Cart';
import { productData } from './api/Api';
import Product from './components/Product';

import Login from './pages/Login';
import Doc from './pages/Doc';

const Layout=()=>{
return (<div>
  <Hader/>
  <ScrollRestoration/>
  <Outlet/>

<Fotter/>

</div>)
}
const router = createBrowserRouter([
{path:"/",
  element:<Layout/>,
  children:[
    {
      path:"/",
      element: <Home/>,
      loader:productData,
    },
    {path:"/product/:id",
  element:<Product/>,
},
    {
      
      path:"/cart",
      element: <Cart/>
    },
    {
    path:"/Login",
    element:<Login/>
    },{
          
      path:"/doc",
      element: <Doc/>
    },
  ],

},
]);
function App() {
  return (
    <div className="font-bodyFont">
    <RouterProvider router ={router}/>
  
    </div>
  );
}

export default App;
