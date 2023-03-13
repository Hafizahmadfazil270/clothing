import { HomePage } from './pages/homepage/homepage.component';
import './App.css';
import {Routes,Route, Link} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignAndSignup from './pages/signin-and-signup/signin-and-signup.component';


function App() {
  return (
    <div className="App">
      {/* <HomePage/> */}
      <Header/>
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route exact path='/shop' element={<ShopPage/>}/>
        <Route exact path='/signin' element={<SignAndSignup/>}/>
      </Routes>
    </div>
  );
}

export default App;
