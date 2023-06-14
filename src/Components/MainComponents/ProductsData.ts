interface IProduct {
    type: string
    route: string
    products: number[]
}

interface IProducts {
    pizza: IProduct,
    snaks: IProduct,
    beverages: IProduct
}

export const products :IProducts = {
    pizza: {
        type: 'Пицца',
        route: '/pizza',
        products: [1,2,3,4,5,6,7,8,9,10]
    },
    snaks: {
        type: 'Закуски',
        route: '/snaks',
        products: [1,2,3,4,5,6,7,8,9]
    },
    beverages: {
        type: 'Напитки',
        route: '/beverages',
        products: [1,2,3,4] 
    }
}



/* interface IProductList {
    pizza :  number[],
    snaks :  number[],
    beverages :  number[]
}

export const productList: IProductList = {
    pizza : [1,2,3,4,5,6,7,8,9,10],
    snaks : [1,2,3,4,5,6,7,8,9] ,
    beverages : [1,2,3,4]
} */
