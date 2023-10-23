import { Navigate, useNavigate } from "react-router-dom";
import MainButton from "./shared/MainButton";

function Post() {
  const status = 200;
  const nav = useNavigate()

  function navHandler() {
    //write codes here
    nav('/notfound')
  }

  if (status !== 200) {
    return <Navigate to="/notfound" />;
  }

  return (
    <>
      <div>Post</div>
      <MainButton onClick={navHandler} buttonClass= 'btn btn-secondary'>Click</MainButton>
    </>
  );
}
export default Post;
