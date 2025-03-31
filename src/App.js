import { useState } from "react";
import "./App.css";
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
          <Employee name="Thinira" role="jun/Dev" />
          <Employee name="Himasha" role="senior/Dev" />
          <Employee name="Shavindu" role="jun/Devops" />
          <Employee name="Supun" role="cyberSequrity" />
          <Employee name="Chamo" role={role} />
        </>
      ) : (
        <p>You can not See Employees</p>
      )}
    </div>
  );
}

export default App;
