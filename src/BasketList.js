
import BasketItem from "./BasketItem";


const BasketList = ({ order, removeFromBasket, incQuantity, decQuantity }) => {

    const total = order.reduce((sum, el) => {
        return sum + el.price * el.quantity;
    }, 0);

    return (
        <div className="BasketList">
            <h2>Cart</h2>
            {
                order.map((el, index) => {
                    return <BasketItem key={index} item={el} removeFromBasket={removeFromBasket} incQuantity={incQuantity} decQuantity={decQuantity} />
                })
            }
            <div className="total">
                Total: ${total.toFixed(2)}
            </div>

        </div>
    )
}

export default BasketList;