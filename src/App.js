import { useState } from "react";
import "./index.css";
import Employee from "./Employee";

function App() {
  const [role, setRole] = useState();
  const showemployee = true;
  return (
    <div className="App">
      {showemployee ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              setRole(e.target.value);
            }}
          />
          <div className="flex flex-wrap justify-center">
            <Employee
              name="Thinira"
              role="jun/Dev"
              image="https://images.pexels.com/photos/20570035/pexels-photo-20570035/free-photo-of-a-young-woman-in-a-green-jacket-sitting-and-holding-a-fujifilm-x100f-digital-camera.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            />
            <Employee
              name="Himasha"
              role="senior/Dev"
              image="https://images.pexels.com/photos/20570035/pexels-photo-20570035/free-photo-of-a-young-woman-in-a-green-jacket-sitting-and-holding-a-fujifilm-x100f-digital-camera.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            />
            <Employee
              name="Shavindu"
              role="jun/Devops"
              image="https://images.pexels.com/photos/20570035/pexels-photo-20570035/free-photo-of-a-young-woman-in-a-green-jacket-sitting-and-holding-a-fujifilm-x100f-digital-camera.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            />
            <Employee
              name="Supun"
              role="cyberSequrity"
              image="https://images.pexels.com/photos/20570035/pexels-photo-20570035/free-photo-of-a-young-woman-in-a-green-jacket-sitting-and-holding-a-fujifilm-x100f-digital-camera.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            />
            <Employee
              name="Chamo"
              role={role}
              image="https://images.pexels.com/photos/20570035/pexels-photo-20570035/free-photo-of-a-young-woman-in-a-green-jacket-sitting-and-holding-a-fujifilm-x100f-digital-camera.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            />
          </div>
        </>
      ) : (
        <p>You can not See Employees</p>
      )}
    </div>
  );
}

export default App;
