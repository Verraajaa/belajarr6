import TaskCard from "../componens/TaskCard";
import tasks from "../data/tasks";

function Dashboard() {
    return(
        <div className="container">
            <h1>Student Dashboard</h1>
            <p>Selamat datan di aplikasi pengelolaan tugas belajar!</p>

            <p>Total tugas : {tasks.length}</p>

            <h2>Daftar Tugas</h2>

            <div className="tasks">
                {tasks.map((task) => (
                    <div className="tasks-card">
                        <TaskCard key={task.id} task={task}/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Dashboard;