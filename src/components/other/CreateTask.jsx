import React, { useState , useContext} from "react";
import { setLocalStorage } from "../../utils/localStorage"; 
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {

  const [userData,setUserData] = useContext(AuthContext);


  const [TaskTitle, setTaskTitle] = useState("");
  const [TaskDate, setTaskDate] = useState("");
  const [TaskDescription, setTaskDescription] = useState("");
  const [assignTo, setassignTo] = useState("");
  const [Category, setCategory] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    
    let newTask = {TaskTitle,TaskDate,TaskDescription,Category,assignTo,Active:false,NewTask:true,Completed:false,Failed:false};
    userData.forEach(function(elem) {
      if(assignTo === elem.name){
        elem.tasks.push(newTask);
        toast.success("Task Created Successfully");
      }
    });
    setUserData(userData);
    localStorage.setItem('employees', JSON.stringify(userData));
    console.log(userData);
    setTaskTitle("");
    setTaskDate("");
    setTaskDescription("");
    setassignTo("");
    setCategory("");
  };

  return (
    <div className="text-white">
      <div className="p-5 bg-[#1C1C1C] text-white rounded mt-7">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-wrap w-full items-start justify-between"
        >
          <div className="w-1/2 text-white">
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
              <input
                type="text"
                placeholder="Make a New task"
                className="mb-4 border-gray-400 border-[1px] bg-transparent outline-none rounded w-4/5 px-2 py-1 text-sm"
                value={TaskTitle}
                onChange={(e) => {
                  setTaskTitle(e.target.value);
                }}
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
              <input
                className="mb-4 border-gray-400 border-[1px] bg-transperent outline-none rounded w-4/5 px-2 py-1 text-sm"
                type="date"
                value={TaskDate}
                onChange={(e) => {
                  setTaskDate(e.target.value);
                }}
              />
            </div>

            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Assign To-</h3>
              <input
                className="mb-4 border-gray-400 border-[1px] bg-transperent outline-none rounded w-4/5 px-2 py-1 text-sm"
                placeholder="employee Name"
                value={assignTo}
                onChange={(e) => {
                  setassignTo(e.target.value);
                }}
              />
            </div>

            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
              <input
                className="mb-4 border-gray-400 border-[1px] bg-transperent outline-none rounded w-4/5 px-2 py-1 text-sm"
                placeholder="Design,Marheting,etc"
                value={Category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}  
              ></input>
            </div>
          </div>

          <div className="w-1/2">
            <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
            <textarea
              className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
              name=""
              id=""
              cols="30"
              rows="10"
              value={TaskDescription}
              onChange={(e) => {
                setTaskDescription(e.target.value);
              }}
            />

            <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
