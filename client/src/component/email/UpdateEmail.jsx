import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { FetchEmailServicedata } from "../AsyncThunk/AsyncThunk";
const UpdateEmaildata = ({ SelectedFormData }) => {
  const dispatch = useDispatch();
  const userdetail = useSelector((state) => state.userdata);
  const [Formdata, SetFormdata] = useState(SelectedFormData);
  const Hanleonchange = (e) => {
    SetFormdata({ ...Formdata, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    SetFormdata(SelectedFormData);
  }, [SelectedFormData.Description]);
  const headers = {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("token"),
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.put(
        "http://localhost:3000/emailService/update/data",
        Formdata,
        { headers }
      );
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
    <div className="modal py-0 " id="myModal">
      <div className="modal-dialog py-0">
        <div className="modal-content py-0">
          <div className="modal-header">
            <h4 className="modal-title">Email Service</h4>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>

          <div className="modal-body">
            <form
              className="  justify-around gap-4  "
              onSubmit={handleSubmit}
            >
              <div >
                <input
                  type="email"
                  name="Receiver"
                  id="email"
                  className="form-control mt-3"
                  placeholder="to"
                  value={Formdata["Receiver"]}
                  onChange={Hanleonchange}
                />
                <input
                  type="text"
                  name="Subject"
                  id="subject"
                  className="form-control mt-3"
                  placeholder="Subject"
                  value={Formdata["Subject"]}
                  onChange={Hanleonchange}
                />
                <textarea
                  name="Description"
                  id=""
                  className="form-control mt-3"
                  placeholder="Enter Your Description"
                  onChange={Hanleonchange}
                  value={Formdata["Description"]}
                ></textarea>
                <button className="btn btn-primary mt-3" type="submit">
                  Update
                </button>
              </div>
            </form>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateEmaildata;
