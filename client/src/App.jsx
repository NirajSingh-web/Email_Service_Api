import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./component/Navbar";
import Login from "./component/auth/Login";
import Signup from "./component/auth/Singup";
import PrivateOutlet from "./component/auth/PrivateOutlet";
import Flowchart from "./component/email/Flowchart";
import Hero from "./component/Hero";
import { FetchEmailServicedata } from "./component/AsyncThunk/AsyncThunk";
import { useDispatch, useSelector } from "react-redux";
import Contact from "./component/Contact";
import About from "./component/About";
import Footer from "./component/Footer";
import ForgetPassword from "./component/auth/ForgetPassword";
import { ToastContainer } from "react-toastify";
function App() {
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const Navigate = useNavigate();
  const Location = useLocation();
  const dispatch = useDispatch();
  const userdetail = useSelector((state) => state.userdata);
  useEffect(() => {
    const token = localStorage.getItem("token");
    const path = Location.pathname;
    if (token) {
      if (
        path != "/Email-marketing/user/Login" &&
        path != "/Email-marketing/user/SignUp"
      ) {
        setisAuthenticated(true);
        Navigate(path);
      } else {
        Navigate("/");
      }
      userdetail && dispatch(FetchEmailServicedata(userdetail.currentUser._id));
    } else {
      setisAuthenticated(false);
    }
  }, [isAuthenticated, location.pathname]);
  console.log(isAuthenticated);
  return (
    <>
      <Navbar
        isAuthenticated={isAuthenticated}
        setisAuthenticated={setisAuthenticated}
      />
      <Routes>
        <Route element={<PrivateOutlet isAuthenticated={isAuthenticated} />}>
          <Route element={<Hero />} path="/home" />
          <Route
            element={<Flowchart />}
            path="/Email-marketing/Add/Flowchart"
          />
        </Route>
        <Route
          element={<Signup setisAuthenticated={setisAuthenticated} />}
          path="/Email-marketing/user/SignUp"
        />
        <Route
          element={<Login setisAuthenticated={setisAuthenticated} />}
          path="/Email-marketing/user/Login"
        />
        <Route
          element={<ForgetPassword />}
          path="/Email-marketing/user/reset/Password"
        />
      </Routes>
      <Routes>
        <Route element={<Contact />} path="/Email-marketing/Contact" />
        <Route element={<About />} path="Email-marketing/About" />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
