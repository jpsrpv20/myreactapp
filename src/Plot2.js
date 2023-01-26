import React, { useState, useEffect } from 'react';

class Plot2 extends React.Component {
    constructor(props) {
      super(props);
      this.state = { html: null };
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      fetch('https://y23idbjig0.execute-api.us-west-1.amazonaws.com/test/fetchpyplotfigureresource')
        .then(response => response.text())
        .then(html => {
          this.setState({ html });
        });
    }
  
    render() {
      const { html } = this.state;
      return (
        <div>
          <button onClick={this.handleClick}>Fetch data</button>
          {html && <div dangerouslySetInnerHTML={{ __html: html }} />}
        </div>
      );
    }
  }

  export default Plot2;