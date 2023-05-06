import React, {useEffect, useState} from 'react';
import axios from "axios";
import "../styles/styles.css";
import border from "../public/static/img/border.png"
import MenuCard from '../components/MenuCard';
import TakeAwayFeatured from '../components/TakeAway';

const DrinksMenu = () => {
    const [menu, setMenu] = useState();
    const [takeAway, setTakeAway] = useState();

    useEffect(()=>{
        axios.get("https://api.sampleapis.com/coffee/hot")
        .then(response => {
            setMenu(response.data.slice(0,5))
            setTakeAway(response.data.slice(0,3))
        }) 
            
        .catch(err => console.log(err))

    },[])
  return (
    <div className='Container'>
        <div className='Content'>
       <div className='Menu__Title'><span>Drinks</span><span>MENU</span></div>
       <img src={border} alt = "not found" className='center' />
      {
        menu?.map(item => (<MenuCard item = {item} key = {item.id}/>))
       } 
        <img src={border} alt = "not found" className='center' />
      
        <div className="TakeAway__Container">
       {
        takeAway?.map(item => (<TakeAwayFeatured item = {item} key = {item.id}/>))
       }
       </div>
    
       </div>
       </div>
   
  )
}

export default DrinksMenu;