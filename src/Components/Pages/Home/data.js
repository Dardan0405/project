import { FormattedMessage } from "react-intl";
import Acc from '../../../assets/Home/Top-Categories/Acc.svg'
import Bussineas from '../../../assets/Home/Top-Categories/Bussineas.svg'
import Design from '../../../assets/Home/Top-Categories/Design.svg'
import Dev from '../../../assets/Home/Top-Categories/Dev.svg'
import Game from '../../../assets/Home/Top-Categories/Game.svg'
import Photo from '../../../assets/Home/Top-Categories/Photo.svg'
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
   title:<FormattedMessage id="pHO" defaultMessage="Photo"/>,
   paragraph:<FormattedMessage id="203" defaultMessage="203 Courses"/>,
   color:'#34B4B3'
},
{
    to: '/',
    icon:Game,
    title:<FormattedMessage id="Game" defaultMessage="Game"/>,
    paragraph:<FormattedMessage id="173" defaultMessage="173 Courses"/>,
    color:'#E0474E'
},
{
   to: '/',
   icon:Acc,
   title:<FormattedMessage id="Acc" defaultMessage="Accounting"/>,
   paragraph:<FormattedMessage id="89" defaultMessage="89 Courses"/>,
   color:'#3EB135'
},
]