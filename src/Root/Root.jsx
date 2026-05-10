
import { Outlet } from 'react-router';
import Header from '../assets/component/header/Header';
import Footer from '../Footer';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;