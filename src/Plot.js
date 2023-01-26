import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
//import MatPlotLibFig from './MatPlotLibFig';

export default function Plot() {
  //const [html, setHtml] = useState(null);

  /*useEffect(() => {
    fetch('https://y23idbjig0.execute-api.us-west-1.amazonaws.com/test/fetchpyplotfigureresource')
        .then(response => response.text())
        .then((html) => setHtml(html));
        //.then((data) => console.log(data))
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: html }} />
    //<p>HELLO{html}</p>
  );*/

  //const html = "\n\n<script type=\"text/javascript\" src=\"https://d3js.org/d3.v5.js\"></script>\n<script type=\"text/javascript\" src=\"https://mpld3.github.io/js/mpld3.v0.5.9.js\"></script>\n\n\n<style>\n\n</style>\n\n<div id=\"fig_el81398642599628327293143110\"></div>\n<script type=\"text/javascript\">\n\n  !function(mpld3){\n       \n       mpld3.draw_figure(\"fig_el81398642599628327293143110\", {\"width\": 640.0, \"height\": 480.0, \"axes\": [{\"bbox\": [0.125, 0.10999999999999999, 0.775, 0.77], \"xlim\": [-0.15000000000000002, 3.15], \"ylim\": [0.85, 4.15], \"xdomain\": [-0.15000000000000002, 3.15], \"ydomain\": [0.85, 4.15], \"xscale\": \"linear\", \"yscale\": \"linear\", \"axes\": [{\"position\": \"bottom\", \"nticks\": 9, \"tickvalues\": null, \"tickformat_formatter\": \"\", \"tickformat\": null, \"scale\": \"linear\", \"fontsize\": 10.0, \"grid\": {\"gridOn\": false}, \"visible\": true}, {\"position\": \"left\", \"nticks\": 9, \"tickvalues\": null, \"tickformat_formatter\": \"\", \"tickformat\": null, \"scale\": \"linear\", \"fontsize\": 10.0, \"grid\": {\"gridOn\": false}, \"visible\": true}], \"axesbg\": \"#FFFFFF\", \"axesbgalpha\": null, \"zoomable\": true, \"id\": \"el8139864217083088\", \"lines\": [{\"data\": \"data01\", \"xindex\": 0, \"yindex\": 1, \"coordinates\": \"data\", \"id\": \"el8139864214301648\", \"color\": \"#1F77B4\", \"linewidth\": 1.5, \"dasharray\": \"none\", \"alpha\": 1, \"zorder\": 2, \"drawstyle\": \"default\"}], \"paths\": [], \"markers\": [], \"texts\": [{\"text\": \"some numbers\", \"position\": [-0.0751568100358423, 0.5], \"coordinates\": \"axes\", \"h_anchor\": \"middle\", \"v_baseline\": \"auto\", \"rotation\": -90.0, \"fontsize\": 10.0, \"color\": \"#000000\", \"alpha\": 1, \"zorder\": 3, \"id\": \"el8139864259866512\"}], \"collections\": [], \"images\": [], \"sharex\": [], \"sharey\": []}], \"data\": {\"data01\": [[0.0, 1.0], [1.0, 2.0], [2.0, 3.0], [3.0, 4.0]]}, \"id\": \"el8139864259962832\", \"plugins\": [{\"type\": \"reset\"}, {\"type\": \"zoom\", \"button\": true, \"enabled\": false}, {\"type\": \"boxzoom\", \"button\": true, \"enabled\": false}]});\n  }(mpld3);\n\n\n</script>""; 
  
  const [responseData, setResponseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const html_code = `<style>

  </style>
  
  <div id="fig_el8140568575171664819781008"></div>
  <script>
    function mpld3_load_lib(url, callback){
    var s = document.createElement('script');
    s.src = url;
    s.async = true;
    s.onreadystatechange = s.onload = callback;
    s.onerror = function(){console.warn("failed to load library " + url);};
    document.getElementsByTagName("head")[0].appendChild(s);
  }
  
  if(typeof(mpld3) !== "undefined" && mpld3._mpld3IsLoaded){
     // already loaded: just create the figure
     !function(mpld3){
         
         mpld3.draw_figure("fig_el8140568575171664819781008", {"width": 640.0, "height": 480.0, "axes": [{"bbox": [0.125, 0.10999999999999999, 0.775, 0.77], "xlim": [-0.15000000000000002, 3.15], "ylim": [0.85, 4.15], "xdomain": [-0.15000000000000002, 3.15], "ydomain": [0.85, 4.15], "xscale": "linear", "yscale": "linear", "axes": [{"position": "bottom", "nticks": 9, "tickvalues": null, "tickformat_formatter": "", "tickformat": null, "scale": "linear", "fontsize": 10.0, "grid": {"gridOn": false}, "visible": true}, {"position": "left", "nticks": 9, "tickvalues": null, "tickformat_formatter": "", "tickformat": null, "scale": "linear", "fontsize": 10.0, "grid": {"gridOn": false}, "visible": true}], "axesbg": "#FFFFFF", "axesbgalpha": null, "zoomable": true, "id": "el8140568575230736", "lines": [{"data": "data01", "xindex": 0, "yindex": 1, "coordinates": "data", "id": "el8140568572485072", "color": "#1F77B4", "linewidth": 1.5, "dasharray": "none", "alpha": 1, "zorder": 2, "drawstyle": "default"}], "paths": [], "markers": [], "texts": [{"text": "some numbers", "position": [-0.0751568100358423, 0.5], "coordinates": "axes", "h_anchor": "middle", "v_baseline": "auto", "rotation": -90.0, "fontsize": 10.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el8140568575232144"}], "collections": [], "images": [], "sharex": [], "sharey": []}], "data": {"data01": [[0.0, 1.0], [1.0, 2.0], [2.0, 3.0], [3.0, 4.0]]}, "id": "el8140568575171664", "plugins": [{"type": "reset"}, {"type": "zoom", "button": true, "enabled": false}, {"type": "boxzoom", "button": true, "enabled": false}]});
     }(mpld3);
  }else if(typeof define === "function" && define.amd){
     // require.js is available: use it to load d3/mpld3
     require.config({paths: {d3: "https://d3js.org/d3.v5"}});
     require(["d3"], function(d3){
        window.d3 = d3;
        mpld3_load_lib("https://mpld3.github.io/js/mpld3.v0.5.9.js", function(){
           
           mpld3.draw_figure("fig_el8140568575171664819781008", {"width": 640.0, "height": 480.0, "axes": [{"bbox": [0.125, 0.10999999999999999, 0.775, 0.77], "xlim": [-0.15000000000000002, 3.15], "ylim": [0.85, 4.15], "xdomain": [-0.15000000000000002, 3.15], "ydomain": [0.85, 4.15], "xscale": "linear", "yscale": "linear", "axes": [{"position": "bottom", "nticks": 9, "tickvalues": null, "tickformat_formatter": "", "tickformat": null, "scale": "linear", "fontsize": 10.0, "grid": {"gridOn": false}, "visible": true}, {"position": "left", "nticks": 9, "tickvalues": null, "tickformat_formatter": "", "tickformat": null, "scale": "linear", "fontsize": 10.0, "grid": {"gridOn": false}, "visible": true}], "axesbg": "#FFFFFF", "axesbgalpha": null, "zoomable": true, "id": "el8140568575230736", "lines": [{"data": "data01", "xindex": 0, "yindex": 1, "coordinates": "data", "id": "el8140568572485072", "color": "#1F77B4", "linewidth": 1.5, "dasharray": "none", "alpha": 1, "zorder": 2, "drawstyle": "default"}], "paths": [], "markers": [], "texts": [{"text": "some numbers", "position": [-0.0751568100358423, 0.5], "coordinates": "axes", "h_anchor": "middle", "v_baseline": "auto", "rotation": -90.0, "fontsize": 10.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el8140568575232144"}], "collections": [], "images": [], "sharex": [], "sharey": []}], "data": {"data01": [[0.0, 1.0], [1.0, 2.0], [2.0, 3.0], [3.0, 4.0]]}, "id": "el8140568575171664", "plugins": [{"type": "reset"}, {"type": "zoom", "button": true, "enabled": false}, {"type": "boxzoom", "button": true, "enabled": false}]});
        });
      });
  }else{
      // require.js not available: dynamically load d3 & mpld3
      mpld3_load_lib("https://d3js.org/d3.v5.js", function(){
           mpld3_load_lib("https://mpld3.github.io/js/mpld3.v0.5.9.js", function(){
                   
                   mpld3.draw_figure("fig_el8140568575171664819781008", {"width": 640.0, "height": 480.0, "axes": [{"bbox": [0.125, 0.10999999999999999, 0.775, 0.77], "xlim": [-0.15000000000000002, 3.15], "ylim": [0.85, 4.15], "xdomain": [-0.15000000000000002, 3.15], "ydomain": [0.85, 4.15], "xscale": "linear", "yscale": "linear", "axes": [{"position": "bottom", "nticks": 9, "tickvalues": null, "tickformat_formatter": "", "tickformat": null, "scale": "linear", "fontsize": 10.0, "grid": {"gridOn": false}, "visible": true}, {"position": "left", "nticks": 9, "tickvalues": null, "tickformat_formatter": "", "tickformat": null, "scale": "linear", "fontsize": 10.0, "grid": {"gridOn": false}, "visible": true}], "axesbg": "#FFFFFF", "axesbgalpha": null, "zoomable": true, "id": "el8140568575230736", "lines": [{"data": "data01", "xindex": 0, "yindex": 1, "coordinates": "data", "id": "el8140568572485072", "color": "#1F77B4", "linewidth": 1.5, "dasharray": "none", "alpha": 1, "zorder": 2, "drawstyle": "default"}], "paths": [], "markers": [], "texts": [{"text": "some numbers", "position": [-0.0751568100358423, 0.5], "coordinates": "axes", "h_anchor": "middle", "v_baseline": "auto", "rotation": -90.0, "fontsize": 10.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el8140568575232144"}], "collections": [], "images": [], "sharex": [], "sharey": []}], "data": {"data01": [[0.0, 1.0], [1.0, 2.0], [2.0, 3.0], [3.0, 4.0]]}, "id": "el8140568575171664", "plugins": [{"type": "reset"}, {"type": "zoom", "button": true, "enabled": false}, {"type": "boxzoom", "button": true, "enabled": false}]});
              })
           });
  }
  </script>`;

  /*const getData = async () => {
      try {
          const response = await fetch('https://y23idbjig0.execute-api.us-west-1.amazonaws.com/test/fetchpyplotfigureresource');
          const data = await response.text();
          setResponseData(data);
          console.log(responseData);
          console.log('It fetched correctly!');
      } catch (error) {
          console.error(error);
      }
  }*/

  /*useEffect(() => {
    fetch(`https://y23idbjig0.execute-api.us-west-1.amazonaws.com/test/fetchpyplotfigureresource`)
      .then(response => response.text())
      .then((usefulData) => {
        console.log(usefulData);
        setLoading(false);
        setResponseData(usefulData);
        console.log('This is responseData: ');
        console.log(responseData);
      })
      .catch((e) => {
        console.error(`An error occurred: ${e}`)
      });
  }, []);*/

  ChartJS.register(ArcElement, Tooltip, Legend);

  useEffect(() => {
    fetch(
      `https://y23idbjig0.execute-api.us-west-1.amazonaws.com/test/fetchpyplotfigureresource`
    )
      .then((response) => response.json())
      .then(setResponseData);
  },[]);
  if(responseData)
    return(
      <div><Doughnut data={responseData} /></div>
      
      //<div dangerouslySetInnerHTML={{ __html: html_code }} />
      //<pre>{JSON.stringify(responseData,null,2)}</pre>
      //<MatPlotLibFig fig_json={responseData}/>
    );



  /*return (
    <>
        {loading && <p>Loading...</p>}
        {!loading && <div dangerouslySetInnerHTML={{ __html: responseData }} />}
    </>
  )*/

  /*useEffect(() => {
      getData();
  }, []);
  
  return (
    <div>
        {responseData ? (
            <div dangerouslySetInnerHTML={{ __html: responseData }} />
        ) : (
            <p>Loading...</p>
        )}
    </div>
);
 // return (<div dangerouslySetInnerHTML={{ __html: responseData }} />);*/

}

//export default Plot;