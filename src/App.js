import "./App.css";
import Employee from "./Employee";

function App() {
  const nameList = [
    {
      name: "john",
      role: "intern",
    },
    {
      name: "Thinira",
      role: "Developer",
    },
    {
      name: "Dinura",
      role: "SeDev",
    },
    {
      name: "Himasha",
    },
    {
      name: "Sunil",
      role: "",
    },
  ];
  const showemployee = true;
  return (
    <div className="App">
      {showemployee ? (
        nameList.map((student, index) => (
          <Employee name={student.name} role={student.role} key={index} />
        ))
      ) : (
        <p>You can not see Employee</p>
      )}
    </div>
  );
}

export default App;
