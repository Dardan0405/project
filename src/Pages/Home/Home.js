import React from "react";
import Navbar from "../../Components/Shared/NavBar/Navbar";
import Next from "../../Components/Pages/Home/Nextlevel";
import Trustedby from "../../Components/Shared/Trustedby/Trustedby";
import Why from "../../Components/Pages/Home/WhyKosovaTraining";
import TopCategories from "../../Components/Pages/Home/TopCategories";
import RecomandedCourse from "../../Components/Shared/RecomandedCourse/RecomandedCourse";
import JoinTeam from "../../Components/Pages/Home/JoinTeam";
const Home =() => { 
    return(
        <div className="Homepage">
            <Navbar />
            <Next/>
            <Trustedby/>
            <Why/>
            <TopCategories/>
            <RecomandedCourse/>
            <JoinTeam/>

       
        </div>
    )
}
export default Home