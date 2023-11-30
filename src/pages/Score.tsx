import { Link,Outlet, Navigate, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, Component } from "react";
import { useDispatch,useSelector } from "react-redux";
import Student from "./Student";
import { addStudent } from "../Components/Slice";
import Pagination from "../Components/Pagination";

const Data_Init = [
  {
    id:1,
    page:"",
    Idstu: '',
    Name: "",
    Collect: 0,
    Midterm: 0,
    Final: 0,
    Point: 0,
    Grade: "",
  },
];


const Score = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [student, setStudent] = useState(Data_Init);
  const data = useSelector((state) => state.data)
  const Id = data.Id
  const Subj = data.Subj
  const Credit = data.Credit
  
  const [currentPage, setCurrentPage] = useState(1);

    let totalPage = Math.ceil(student.length/10)

    const handlePage = (newPage) => {
        setCurrentPage(newPage)
    }
    const handleTotalPage = (newPage) => {
        totalPage = newPage
    }

  const changeEachRecord = (Idstu, name, collect, mid, final, id) => {
    //new student
    if (Idstu==null && name == null && collect == null && mid == null && final == null) {
      const ids = student.map((object) => {
        return object.id;
      });
      const lastId = Math.max(...ids) + 1;
      const pageNumber: Number = lastId / 10 + 1;
      setStudent((student) => {
        return [
          ...student,
          { id: lastId, page: pageNumber, Idstu: "",  Name: "", collect: 0, Midterm: 0, Final: 0 },
        ];
      });
    }
    //change Idstu
    else if (Idstu != null) {
      let newStudent = [...student];
      newStudent.find((element) => {
        if (element.id == id) {
          element.Idstu = Idstu;
          return element;
        }
      });
      setStudent(newStudent);
    }
    else if (name != null) {
      let newStudent = [...student];
      newStudent.find((element) => {
        if (element.id == id) {
          element.Name = name;
          return element;
        }
      });
      setStudent(newStudent);
    }
    else if (collect != null) {
      let newStudent = [...student];
      newStudent.find((element) => {
        if (element.id == id) {
          element.Collect = collect;
          return element;
        }
      });
      setStudent(newStudent);
    }
    //change mid
    else if (mid != null) {
      let newStudent = [...student];
      newStudent.find((element) => {
        if (element.id == id) {
          element.Midterm = mid;
          return element;
        }
      });
      setStudent(newStudent);
    }
    //change final
    else if (final != null) {
      let newStudent = [...student];
      newStudent.find((element) => {
        if (element.id == id) {
          element.Final = final;
          return element;
        }
      });
      setStudent(newStudent);
    }
  };

  const calculateTotal = (collect: string,midterm: string, final: string) => {
    const collectValue = parseFloat(collect) || 0;
    const midtermValue = parseFloat(midterm) || 0;
    const finalValue = parseFloat(final) || 0;
    return collectValue + midtermValue + finalValue;
  };

  const calculateGrade = (total: number) => {
    if (total >= 80) {
      return "A";
    } else if (total >= 70) {
      return "B+";
    } else if (total >= 65) {
      return "B";
    } else if (total >= 60) {
      return "C+";
    } else if (total >= 55) {
      return "C";
    } else if (total >= 50) {
      return "D";
    } else {
      return "F";
    }
  };

  const handleResult = () => {
    dispatch(addStudent(student))

  };

  let Components = []
  student.map((record,index)=>{
    Components.push(
      <Student
        // Idtsu={record.Idtsu}
        // Name={record.Name}
        // Midterm={record.Midterm}
        // Final={record.Final}
        // Point={record.Point}
        // Grade={record.Grade}
        student={student}
      />
      
    )
  })
    
  console.log(student)

  return (
    <>

      <div>

        <h1 className="bg-border h-20 text-xl font-bold pl-16 pt-7 mt-10 ml-20 mr-20 rounded-lg text-black text-left">
          {" "}
          บันทึกคะแนน
        </h1>
      </div>
      <Pagination student={student} currentPage={currentPage} totalPage={totalPage} handlePage={handlePage}/>
      <div className="bg-border pl-16 pt-7 mt-10 ml-20 mr-20 rounded-lg">
        <p className="font-bold pt-3 text-2xl text-center text-black">
          วิชา{Subj} หน่วยกิต {Credit}
        </p>
        <p className="text-2xl pt-8 text-center mb-8 text-black">
          ภาคเรียนที่ 2 ปีการศึกษา 2566
        </p>

        <div className="flex items-left justify-left pt-8 pb-8">
              <button
                type="button"
                onClick={()=>{
                  changeEachRecord(null,null,null,null,null,)
                }}
                className="bg-green hover:bg-darkgreen text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline mt-4 mb-4"
              >
                เพิ่มรายชื่อ
              </button>
            </div>

        <div className="max-w-screen-xl mx-auto">
          <form >
            <table className="min-w-full bg-white border border-grayless rounded-lg text-lg ">
              <thead>
                <tr className="bg-grayblue p-8 text-black">
                  <th className="border p-2">ลำดับ</th>
                  <th className="border p-2">รหัสนิสิต</th>
                  <th className="border p-2">ชื่อ-นามสกุล</th>
                  <th className="border p-2">คะแนนทั้งหมด</th>
                  <th className="border p-2">สอบกลางภาค</th>
                  <th className="border p-2">สอบปลายภาค</th>
                  <th className="border p-2">คะแนนรวม</th>
                  <th className="border p-2">ผลการเรียน</th>
                  <th className="border p-2">หมายเหตุ</th>
                </tr>
              </thead>
              <tbody>
                <Student student={student} changeEachRecord={changeEachRecord} calculateGrade={calculateGrade} calculateTotal={calculateTotal} currentPage={currentPage}/>
              </tbody>
            </table>

            <div className="flex items-center justify-center pt-8 pb-8">
              <Link
                // type="button"
                to="/Result" onClick={handleResult}
                className="block bg-blue hover:bg-darkblue text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                rel="noreferrer"
              >
                บันทึก
              </Link>
            </div>
          </form>
        </div>
        <div></div>
        <Outlet/>
      </div>
    </>
  );
};

export default Score;
