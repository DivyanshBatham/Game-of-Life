import React, { Component } from 'react';
import logo from './logo.png';
// import logomobile from './logo-mobile.png';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      grid: [],
      cellSize: 30,
      generation: 0,
      speed: 200
    }
  }

  onClick = (e) => {
    const x = +e.target.dataset.x, y = +e.target.dataset.y;

    let grid = this.state.grid;
    grid[x][y] = !grid[x][y];

    this.setState({
      grid: grid
    })
  }

  // changeSize = () => {

  // }

  // For Rendering Only:
  squares = (row, rowNumber) => {
    return row.map((s, i) => <div className={s ? "square active" : "square"} key={i} data-x={rowNumber} data-y={i} onClick={this.onClick}></div>);
  }

  // For Rendering Only:
  rows = () => {
    return this.state.grid.map((row, rowNumber) => <div className="row" key={rowNumber}>{this.squares(row, rowNumber)}</div>);
  }

  // Utility Function
  calculateSum = (x, y) => {

    let h = this.state.grid.length, w = this.state.grid[x].length;

    let sum = 0;
    for (let dx = -1; dx < 2; dx++)
      for (let dy = -1; dy < 2; dy++)
        if (!(dx === 0 && dy === 0))
          sum += +this.state.grid[(x + dx + h) % h][(y + dy + w) % w];

    return sum;
  }

  generateNextGeneration = () => {

    this.setState((state, props) => ({
      generation: state.generation + 1
    }));

    // Rules:
    // Any live cell with fewer than two live neighbors dies, as if by underpopulation. if true: s<2 -> false
    // Any live cell with two or three live neighbors lives on to the next generation.  if true: s=2,3 -> true
    // Any live cell with more than three live neighbors dies, as if by overpopulation. if true: s>3 -> false
    // Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.  if false: s=3 -> true


    // Should I be cloning the grid? let nextGrid = Array.from(this.state.grid);  #DOUBT
    let nextGrid = [];

    for (let i = 0; i < this.state.grid.length; i++) {
      let row = [];
      for (let j = 0; j < this.state.grid[i].length; j++) {
        let sum = this.calculateSum(i, j);
        if (this.state.grid[i][j]) {
          if (sum < 2 || sum > 3)
            row.push(false);
          else
            row.push(true);
        } else {
          row.push(sum === 3);
        }
      }
      nextGrid.push(row);
    }

    this.setState({
      grid: nextGrid
    })
  }

  componentDidMount() {

    let height = document.getElementById('Main').offsetHeight;
    let width = document.getElementById('Main').offsetWidth;
    const w = Math.floor(width / 30) + 1, h = Math.floor(height / 30) + 1;

    console.log("Grid INIT: ");
    console.table({ height, width, h, w });

    let row;
    let grid = [];
    for (let r = 1; r <= h; r++) {

      // Randomize Cells:
      // row = Array(w).fill(null).map((n, i) => Boolean(Math.floor(Math.random() * 2)));

      // Empty Grid:
      row = Array(w).fill(null).map((n, i) => false);

      grid.push(row);
    }

    this.setState({
      grid: grid
    })

  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  // CONTROLS:
  start = () => {
    // this.generateNextGeneration();
    this.pause();
    this.interval = setInterval(() => this.generateNextGeneration(), this.state.speed);
  }

  pause = () => {
    clearInterval(this.interval);
  }

  changeSpeed = () => {
    clearInterval(this.interval);
    const speeds = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
    const newSpeed = speeds[(speeds.indexOf(this.state.speed) + 1) % speeds.length];

    this.setState({
      speed: newSpeed
    })

    this.interval = setInterval(() => this.generateNextGeneration(), newSpeed);
    console.log("Speed Set to - " + newSpeed);

  }

  randomize = () => {
    this.pause();
    let height = document.getElementById('Main').offsetHeight;
    let width = document.getElementById('Main').offsetWidth;
    const w = Math.floor(width / 30) + 1, h = Math.floor(height / 30) + 1;

    console.log("Grid INIT: ");
    console.table({ height, width, h, w });

    let row;
    let grid = [];
    for (let r = 1; r <= h; r++) {
      row = Array(w).fill(null).map((n, i) => Boolean(Math.floor(Math.random() * 2)));
      grid.push(row);
    }

    this.setState({
      grid: grid,
      generation: 0
    });
  }

  clear = () => {
    this.pause();
    let height = document.getElementById('Main').offsetHeight;
    let width = document.getElementById('Main').offsetWidth;
    const w = Math.floor(width / 30) + 1, h = Math.floor(height / 30) + 1;

    console.log("Grid INIT: ");
    console.table({ height, width, h, w });

    let row;
    let grid = [];
    for (let r = 1; r <= h; r++) {
      row = Array(w).fill(null).map((n, i) => false);
      grid.push(row);
    }

    this.setState({
      grid: grid,
      generation: 0
    });
  }


  render() {
    return (
      <div className="App">
        <div id="Main">
          < this.rows />
        </div>
        <div id="Side">
          <div className="TopHalf">
            <img src={logo} alt="Logo" />
            <div className="controls">
              <ul>
                <li onClick={this.start}>
                  <svg viewBox="0 0 100 100">
                    <defs>
                      <clipPath id="clip-path">
                        <rect id="Rectangle_2" data-name="Rectangle 2" fill="#19d676" width="100" height="100" transform="translate(227 -404)" />
                      </clipPath>
                    </defs>
                    <g id="Play" clipPath="url(#clip-path)" transform="translate(-227 404)">
                      <path id="round-play_circle_filled-24px" fill="#19d676" d="M60,10a50,50,0,1,0,50,50A50.018,50.018,0,0,0,60,10ZM50,77.5v-35a2.5,2.5,0,0,1,4-2L77.35,58a2.482,2.482,0,0,1,0,4L54,79.5a2.5,2.5,0,0,1-4-2Z" transform="translate(217 -414)" />
                    </g>
                  </svg>
                  <div className="controlsText">
                    Play
                  </div>
                </li>
                <li onClick={this.pause}>
                  <svg viewBox="0 0 100 100">
                    <defs>
                      <clipPath id="clip-path2">
                        <rect id="Rectangle_3" data-name="Rectangle 3" fill="#19d676" width="100" height="100" transform="translate(360 -404)" />
                      </clipPath>
                    </defs>
                    <g id="Pause" clipPath="url(#clip-path2)" transform="translate(-360 404)">
                      <path id="round-pause_circle_filled-24px" fill="#19d676" d="M60,10a50,50,0,1,0,50,50A50.018,50.018,0,0,0,60,10ZM50,80a5.015,5.015,0,0,1-5-5V45a5,5,0,0,1,10,0V75A5.015,5.015,0,0,1,50,80Zm20,0a5.015,5.015,0,0,1-5-5V45a5,5,0,0,1,10,0V75A5.015,5.015,0,0,1,70,80Z" transform="translate(350 -414)" />
                    </g>
                  </svg>
                  <div className="controlsText">
                  Pause
                  </div>
                </li>
                <li onClick={this.generateNextGeneration} >
                  <svg viewBox="0 0 100 100">
                    <path id="Next" fill="#19d676" d="M50,100A50.013,50.013,0,0,1,30.538,3.929,50.013,50.013,0,0,1,69.462,96.071,49.686,49.686,0,0,1,50,100ZM68.357,27.971a3.675,3.675,0,0,0-3.671,3.671V68.357a3.671,3.671,0,0,0,7.342,0V31.642A3.675,3.675,0,0,0,68.357,27.971ZM31.666,31.383a3.693,3.693,0,0,0-3.695,3.674V64.942a3.689,3.689,0,0,0,5.8,3.01L54.956,53.01A3.647,3.647,0,0,0,56.5,49.983a3.579,3.579,0,0,0-1.542-2.957L33.772,32.046A3.712,3.712,0,0,0,31.666,31.383Z" />
                  </svg>
                  <div className="controlsText">
                  Next
                  </div>
                </li>
                <li onClick={this.randomize}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                    <path id="Randomize" fill="#19d676" d="M50,100A50.013,50.013,0,0,1,30.538,3.929,50.013,50.013,0,0,1,69.462,96.071,49.686,49.686,0,0,1,50,100Zm7.267-46.1h0l-3.9,3.9,8.661,8.662-3.32,3.32a1.349,1.349,0,0,0-.292,1.494,1.371,1.371,0,0,0,1.288.858H70.189a1.369,1.369,0,0,0,1.383-1.383V60.266a1.371,1.371,0,0,0-1.38-1.388,1.345,1.345,0,0,0-.971.419L65.928,62.59,57.267,53.9ZM59.7,27.863a1.371,1.371,0,0,0-1.288.858,1.349,1.349,0,0,0,.292,1.494L62,33.508,29.236,66.27a2.759,2.759,0,1,0,3.9,3.9l32.79-32.734,3.293,3.293a1.343,1.343,0,0,0,.954.4,1.383,1.383,0,0,0,1.4-1.4V29.246a1.369,1.369,0,0,0-1.383-1.383ZM31.215,28.991A2.76,2.76,0,0,0,29.264,33.7L41.605,46.043l3.929-3.875L33.166,29.8A2.741,2.741,0,0,0,31.215,28.991Z" />
                  </svg>
                  <div className="controlsText">
                  Random
                  </div>
                  </li>
                <li onClick={this.clear}>
                  <svg viewBox="0 0 100 100">
                    <g id="Reset" transform="translate(-360 262)">
                      <path id="Subtraction_1" data-name="Subtraction 1" fill="#19d676" d="M50,100A50.013,50.013,0,0,1,30.538,3.929,50.013,50.013,0,0,1,69.462,96.071,49.686,49.686,0,0,1,50,100ZM27.157,55.393a3.324,3.324,0,0,0-2.5,1.139,3.253,3.253,0,0,0-.784,2.571A26.389,26.389,0,0,0,49.855,81.679h.086a27.746,27.746,0,0,0,5.22-.514A26.182,26.182,0,0,0,75.649,60.679a26.507,26.507,0,0,0-5.5-21.99,26.206,26.206,0,0,0-20.271-9.561V19.968a1.627,1.627,0,0,0-1.639-1.647,1.6,1.6,0,0,0-1.152.5L34.61,31.262a1.631,1.631,0,0,0,0,2.332L47.052,46.036a1.661,1.661,0,0,0,2.824-1.182v-9.16A19.726,19.726,0,0,1,68.985,50.6a19.916,19.916,0,0,1,.13,9.027,19.577,19.577,0,0,1-15,15,20.683,20.683,0,0,1-4.242.446A19.743,19.743,0,0,1,30.374,58.183,3.273,3.273,0,0,0,27.157,55.393Z" transform="translate(360 -262)" />
                    </g>
                  </svg>
                  <div className="controlsText">
                  Clear
                  </div>
                </li>
              </ul>
              {/* Speed {this.state.speed} */}
              {/* <button onClick={this.start}>Start</button>
              <button onClick={this.pause}>Pause</button>
              <button onClick={this.changeSpeed}>Speed</button>
              <button onClick={this.pause}>Size</button>
              <button onClick={this.randomize}>Randomize</button>
              <button onClick={this.clear}>Clear</button> */}
            </div>
          </div>
          <p className="generationCount">Generation {this.state.generation}</p>

        </div>
        <div id="Footer">
          <p className="generationCount-mobile">Generation {this.state.generation}</p>
        </div>
      </div>
    );
  }
}

export default App;
