import React from 'react'
import './Megamenus.scss'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import { Resource } from './data1'


const Resources = () =>{
    return(
   <div className='nav-megamenus resources-menu'>
    <div className='menu-link'>
        <h5><FormattedMessage id='Res' defaultMessage='Resources'/></h5>
        <div className='inner-link'>
            {Resource.map((props) =>{
                return(
                    <Link  to={props.to} className='menu-main-link'>
                        <div className='icons-style'>
                        <div className='iconss' style={{content:`url(${props.icon})`}}></div>
                        <div className='bgg'  style={{content:`url(${props.bg})`}}></div>
                        </div>
                        <div className='bllock'>
                            <h4>{props.title}</h4>
                        </div>
                    </Link>
                )

            }
            )}
        </div>
        
        </div>
        
        
   
   


   </div>
    )
}
export default Resources