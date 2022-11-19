import React from "react";
import Navbar from "../../Components/Shared/NavBar/Navbar";
import Next from "../../Components/Pages/Home/Nextlevel";
import Trustedby from "../../Components/Shared/Trustedby/Trustedby";
import Why from "../../Components/Pages/Home/WhyKosovaTraining";
import TopCategories from "../../Components/Pages/Home/TopCategories";
import RecomandedCourse from "../../Components/Shared/RecomandedCourse/RecomandedCourse";
import JoinTeam from "../../Components/Pages/Home/JoinTeam";
import Statistics from "../../Components/Pages/Home/Statistics";
import Rightpick from "../../Components/Pages/Home/Rightpick";
import KosovaBusiness from "../../Components/Shared/KosovaTrainingBusiness/KosovaTrainingBusiness";
import WordsfromStudents from "../../Components/Pages/Home/WordsfromKosovaTraining";
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
            <Statistics/>
            <Rightpick/>
            <KosovaBusiness/>
            <WordsfromStudents/>
       
        </div>
    )
}
export default Home