import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FetchEmailServicedata } from "../AsyncThunk/AsyncThunk";
import { setCurrentUser } from "../Slice/fetchuser";
function Login({ setisAuthenticated }) {
  const [Logindata, setLogindata] = useState({
    Email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleonchange = (e) => {
    setLogindata({ ...Logindata, [e.target.name]: e.target.value });
  };
  const Handleonsubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post(
        "http://localhost:3000/user/authenticate",
        Logindata
      );
      const data = res.data;
      if (data.success) {
        alert(data.msg);
        navigate("/home");
        localStorage.setItem("token", data.token);
        dispatch(setCurrentUser(data));
        dispatch(FetchEmailServicedata(data.userdetail._id));
        setisAuthenticated(true);
        
      }
    } catch (e) {
      if (e.response.data.errors) {
        alert(e.response.data.errors.map((e) => `${e["path"]} is Required \n`));
      } else {
        alert(e.response.data);
      }
    }
  };

  return (
    <div className="h-[100vh] w-full flex  items-center xl:justify-end justify-center bg-[url('https://cdn.pixabay.com/photo/2018/03/22/02/37/email-3249062_1280.png')] min-w-full">
      <div className="me-3 bg-slate-900 p-4 rounded-lg border-2 border-[rgba(250,250,250,0.65)]">
        <div className="text-center mb-4">
          <p className="text-white h4 underline underline-offset-8">
            Login Form
          </p>
        </div>
        <form
          action=""
          className="flex flex-col gap-3 xl:w-[380px]"
          onSubmit={Handleonsubmit}
        >
          <div>
            <input
              type="email"
              name="Email"
              value={Logindata["Email"]}
              className="form-control rounded-sm"
              placeholder="Email"
              onChange={handleonchange}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              value={Logindata["password"]}
              placeholder="Password"
              className="form-control rounded-sm"
              onChange={handleonchange}
            />
          </div>
          <div>
            <input
              type="submit"
              value={"Login"}
              className="btn btn-primary w-full rounded-sm"
            />
          </div>
          <div className="text-white flex justify-between">
            <Link to="/Email-marketing/user/SignUp">
              <span className="btn btn-success"> SignUp </span>
            </Link>
            <Link to="/Email-marketing/user/reset/Password">
              <span className="btn btn-info">Forget Password</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
