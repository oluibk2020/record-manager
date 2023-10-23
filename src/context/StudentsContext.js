import { createContext, useState } from "react";
import studentsData from "../data/studentsData";

//context
const StudentsContext = createContext();

//provider
export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState(studentsData);


     function deleteHandler(id) {
       if (window.confirm("Are you sure?")) {
         setStudents(
           students.filter((item) => {
             return item.id !== id;
           })
         );
       }
     }

     function studentAdd(obj) {
       setStudents([obj, ...students]);
     }

  const contextObj = {
    students: students,
    deleteHandler,
    studentAdd
  };

  return (
    <StudentsContext.Provider value={contextObj}>
      {children}
    </StudentsContext.Provider>
  );
};

export default StudentsContext