import {useState} from "react";

export default function ToDoForm({onAddToDo}) {
    const [inputValue, setInputValue] = useState({})

    function handleInput(e) {
        let value = e.target.value
        setInputValue({id: value, content:value, checked:false})
        // console.log(inputValue)
    }

    function handleFormSubmit(e) {
        e.preventDefault()
        onAddToDo(inputValue)
        setInputValue({id: "", content:"", checked:false})
    }

    return (
        <>
            <section className="form">
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <input type="text" className="todo-input" value={inputValue.content}
                               onChange={(e) => handleInput(e)}
                        />
                    </div>
                    <div>
                        <button type="submit" className="todo-btn"> Add Task</button>
                    </div>
                </form>
            </section>
        </>
    )
}