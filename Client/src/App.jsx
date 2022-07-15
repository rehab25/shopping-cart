import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

import {Provider} from 'react-redux'
import store from './Store/Store';

import {BrowserRouter, NavLink, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home';
import Orders from './Pages/Orders';

function App() {
  return (
   <BrowserRouter>
    <Provider store={store}>
    <div className="App">      
        <Header /> 
        <div className='d-flex pt-3 bg-grayDDD maintxtColor fw-bold fs-5 px-5'>
          <p className='me-4'><NavLink to='/' className='text-decoration-none'>Home</NavLink></p>
          <p><NavLink to='/orders' className='text-decoration-none'>Order</NavLink></p> 
        </div>
        <div className='pt-5 mt-5'>
          <Routes>
            <Route path='/' element={  <Home /> } exact />
            <Route path='/orders' element={  <Orders /> } exact />
          </Routes>
        </div> 


        <Footer />       
    </div>
    </Provider>
   </BrowserRouter>
  );
}

export default App;
