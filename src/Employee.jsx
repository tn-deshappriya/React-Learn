const Employee = (props) => {
  return (
    <>
      <h1>Here is An Employee {props.name}</h1>
      <p>{props.role ? props.role : "No role"}</p>
    </>
  );
};
export default Employee;
