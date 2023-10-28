import './App.css';

/*import Greeting from './components/greeting';*/
/*import GreetingF from './components/greetingF';*/
import TaskListComponent from './components/container/task_list';


function App() {
  return (
    <div className="App">

        {/*componete de listado de tareas*/}
        <TaskListComponent></TaskListComponent>
      
    </div>
  );
}

export default App;
