import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const Tasklist = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="overflow-x-auto h-[50%] flex items-center gap-5 flex-nowrap justify-start py-5 mt-10 rounded-xl w-full "
    >
      {data.tasks.map((elem,idx) => {
        if (elem.Active) {
          return <AcceptTask key={idx} data={elem}/>;
        }
      })}
      {data.tasks.map((elem,idx) => {
        if(elem.NewTask){
            return <NewTask key={idx} data={elem}/>
          }
      })}
      {data.tasks.map((elem,idx) => {
        if(elem.Completed){
            return <CompleteTask key={idx} data={elem}/>
          }
      })}
      {data.tasks.map((elem,idx) => {
        if(elem.Failed){
            return <FailedTask key={idx} data={elem}/>
          }
      })}
    </div>
  );
};

export default Tasklist;

