import './common.css';
import Footer from './Components/footerComponetns/footer';
import Header from './Components/Header'
import Main from './Components/MainComponents/Main';
import Modal from './Components/Modal'
import { useState } from 'react'
import ProductCard from './Components/MainComponents/ProductCard';

interface ImodalOpen{
  opened: boolean,

}

function App() {
  const [modalOpen,setModalOpen] = useState<boolean>(false)

  return (
    <div className="App">
      <div className='wrapper'>
        <Header/>
        <Main openModal={setModalOpen}/>
        <Footer/>
        {modalOpen && <Modal openModal={setModalOpen}><ProductCard productData={1} size={{choosing: true, minSize : '33 см (1кг)',maxSize : '41 см (1.5кг)'}}openModal = {setModalOpen}/></Modal>}
      </div>
    </div>
  );
}

export default App;
