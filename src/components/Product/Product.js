import React from "react"
import moneyFormat from "../../helpers"

import "./Product.css"

function Product({product, basket, setBasket, total, money}) {
    const basketItem = basket.find(item => item.id === product.id)

    const addBasket = () => {
        const checkBasket = basket.find(item => item.id === product.id)
        //ürün daha önce eklenmiş
        if (checkBasket) {
            checkBasket.amount += 1
            setBasket([...basket.filter(item => item.id !== product.id), checkBasket])
        } else {
            setBasket([...basket, {
                id: product.id,
                amount: 1
            }])
        }
    }

    const removeBasket = () => {
        const checkBasket = basket.find(item => item.id === product.id)
        if (checkBasket) {
            if (checkBasket.amount > 1) {
                checkBasket.amount -= 1
                setBasket([...basket.filter(item => item.id !== product.id), checkBasket])
            } else {
                setBasket(basket.filter(item => item.id !== product.id))
            }
        }
    }

    return (
        <div className="product">
            <img src={product.image} alt="product"/>
            <h6>{product.title}</h6>
            <div className="price">{moneyFormat(product.price)}₺</div>
            <div className="actions">
                <button className="sell-btn" disabled={!basketItem} onClick={removeBasket}>Çıkar</button>
                <span className="amount">{typeof basketItem !== 'undefined' ? basketItem.amount : 0}</span>
                <button className="buy-btn" disabled={total + product.price > money} onClick={addBasket}>Sepete Ekle</button>
            </div>
        </div>
    );
}

export default Product;
