import React from "react";
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion';
import './Home.css';


const Home = ({items}) => {
    return(
    <div className="cardsContainer">
        {items.map(item => 
        <ItemCard 
            key={item.id}
            image={`./db_images/${item.image_path}`}
            title={item.title}
            year={item.year}
            tags={item.tags}
        >
        </ItemCard>)}        
    </div>
    )
}


const ItemCard = ({title, year, image, tags }) => {
    return(
    <motion.div animate={{opacity:1}} initial={{opacity:0}}  className="cardWrapper">
        <div className="itemImageContainer">
            <img src={image} alt={title+year} />
        </div>
        <div className="title">
            <p><b>{title}</b></p>
        </div>
        <div className="title">
            <p><b>Release Year:</b> {year}</p>
        </div>
        <div className="title">
            <p><b>Tags:</b>{tags.map(tag=>` ${tag} `)}</p>
        </div>
    </motion.div>
    )
}

export default Home;