import { Navigate, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import Pagination from "../Components/Pagination";

const Result_Score = ({ student }) => {
  const navigate = useNavigate();
  const data = useSelector((state) => state.data);
  console.log(data);

  const Id = data.Id
  const Subj = data.Subj
  const Credit = data.Credit
  const sum = data.sum

  const calculateTotal = (collect: string,midterm: string, final: string) => {
    const collectValue = parseFloat(collect) || 0;
    const midtermValue = parseFloat(midterm) || 0;
    const finalValue = parseFloat(final) || 0;
    return collectValue + midtermValue + finalValue;
  };

  const [currentPage, setCurrentPage] = useState(1);
  let totalPage = Math.ceil(student.length/10)
  const handlePage = (newPage) => {
        setCurrentPage(newPage)
  }
  
  const calculateGrade = (total) => {
    if (total >= 80) {
      return "A";
    } else if (total >= 75) {
      return "B+";
    } else if (total >= 70) {
      return "B";
    } else if (total >= 65) {
      return "C+";
    } else if (total >= 60) {
      return "C";
    } else if (total >= 55) {
      return "D+";
    } else if(total >=50) {
      return "D";
    }else {
      return "F";
    }
  };

  

  let gpa:number = 0
  let totalStudent:number = student.length
    const getNumOfGrade = (grade:string) => {
        if(grade=='A'){
            return 4
        }else if(grade=='B+'){
            return 3.5
        }else if(grade=='B'){
            return 3
        }else if(grade=='C+'){
            return 2.5
        }else if(grade=='C'){
            return 2
        }else if(grade=='D+'){
            return 1.5
        }else if(grade=='D'){
            return 1
        }else if(grade=='F'){
            return 0
        }
    }

    student.map((item)=>{
      console.log(item.Grade)
        gpa = getNumOfGrade(item.Grade) + gpa
    })

    console.log(gpa)
    console.log(totalStudent)


  let Components = [];
  student.map((item, index) => {
    Components.push(
      // <div className="max-w-screen-xl mx-auto text-center">
        <form>
          <table className=" min-w-full bg-white border border-gray-300 rounded-lg text-lg justify-around">
            <thead>
            <tr className=" text-black">
              <th className="border p-2">
                  <h1>{item.id}</h1>
              </th>
              <th className="border p-2">
                  <h1>{item.Idstu}</h1>
              </th>
              <th className="border p-2">
                  <h1>{item.Name}</h1>
              </th>
              <th className="border p-2">
                  <h1>{item.Collect}</h1>
              </th>
              <th className="border p-2">
                  <h1>{item.Midterm}</h1>
              </th>
              <th className="border p-2">
                  <h1>{item.Final}</h1>
              </th>
              <th className="border p-2">
                  <h1>
                    {item.Midterm && item.Final && item.Collect
                      ? calculateTotal(item.Midterm, item.Final, item.Collect)
                      : ""}</h1>
              </th>
              <th className="border p-2">
                  <h1>
                      {item.Midterm && item.Final && item.Collect
                      ? calculateGrade(calculateTotal(item.Midterm, item.Final, item.Collect))
                      : ""}
                      </h1>
              </th>
              <th className="border p-2">
                  <h1>--</h1>
              </th>
              </tr>
        </thead>
      
      </table>
      </form>
      // </div>
    );
  });

  const handleBackToSubject = () => {
    navigate("/Subject");
  };

  return (
    <>
    <Pagination
        student={student}
        currentPage={currentPage}
        totalPage={totalPage}
        handlePage={handlePage}
      />
    <div className="bg-border  pl-16 pt-7 mt-10 ml-20 mr-20 rounded-lg text-black text-left">
      <p className="pt-3 text-xl ">ปีการศึกษา 2566</p>
      <p className=" text-xl  pt-2   ">
        รหัสวิชา {Id} วิชา {Subj}
      </p>
      <p className=" text-xl  pt-2 mb-8 pb-3">สถานะ : บันทึกเรียบร้อยแล้ว</p>

      <div className="flex items-center justify-end pt-8 pb-5 mr-60 ">
        <button className="block bg-white hover:bg-darkgray text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z"
            />
          </svg>
        </button>
      </div>

      <div className="max-w-screen-xl mx-auto text-center">
        <form>
          <table className=" min-w-full bg-white border border-gray-300 rounded-lg text-lg">
            <thead>
              <tr className="bg-grayblue p-2 text-black">
                <th className="border p-2">ลำดับ</th>
                <th className="border p-2">รหัสนิสิต</th>
                <th className="border p-2">ชื่อ-นามสกุล</th>
                <th className="border p-2">คะแนนเก็บ</th>
                <th className="border p-2">สอบกลางภาค</th>
                <th className="border p-2">สอบปลายภาค</th>
                <th className="border p-2">คะแนนรวม</th>
                <th className="border p-2">ผลการเรียน</th>
                <th className="border p-2">หมายเหตุ</th>
              </tr>
            </thead>
          </table>
          {Components}
          <div className="pt-3 text-1xl text-black text-center font-bold text-xl">
            <h1>เกรดเฉลี่ย GPA ของรายวิชาคือ {gpa/totalStudent}</h1>
              
          </div>
        </form>
        <div className="flex items-center justify-center pt-8 pb-8">
          <button
            onClick={handleBackToSubject}
            className="block bg-white hover:bg-darkgray text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            กลับ
          </button>
        </div>
      </div>
    </div>
    </>
  );
};
export default Result_Score;
