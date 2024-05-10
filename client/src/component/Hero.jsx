import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import UpdateEmaildata from "./email/UpdateEmail";
import { useState } from "react";
import axios from "axios";
import { FetchEmailServicedata } from "./AsyncThunk/AsyncThunk";
const Hero = () => {
  const dispatch = useDispatch();
  const userdetail = useSelector((state) => state.userdata);
  const Emailservicedata = useSelector((state) => state.EmailServiceData);
  const { EmailServices } = Emailservicedata;
  const [SelectedFormData, setSelectedFormData] = useState({
    Receiver: "",
    Subject: "",
    Description: "",
  });
  const handleonupdate = (e) => {
    setSelectedFormData(e);
  };
  const handleondelete = async (e) => {
    try {
      const res = await axios.delete(
        `http://localhost:3000/emailService//delete/data${e._id}`
      );
      console.log(res);
      if (res.data) {
        alert(res.data);
        userdetail && dispatch(FetchEmailServicedata(userdetail.currentUser._id));
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
    <div className="relative top-10 bg-[rgb(6,47,68)] p-5 max-sm:p-0 flex justify-between max-sm:justify-center jus w-[100%] flex-wrap gap-9 max-sm:gap-0">
      {Array.isArray(EmailServices) &&
        EmailServices.map((e, i) => (
          <div className="" key={i}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, x: `0%`, y: "0%" }}
              animate={{
                opacity: 1,
                x: window.matchMedia("(max-width:800px)") ? "0%" : "25%",
              }}
              transition={{ duration: 1.5, type: "tween" }}
              style={{
                background: `linear-gradient(to top, #006994, #0E3142, rgb(14, 49, 66), #000000)`,
                width: "320px",
                height: "430px",
                color: "white",
                borderRadius: "10px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                overflow: "hidden",
                margin: "20px",
              }}
              className="border-[rgb(62,96,109)] border-2 card-area"
            >
              <Tilt className="Tilt" options={{ max: 25, scale: 1.05 }}>
                <div className="relative">
                  <div>
                    <div>
                      <img
                        src="https://media.istockphoto.com/id/1401461127/photo/hand-of-businessman-using-smartphone-for-email-with-notification-alert.jpg?s=612x612&w=0&k=20&c=s9nSBMOSkKKaKkUlRfpmfVGKYTfYMixbYPDQsdfk4NQ="
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="absolute w-[100%] bottom-[px] ">
                    <div className="p-[20px]">
                      <div className="flex justify-between ">
                        <p className="font-bold">Receiver</p>
                        <p>{e.Receiver}</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="font-bold">Subject</p>
                        <p className="line-clamp-1">{e.Subject}</p>
                      </div>
                      <div>
                        <p className="font-bold">Description,</p>
                        <p className="ms-2 line-clamp-3">{e.Description}</p>
                      </div>
                    </div>
                    <div className="border-t-2 border-[rgb(62,96,109)] pt-[12px] p-[20px] transition-all card-button">
                      <div className="flex justify-between ">
                        <button
                          className="btn btn-primary"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#myModal"
                          onClick={() => handleonupdate(e)}
                        >
                          Update
                        </button>
                        <button
                          className="btn bg-danger text-white"
                          onClick={() => handleondelete(e)}
                          type="button"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          </div>
        ))}
      <UpdateEmaildata SelectedFormData={SelectedFormData} />
    </div>
  );
};

export default Hero;
