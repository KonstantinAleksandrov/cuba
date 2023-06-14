import BlockProducts from '../BlockProducts'
import DefaultMain from '../DefaultMain';
import style from './Main.module.css'
import { products } from '../ProductsData';
import { Routes, Route} from "react-router-dom";
import Info from '../Info';


/* import { RouteComponentProps } from 'react-router-dom'; */

const Main = () => {
    
    return(
        <main className={style.main}>
            <div className={style.container}>
                <Routes>
                    <Route path='/' element={<DefaultMain/>}></Route>
                    <Route path={products.pizza.route} element={<BlockProducts title={products.pizza.type} route={products.pizza.route} selected={true} products={products.pizza.products}/>}></Route>
                    <Route path={products.snaks.route} element={<BlockProducts title={products.snaks.type} route={products.snaks.route} selected={true} products={products.snaks.products}/>}></Route>
                    <Route path={products.beverages.route} element={<BlockProducts title={products.beverages.type} route={products.beverages.route} selected={true} products={products.beverages.products}/>}></Route>
                    {/* <Route path='/info' render={(props) =><Info {...props} />}></Route> */}
                </Routes>
            </div>
        </main>
    )
}
export default Main