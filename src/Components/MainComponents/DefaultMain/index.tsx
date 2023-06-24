import BlockProducts from '../BlockProducts'
import Slider from '../Slider'
import { products } from '../ProductsData'

const DefaultMain = () => {
    return (
        <>
            <Slider />
            <BlockProducts
                title={products.pizza.type}
                route={products.pizza.route}
                selected={false}
                products={products.pizza.products}
            />
            <BlockProducts
                title={products.snaks.type}
                route={products.snaks.route}
                selected={false}
                products={products.snaks.products}
            />
            <BlockProducts
                title={products.beverages.type}
                route={products.beverages.route}
                selected={false}
                products={products.beverages.products}
            />
        </>
    )
}
export default DefaultMain
