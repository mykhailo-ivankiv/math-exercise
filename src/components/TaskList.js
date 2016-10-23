import React from 'react';

//Styles
import '../styles/task-list.css';
import BEM from '../utils/BEM';
const b = BEM.b('layout');

const TaskList = () => (
  <div>
    <aside className="layout__additional">
      <a href="https://www.e-olymp.com/uk/">e-olymp (ua)</a><br/>
      <a href="http://math4school.ru/">Math 4 School (ru)</a><br/>
      <a href="https://www.wolframalpha.com/problem-generator/?scrollTo=Linearalgebra">Wolfram problem generator (en)</a><br/>
    </aside>

    <div className="task">
      Довжина AB = 1 <br/>
      Визначити координати точок <br/>
      A, B, C, D, E, F


    <svg className="figure" width="314px" height="208px" viewBox="0 0 314 208">
      <g className="figure__axes">
        <line x1="101.5" y1="22.5"  x2="101.5" y2="200"/>
        <line x1="0.5"   y1="187.5" x2="294"   y2="187.5"/>
      </g>

      <text className="figure__axes-label" x="97" y="15">y</text>
      <text className="figure__axes-label" x="303" y="191" >x</text>

      <path d="M66 125.5 l35.8-62 h71.4l35.8 62-35.8 62 h-71.4 z" className="figure__main"/>

      <text className="figure__text-label" x="88" y="203">A</text>
      <text className="figure__text-label" x="214" y="129">C</text>
      <text className="figure__text-label" x="179" y="62">D</text>
      <text className="figure__text-label" x="88" y="63">E</text>
      <text className="figure__text-label" x="52" y="129">F</text>
      <text className="figure__text-label" x="175" y="204">B</text>

      <circle r="2.5" className="figure__point" cx="173.5" cy="64.5"/>
      <circle r="2.5" className="figure__point" cx="208.5" cy="125.5"/>
      <circle r="2.5" className="figure__point" cx="101.5" cy="64.5"/>
      <circle r="2.5" className="figure__point" cx="101.5" cy="187.5"/>
      <circle r="2.5" className="figure__point" cx="173.5" cy="187.5"/>
      <circle r="2.5" className="figure__point" cx="66.5" cy="125.5"/>
    </svg>
    </div>

    <div className="task">
      Сума цифр двохзначного числа рівна 6. Якщо до цього числа добавити 18, то получиться число, записане тими ж цифрами, тільки в зворотньому порядку. Найдіть це число.
    </div>

    <div className="task">
      Якщо деяке двозначне число помножити на суму його цифр, то отримаємо 405. Якщо число написане тими ж цифрами в зворотньому порядку, помножити на суму його цифр, то отримаємо 486. Найдіть це число.
    </div>

    <div className="task">
      Знайдіть три числа з яких друге більше першого на стільки ж на скільки третє більше за друге, якщо відомо, що добуток двох менших чисел рівний 85, а добуток двох більших чисел рівний 115.
    </div>

  </div>
);

export default TaskList;