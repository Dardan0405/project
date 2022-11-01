import React from "react";
import { FormattedMessage,  } from 'react-intl'
import { Link } from "react-router-dom";
import './styles/WhyKosovaTraining.scss'
const Why =()=>{
    return(
        <div className="Logos-WhyKs">
            <div className="Logo-Container-WhyKosovaTraining">
                <div className="Icon-Olimpic" ></div>
                <div className="Icon-Half"></div>
                <div className="Icon-Art"></div>
                <div className="Icon-HalfCircle"></div>
                <div className="Icon-Book"></div>
                <div className="Icon-Brush"></div>
                <div className="Icon-2pieceIcon"></div>
                <div className="Icon-Calendar"></div>
            </div>

            <div className="Info-WhyKS">
                <div className="Info-contaier">
                    <h1><FormattedMessage id="why Kosova" defaultMessage='Why Kosova Training'/></h1>
                    <p>
                        <FormattedMessage id="Beacouse" defaultMessage='Kosova Training gives you a wide range of options to advance in
                        your career,switch careers, or archieve personal growth. We offer you easy and secure access to many courses,literatures and other recourses anytime anywhere'/>
                    </p>
                    <div className="About-UsKosovaTraining">
                        <Link to ='/' className="About-Circle">
                            <FormattedMessage id="About" defaultMessage='About us'/>

                        </Link>
                    </div>
                                        
            </div>
    </div>
        </div>

    )
}
export default Why 