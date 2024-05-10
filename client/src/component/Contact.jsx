import React from "react";
const Contact = () => {
  return (
    <div className="bg-gradient-to-br from-blue-500 to-purple-600  ">
      <div className="h-[92vh] flex justify-center items-center w-full px-4 sm:px-6 pt-9">
        <div className="bg-white shadow-md rounded-lg overflow-hidden md:w-[25%] ">
          <div className="">
            <img
              className="object-cover"
              src="https://media.istockphoto.com/id/1311934969/photo/contact-us.jpg?s=612x612&w=0&k=20&c=_vmYyAX0aFi-sHH8eYS-tLLNfs1ZWXnNB8M7_KWwhgg="
            />
          </div>
          <div className="p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Contact Us
            </h2>
            <div className="flex items-center text-gray-600 mb-4">
              <svg
                className="h-6 w-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                ></path>
              </svg>
              <p className="text-sm">Salem, Tamilnadu 637018</p>
            </div>
            <div className="flex items-center text-gray-600 mb-4">
              <svg
                className="h-6 w-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M22 6.08v-.01a1 1 0 00-.29-.71l-3.5-3.5a1 1 0 00-1.42 0l-2.83 2.83a10 10 0 00-11.31 11.31l2.83-2.83a1 1 0 000-1.42l-3.5-3.5a1 1 0 00-.7-.29h-.01a1 1 0 00-.71.29l-3.5 3.5a1 1 0 000 1.42l2.83 2.83A10 10 0 006.15 20l-2.83 2.83a1 1 0 000 1.42l3.5 3.5a1 1 0 001.42 0l3.5-3.5a10 10 0 0011.31-11.31l-2.83 2.83a1 1 0 00-.29.71v.01a1 1 0 00.29.71l3.5 3.5a1 1 0 001.42 0l2.83-2.83a10 10 0 000-11.31l-2.83 2.83a1 1 0 00-.71.29zM12 14a2 2 0 100-4 2 2 0 000 4z"
                ></path>
              </svg>
              <p className="text-sm">nirajsingh4141@gmail.com</p>
            </div>
            <div className="flex items-center text-gray-600">
              <svg
                className="h-6 w-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 10l4 4m0 0l4-4m-4 4V4"
                ></path>
              </svg>
              <p className="text-sm">6201269225</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
