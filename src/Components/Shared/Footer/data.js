import { FormattedMessage } from "react-intl"
import Facebook from '../../../assets/Shared/Footer/Facebook.svg'
import linkedin from '../../../assets/Shared/Footer/linkedin.svg'
import Play from '../../../assets/Shared/Footer/Play.svg'
import Twitter from '../../../assets/Shared/Footer/Twitter.svg'

export const Footericons =[
    {
        icon:Facebook,
    },
    {
        icon:Twitter,
    },
    {
        icon:linkedin,
    },
    {
        icon:Play,
    }
]


export const FooterData =[
    {
    category:<FormattedMessage id="Company" defaultMessage="Company"/>,
    links:[
        {
            link:<FormattedMessage id="About" defaultMessage="About"/>,
            to:'/'
        },
        {
            link:<FormattedMessage id="What we" defaultMessage="What We Offer"/>,
            to:'/'

        },
        {
            link:<FormattedMessage id="Leader" defaultMessage="Leadership"/>,
            to:'/'
        },
        {
            link:<FormattedMessage id="Career" defaultMessage="Careers"/>,
            to:'/'
        },
        {
            link:<FormattedMessage id="Catalog" defaultMessage="Catalog"/>,
            to:'/'
        },
        {
            link:<FormattedMessage id="Proffesional" defaultMessage="Professional Certificates"/>,
            to:'/'
        },
        {
            link:<FormattedMessage id="Master" defaultMessage="MasterTrack® Certificates"/>,
            to:'/'
        },
        {
            link:<FormattedMessage id="Degrees" defaultMessage="Degrees"/>,
            to:'/'
        },
        {
            link:<FormattedMessage id="For" defaultMessage="For Enterprise"/>,
            to:'/'
        }

    ]
    },
    {
        category: <FormattedMessage id="Course" defaultMessage="Courses"/>,
        links:[
            {
                link:<FormattedMessage id="Busines" defaultMessage="Bussiness"/>,
                to:'/'
            },
            {
                link:<FormattedMessage id="Dev" defaultMessage="Development"/>,
                to:'/'
            },
            {
                link:<FormattedMessage id="Des" defaultMessage="Design"/>,
                to:'/'
            },
            {
                link:<FormattedMessage id="PR" defaultMessage="PR & Marketing"/>,
                to:'/'
            },
            {
                link:<FormattedMessage id="IT" defaultMessage="IT & Software"/>,
                to:'/'
            },
            {
                link:<FormattedMessage id="Photo" defaultMessage="Photography"/>,
                to:'/'

            },
            {
                link:<FormattedMessage id="More" defaultMessage="More"/>,
                to:'/'
            }
        ]
    },
    {
        category:<FormattedMessage id="Reasources" defaultMessage="Resources"/>,
        links:[
            {
                link:<FormattedMessage id="Client" defaultMessage="Client Login"/>,
                to:'/'
            },
            {
                link:<FormattedMessage id="Aff" defaultMessage="Affiliate Login"/>,
                to:'/'
            },
            {
                link:<FormattedMessage id="Merchant" defaultMessage="Merchant Login"/>,
                to:'/'
            },
            {
             link:<FormattedMessage id="E-book" defaultMessage="E-books"/>,
             to:'/'
            },
            {
                link:<FormattedMessage id="Costumer" defaultMessage="Costumer Voice"/>,
                to:'/'
            },
            {
                link:<FormattedMessage id="Sucess" defaultMessage="Sucess Stories"/>,
                to:'/'
            }
        ]
    },
    {
        category:<FormattedMessage id="SUPPORT" defaultMessage="Support"/>,
        links:[
            {
                link:<FormattedMessage id="Help" defaultMessage="Help center"/>,
                to:'/'
            },
            {
                link:<FormattedMessage id="Contact" defaultMessage="Contact us"/>,
                to:'/'
            },
            {
                link:<FormattedMessage id="Priv" defaultMessage="Privacy"/>,
                to:'/'
                
            },
            {
                link:<FormattedMessage id="BLOG" defaultMessage="Blog"/>,
                to:'/'
            },
            {
                link:<FormattedMessage id="Careere" defaultMessage="Carrers"/>,
                to:'/'
            }

        ]
    }
]