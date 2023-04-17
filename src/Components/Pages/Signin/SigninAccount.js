import React from "react";
import "./styles/SigninAccount.scss"
import { FormattedMessage } from "react-intl";
import {BsPerson} from "react-icons/bs";
import{TfiEmail} from 'react-icons/tfi'
import{FiUnlock,FiLock} from "react-icons/fi"
import {AiOutlineEyeInvisible} from "react-icons/ai"
import {AiOutlineEye} from "react-icons/ai"
import { useState } from "react";
import { Form, Link } from "react-router-dom";
import {RiFireLine} from  "react-icons/ri"
const SigninAccount = () =>{
    const [Name,SetName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [hidden,setHidden] = useState(true);
    const [privacy, setPrivacy] = useState(false);
    const [news, setNews] = useState(false);
    return(
        <div className="background-signin">
            
            <form className="Sigin-Card">
            <div className="Title-Sigin">
                <h4><FormattedMessage id="CreateAccount" defaultMessage="Create an Account"/></h4>
                <p><FormattedMessage id="ForLearning" defaultMessage="For better learning experience"/></p>
            </div>
            <div className="Imputs-Sigin">
                <div className="Input-Container-Signin">
                  <span><BsPerson/></span>  
                  <FormattedMessage id="Name" defaultMessage="Name">
                   {(msg) => (
               <input
               type= "text"
               id="Name"
               name="Name"
               value={Name}
               onChange ={(e) => SetName(e.target.value)}
               placeholder={msg}

            />
          )}
                  </FormattedMessage>
                </div>
                <div className="Input-Container-Signin">
          <span><TfiEmail/></span>
          <FormattedMessage id="EmailAddres" defaultMessage="Email ">
          {(msg) => (
            <input
            type= "email"
            id="email"
            name="email"
            value={email}
            onChange ={(e) => setEmail(e.target.value)}
            placeholder={msg}

            />
          )}
          </FormattedMessage>       
          </div>
          <div className="Input-Container-Signin">
            <span><FiUnlock/></span>
            <FormattedMessage id="Pass" defaultMessage="Password">
                {(msg) =>(
                    <input 
                    type={hidden ? "password" : "text"}
                    id="password"
                    name="password"
                    value={password}
                    onChange ={(e) => setPassword(e.target.value)}
                    placeholder ={msg}
                    />
                )}
            </FormattedMessage>
            <div className="hidden-login" onClick={() => setHidden(!hidden)}>
                {hidden ? <AiOutlineEyeInvisible/>  : <AiOutlineEye/>}
            </div>
            
          </div>
          <div className="Text-Password-Signin">
              <p><FormattedMessage id="8charackter" defaultMessage="Password  must be 8 or more characters"/></p>
            </div>
            <div className="Input-Container-Signin1">
            <span><FiLock/></span>
            <FormattedMessage id="Pass" defaultMessage=" Confrim Password">
                {(msg) =>(
                    <input 
                    type={hidden ? "password" : "text"}
                    id="password"
                    name="password"
                    value={password}
                    onChange ={(e) => setPassword(e.target.value)}
                    placeholder ={msg}
                    />
                )}
            </FormattedMessage>
            <div className="hidden-login" onClick={() => setHidden(!hidden)}>
                {hidden ? <AiOutlineEyeInvisible/>  : <AiOutlineEye/>}
            </div>
            
</div>
            </div>
       <div className="Check-Box-Signin">
        <label >
          <input type='checkbox' checked={news} onChange={()=>setNews(!news)}/>
          <FormattedMessage id="Sign up " defaultMessage="Sign up for email newsletter (optional)"/>
          <p><FormattedMessage id="keep toucj" defaultMessage="We would like to keep in touch and send you news and offers"/></p>
        </label>
        
      
        <label >
            <input type='checkbox' checked={privacy} onChange={()=>setPrivacy(!privacy)}/>
            <FormattedMessage id="Agree" defaultMessage="I agree to our"/>&nbsp;
            <Link to='/Terms'>
                <FormattedMessage id="Terms" defaultMessage="Terms & Conditions"/>
            </Link>&nbsp;
            <FormattedMessage id="and" defaultMessage="and"/>&nbsp;
            <Link  to='/PrivacyPolice'>
                <FormattedMessage id="Privacy" defaultMessage="Privacy Policy"></FormattedMessage>
            </Link>
        </label>
        </div>
        <div className="Button-Signin">
            <button type='submit'>
                <FormattedMessage id="Create Acc" defaultMessage="Create Account"/>
            </button>
        </div>
        <div className="Already-Signin">
         <FormattedMessage id="Alreadyhave" defaultMessage="Already have an account ?"/>&nbsp;
         <Link to="/Login">
            <FormattedMessage id="Login" defaultMessage="Log in"/>
         </Link>
        </div>
       
        </form>
     <div className="BackgroundImage-SIgnin">
        <div className="Image-BackgroundStudent-Sigin">
            <div className="ImageStudentSignin"></div> 
            
        
        </div>
        
        <div className="Goals-Cards-Signin">
            <div className="Logo-Name-Signin">
                <div className="Logo-Goals"><RiFireLine/></div>
                <p><FormattedMessage id="Manage-Goals" defaultMessage="Manage Goals"/></p>
                </div>
                <div className="Title-Goals-Signin">
                    <h4><FormattedMessage id="Goals" defaultMessage="Goals Status"/></h4>
                </div>
                <div className="Goals-Percent">
                    <p><FormattedMessage id="Goals%" defaultMessage="Goals"/></p>
                    <p className="Percent-Goals"><FormattedMessage id="Percent" defaultMessage="80%"/></p>
                </div>
                <div className="Percent-Boards"></div>
        </div>
        </div>
        </div>
        
        
        
        
    
    )
    }

    export default SigninAccount