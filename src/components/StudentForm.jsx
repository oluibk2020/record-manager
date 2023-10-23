import { useState } from "react";
import Card from "./shared/Card";
import MainButton from "./shared/MainButton";
import RatingSelector from "./RatingSelector";
import { useContext } from "react";
import StudentsContext from "../context/StudentsContext";
import { v4 } from "uuid";


function StudentForm() {
  const [text, setText] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [valMessage, setValMessage] = useState("");
  const [classRating, setClassRating] = useState();

  const { studentAdd} = useContext(StudentsContext)


  const textHandler = (e) => {
    setText(e.target.value);

    if (text === "") {
      setIsDisabled(true);
      setValMessage(null);
    } else if (text !== "" && text.trim().length <= 15) {
      setIsDisabled(true);
      setValMessage("Character is less than 15");
    } else {
      setIsDisabled(false);
      setValMessage(null);
    }
  }

  function formSubmitHandler(e) {
    e.preventDefault()
    const obj = {
      fullName: text,
      classRating: classRating,
      id: v4()
    }

    studentAdd(obj)
    setText("")
  }

  return (
    <div>
      <Card>
        <form onSubmit={formSubmitHandler}>
          <h2>Enter Student Rating</h2>
          <RatingSelector
            selectedRating={(e) => {
              setClassRating(e);
            }}
          />
          <div className="input-group">
            <input
              onChange={textHandler}
              type="text"
              placeholder="Enter your content"
              value={text}
            />
            <MainButton isDisabled={isDisabled}>Post</MainButton>
          </div>
          {valMessage ? <div>{valMessage}</div> : null}
        </form>
      </Card>
    </div>
  );
}
export default StudentForm;
