import { useParams, useNavigate } from "react-router";
import tasks from "../data/tasks";

function TaskDetail() {
    const {id} = useParams();
    const navigate = useNavigate();

    const task = tasks.find((item) => item.id == Number(id));

    if (!task) {
        return <h2>Tugas tidak ditemukan!</h2>;
    }
    
    return(
        <div className="container">
            <h1>{task.title}</h1>
            <p>{task.description}</p>
            <p>Status: {task.status}</p>

            <button onClick={() => navigate("/")}>
                Kembali
            </button>
        </div>
    );
}

export default TaskDetail;