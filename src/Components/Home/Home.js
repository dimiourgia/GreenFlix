import React from "react";
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion';

import './Home.css';

import product1 from '../../product1.png';


const Home = ({addToCartHandler, items}) => {
    return(
    <div className="cardsContainer">
        {items.map(item => 
        <ItemCard 
            image={product1}
            desccription={item.desccription}
            price={item.price}
            shippingStatus={item.shippingStatus}
            addToCartHandler={addToCartHandler}
        >
        </ItemCard>)}        
    </div>
    )
}


const ItemCard = ({image, desccription, price, shippingStatus, addToCartHandler}) => {
    return(
    <motion.div animate={{opacity:1}} initial={{opacity:0}}  className="cardWrapper">
        <div className="itemImageContainer">
            <img src={image} alt='product' />
        </div>

        <div className="itemDetails">
            <div className="itemDescription">
                <p>{desccription}</p>
            </div>
            <div className="itemPrice">{price}</div>
            <div className='itemShippingStatus'>
                <p>{shippingStatus}</p>
            </div>
            <div className='addToCartContainer'>
                <button className="addToCartButton" onClick={addToCartHandler}>Add to Cart</button>
            </div>
        </div>
    </motion.div>
    )
}

export default Home;