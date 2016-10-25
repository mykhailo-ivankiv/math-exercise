import React from 'react';
import {connect} from 'react-redux'
import {getTasks} from '../reducers'
//Styles
import '../styles/task-list.css';
import BEM from '../utils/BEM';
const b = BEM.b('layout');

const TaskList = ({tasks}) => (
  <div>
    <aside className="layout__additional">
      <a href="https://www.e-olymp.com/uk/">e-olymp (ua)</a><br/>
      <a href="http://math4school.ru/">Math 4 School (ru)</a><br/>
      <a href="https://www.wolframalpha.com/problem-generator/?scrollTo=Linearalgebra">Wolfram problem generator (en)</a><br/>
    </aside>

    {tasks.map(tasks =>
      <div className="task" dangerouslySetInnerHTML = {{__html: tasks}}></div>
    )}

  </div>
);

export default connect(
  state => ({
    tasks: getTasks(state)
  })
)(TaskList);