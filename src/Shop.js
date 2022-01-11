import { useState, useEffect } from "react";
import GoodsList from "./GoodsList";
import BasketList from "./BasketList";

const Shop = () => {

    const [goods, setGoods] = useState([]);
    const [order, setOrder] = useState([]);
    const [isBasketShow, setBasketShow] = useState(false);
    const [loading, setLoading] = useState(true);




    const addToBasket = (item) => {
        const findIndex = order.findIndex(el => el.id === item.id);
        if (findIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1
            }
            setOrder([...order, newItem]);
        }
        else {
            const newOrder = order.map((el, index) => {
                if (findIndex === index) {
                    return {
                        ...el,
                        quantity: el.quantity + 1
                    }
                }
                return el;
            })
            setOrder(newOrder)
        }
    }


    const removeFromBasket = (id) => {
        const newOrder = order.filter(el => el.id !== id);
        setOrder(newOrder);
    }

    const incQuantity = (id) => {
        const newOrder = order.map(el => {
            if (el.id === id) {
                return {
                    ...el,
                    quantity: el.quantity + 1
                }
            }
            return el;
        })
        setOrder(newOrder);
    }

    const decQuantity = (id) => {
        const newOrder = order.map(el => {
            if (el.id === id) {
                return {
                    ...el,
                    quantity: el.quantity > 0 ? el.quantity - 1 : 0
                }
            }
            return el;
        })
        setOrder(newOrder)
    }


    const handleBasketShow = () => {
        setBasketShow(!isBasketShow);
    }


    useEffect(() => {
        fetch('http://localhost:3000/goods')
            .then(response => response.json())
            .then(json => {
                json && setGoods(json)
            })
    }, [])

    return (
        <div className="Shop">
            <GoodsList goods={goods} addToBasket={addToBasket} />

            <h2 onClick={handleBasketShow}>My Items {order.length}</h2>

            {isBasketShow &&
                <BasketList order={order} removeFromBasket={removeFromBasket} incQuantity={incQuantity} decQuantity={decQuantity} />
            }
        </div>
    )
}


export default Shop;