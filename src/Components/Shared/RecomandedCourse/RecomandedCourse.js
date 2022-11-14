import React from "react"
import { FormattedMessage  } from 'react-intl'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { Recoamded } from "./data";
import './RecomandedCourse.scss'
import Carousel from 'react-elastic-carousel';
import { Link } from "react-router-dom"
const breakPoints =[
    {width:1, itemsToShow:1},
    {width:550, itemsToShow: 2},
    {width:750, itemsToShow: 3},
    {width:950, itemsToShow: 4},
    {width:1050, itemsToShow: 5},
    {width:1100,itemsToShow: 6},
    {width:1200,itemsToShow: 7},
    {width:1300, itemsToShow: 8}

  
    
];
const  RecomandedCourse=() =>{
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
        <div className="Recomaded-Coruse-Container">
            <h1><FormattedMessage id="Recomanded" defaultMessage= "Recomanded"/>
            <span> Courses</span></h1>
           
          
                
                
                
                
                <Tabs className ="Tab-Reomanded">
                    
                    <Carousel className="slider styled-arrows" 
                breakPoints={breakPoints}
                ref={carouselRef}
                onPrevStart={onPrevStart}
                onNextStart={onNextStart}
                disableArrowsOnEnd={false}
                >
                    <TabList>
                        <Tab><FormattedMessage id="al" defaultMessage="All"/></Tab>
                        <Tab><FormattedMessage id="Design" defaultMessage="Design"/></Tab>
                        <Tab><FormattedMessage id="Dev" defaultMessage="Development"/></Tab>
                        <Tab><FormattedMessage id="Busi" defaultMessage="Business"/></Tab>
                        <Tab><FormattedMessage id="IT" defaultMessage="IT & Software"/></Tab>
                        <Tab><FormattedMessage id="Photo" defaultMessage="Phtography"/></Tab>
                        <Tab><FormattedMessage id="Market" defaultMessage="Marketing"/></Tab>
                        <Tab><FormattedMessage id="Finance" defaultMessage="Finance & Accounting"/></Tab>
                    </TabList>
                    </Carousel>
                  
                    <div className="Tabs-Containers">
                     {Recoamded.map((props)=> {
                        return(
                            <TabPanel>
                            {props.contens.map((i)=>{
                                return(
                                    <div className={`col ${i.col}`}>
                                        {i.innercontent.map((a) => {
                                            return(
                                                <div className="inner-cotentRec">
                                                    <div className="Image-Rec">
                                                    <div className="image-containerRec" style={{content: `url(${a.image})`}} ></div>
                                                    <div className="Recomanded-Play">
                                                    <div className="Play-Rec"style={{content: `url(${a.icon1})`}} ></div>
                                                    <p>{a.textplay}</p>
                                                   </div> 
                                                    </div>
                                                    
                                                    
                                                    <div className="Pargraph-monthsRec">
                                                        <p>{a.category}</p>
                                                        
                                                            <div className="Circle-Recomanded">
                                                                <p>{a.months}</p>
                                                            </div>
                                                    
                                                    </div>
                                                    <div className="Title-Recomanded">
                                                        <h4>{a.title}</h4>
                                                    </div>
                                                    <div className="StsrRev-Students">
                                                        <div className="Icon-Rec"style={{content: `url(${a.icon})`}} ></div>
                                                        <p>{a.review}</p>
                                                        <p className="Students-REC">{a.sutdents}</p>
                                                    </div>
                                                    <div className="Enrollnow-Rec">
                                                        <Link>{a.link}</Link>
                                                    </div>
                                                    
                                                    </div>
                                                  
                                                    
                                                
                                            )
                                        })}
                                    </div>
                                )
                            }
                            )}
                            </TabPanel>
                            
                            
                          
                            
                        )
                        

                    })}
                    </div>

                    </Tabs>
                    <div className="Link-RecomandedL">
                    <Link>Load More</Link>
                     </div>
                    </div>
                                
       
        
        
    )
   
}
export default RecomandedCourse