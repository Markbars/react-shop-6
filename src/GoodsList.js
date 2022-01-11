
import GoodsItem from "./GoodsItem";

const GoodsList = ({ goods, addToBasket }) => {


    return (
        <div className="GoodsList">
            {
                goods.map((el, index) => {
                    return <GoodsItem key={index} item={el} addToBasket={addToBasket} />
                })
            }
        </div>
    )
}

export default GoodsList;