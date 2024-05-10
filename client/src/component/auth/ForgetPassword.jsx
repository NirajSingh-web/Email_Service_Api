import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const ForgetPassword = () => {
  const Navigate = useNavigate();
  const [UserData, setUserData] = useState({
    Email: "",
    password: "",
  });
  const handleonchange = (e) => {
    setUserData({ ...UserData, [e.target.name]: e.target.value });
  };
  const Handleonreset = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.put(
        "http://localhost:3000/user//reset/password",
        UserData
      );
      const data = res.data;
      if (data.success) {
        alert(data.msg);
        Navigate("/Email-marketing/user/Login");
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
    <div className="h-[92vh] w-full flex  items-center xl:justify-end justify-center bg-no-repeat bg-cover bg-[url('https://st3.depositphotos.com/1350793/13993/i/450/depositphotos_139939366-stock-photo-young-woman-making-a-mistake.jpg')] min-w-full">
      <div className="me-3 bg-slate-900 p-4 rounded-lg border-2 border-[rgba(250,250,250,0.65)]">
        <div className="text-center mb-4">
          <p className="text-white h4 underline underline-offset-8">
            Forget Password
          </p>
        </div>
        <form
          action=""
          className="flex flex-col gap-3 xl:w-[380px]"
          onSubmit={Handleonreset}
        >
          <div>
            <input
              type="email"
              name="Email"
              value={UserData["Email"]}
              className="form-control rounded-sm"
              placeholder="Email"
              onChange={handleonchange}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              value={UserData["password"]}
              placeholder="Enter New Password"
              className="form-control rounded-sm"
              onChange={handleonchange}
            />
          </div>
          <div>
            <input
              type="submit"
              value={"Reset"}
              className="btn btn-primary w-full rounded-sm"
            />
          </div>
          <div className="text-white flex justify-between">
            <Link to="/Email-marketing/user/SignUp">
              <span className="btn btn-success"> SignUp </span>
            </Link>
            <Link to="/Email-marketing/user/Login">
              <span className="btn btn-info">Login</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
