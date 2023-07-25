import './common.css'
import Footer from './Components/footerComponetns/footer'
import Header from './Components/Header'
import Main from './Components/MainComponents/Main'
import {useUser} from './Hooks/useUser'



function App() {
  const [userData, error] = useUser()
  console.log(userData)

  if(error) {
    return <>Error: {error}</>
  }

    return (
        <div className="App">
            <div className="wrapper">
                <Header />
                <Main />
                <Footer />
            </div>
        </div>
    )
}

export default App
