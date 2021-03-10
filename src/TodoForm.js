import React, {useState} from 'react';

function TodoForm(props) {
    const [input, setInput] = useState('');

    const HandleChange = e => {
        setInput(e.target.value);
    };

    const HandleSubmit = e => {
        e.preventDefault();

    props.onSubmit({
        id: Math.floor(Math.random() * 10000),
        text: input    
    });

    setInput('');
};

    return(
        <div>
            <form className="todo-form" onSubmit={HandleSubmit}>
                <input type="text" placeholder="Add your agenda" value={input} name="text" className="todo-input" onChange={HandleChange}/>
                <button className="todo-button">Add more</button>
            </form>
        </div>
    );
}

export default TodoForm;