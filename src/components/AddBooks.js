import React from "react";
// import axios from 'axios';
import { Button, Container, Form } from 'react-bootstrap';


class AddBooks extends React.Component {
  render() {
    return (
      <>
        <main>
        <Container className="container1">
            <Form>
              <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group controlId="status">
                <Form.Check type="checkbox" label="status" />
              </Form.Group>
              <Button type="submit">Add Books</Button>
            </Form>
          </Container>
        </main>
      </>
    )
  }
}

export default AddBooks;
