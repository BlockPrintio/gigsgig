import Footer from "@/components/footer";
import Header from "@/components/header";
import { useEffect, useState } from "react";
//import { readFile } from "fs/promises";

const TaskerHomepage = () => {

const [title, setTitle] = useState<string | undefined>();
const [desc, setDesc]  = useState<string | undefined>();
const [status, setStatus] = useState<string | undefined>();
const [duration, setDuration] = useState<string | undefined>();
const [amount, setAmount] = useState<string | undefined>();
const [school, setSchool] = useState<string | undefined>();

const id = 1;
const taskId = 1;
async function fetchDb(){
    const res = await fetch("http://localhost:8000/tasker/"+`${id}`);
    const data = await res.json();
   return data;
}
const fetchTask = async() => {
  const newData = await fetchDb();
  const taskData = newData.tasks[taskId];
  setTitle(taskData.title);
  setDesc(taskData.description);
  setDuration(taskData.duration);
  setAmount(taskData.amount);
  setSchool(taskData.school);
  setStatus(taskData.status);
}

useEffect(() => {
  fetchTask();
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);



// Posting task helper (unused) removed to satisfy linter



// createTask flow is not used yet; remove to satisfy linter

return ( 
   <section className="w-full relative bg-gradient-to-br from-green-100 to-white py-20 px-4">
      <Header />
        <div className="mt-8">
            <form className="space-y-4">
                <div>
                    <label htmlFor="title" className="block text-lg font-medium text-black">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        className="mt-1 block w-1/4 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500  bg-gray-800"
                        placeholder="Enter task title"
                    />
                </div>
                <div>
                    <label htmlFor="description" className="block text-lg font-medium text-black">
                        Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        className="mt-1 block w-1/2 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 bg-gray-800"
                        placeholder="Enter task description"
                        rows={4}
                    ></textarea>
                </div>
                <div>
                    <label htmlFor="title" className="block text-lg font-medium text-black">
                        Amount
                    </label>
                    <input
                        type="text"
                        id="amount"
                        name="amount"
                        className="mt-1 block w-1/4 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500  bg-gray-800"
                        placeholder="Enter amount in ADA"
                    />
                </div>
                <div>
                    <label htmlFor="duration" className="block text-lg font-medium text-black">
                        Duration
                    </label>
                    <input
                        type="text"
                        id="duration"
                        name="duration"
                        className="mt-1 block w-1/4 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500  bg-gray-800"
                        placeholder="Enter task duration"
                    />
                </div>
                <a
                className="px-6 py-3 bg-green-800 text-black text-lg rounded hover:bg-green-600 focus:outline-none"
                onClick={() => alert('Post a Task')}
                >
                Post Task
            </a>
            </form>
        </div>
        <div className="mt-12">
        <h2 className="text-3xl font-semibold text-black mb-6">Tasks posted</h2>
        <div className="p-4 border rounded shadow-sm bg-green-100">
            <h3 className="text-lg font-bold text-black mb-2">Task Title: {title}</h3>
            <p className="text-black mb-1">Description: {desc}</p>
            <p className="text-black mb-1">Expires: {duration}</p>
            <p className="text-black mb-1">Amount: {amount}</p>
            <p className="text-black mb-1">Status: {status}</p>
            <p className="text-black mb-1">School: {school}</p>
            <p className="text-black mb-1">interested: 1</p>
            {/* {tasker} */}
            <div className="flex space-x-4">
            <a onClick={() => {
                

            }}
            className="px-4 py-2 bg-green-800 text-white border border-green-700 rounded hover:bg-green-600 cursor-pointer">
                Accept tasker
            </a>
            <a className="px-4 py-2 bg-green-800 text-white border border-green-700 rounded hover:bg-green-600 cursor-pointer">
               pay tasker 
            </a>
            </div>
        </div>
        </div>
    <Footer />
   </section>
  );
}
 
export default TaskerHomepage;