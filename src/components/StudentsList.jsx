import Students from "./Students"
import { AnimatePresence, motion } from "framer-motion";
import StudentsContext from "../context/StudentsContext";
import { useContext } from "react";


function StudentsList() {
 const {students, deleteHandler} = useContext(StudentsContext)

  return (
    <div>
      <AnimatePresence>
        {students.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{duration: 0.8}}
            exit={{ opacity: 0 }}
            layout
          >
            <Students
              deleteHandler={deleteHandler}
              key={item.id}
              students={item}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
export default StudentsList