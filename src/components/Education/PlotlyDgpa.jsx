import React,{useEffect,useRef} from 'react'

export const PlotlyDgpa = () => {
  const chartRef = useRef(null);
  
    useEffect(() => {
      // Load the Plotly script dynamically
      const script = document.createElement('script');
      script.src = 'https://cdn.plot.ly/plotly-latest.min.js';
      script.async = true;
      script.onload = () => {
        // Once Plotly is loaded, create the chart
        const data = [
                        {
                domain: { x: [0, 1], y: [0, 1] },
                value: 8.11,
                title: { text: "DGPA" },
                type: "indicator",
                mode: "gauge+number",
                delta: { reference: 400 },
                gauge: { axis: { range: [null, 10] } }
            }
        ];
        var layout = {
                  title: {
              text: 'B.Tech ALL SEM'
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
export default PlotlyDgpa;
