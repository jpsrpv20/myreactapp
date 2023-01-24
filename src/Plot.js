import React, { useState, useEffect } from 'react';

function Plot() {
  const [html, setHtml] = useState(null);

  useEffect(() => {
    fetch('https://y23idbjig0.execute-api.us-west-1.amazonaws.com/test/fetchpyplotfigureresource')
        .then(response => response.text())
        .then((html) => setHtml(html));
        //.then((data) => console.log(data))
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: html }} />
    //<p>HELLO{html}</p>
  );
}

export default Plot;