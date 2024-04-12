import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "bootstrap/dist/css/bootstrap.min.css";

const Search_filter = () => {
  return (
    <>
      <Container>
        <h1 className="fs-1 text-center">Contact Keeper</h1>
        <Form>
          <InputGroup className="my-3">
            <Form.Control />
          </InputGroup>
        </Form>
        <Table>
          <thead /* table head top*/>
            <tr /* table row */>
              <th scope="col" /* table row cell */>First Name</th>
              <th scope="col" /* table row cell */>Last Name</th>
              <th scope="col" /* table row cell */>Email</th>
              <th scope="col" /* table row cell */>Phone</th>
            </tr>
          </thead>
          <tbody></tbody>
        </Table>
      </Container>
    </>
  );
};

export default Search_filter;
