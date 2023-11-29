import { Navigate, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Score from "./pages/Score";

const Subject = () => {
  const navigate = useNavigate();
  const [Id, setId] = useState("");
  const [Subj, setSubj] = useState("");
  const [Credit, setCredit] = useState("");
  

  const handleScore= () => {
    navigate("/Score",{
      state:{Id,Subj,Credit},
    })
    
  };
  return (
    <>
      <div>
        <h1 className="text-xl font-bold mb-4 mt-8 text-center">ระบบตัดเกรด</h1>
        <h2 className="text-center">
          บริการระบบตัดเกรดออนไลน์ฟรีเพื่ออำนวยความสะดวกแก่ครูอาจารย์ทุกท่าน
        </h2>
      </div>
      <div className="bg-border text-1xl font-sans text-center m-16 p-8 rounded-lg">
        <p className="font-bold pt-7 text-xl text-black">กรุณาเลือกวิชา</p>
        <div className="bg-white text-1xl font-sans text-center m-8 p-20 rounded-lg">
          <div className="w-full max-w-xs mx-auto">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleScore}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="Id"
                >
                  <p className="mr-40 text-black">รหัสวิชา</p>
                </label>
                <input
                  className=" bg-white border-grayless shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                  id="Id"
                  type="text"
                  placeholder="รหัสวิชา"
                  value={Id}
                  onChange={(e) => setId(e.target.value)}
                  required
                />
              </div>
              <div className="mb-1">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="Subj"
                >
                  <p className="mr-40 text-black">ชื่อวิชา</p>
                </label>
                <input
                  className="bg-white border-grayless shadow appearance-none border  rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="Subj"
                  type="text"
                  placeholder="ชื่อวิชา"
                  value={Subj}
                  onChange={(e) => setSubj(e.target.value)}
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="Credit"
                >
                  <p className="mr-40 text-black">หน่วยกิต</p>
                </label>
                <input
                  className="bg-white border-grayless shadow appearance-none border  rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="Credit"
                  type="text"
                  placeholder="หน่วยกิต"
                  value={Credit}
                  onChange={(e) => setCredit(e.target.value)}
                  required
                />
              </div>

              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="block bg-blue hover:bg-darkblue text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  ตกลง
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subject;
