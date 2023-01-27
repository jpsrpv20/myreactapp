import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Plot from './Plot';
import Plot2 from './Plot2';
import TestChart from './TestChart';
import React, { useState } from 'react';

function DaveForm() {
  const [isSubmitted, setSubmitted] = useState(false);
  return (
    <>
    <Form >
      <Form.Group className="mb-3" controlId="formDataSet">
        <Form.Label>Upload a dataset</Form.Label>
        <Form.Control type="file" />
      </Form.Group>

      <Form.Select aria-label="Algorithm">
        <option>select an algorithm...</option>
        <option value="1">K-nearest neighbor</option>
        <option value="2">Alg 2</option>
        <option value="3">Alg 3</option>
      </Form.Select>

      <Form.Group className="mt-3">
          <Button onClick={() => setSubmitted(true)}>Run</Button>
      </Form.Group>
    </Form>
    {isSubmitted && <Plot />}
  </>
    
   //<Plot />
  );

/*function DaveForm() {
  return (
    <>
    <Form>
      <Form.Group className="mb-3" controlId="formDataSet">
        <Form.Label>Upload a dataset</Form.Label>
        <Form.Control type="file" />
      </Form.Group>

      <Form.Select aria-label="Algorithm">
        <option>select an algorithm...</option>
        <option value="1">K-nearest neighbor</option>
        <option value="2">Alg 2</option>
        <option value="3">Alg 3</option>
      </Form.Select>
    </Form>
      <Plot2 />
  </>
    
  );*/

}
export default DaveForm;