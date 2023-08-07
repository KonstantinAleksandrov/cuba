import BlockProducts from '../BlockProducts'
import DefaultMain from '../DefaultMain'
import style from './Main.module.css'
import { products } from '../ProductsData'
import { Routes, Route } from 'react-router-dom'
import { Context } from './context'
import Info from '../Info'
import { IProducts, IfetchProductsError } from '../../../types'
import { fetchProducts } from '../../../api/index'
import { useRequest } from '../../../Hooks/useRequest'

const infoLinks = [
    { link: 'about', text: 'some text about' },
    { link: 'career', text: 'some text career' },
]

const Main = () => {
    const data: IProducts | null | IfetchProductsError = useRequest(fetchProducts)
    console.log(data)

    return (
        <Context.Provider value={data}>
            <main className={style.main}>
                <div className={style.container}>
                    <Routes>
                        <Route path="/" element={<DefaultMain />} />
                        <Route // TODO: loop in products
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
                            path={products.snacks.route}
                            element={
                                <BlockProducts
                                    title={products.snacks.type}
                                    route={products.snacks.route}
                                    selected={true}
                                    products={products.snacks.products}
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
                                    products={products?.beverages?.products}
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
        </Context.Provider>
    )
}
export default Main
