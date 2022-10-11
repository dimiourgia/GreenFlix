import React from "react";
import './TopNav.css';
import hanger from '../../images/hanger.svg';
import inactive_hanger from '../../images/inactive_hanger.svg';
import cinema from '../../images/cinema.svg';
import inactive_cinema from '../../images/inactive_cinema.svg';
import music from '../../images/music.svg';
import inactive_music from '../../images/inactive_music.svg';
import arrow from '../../images/arrow.svg';
import inactive_arrow from '../../images/inactive_arrow.svg';
import bone from '../../images/bone.svg';
import inactive_bone from '../../images/inactive_bone.svg';
import fork from '../../images/fork.svg';
import inactive_fork from '../../images/inactive_fork.svg';
import travel from '../../images/travel.svg';
import inactive_travel from '../../images/inactive_travel.svg';
import caution from '../../images/caution.svg';
import inactive_caution from '../../images/inactive_caution.svg';
import bike from '../../images/bike.svg';
import inactive_bike from '../../images/inactive_bike.svg';
import blade from '../../images/blade.svg';
import inactive_blade from '../../images/inactive_blade.svg';
import vintage from '../../images/vintage.svg';
import inactive_vintage from '../../images/inactive_vintage.svg';



const categoryList = [
    {activeIconName: hanger , inactiveIconName: inactive_hanger, caption: 'clothing & shoes'}, 
    {activeIconName: cinema , inactiveIconName: inactive_cinema, caption: 'Entertainment'},
    {activeIconName: music , inactiveIconName: inactive_music, caption: 'Music'},
    {activeIconName: arrow , inactiveIconName: inactive_arrow, caption: 'Sports & Lifestyle'},
    {activeIconName: bone , inactiveIconName: inactive_bone, caption: 'Pets'},
    {activeIconName: fork , inactiveIconName: inactive_fork, caption: 'Kitchen Accesories'},
    {activeIconName: travel , inactiveIconName: inactive_travel, caption: 'Travel Equipment'},
    {activeIconName: caution , inactiveIconName: inactive_caution, caption: 'Electrical Tools'},
    {activeIconName: bike , inactiveIconName: inactive_bike, caption: 'Mother Care'},
    {activeIconName: blade , inactiveIconName: inactive_blade, caption: 'Toys & Entertainment'},
    {activeIconName: vintage , inactiveIconName: inactive_vintage, caption: 'Vintage'}
]


const TopNav = ( { activeCategory, onItemClick } ) =>{

    return(
    <div className="topNavWrapper">
        <div className="topNavContainer">
            {categoryList.map(item => <div key={item.caption}  className="topNavCategoryItem">
                <button className="clickableItem" onClick={()=> {onItemClick(item.caption)}}>
                    <div className="iconContainer">
                        <img src={ (activeCategory===item.caption)? item.activeIconName: item.inactiveIconName } />
                    </div>
                    <div className="captionContainer">
                        <p className={(activeCategory===item.caption)? 'active caption': 'inactive caption'} >{item.caption}</p>
                    </div>
                </button>
            </div> )}
        </div>
    </div>
     );
}

export default TopNav;

