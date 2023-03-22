import React ,{useState} from "react";
import {  Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import {IoIosArrowUp} from 'react-icons/io'
import Video from "./Video.js";
import { IoIosArrowDown } from "react-icons/io";
import {BsPlayCircle} from 'react-icons/bs'
;
import {BiBookOpen} from "react-icons/bi";
import './styles/SideButton.scss'


const Sidebutton =() =>{
    const [click,setClick] = useState (false);
    const [inclick,setInClick] = useState(true);
    const [clickVideo,setclickVideo] = useState(false);
    return(
        <div className="Button-Side">
            <div className="Desciption-Button">
                
            <button className="Module1 module"  onClick={() => setClick(!click)}><h4 className="Module1-Button"><FormattedMessage id="Modul1" defaultMessage='Module 1'/></h4>
            <div className="Icon-Side1">
            {click? <IoIosArrowDown/>: <IoIosArrowUp />}
            </div>
            </button>
            {click &&  <div className="Inner-button">
                <Link  to='/Design' className="Link-Inner1" onClick={() => setclickVideo(!clickVideo)}>
                    <div className="Video-WelcomeIcons">
                        <BsPlayCircle/>
                    </div>
                    <div className="Container-Side">
                        <span>
                            <FormattedMessage id="Video" defaultMessage='Video:'/>
                        </span>
                        <p>
                            <FormattedMessage id="Welcome-Video" defaultMessage='Welcome-Video'/>
                        </p>
                    </div>
                    {clickVideo && <div className="Video-sidebar">
                    <Video/>
                        </div>}
                    
                </Link>
                <Link to='/Design' className="Link-Inner1">
                    <div className="book" >
                        <BiBookOpen/>

                    </div>
                    <div className="Container-Side ">
                        <span>
                            <FormattedMessage id="Reading" defaultMessage='Reading:'/>
                        </span>
                        <p>
                            <FormattedMessage id="Ux Design" defaultMessage='What is Ux Design?'/>
                        </p>

                    </div>

                </Link>
                <Link to='/Design' className="Link-Inner1">
                   
                <div className="book"  >
                    <BiBookOpen/>

                </div>
                <div className="Container-Side ">
                    <span>
                        <FormattedMessage id="Reading" defaultMessage='Reading:'/>
                    </span>
                    <p>
                        <FormattedMessage id="Design Thinking" defaultMessage='Design Thinking Proc...'/>
                    </p>
                </div>

                </Link>
                <Link to='/Design' className="Link-Inner1">
                <div className="Video-WelcomeIcons">
                        <BsPlayCircle/>
                    </div>
                    <div className="Container-Side">
                        <span>
                            <FormattedMessage id="Video" defaultMessage='Video:'/>
                        </span>
                        <p>
                            <FormattedMessage id="UserExperience" defaultMessage='User Experience Introd...'/>
                        </p>
                    </div>
                </Link>
                </div>}
            
            <div className="Button-Side">
            <button className="Module1"  onClick={() => setInClick(!inclick)}><h4 className="Module1-Button"><FormattedMessage id="Modul1" defaultMessage='Module 2'/></h4>
            <div className="Icon-Side1">
                <IoIosArrowUp/>
            </div>
            </button>
            
            {inclick &&  <div className="Inner-button">
                </div>}

        </div>
        <div className="Button-Side">
            <button className="Module1"  onClick={() => setInClick(!inclick)}><h4 className="Module1-Button"><FormattedMessage id="Modul1" defaultMessage='Module 3'/></h4>
            <div className="Icon-Side1">
                <IoIosArrowUp/>
            </div>
            </button>
            
            {inclick &&  <div className="Inner-button">
               
                </div>}

        </div>
        <div className="Button-Side">
            <button className="Module1"  onClick={() => setInClick(!inclick)}><h4 className="Module1-Button"><FormattedMessage id="Modul1" defaultMessage='Module 4'/></h4>
            <div className="Icon-Side1">
                <IoIosArrowUp/>
            </div>
            </button>
            
            {inclick &&  <div className="Inner-button">
                </div>}

        </div>
        <div className="Button-Side">
            <button className="Module1"  onClick={() => setInClick(!inclick)}><h4 className="Module1-Button"><FormattedMessage id="Modul1" defaultMessage='Module 5'/></h4>
            <div className="Icon-Side1">
                <IoIosArrowUp/>
            </div>
            </button>
            
            {inclick &&  <div className="Inner-button">
                </div>}

        </div>
        <div className="Button-Side">
            <button className="Module1"  onClick={() => setInClick(!inclick)}><h4 className="Module1-Button"><FormattedMessage id="Modul1" defaultMessage='Module 6'/></h4>
            <div className="Icon-Side1">
                <IoIosArrowUp/>
            </div>
            </button>
            
            {inclick &&  <div className="Inner-button">
                </div>}

        </div>
        <div className="Button-Side">
            <button className="Module1"  onClick={() => setInClick(!inclick)}><h4 className="Module1-Button"><FormattedMessage id="Modul1" defaultMessage='Module 7'/></h4>
            <div className="Icon-Side1">
                <IoIosArrowUp/>
            </div>
            </button>
            
            {inclick &&  <div className="Inner-button">
                </div>}

        </div>
        <div className="Button-Side">
            <button className="Module1 module8"  onClick={() => setInClick(!inclick)}><h4 className="Module1-Button"><FormattedMessage id="Modul1" defaultMessage='Module 8'/></h4>
            <div className="Icon-Side1">
                <IoIosArrowUp/>
            </div>
            </button>
            
            {inclick &&  <div className="Inner-button">
                </div>}
                </div>


        </div>
        </div>
    )

}
export default Sidebutton