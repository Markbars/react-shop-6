


const GoodsItem = ({ item, addToBasket }) => {


    return (
        <div className="GoodsItem">
            <img src={item.image} />

            <div>
                <h3>{item.title}</h3>
                <h2>${item.price}</h2>
            </div>
            <button onClick={() => addToBasket(item)} >+ Add</button>
        </div>
    )
}

export default GoodsItem;