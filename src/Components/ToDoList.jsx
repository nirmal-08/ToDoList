import {MdCheck, MdDeleteForever} from "react-icons/md";

export default function ToDoList({onHandleDelete, key, data,onCheckedToDo,checked}) {
    return (
        <>
            <li key={key} className="todo-item">
                <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
                <button className="check-btn" onClick={()=>onCheckedToDo(data)}><MdCheck/></button>
                <button className="delete-btn" onClick={(e) => onHandleDelete(e, data)}><MdDeleteForever/></button>

            </li>
        </>
    )
}