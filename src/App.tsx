import './common.css';
import Header from './Components/Header'
import Main from './Components/MainComponents/Main';
/* import { Routes, Route, Link } from "react-router-dom";
import Tabs from "./Components/Tabs"; */

/* function Contact() {
  return (
    <div>"my telephone and so on..."</div>
  )
} */

function App() {
  
  return (
    <div className="App">
      <div className='wrapper'>
        <Header/>
        <Main/>
       {/*  <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/tab/*" element={<Tabs tabList={[
            {title: 'About', link:'about', content: "Something about me"},
            {title: 'Contacts', link:'contacts', content: <Contact/>}
          ]}/>} />

          <Route path="*" element={<div>No found</div>} />
        </Routes> */}
      </div>
    </div>
  );
}

export default App;
