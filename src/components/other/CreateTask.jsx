import React from 'react'

const CreateTask = () => {
  return (
    <div>
      <div className="p-5 bg-[#1C1C1C] rounded mt-7">
        <form className="flex flex-wrap w-full items-start justify-between">
          <div className="w-1/2">
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
              <input
                type="text"
                placeholder="Mahe a New task"
                className="mb-4 border-gray-400 border-[1px] bg-transperent outline-none rounded w-4/5 px-2 py-1 text-sm"
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
              <input
                className="mb-4 border-gray-400 border-[1px] bg-transperent outline-none rounded w-4/5 px-2 py-1 text-sm"
                type="date"
              />
            </div>

            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Assign To-</h3>
              <input
                className="mb-4 border-gray-400 border-[1px] bg-transperent outline-none rounded w-4/5 px-2 py-1 text-sm"
                placeholder="employee Name"
              />
            </div>

            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
              <input
                className="mb-4 border-gray-400 border-[1px] bg-transperent outline-none rounded w-4/5 px-2 py-1 text-sm"
                placeholder="Design,Marheting,etc"
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
            />

            <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateTask
