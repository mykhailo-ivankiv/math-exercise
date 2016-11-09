import React, {Component} from 'react'
import {
  select,
  scaleLinear,
  scaleTime,
  scaleBand,
  extent,
  axisLeft,
  axisBottom,
} from 'd3';

//Styles
import '../styles/d3jsDemo.css';
import BEM from '../utils/BEM';
const b = BEM.b('d3jsDemo');

const data = [
  {score: 63, subject: 'Mathematics'},
  {score: 82, subject: 'Geography'},
  {score: 74, subject: 'Spelling'},
  {score: 97, subject: 'Reading'},
  {score: 52, subject: 'Science'},
  {score: 74, subject: 'Chemistry'},
  {score: 97, subject: 'Physics'},
  {score: 52, subject: 'ASL'}
];


class D3jsDemo extends Component {
  componentDidMount () {
    const WIDTH = 600;
    const HEIGHT = 500;

    const margin = {top: 10, left: 30, right:10, bottom: 30};
    const width = WIDTH - margin.left - margin.right;
    const height = HEIGHT - margin.top - margin.bottom;

    const newBar = (selection) => {
      const bar = selection
        .append("g")
        .attr("transform", (d, i) => `translate(0, 0)`);

      bar.append("rect")
        .attr("class", b("bar"))

        .attr("x", d => xScale(d.subject))
        .attr("y", d => yScale(d.score))
        
        .attr("width", (d) => xScale.bandwidth())
        .attr("height", (d, i) => height - yScale(d.score))


      bar.append("text")
        .attr("class", b("text"))
        .attr("x", "5")
        .attr("y", "20")
        .text((d) => d.name)
    };

    const yScale = scaleLinear()
      .domain([0, 100])
      .range([height, 0]);

    const  yAxis = axisLeft(yScale);
    
    const xScale = scaleBand()
      .padding(0.2)
      .domain(data.map(d => d.subject))
      .range([0, width]);

    const xAxes = axisBottom(xScale);

    const svg = select(this.refs.root)
      .append("svg")
          .attr("class", b("svg-root"))
        .append("g")
          .attr("transform", `translate(${margin.left}, ${margin.top})`)

    svg.selectAll("g")
      .data(data)
      .enter().call(newBar);

    svg
      .append("g")
      .attr("class", "y-axis")
      .call(yAxis);

    svg
      .append("g")
      .attr("class", "x-axis")
      .attr("transform", `translate(0,${height})`)
      .call(xAxes);


  }

  render () {
    return <div className={b()} ref="root"/>
  }
}

export default D3jsDemo;