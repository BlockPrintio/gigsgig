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
  try {
    const newData = await fetchDb();
    const taskData = newData.tasks[taskId];
    setTitle(taskData.title);
    setDesc(taskData.description);
    setDuration(taskData.duration);
    setAmount(taskData.amount);
    setSchool(taskData.school);
    setStatus(taskData.status);
  } catch (error) {
    console.error("Failed to fetch task data:", error);
    // Set default values or show error message
    setTitle("Error loading task");
    setDesc("Please ensure the backend server is running.");
    setStatus("error");
  }
}

useEffect(() => {
  fetchTask();
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);



// Posting task helper (unused) removed to satisfy linter



// createTask flow is not used yet; remove to satisfy linter

return ( 
   <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-100 to-white">
      <Header />
      <main className="flex-grow pt-24 px-4 w-full max-w-6xl mx-auto">
        <div className="mt-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-8">Create New Task</h1>
            <form className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 space-y-6">
                <div>
                    <label htmlFor="title" className="block text-lg font-medium text-black mb-2">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 bg-white text-black"
                        placeholder="Enter task title"
                    />
                </div>
                <div>
                    <label htmlFor="description" className="block text-lg font-medium text-black mb-2">
                        Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 bg-white text-black"
                        placeholder="Enter task description"
                        rows={4}
                    ></textarea>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="amount" className="block text-lg font-medium text-black mb-2">
                            Amount
                        </label>
                        <input
                            type="text"
                            id="amount"
                            name="amount"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 bg-white text-black"
                            placeholder="Enter amount in ADA"
                        />
                    </div>
                    <div>
                        <label htmlFor="duration" className="block text-lg font-medium text-black mb-2">
                            Duration
                        </label>
                        <input
                            type="text"
                            id="duration"
                            name="duration"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 bg-white text-black"
                            placeholder="Enter task duration"
                        />
                    </div>
                </div>
                <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-green-600 text-white text-lg font-medium rounded-lg hover:bg-green-700 hover:scale-105 active:scale-95 transition transform duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                onClick={(e) => {
                    e.preventDefault();
                    alert('Post a Task');
                }}
                >
                Post Task
                </button>
            </form>
        </div>
        <div className="mt-16">
        <h2 className="text-3xl font-semibold text-black mb-8">Your Posted Tasks</h2>
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
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
            className="px-4 py-2 bg-green-800 text-white border border-green-700 rounded hover:bg-green-600 hover:scale-105 active:scale-95 transition transform duration-200 cursor-pointer">
                Accept tasker
            </a>
            <a className="px-4 py-2 bg-green-800 text-white border border-green-700 rounded hover:bg-green-600 hover:scale-105 active:scale-95 transition transform duration-200 cursor-pointer">
               pay tasker 
            </a>
            </div>
        </div>
        </div>
      </main>
    <Footer />
   </div>
  );
}
 
export default TaskerHomepage;