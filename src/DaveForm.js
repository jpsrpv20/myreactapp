import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function DaveForm() {
  return (
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

      <Form.Group className="mt-3">
          <Button type="submit">Run</Button>
      </Form.Group>
    </Form>
  );
}

export default DaveForm;