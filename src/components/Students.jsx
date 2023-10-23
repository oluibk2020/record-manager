import Card from "./shared/Card";
import { AiFillCloseCircle } from "react-icons/ai";
import MainButton from "./shared/MainButton";
import { useContext } from "react";
import StudentsContext from "../context/StudentsContext";

function Students({ students }) {
  const { deleteHandler } = useContext(StudentsContext);
  return (
    <Card>
      <div className="small-container">
        <div className="text">{students.fullName}</div>
        <div className="box">{students.classRating}</div>
        <MainButton onClick={() => deleteHandler(students.id)}>
          <AiFillCloseCircle size={15} color="red" />
          Delete
        </MainButton>
      </div>
    </Card>
  );
}
export default Students;
