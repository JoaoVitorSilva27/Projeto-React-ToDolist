import { useState } from "react"


function List() {

    const [todo, setTodo] = useState([
        {
            id: 1,
            text: "criar funcionalidade x no sistema",
            category: "Trabalho",
            isCompleted: false,
        },
        {
            id: 2,
            text: "Ir pra academia",
            category: "Pessoal",
            isCompleted: false,
        },
        {
            id: 3,
            text: "Estudar React",
            category: "Estudos",
            isCompleted: false,
        }
    ])

    return (
        <div><h1>Lista de Tarefas</h1>

            <div className="todo-list">
                {todo.map((todo) => (
                    <div className="todo">
                        <div className="content">
                            <p>{todo.text}</p>
                            <p className="category">({todo.category})</p>
                        </div>
                        <div>
                            <button className="complete">Completar</button>
                            <button className="remove">X</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default List