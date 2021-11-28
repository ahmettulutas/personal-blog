import "./app.css";
import { SignupForm } from "./features/signup/signupForm.js";
import Welcome from "./components/welcome/welcome";
import LoginForm from "./features/login/loginForm.js";
import PostBlog from "./features/postaBlog/postBlog";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/homePage/home.js";
import Header from "./components/header/Header.js";
export default function App() {
  return (
    <div className="app"> 
      <Router >
        <Header />
        <section className="routes">
        <Routes >
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<LoginForm />}/>
          <Route path="/sign-up" element={<SignupForm />} />
          <Route path="/post-blog" element={<PostBlog />}/>
        </Routes>
        </section>
        <h1 className="footer">Footer</h1>
      </Router>
    </div>

  );
}
