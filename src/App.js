
import './App.css';
import Navbar from './Components/Navbar';
import {useState} from 'react';
import Alert from './Components/Alert';
import TextForm from './Components/TextForm';
import About from './Components/About';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {

  const [style, setStyle] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    });
    setTimeout(()=>{
      setAlert(null)
    },1500);
  }
  const toggleMode = ()=>{
    if (style === 'dark'){
      setStyle('light');
      document.body.style.backgroundColor = "#E1F5FE"
      showAlert('Light mode successfully enabled','success')
    }else{
      setStyle('dark');
      document.body.style.backgroundColor = "#36454F"
      showAlert('Dark mode successfully enabled','success')
    }
  }

  return (
    <>
   
   
      <BrowserRouter>
      <Navbar title="TextUtils" mode={style} toggleMode = {toggleMode}/>
      <Alert alert = {alert}/>
        <Routes>
          <Route path='/about' element={<About mode={style}/>}></Route>
          <Route path='/' element={<TextForm showAlert={showAlert} heading="Enter Text To Procced : " mode={style}/>}></Route>
        </Routes>
      </BrowserRouter>
            
          
    
    </>
  );
}

export default App;
