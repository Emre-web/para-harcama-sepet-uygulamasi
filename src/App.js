import React, {useState, useEffect} from "react"
import Header from "./components/Header/Header"
import Product from "./components/Product/Product"
import products from "./products.json"
import Basket from "./components/Basket/Basket"

import "./App.css"

function App() {
    const [money] = useState(100)
    const [basket, setBasket] = useState([])
    const [total, setTotal] = useState(0)

    const resetBasket = () => {
        setBasket([])
    }

    useEffect(() => {
        setTotal(basket.reduce((acc, item) => acc + (item.amount * (products.find(product => product.id === item.id).price)), 0))
    }, [basket])

    return (
        <div className="container">
            <Header total={total} money={money}/>
            <div className="products">
                {products.map(product => <Product key={product.id} basket={basket} setBasket={setBasket} total={total} money={money} product={product}/>)}
            </div>
            {total > 0 && <Basket resetBasket={resetBasket} products={products} basket={basket} total={total}/>}
        </div>
    );
}

export default App;
