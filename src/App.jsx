import { useEffect, useState } from 'react';
import CreateTask from "./components/CreateTask";
import ListTasks from './components/ListTasks';
import { Toaster } from 'react-hot-toast';
import { DndProvider } from  'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  const [tasks, setTasks] = useState([]);

  console.log("tasks" , tasks);
  
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    setTasks(savedTasks || []);
  }, [])

  return (
    <DndProvider backend={HTML5Backend}>
      <Toaster/>
        <div className="bg-slate-100 w-screen h-screen flex flex-col p-3 items-center gap-16 pt-32">
        <CreateTask tasks={tasks} setTasks={setTasks} />
        <ListTasks tasks={tasks} setTasks={setTasks} />
        </div>
    </DndProvider>
  );
}

export default App
