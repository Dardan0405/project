import React from "react";
import NavBar from "../../Components/Shared/NavBar/Navbar"
import Footer from "../../Components/Shared/Footer/Footer"
import RecomandedCourse from "../../Components/Shared/RecomandedCourse/RecomandedCourse"
import { FormattedMessage } from "react-intl";
const Design =() =>{
    return(
        <div className="Design-page">
            <NavBar/>
            <div className="A"><FormattedMessage id="1" defaultMessage="2"/></div>
        </div>
    )
}
export default Design