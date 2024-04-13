import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Mock_data from "../API/Mock_data";

const Search_filter = () => {
  const [search, setsearch] = useState("");
  return (
    <>
      <Container>
        <h1 className="fs-1 text-center">Contact Keeper</h1>
        <Form>
          <InputGroup className="my-3">
            <Form.Control
              onChange={(e /*event*/) =>
                setsearch(
                  e /*here object milaga*/
                    .target /*particular html elemnt milage*/
                    .value /*particular html element ka context milaga*/
                )
              }
              placeholder="Search only by First Name"
              autoComplete="off"
            />
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
          <tbody>
            {Mock_data.filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.first_name.toLowerCase().includes(search);
            }).map((elem, id) => {
              const { email, first_name, last_name, phone } = elem;
              return (
                <tr /* table row */ key={id}>
                  <td /* tbody row cell */>{first_name}</td>
                  <td /* tbody row cell */>{last_name}</td>
                  <td /* tbody row cell */>{email}</td>
                  <td /* tbody row cell */>{phone}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default Search_filter;
