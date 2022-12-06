// import logo from './logo.svg';
import './App.css';
import{Home} from './components/Home'
import{Education} from'./components/Education'
import{Certificate} from'./components/Certificate'
import {Skills} from'./components/Skills'
import {Contacts} from'./components/Contacts'
import {Feedback} from'./components/Feedback'
import{Externalcss} from'./components/Externalcss'
import {Internalcss} from'./components/Internalcss'
import {Inlinecss} from'./components/Inlinecss'


function App() {
  return (


    <div className='container'>
<Home/>
<Education/>
<Certificate/>
<Skills/>
<Contacts/>
<Feedback/>
<Externalcss/>
<Internalcss/>
<Inlinecss/>



    </div>

  );
    
    
  
}

export default App;
