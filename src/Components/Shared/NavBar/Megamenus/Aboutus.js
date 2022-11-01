import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import './Megamenus.scss'
import React from 'react'
import { AboutUs } from './data1'
import{BsFillPlayFill} from 'react-icons/bs'

const Aboutus =()=>{
    return(
        <div className='nav-megamenuss Aboutus-menu'>
         <div className='menu-linkk'>
             <h5><FormattedMessage id='A' defaultMessage='About'/></h5>
             <div className='inner-linkk'>
                 {AboutUs.map((props) =>{
                     return(
                         <Link  to={props.to} className='menuu-main-link'>
                             <div className='icons-stylee'>
                             <div className='icconss' style={{content:`url(${props.icon})`}}></div>
                             <div className='bbgg'  style={{content:`url(${props.bg})`}}></div>
                             </div>
                             <div className='blloock'>
                                 <h4>{props.title}</h4>
                             </div>
                         </Link>
                     )
     
                 }
                 )}
             </div>
         </div>
         <div className='Linee-Resources'>
            <div className='Reources-line'></div>
    </div>

    <div className='Get-started'>
        <h5><FormattedMessage id='Get' defaultMessage='Get Started'/></h5>
        <div className='Video'>
            <h4><FormattedMessage id='Play' defaultMessage='Play intro video'/></h4>
            <div className='Circle'>
                <div className='Triangle'><BsFillPlayFill/></div>
            </div>
            
            
        
            </div>
            </div>



        </div>
         )
     }

export  default Aboutus