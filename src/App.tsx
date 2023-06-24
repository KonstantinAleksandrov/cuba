import './common.css';
import Footer from './Components/footerComponetns/footer';
import Header from './Components/Header'
import Main from './Components/MainComponents/Main';

function App() {
  return (
    <div className="App">
      <div className='wrapper'>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
