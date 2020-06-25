import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import LineChartComponent from './chart/line-chart';


ReactDOM.render(
  <React.StrictMode>  


    <div class="container">
      <div class ="left_side">
        <div id ="d1">Total OTIF</div>
        <div id ="d2">

        <img src="../images/red_inverted_triangle.jpg" alt="inverted_triangle"/> 
        </div>
        <div id ="d3">92%</div>
        <div id ="d4">-3.34%</div>
        <div id ="d5">Goal: 95%
        {/* <img src="../images/red_Inverted_thumbs_up.png" /> 
        <img src="../images/test_2.png" width = "30"></img>
        <img src="https://bit.ly/fcc-relaxing-cat" alt="Author standing on a beach with two thumbs up." width = "30"></img> */}
        </div>
        <div id ="d6">thumbs up</div>
      </div>
      <div class ="right_side">
        <LineChartComponent />
      </div>
    </div>
  </React.StrictMode>,
 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
