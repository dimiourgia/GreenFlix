import React from "react";
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion';
import './Home.css';


const Home = ({items}) => {
    console.log(items);
    return(
    <div className="cardsContainer">
        {items.map(item => 
        <ItemCard 
            key={item.id}
            image={`./db_images/${item.image_path}`}
            title={item.title}
            year={item.year}
        >
        </ItemCard>)}        
    </div>
    )
}


const ItemCard = ({title, year, image }) => {
    console.log("image path is"+image);
    return(
    <motion.div animate={{opacity:1}} initial={{opacity:0}}  className="cardWrapper">
        <div className="itemImageContainer">
            <img src={image} alt={title+year} />
        </div>
    </motion.div>
    )
}

export default Home;