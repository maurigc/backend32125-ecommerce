import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import MainContainer from './Containers/MainContainer';
import ProductsContainer from './Containers/ProductsContainer';
import UserProvider from './Context/userProvider';

function App() {

  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainContainer/>}></Route>
          <Route path='/productos' element={<ProductsContainer/>}></Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
