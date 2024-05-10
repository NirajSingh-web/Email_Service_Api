import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FetchEmailServicedata } from "../AsyncThunk/AsyncThunk";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../Slice/fetchuser";
const SignUpData = ({ setisAuthenticated }) => {
  const [SignUpData, setSignUpData] = useState({
    First_Name: "",
    Last_Name: "",
    Email: "",
    password: "",
  });
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const handleonchange = (e) => {
    setSignUpData({ ...SignUpData, [e.target.name]: e.target.value });
  };
  const HandleOnsubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post(
        "http://localhost:3000/user/signup",
        SignUpData
      );
      const data = res.data;
      console.log(data);
      if (data.success) {
        alert(data.msg);
        setisAuthenticated(true);
        Navigate("/home");
        localStorage.setItem("token", data.token);
        dispatch(setCurrentUser(data));
        dispatch(FetchEmailServicedata(data.userdetail._id));
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
    <div className="h-[100vh] w-full flex  items-center xl:justify-end justify-center bg-[url('https://imageio.forbes.com/specials-images/imageserve/608b0554a29cf5f7a76050b2/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds')] bg-no-repeat bg-cover  min-w-full">
      <div className="me-3 bg-slate-900 p-4 rounded-lg border-2 border-[rgba(250,250,250,0.65)]">
        <div className="text-center mb-4">
          <p className="text-white h4 underline underline-offset-8">
            SignUpData Form
          </p>
        </div>
        <form
          action=""
          className="flex flex-col gap-3 xl:w-[380px]"
          onSubmit={HandleOnsubmit}
        >
          <div className="">
            <input
              type="text"
              name="First_Name"
              value={SignUpData["First_Name"]}
              className="form-control rounded-sm"
              placeholder="First Name"
              onChange={handleonchange}
            />
          </div>
          <div>
            <input
              type="text"
              name="Last_Name"
              value={SignUpData["Last_Name"]}
              className="form-control rounded-sm"
              placeholder="Second Name"
              onChange={handleonchange}
            />
          </div>
          <div>
            <input
              type="email"
              name="Email"
              value={SignUpData["Email"]}
              className="form-control rounded-sm"
              placeholder="Email"
              onChange={handleonchange}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              value={SignUpData["password"]}
              placeholder="Password"
              className="form-control rounded-sm"
              onChange={handleonchange}
            />
          </div>
          <div>
            <input
              type="submit"
              value={"SIGN UP"}
              className="btn btn-primary w-full rounded-sm"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpData;
