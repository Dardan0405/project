import React from 'react'
import { FormattedMessage } from 'react-intl'
import logo1 from '../../../assets/Shared/Trusted/logo1.svg'
import logo2 from '../../../assets/Shared/Trusted/logo2.svg'
import logo3 from '../../../assets/Shared/Trusted/logo3.svg'
import logo4 from '../../../assets/Shared/Trusted/logo4.svg'
import logo5 from '../../../assets/Shared/Trusted/logo5.svg'
import './Trustedby.scss'
 const  Trustedby =() =>{
    return(
        <div className='Trusted-by-manycomapnies'>
            <div className='Line-row'>
            <h4 className='Trusted-title'><FormattedMessage id='Trusted' defaultMessage='Trusted by many comapnies'/>
            </h4>
            </div>
            <div className='Logo-Trustedby'>
                <div className='Logo-Container'>
                <div className='Logo-comapnies logo-row1'style={{content:`url(${logo1})`}} >  </div>
                <div className='Logo-comapnies logo-row2' style={{content:`url(${logo2})`}} ></div>
                <div className='Logo-comapnies logo-row3'style={{content:`url(${logo3})`}} ></div>
                <div className='Logo-comapnies logo-row4'style={{content:`url(${logo4})`}}  ></div>
                <div className='Logo-comapnies logo-row5'style={{content:`url(${logo5})`}}  ></div>
                </div>
            </div>
        </div>
    )
 }
 export default Trustedby