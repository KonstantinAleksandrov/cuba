import { FC, useEffect } from 'react'
import style from './BlockProducts.module.css'
import ProductCard from '../ProductCard'
import NavLink from '../../Header/Components/NavLink'

interface IBlockProducts {
    title: string
    products: number[]
    selected: boolean
    route: string
}

const BlockProducts: FC<IBlockProducts> = ({
    title,
    selected,
    route,
    products,
}) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className={style.block__Products}>
            {selected ? (
                <div className={style.header__Two}>
                    <div className={style.title}>{title}</div>
                    <div className={style.nav}>
                        <NavLink text="Главная" route="/" />
                        <svg
                            className={style.arrow}
                            fill="white"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                        <div className={style.now__link}>{title}</div>
                    </div>
                </div>
            ) : (
                <div className={style.header}>
                    <NavLink text={title} route={route} className={'bigLink'} />
                    <NavLink
                        text="Перейти в раздел"
                        route={route}
                        className={'buttonLink'}
                    />
                </div>
            )}
            <div className={style.body}>
                {products.map((product) => {
                    return (
                        <ProductCard
                            productData={product}
                            size={
                                title === 'Пицца'
                                    ? {
                                          choosing: true,
                                          minSize: '33 см (1кг)',
                                          maxSize: '41 см (1.5кг)',
                                      }
                                    : {
                                          choosing: false,
                                          minSize: '1л',
                                          maxSize: '',
                                      }
                            }
                            key={product}
                        />
                    )
                })}
            </div>
        </div>
    )
}
export default BlockProducts
