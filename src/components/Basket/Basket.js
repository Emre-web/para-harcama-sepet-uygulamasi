import React from "react"
import BasketItem from "../BasketItem/BasketItem"
import "./Basket.css"

function Basket({basket, resetBasket, total, products}) {
    return (
        <div className="basket-container">
            <h3>Alışveriş Detayları</h3>
            <ul>
                {basket.map(item => (
                    <BasketItem key={item.id} item={item} product={products.find(p => p.id === item.id)}/>
                ))}
            </ul>
            <div className={"total"}>
                Toplam: {total}₺
            </div>
            <button className="basket-reset-btn" onClick={resetBasket}>Sepeti Sıfırla</button>
        </div>
    )
}

export default Basket;
