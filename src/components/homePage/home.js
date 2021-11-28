import "./home.css"
import AllPosts from '../../features/postaBlog/allPosts.js';
import Welcome from '../welcome/welcome.js'
import { getLoginBool } from '../../features/login/loginSlice';
import { useSelector } from 'react-redux';
import LoginForm from '../../features/login/loginForm.js';
function Home() {
    const loginBool = useSelector(getLoginBool);
    return (
        <div className="home-main-div">
            <Welcome loginBool={loginBool}/>
            <AllPosts />
            {!loginBool.isAuth && <LoginForm />}
        </div>
    )
}
export default Home;