import React from "react"
import { FormattedMessage } from "react-intl";
import Logo1 from '../../../assets/Shared/Tabs/Logo1.png'
import Logo2 from '../../../assets/Shared/Tabs/Logo2.png'
import Logo3 from '../../../assets/Shared/Tabs/Logo3.png'
import Logo4 from '../../../assets/Shared/Tabs/Logo4.png'
import Logo5 from '../../../assets/Shared/Tabs/Logo5.png'
import Logo6 from '../../../assets/Shared/Tabs/Logo6.png'
import Stars from '../../../assets/Shared/Tabs/Stars.svg' 
import  icon from '../../../assets/Shared/Tabs/icon.svg'


export const Recoamded =[
    {
        cls:'tab1',
        contens:[
            {
                col:'col1',
                innercontent:[
                    {
                        
                     image:Logo1,
                     category:<FormattedMessage id="Graphic" defaultMessage="Graphic Design"/>,
                     months:<FormattedMessage id="6" defaultMessage="6 months"/>,
                     title:<FormattedMessage id="How" defaultMessage="How To Become Great Graphic Designer in 6 Months"/>,
                     review:<FormattedMessage id="5" defaultMessage="(5,250)"/>,
                     sutdents:<FormattedMessage id="26" defaultMessage="26,471 Students"/>,
                     link:<FormattedMessage id="Enroll" defaultMessage="Enroll now"/>,
                    icon:Stars,
                    icon1:icon,
                    textplay:<FormattedMessage id="Video" defaultMessage="Preview Course"/>,
                    },
                    {
                        image:Logo4,
                        category:<FormattedMessage id="UX" defaultMessage="UX Design"/>,
                        months:<FormattedMessage id="3" defaultMessage="3 months"/>,
                        title:<FormattedMessage id="THROUGH" defaultMessage="Innovation Through Design: Think, Make, Break, Repeat"/>,
                        review:<FormattedMessage id="37" defaultMessage="(3,750)"/>,
                        sutdents:<FormattedMessage id="21" defaultMessage="21,404 Students"/>,
                        link:<FormattedMessage id="Enroll" defaultMessage="Enroll now"/>,
                        icon:Stars,
                        icon1:icon,
                    textplay:<FormattedMessage id="Video" defaultMessage="Preview Course"/>,
                    }

                ]
            },
            {
                col:'col2',
                innercontent:[
                    {
                        image:Logo2,
                        category:<FormattedMessage id="Type" defaultMessage="Typography"/>,
                        months:<FormattedMessage id="2 m" defaultMessage="2 months"/>,
                        title:<FormattedMessage id="Text" defaultMessage="Textual Elements of Design: Fonts,Typography, and Spacing"/>,
                        review:<FormattedMessage id="2" defaultMessage="(1,250)"/>,
                        sutdents:<FormattedMessage id="28" defaultMessage="28,771 Students"/>,
                        link:<FormattedMessage id="Enroll" defaultMessage="Enroll now"/>,
                        icon:Stars,
                        icon1:icon,
                    textplay:<FormattedMessage id="Video" defaultMessage='Preview Course'/>,
                    },
                    {
                        image:Logo5,
                        category:<FormattedMessage id="ui" defaultMessage="UX/UI Design"/>,
                        months:<FormattedMessage id="6 mont" defaultMessage="6 months"/>,
                        title:<FormattedMessage id="Design" defaultMessage="Design thinking for the greater good: innovation in the social  sector"/>,
                        review:<FormattedMessage id="1250" defaultMessage="(1,250)"/>,
                       sutdents:<FormattedMessage id="14" defaultMessage="14,471 Students"/>,
                       link:<FormattedMessage id="Enroll" defaultMessage="Enroll now"/> ,
                       icon:Stars,
                       icon1:icon,
                    textplay:<FormattedMessage id="Video" defaultMessage="Preview Course"/>,
                    }

                ]

            },
            {
                col:'col3',
                innercontent:[
                    {
                        image:Logo3,
                        category:<FormattedMessage id="Game" defaultMessage="Game Design"/>,
                        months:<FormattedMessage id="6 mo" defaultMessage="6 months"/>,
                        title:<FormattedMessage id="art" defaultMessage="Game Design: Art and Concepts Specialisation"/>,
                        review:<FormattedMessage id="3" defaultMessage="(3,430)"/>,
                        sutdents:<FormattedMessage id="264" defaultMessage="26,471 Students"/>,
                        link:<FormattedMessage id="Enroll" defaultMessage="Enroll now"/>,
                        icon:Stars,
                        icon1:icon,
                    textplay:<FormattedMessage id="Video" defaultMessage="Preview Course"/>,
                    },
                    { 
                        image:Logo6,
                        category:<FormattedMessage id="Graphic 1" defaultMessage="Graphic Design"/>,
                        months:<FormattedMessage id="6 weeks" defaultMessage="6 weeks"/>,
                        title:<FormattedMessage id="Infographic" defaultMessage="Design and Make Infographics(Project-Centered Course)"/>,
                        review:<FormattedMessage id="2848" defaultMessage="(2,848)"/>,
                        sutdents:<FormattedMessage id="32" defaultMessage="32,071 Students"/>,
                        link:<FormattedMessage id="Enroll" defaultMessage="Enroll now"/>,
                        icon:Stars,
                        icon1:icon,
                    textplay:<FormattedMessage id="Video" defaultMessage="Preview Course"/>,
                    }

                ]
            }
        ]
    }
]
