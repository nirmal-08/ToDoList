import "./ToDo.css"
import {useEffect, useState} from "react";
import {MdCheck, MdDeleteForever} from "react-icons/md";
import ToDoForm from "./ToDoForm.jsx";
import ToDoList from "./ToDoList.jsx";
import ToDoDate from "./ToDoDate.jsx";

const todoskey = "reactToDo"
function getLocalStorageData(){
    const rawToDos = localStorage.getItem(todoskey)
    if(!rawToDos) return []

    return JSON.parse(rawToDos)
}

export default function ToDo() {

    const [task, setTask] = useState(getLocalStorageData)


    function handleFormSubmit(inputValue) {
        const {id, content, checked} = inputValue
        if (!content) return
        // if (task.includes(inputValue)) {
        //     return
        // }
        const ifToDoContentMatch = task.find((curTask) => curTask.content === content)
        if (ifToDoContentMatch) return;

        setTask(prevTask => [...prevTask, {id: id, content: content, checked: checked}])

    }

    localStorage.setItem(todoskey,JSON.stringify(task))


    function handleDelete(e, value) {
        console.log(value)
        let updatedTask = task.filter(curTask => curTask.content !== value)
        setTask(updatedTask)
    }

    function handleClearAll() {
        setTask([])
    }

    function handleCheckedToDo(content) {
        const updateTask = task.map((curTask) => {
            if (curTask.content === content) {
                return {...curTask, checked: !curTask.checked}
            } else {
                return curTask
            }
        })
        setTask(updateTask)
    }

    return (
        <>
            <section className="todo-container">
                <header>
                    <h1 style={{textAlign : "center",marginLeft : "10px"}}>TODO List</h1>
                    <ToDoDate/>
                </header>

                <ToDoForm onAddToDo={handleFormSubmit}/>

                <section>
                    <ul>
                        {
                            task.map((curElem) => {
                                return <ToDoList key={curElem.id} checked={curElem.checked} data={curElem.content}
                                                 onHandleDelete={handleDelete}
                                                 onCheckedToDo={handleCheckedToDo}
                                />
                            })
                        }
                    </ul>
                </section>
                <section>
                    <button className="clear-btn" onClick={handleClearAll}>Clear all</button>
                </section>
            </section>
        </>
    )
}