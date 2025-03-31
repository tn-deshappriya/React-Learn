const Employee = (props) => {
  return (
    <div className="m-2 flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 bg-white shadow-lg rounded-2xl max-w-lg">
      {/* Profile Image */}
      <img
        className="object=cover rounded-full h-[100px] w-[100px] block mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0"
        src={props.image}
        alt="Erin Lindford"
      />
      {/* Profile Details */}
      <div className="space-y-2 text-center sm:text-left">
        <div className="space-y-0.5">
          <p className="text-lg font-semibold text-black">{props.name}</p>
          <p className="font-medium text-gray-500">{props.role}</p>
        </div>
        {/* Message Button */}
        <button className="border border-purple-200 text-purple-600 px-4 py-2 rounded-lg hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700">
          Message
        </button>
      </div>
    </div>
  );
};
export default Employee;
