import React from "react";
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion';

import './HomeSkeleton.css';


const items=[1,2,3,4,5,6,7,8,9,10];

const HomeSkeleton = ()=>(
    <div className="sk_cardsContainer">
        {items.map(item => <ItemCard /> )}        
    </div>
)


const ItemCard = () => {
    return(
    <motion.div animate={{scale: [1,.98,1]}} 
                //initial={{scale:0}}  
                transition={{repeat:Infinity, duration:2}}
                className="sk_cardWrapper">
        <div className="sk_itemImageContainer">
        </div>

        <div className="sk_itemDetails">
            <div className="sk_itemDescription">
            </div>
            <div className="sk_itemPrice"></div>
            <div className='sk_itemShippingStatus'>
            </div>
            <div className='sk_addToCartContainer'>
            </div>
        </div>
    </motion.div>
    )
}

export default HomeSkeleton;