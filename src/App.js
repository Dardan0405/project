import { lazy , Suspense , useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'
import Loading from './Components/Shared/Loading/Loading';
import ScrollonTop from './ScrollonTop';
import './App.scss';
import Aos from 'aos'
import "aos/dist/aos.css";
import {IntlProvider} from 'react-intl'
import { translate } from './translation/translate';
import{useSelector} from 'react-redux'

const Home = lazy  (() => import ('./Pages/Home/Home'));
const Design = lazy (() => import ('./Pages/Design/Design'));
const Login = lazy (() => import ('./Pages/Login/Login'));
const Signiin = lazy (()=> import('./Pages/Signin/Signin'));

function App () {
  const language = useSelector((state) => state.language.language);
  useEffect(() => {
    Aos.init({
      duration: 1250,
      once: true
    })
  },[])
  return(
    <Router>

      <Suspense fallback ={<Loading/>}>
      <IntlProvider locale={language}
          formats={{ number: 'en' }}
          messages={translate[language]}>
          <ScrollonTop/>

          <Routes>
            <Route exact path='/' element = {<Home />}/>
            
            <Route path="/Design"  element ={<Design/>}/>
            <Route path="/Login" element ={<Login/>}/>
            <Route path="/Signin" element ={<Signiin/>}/>
            <Route path='*' element = {<Navigate to ="/" />}/>
          </Routes>
        </IntlProvider>

      </Suspense>
    </Router>
  )
}
 

export default App;
