import './App.css';
import Employee from './Employee';

function App() {
  const employee =true;
  return (
    <div className="App">
      {employee ? (
        <>
        <Employee />
        <Employee />
        <Employee />
        <Employee />
        <Employee />
        </>
      ):<h3>You can not see the Employees</h3>}
    </div>
  );
}

export default App;
