import React, { useState } from "react";
import "../../styles/index.css";

const Home = () => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const handleKeyDown = (e) => {
        if (e.keyCode === 13 && task.trim()) {
            setTasks([...tasks, { id: Date.now(), text: task }]);
            setTask('');
        }
    };
    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                    <div className="card shadow">
                        <div className="card-body p-4">
                            <h1 className="text-center mb-4 text-primary">Todo List</h1>

                            <input
                                type="text"
                                className="form-control form-control-lg mb-4"
                                value={task}
                                onChange={(e) => setTask(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="Escribe y presiona Enter"
                            />
                            <div className="task-list">
                                {tasks.length === 0 ? (
                                    <p className="text-center text-muted py-3">No hay tareas, añadir tareas...</p>
                                ) : (
                                    tasks.map(task => (
                                        <div key={task.id} className="task-item d-flex justify-content-between align-items-center p-3 mb-2 bg-light rounded"
                                        >
                                            <span>{task.text}</span>
                                            <button
                                                onClick={() => deleteTask(task.id)}
                                                className="btn btn-sm btn-danger btn-delete">
                                                x
                                            </button>
                                        </div>
                                    ))

                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
