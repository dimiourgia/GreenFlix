import React from "react";
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion';

import './HomeSkeleton.css';


const items=[1,2,3,4,5,6,7,8,9,10];

const HomeSkeleton = ()=>(
    <div className="sk_cardsContainer">
        {items.map(item => <ItemCard key={item} /> )}        
    </div>
)


const ItemCard = () => {
    return(
    <motion.div animate={{scale: [1,.98,1]}}  
                transition={{repeat:Infinity, duration:2}}
                className="sk_cardWrapper">
        <div className="sk_itemImageContainer">
        </div>

        <div className="sk_itemDetails">
            <div className="sk_itemTitle">
            </div>
            <div className="sk_itemYear"></div>
            <div className='sk_itemTags'>
            </div>
        </div>
    </motion.div>
    )
}

export default HomeSkeleton;