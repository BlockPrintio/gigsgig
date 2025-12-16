import Footer from "@/components/footer";
import Header from "@/components/header";
import { useState, useEffect } from "react";

const TaskerHomepage = () => {

  type WorkItem = {
    title: string;
    description: string;
    duration: string;
    amount: string;
    status: string;
    school: string;
    contact: string;
  };

  const [work, setWork] = useState<WorkItem[]>([]);
  const [newWork, isnewWork]  = useState(true);

  const updateWork = () => {
    const newData = [{
      title: "Wash",
      description: "To wash my clothes if anyone interested, been terribly lazy",
      duration: "1 hrs",
      amount: "500 ADA",
      status: "close",
      school: "Univerisity of Lagos",
      contact: "0812345678"
    }];

    if (JSON.stringify(work) !== JSON.stringify(newData)) {
      setWork(newData);
      isnewWork(true);
    } else {
      isnewWork(false);
    }
    if(!newWork){
      alert("No new task available")
    }
  }
async function fetchTaskers() {
  const res = await fetch("http://localhost:8000/tasker");
  const data = await res.json();
  return data; // Return the parsed object directly
};


  useEffect(() => {
   const fetchData = async () => {
    try {
      const data = await fetchTaskers();
      if (data && data.length > 0 && data[0].tasks && data[0].tasks.length > 0) {
        console.log(data[0].tasks[0]);
      }
    } catch (error) {
      console.error("Failed to fetch taskers:", error);
      // Handle error, perhaps set a state for error message
    }
   };
   fetchData();
  }, []);

    return ( 
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-100 to-white">
      <Header />
      <main className="flex-grow pt-24 px-4 w-full max-w-6xl mx-auto">
        <div className="mt-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-8">Available Tasks</h1>
            <button
            className="px-8 py-3 bg-green-600 text-white text-lg font-medium rounded-lg hover:bg-green-700 hover:scale-105 active:scale-95 transition transform duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            onClick={updateWork}
            >
            Refresh Tasks
            </button>
        </div>
        
        <div className="mt-12">
        <h2 className="text-3xl font-semibold text-black mb-8">Latest Tasks</h2>
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-black mb-4">Task Title: {work[0]?.title ?? "No tasks available"}</h3>
            <div className="space-y-3 mb-6">
                <p className="text-gray-700 text-lg">Description: {work[0]?.description ?? ""}</p>
                <p className="text-gray-700">Expires: {work[0]?.duration ?? ""}</p>
                <p className="text-gray-700">Amount: {work[0]?.amount ?? ""}</p>
                <p className="text-gray-700">Status: {work[0]?.status ?? ""}</p>
                <p className="text-gray-700">School Name: {work[0]?.school ?? ""}</p>
            </div>
            <div className="flex gap-4">
                <button className="px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 hover:scale-105 active:scale-95 transition transform duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                    Accept Work
                </button>
                <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 hover:scale-105 active:scale-95 transition transform duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Claim Reward
                </button>
            </div>
          </div>
        </div>
      </main>
    <Footer />
   </div>
  );
}
 
export default TaskerHomepage;