import BlockProducts from '../BlockProducts'
import DefaultMain from '../DefaultMain'
import style from './Main.module.css'
import { products } from '../ProductsData'
import { Routes, Route } from 'react-router-dom'
import Info from '../Info'

/* import { RouteComponentProps } from 'react-router-dom'; */

const infoLinks = [
    { link: 'about', text: 'some text about' },
    { link: 'career', text: 'some text career' },
]

const Main = () => {
    return (
        <main className={style.main}>
            <div className={style.container}>
                <Routes>
                    <Route path="/" element={<DefaultMain />} />
                    <Route
                        path={products.pizza.route}
                        element={
                            <BlockProducts
                                title={products.pizza.type}
                                route={products.pizza.route}
                                selected={true}
                                products={products.pizza.products}
                            />
                        }
                    />
                    <Route
                        path={products.snaks.route}
                        element={
                            <BlockProducts
                                title={products.snaks.type}
                                route={products.snaks.route}
                                selected={true}
                                products={products.snaks.products}
                            />
                        }
                    />
                    <Route
                        path={products.beverages.route}
                        element={
                            <BlockProducts
                                title={products.beverages.type}
                                route={products.beverages.route}
                                selected={true}
                                products={products.beverages.products}
                            />
                        }
                    />
                    <Route path="/info" element={<Info />}>
                        {infoLinks.map((l) => (
                            <Route
                                key={l.link}
                                path={l.link}
                                element={<div>{l.text}</div>}
                            />
                        ))}
                    </Route>
                </Routes>
            </div>
        </main>
    )
}
export default Main
