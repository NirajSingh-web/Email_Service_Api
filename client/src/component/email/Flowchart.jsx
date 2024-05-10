import { useState, useCallback, useEffect } from "react";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  Background,
  Controls,
} from "reactflow";
import axios from "axios";
import "reactflow/dist/style.css";
import UpdateEmaildata from "./UpdateEmail";
export default function Flowchart() {
  const [emailState, setEmailState] = useState([]);
  let initialNodes = [
    {
      id: "a",
      type: "default",
      style: {
        backgroundColor: "rgb(72,121,171)",
        border: "none",
      },
      position: { x: 200, y: 30 },
      data: {
        label: (
          <div className=" bg-cyan-300 text-white rounded-lg p-3">
            <span>{emailState[0]}</span>
          </div>
        ),
      },
    },
    {
      id: "b",
      type: "default",
      position: { x: 200, y: 130 },
      style: {
        backgroundColor: "rgb(72,121,171)",
        border: "none",
      },
      data: {
        label: (
          <div className=" bg-cyan-300 text-white rounded-lg p-3">
            <span>{emailState[1]}</span>
          </div>
        ),
      },
    },
    {
      id: "c",
      type: "default",
      position: { x: 200, y: 230 },
      style: {
        backgroundColor: "rgb(72,121,171)",
        border: "none",
      },
      data: {
        label: (
          <div className=" bg-cyan-300 text-white rounded-lg p-3">
            <span>{emailState[2]}</span>
          </div>
        ),
      },
    },
    {
      id: "d",
      type: "default",
      position: { x: 200, y: 330 },
      style: {
        backgroundColor: "rgb(72,121,171)",
        border: "none",
      },
      data: {
        label: (
          <div className=" bg-cyan-300 text-white rounded-lg p-3">
            <span>{emailState[3]}</span>
          </div>
        ),
      },
    },
  ];

  const initialEdges = [
    { id: "a->b", type: "custom-edge", source: "a", target: "b" },
    { id: "b->c", type: "custom-edge", source: "b", target: "c" },
    { id: "c->d", type: "custom-edge", source: "c", target: "d" },
  ];
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [receiptEmail, setReceiptEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  // data
  const postData = {
    Receiver: receiptEmail,
    Subject: subject,
    Description: description,
  };
  //  headers
  const headers = {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("token"),
  };
  const handleSubmit = async (e) => {
    setEmailState((prevstate) => [...prevstate, "Start"]);
    try {
      e.preventDefault();
      const res = await axios.post(
        "https://emailserviceapi-production-f0a0.up.railway.app/emailService/add/data",
        postData,
        { headers }
      );
      setEmailState((prevstate) => [...prevstate, "Data Processing"]);
      if (res.data.msg) {
        setEmailState((prevstate) => [...prevstate, "Email Send succesfully"]);
        setEmailState((prevstate) => [...prevstate, "success"]);
        setEmail("");
        setSubject("");
        setDescription("");
      }
    } catch (e) {
      if (e.response.data.errors) {
        alert(e.response.data.errors.map((e) => `${e["path"]} is Required \n`));
      } else {
        alert(e.response.data);
      }
    }
  };

  useEffect(() => {
    setNodes(initialNodes);
    setEdges(initialEdges);
  }, [emailState.length]);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );
  return (
    <>
      <form
        className="  md:flex justify-around gap-4 flex-wrap items-center md:h-[100vh] md:py-3 py-28 md:mx-12 mx-3"
        onSubmit={handleSubmit}
      >
        <div className="md:w-[40%]">
          <input
            type="email"
            name="receipt"
            id="email"
            className="form-control mt-3"
            placeholder="to"
            value={receiptEmail}
            onChange={(e) => (
              setReceiptEmail(e.target.value), setEmailState([])
            )}
          />
          <input
            type="text"
            name="subject"
            id="subject"
            className="form-control mt-3"
            placeholder="Subject"
            value={subject}
            onChange={(e) => (setSubject(e.target.value), setEmailState([]))}
          />
          <textarea
            name=""
            id=""
            className="form-control mt-3"
            placeholder="Enter Your Description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>
          <button className="btn btn-primary mt-3" type="submit">
            Submit
          </button>
        </div>
        <div style={{ height: "70vh" }} className="md:w-[40%] mt-3 mx-8">
          {emailState.length != 0 && (
            <>
              <p className="font-bold">Flow Chart</p>
              <ReactFlow
                nodes={nodes}
                edges={edges}
                onConnect={onConnect}
                onNodesChange={onNodesChange}
                className="rounded-lg mt-3 bg-[rgb(72,121,171)] text-white"
              >
                <Controls />
              </ReactFlow>
            </>
          )}
        </div>
      </form>
     
    </>
  );
}
