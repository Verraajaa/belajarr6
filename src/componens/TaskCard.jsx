import { Link } from "react-router";

function TaskCard({task}) {
    return(
        <div>
            <h3>{task.title}</h3>
            {/* <p>{task.description}</p>
            <p>{task.status}</p> */}

            <Link to={`/tasks/${task.id}`}>
                Lihat Detail
            </Link>
        </div>
    );
}

export default TaskCard;