import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom"
import Sidebar from './Component/Sidebar';
import Dashboard from './Component/Dashboard';
import Login from './Component/Login';
import AddCourse from './Component/AddCourse';
import ViewCourse from './Component/ViewCourse';
import Addcontents from './Component/Addcontents';
import Viewcontents from './Component/Viewcontents';
import Addstudent from './Component/Addstudent';
import Viewstudent from './Component/Viewstudent';
import Adduser from './Component/Adduser';
import Viewuser from './Component/Viewuser.js';

function App() {
  return (
    <>

     <Sidebar />

      <Routes>
        {/* <Route path="/" element={ <Login /> } /> */}
        <Route path="/dashboard" element={ <Dashboard /> } />
        <Route path="/addCourse" element={ <AddCourse /> } />
        <Route path="/viewCourse" element={ <ViewCourse /> } />
        <Route path="/addcontent" element={ <Addcontents /> } />
        <Route path="/viewcontent" element={ <Viewcontents /> } />
        <Route path="/addStudent" element={ <Addstudent /> } />
        <Route path="/viewStudent" element={ <Viewstudent /> } />
        <Route path="/adduser" element={ <Adduser /> } />
        <Route path="/viewuser" element={ <Viewuser /> } />
      </Routes>

    </>
  );
}

export default App;
