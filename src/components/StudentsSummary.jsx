import { useContext } from "react";
import StudentsContext from "../context/StudentsContext";

function StudentsSummary() {

  const {students} = useContext(StudentsContext)

    let totalCount = 0
    for (const student of students) {
       totalCount += student.classRating;
    }

    const avg = (totalCount/students.length).toFixed(2)

  return (
    <div className="container">
        <h4>{students.length} Student Entries</h4>
        <h4>{isNaN(avg)? 0 :avg} Student Average Rating score</h4>
    </div>
  )
}
export default StudentsSummary