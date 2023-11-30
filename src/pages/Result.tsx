import { Navigate, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Score from "./Score";
import { useSelector } from "react-redux";
import Result_Score from "./Result_Score";
import Student from "./Student";

const Result = (calculateGrade,calculateTotal) => {

  const data = useSelector((state) => state.data)
  console.log(data)

  const Id = data.Id
  const Subj = data.Subj
  const Credit = data.Credit
  const student = data.student
  


  return (
    <div>
      <Result_Score student={student}/>
    </div>
  );
};
export default Result;
