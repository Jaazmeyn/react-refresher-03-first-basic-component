import React, {useState} from 'react';

import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';

import './App.scss';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    {id:'cg1', text: 'Finish the Course'}, 
    {id:'cg2', text: 'earn all about the Course Main Topic'},
    {id:'cg3', text: 'Help other students in the Course Q&amp;A'}
]);

const addNewGoalHandler = (newGoal) => {
  //render execute in the right order for sure: instead of passing data passing a function
  setCourseGoals((prevCourseGoals)=>  prevCourseGoals.concat(newGoal))
};
  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler}/>
      <GoalList goals={courseGoals}/>
    </div>
  );
};

export default App;