import Header from './Header'; 
import Footer from './Footer';
// import Signup from '../pages/signup';

const Layout = ({children})=>{

    return (
        <React.Fragment>
            <Header/>
            {/* <Signup/> */}
            {children}
           
            
            <Footer/>
        </React.Fragment>
    )
}

export default Layout;