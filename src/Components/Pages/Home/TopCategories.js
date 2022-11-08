import React from "react"
import { FormattedMessage  } from 'react-intl'
import './styles/TopCategories.scss'
import Carousel from 'react-elastic-carousel';
import './data'
import { TopCategoriesdata } from "./data"
import { Link } from "react-router-dom"
const breakPoints =[
    {width:1, itemToShow:1},
    {width:500, itemToShow: 2},
    {width:750, itemToShow: 3},
    {width:900, itemToShow: 4},
    {width:1000, itemToShow: 5},
  
    
];
const TopCategories =() =>{
    const carouselRef = React.useRef(null);
    const onNextStart = (currentItem, nextItem
        ) => {
        if (currentItem.index === nextItem.index) {
          carouselRef.current.goTo(0);
        }
    };
    const onPrevStart = (currentItem, nextItem) => {
        if (currentItem.index === nextItem.index) {
          carouselRef.current.goTo('single-slide'.length);
        }
    };
    return(
        <div className='Top-Categories'>
            <div className='TopCategories-Title'>
                <h1><FormattedMessage id='Browse' defaultMessage='Browse Course'
              /><span>  with Top Categories</span></h1>
              </div>
              <Carousel className="slider styled-arrows" 
                breakPoints={breakPoints}
                ref={carouselRef}
                onPrevStart={onPrevStart}
                onNextStart={onNextStart}
                disableArrowsOnEnd={false}
            >
            {TopCategoriesdata.map((props) =>{
              return(
            <div className="Cards-topcategoties">
                    <div className="Icon-Container-Top">
                    <div className="Icon-Top" style={{content: `url(${props.icon})`}}></div>
                    <div className="border-top"  style={{content: `url(${props.color})`}}></div>
                    </div>
                   <Link to={props.to} className="Ttile-Top">
                    <div className="Ttile-Container-Top">{props.title}</div>
                   </Link>
                   <div className="bllock-TopCategories">
                    <div className="Pargraph-Container-top">{props.paragraph}</div>
                   </div>
                   
              
        
            
                </div>
            
              )
            })}
              </Carousel>
              
            
        </div>
    )
}
export default TopCategories