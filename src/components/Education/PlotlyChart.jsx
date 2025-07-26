import React, { useEffect, useRef } from 'react';

const PlotlyChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Load the Plotly script dynamically
    const script = document.createElement('script');
    script.src = 'https://cdn.plot.ly/plotly-latest.min.js';
    script.async = true;
    script.onload = () => {
      // Once Plotly is loaded, create the chart
      const data = [
            {    x: ['3rd sem', '4th sem', '5th sem', '6th sem','7th sem','8th sem'],
        y: [6.71, 7.18, 8.33, 8.26, 8.32, 9.11],
        type: 'scatter',
        text: ['CGPA','CGPA','CGPA','CGPA','CGPA','CGPA'],
        marker: {
            color: 'rgb(32, 212, 29)'
        }}
      ];
      var layout = {
                title: {
            text: 'B.Tech Semister marks(cgpa)'
        },
        font:{
            family: 'Raleway, sans-serif'
        },
        showlegend: false,
        xaxis: {
            tickangle: -45
        },
        yaxis: {
            zeroline: false,
            gridwidth: 2
        },
        bargap :0.05
    };
      var config = {responsive:true};
      window.Plotly.newPlot(chartRef.current, data,layout,config);
    };
    document.body.appendChild(script);
  }, []);

  return <div ref={chartRef}/>;
};

export default PlotlyChart;
