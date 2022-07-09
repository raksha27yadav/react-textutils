import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
import Alert from './components/Alert';
// import{
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// }from "react-router-dom";

function App() {
  const[mode,setMode]=useState('light');
  const[rmode,setRmode]=useState('light');
  const[gmode,setGmode]=useState('light');

  const [bg,setBg]=useState('white');
  const [textcol,setTextcol]=useState('black')
  const [navcol,setNavcol]=useState('light');



  const[alert,setAlert]=useState(null)

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }
  const togglemode=()=>{
    if (mode=='light'){
      setMode('dark')
      setBg('#343a40')
      setTextcol('white')
      setNavcol('dark')
      document.body.style.background='#343a40'
      document.body.style.color='white'
      showAlert("Dark mode has been enabled","success")


    }
    else{
      setMode('light')
      setBg('white')
      setTextcol('black')
      setNavcol('light')
      document.body.style.background='white'
      document.body.style.color='black'
      showAlert("Light mode has been enabled","success")

      
    }

  }





  const rtogglemode=()=>{
    if (rmode=='light'){
      setRmode('danger')
      setBg('#4d0b12')
      setTextcol('white')
      setNavcol('danger')
      document.body.style.background='#4d0b12'
      document.body.style.color='white'
      showAlert("Red mode has been enabled","success")


    }
    else{
      setRmode('light')
      setBg('white')
      setTextcol('black')
      setNavcol('light')
      document.body.style.background='white'
      document.body.style.color='black'
      showAlert("Light mode has been enabled","success")

      
    }

  }




  const gtogglemode=()=>{
    if (gmode=='light'){
      setGmode('success')
      setBg('#031a07')
      setTextcol('white')
      setNavcol('success')
      document.body.style.background='#031a07'
      document.body.style.color='white'
      showAlert("Green mode has been enabled","success")


    }
    else{
      setGmode('light')
      setBg('white')
      setTextcol('black')
      setNavcol('light')
      document.body.style.background='white'
      document.body.style.color='black'
      showAlert("Light mode has been enabled","success")

      
    }

  }




  

  return (
    <>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Navbar title="TextUtils2" about="AboutTextUtils" mode={mode} togglemode={togglemode} rmode={rmode} rtogglemode={rtogglemode} gmode={gmode} gtogglemode={gtogglemode} navcol={navcol}/>
    <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert} rmode={rmode} gmode={gmode}bg={bg} textcol={textcol}/>
      {/* <Router>
      <Navbar title="TextUtils2" about="AboutTextUtils" mode={mode} togglemode={togglemode} rmode={rmode} rtogglemode={rtogglemode} gmode={gmode} gtogglemode={gtogglemode} navcol={navcol}/>

    <Routes>
          <Route exact path="/about"
            element={<About/>}/>
            <Route exact path="/"
            element={<TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert} rmode={rmode} gmode={gmode}bg={bg} textcol={textcol}/>
          }/>
          
    </Routes>
    </Router> */}
    {/* <About/> */}
    </div>
    </>
  );
}

export default App;
