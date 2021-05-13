import React, {useState} from 'react';

import './NewGoal.scss';


const NewGoal = props => {

    const [enteredText, setEnteredText] = useState('');

    const addGoalHandler = (event) => {
        event.preventDefault();

        const newGoal = {
            id: Math.random().toString(),
            text: enteredText
        };

        setEnteredText('');

        props.onAddGoal(newGoal);
    };

    const textChangeHandler = event => {
        setEnteredText(event.target.value);
    };
    return (
        //reflect userInput
    <form className="new-goal" onSubmit={addGoalHandler}>
        <input type="text" value={enteredText} onChange={textChangeHandler}/>
        <button type="submit">Add Goal</button>
    </form>
    );
};

export default NewGoal;