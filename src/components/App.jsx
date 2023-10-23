import Navbar from "./Navbar";
import StudentsList from "./StudentsList";
import StudentsSummary from "./StudentsSummary";
import StudentForm from "./StudentForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Product from "./shared/Product";
import Post from "./Post";
import NotFound from "./shared/NotFound";
import { StudentProvider } from "../context/StudentsContext";

function App() {
  return (
    <StudentProvider>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <StudentForm />
                <StudentsSummary />
                <StudentsList />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/post" element={<Post />} />
          <Route path="/notfound" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </StudentProvider>
  );
}

export default App;
