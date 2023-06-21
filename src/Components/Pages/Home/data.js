import { FormattedMessage } from "react-intl";

import Bussineas from '../../../assets/Home/Top-Categories/Bussineas.svg'
import Design from '../../../assets/Home/Top-Categories/Design.svg'
import Dev from '../../../assets/Home/Top-Categories/Dev.svg'
import Game from '../../../assets/Home/Top-Categories/Game.svg'
import Photo from '../../../assets/Home/Top-Categories/Photo.svg'
import iconCard1 from '../../../assets/Home/WordsfromStudents/iconCard1.png'
import Quote1 from '../../../assets/Home/WordsfromStudents/Quote1.svg'
import Quote2 from '../../../assets/Home/WordsfromStudents/Quote2.svg'
import iconCard2 from '../../../assets/Home/WordsfromStudents/iconCard2.png'
import image1 from '../../../assets/Home/OurBlog/image1.png'
import image2 from '../../../assets/Home/OurBlog/image2.png'
import image3 from '../../../assets/Home/OurBlog/image3.png'
import clock from '../../../assets/Home/OurBlog/clock.svg'
import eye from '../../../assets/Home/OurBlog/eye.svg'
import logo1 from '../../../assets/Home/Top-Categories/logo1.svg'
export const TopCategoriesdata =[
{
to: '/',
icon:Bussineas,
title:<FormattedMessage id="buss" defaultMessage="Business"/>,
paragraph:<FormattedMessage id="383" defaultMessage="383 Courses"/>,
color:'#6C5CE7'
},
{
    to: '/',
    icon:Design,
    title:<FormattedMessage id="Desig" defaultMessage="Design"/>,
    paragraph:<FormattedMessage id="587" defaultMessage="587 Courses"/>,
    color:"#2929D6"
},
{
    to: '/',
    icon:Dev,
    title:<FormattedMessage id="DEV" defaultMessage="Development"/>,
    paragraph:<FormattedMessage id="506" defaultMessage="506 Courses"/>,
    color:'#FFBE58'
},
{
   to: '/',
   icon:Photo,
   title:<FormattedMessage id="pHO" defaultMessage="Photography"/>,
   paragraph:<FormattedMessage id="203" defaultMessage="203 Courses"/>,
   color:'#34B4B3'
},
{
    to: '/',
    icon:Game,
    title:<FormattedMessage id="Game" defaultMessage="Gaming"/>,
    paragraph:<FormattedMessage id="173" defaultMessage="173 Courses"/>,
    color:'#E0474E'
},
{
   to: '/',
   icon:logo1,
   title:<FormattedMessage id="Acc" defaultMessage="Accounting"/>,
   paragraph:<FormattedMessage id="89" defaultMessage="89 Courses"/>,
   color:'#3EB135'
},
]

export const dataCards =[
    {
        icon:iconCard1,
        Quote:Quote1,
        Quote2:Quote2,
        Description:<FormattedMessage id = "I studied" defaultMessage="I studied Graphic Design for 6 months at Kosova Training,I have
        learned a lot and im not planning to stop I loved the course, teachers, lectures..."/>,
        infoStudent:<FormattedMessage id="Albana" defaultMessage="Albana Uka"/>,
        status:<FormattedMessage id="ST" defaultMessage= "(Student)" />
    },
    {
        icon:iconCard2,
        Quote:Quote1,
        Quote2:Quote2,
        Description:<FormattedMessage id="Help" defaultMessage="Kosova Training helped me a lot! Not only does my resume looks impressive-
        field with certificates also bring me closer to my career goal."/>,
        infoStudent:<FormattedMessage id="Arian" defaultMessage="Arjan Elezaj"/>,
        status:<FormattedMessage id="S" defaultMessage="(Student)"/>


    },
    {
        icon:iconCard1,
        Quote:Quote1,
        Quote2:Quote2,
        Description:<FormattedMessage id = "I studied" defaultMessage="I studied Graphic Design for 6 months at Kosova Training,I have
        learned a lot and im not planning to stop I loved the course, teachers, lectures..."/>,
        infoStudent:<FormattedMessage id="amina" defaultMessage="Amina Malik"/>,
        status:<FormattedMessage id="ST" defaultMessage= "(Student)" />
    },
    {
        icon:iconCard2,
        Quote:Quote1,
        Quote2:Quote2,
        Description:<FormattedMessage id="Help" defaultMessage="Kosova Training helped me a lot! Not only does my resume looks impressive-
        field with certificates also bring me closer to my career goal."/>,
        infoStudent:<FormattedMessage id="Ashton" defaultMessage="Ashton Smith"/>,
        status:<FormattedMessage id="S" defaultMessage="(Student)"/>
    },
    {
        icon:iconCard1,
        Quote:Quote1,
        Quote2:Quote2,
        Description:<FormattedMessage id = "I studied" defaultMessage="I studied Graphic Design for 6 months at Kosova Training,I have
        learned a lot and im not planning to stop I loved the course, teachers, lectures..."/>,
        infoStudent:<FormattedMessage id="amina" defaultMessage="Amina Malik"/>,
        status:<FormattedMessage id="ST" defaultMessage= "(Student)" />
    },
    {
        icon:iconCard2,
        Quote:Quote1,
        Quote2:Quote2,
        Description:<FormattedMessage id="Help" defaultMessage="Kosova Training helped me a lot! Not only does my resume looks impressive-
        field with certificates also bring me closer to my career goal."/>,
        infoStudent:<FormattedMessage id="Ashton" defaultMessage="Ashton Smith"/>,
        status:<FormattedMessage id="S" defaultMessage="(Student)"/>

}



]

export const DataBlog =[
    {
      image:image1,
      title:<FormattedMessage id="Women"  defaultMessage="Women Are Becoming Climate Leaders Through New Online ..."/>,
      Time:clock,
      date:<FormattedMessage id="22" defaultMessage="March 22,2022"/>,
      icon:eye,
      views:<FormattedMessage id="40" defaultMessage="402,071 Views"/>

    },
    {
        image:image2,
        title:<FormattedMessage id="Trending"  defaultMessage="Trending online courses in business, data science,health..."/>,
        Time:clock,
        date:<FormattedMessage id="18" defaultMessage="March 18,2022"/>,
        icon:eye,
        views:<FormattedMessage id="34" defaultMessage="342,272 Views"/>
    },
    {
        image:image3,
        title:<FormattedMessage id="By"  defaultMessage="By desinging a healthy learning scheudle, Janelle`s on her way..."/>,
        Time:clock,
        date:<FormattedMessage id="12" defaultMessage="March 12 2022"/>,
        icon:eye,
        views:<FormattedMessage id="29" defaultMessage="292,971 Views"/>
    }

]