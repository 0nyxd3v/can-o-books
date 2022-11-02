// import axios from "axios";
import React from "react";
// import axios from 'axios';
import { Button, Container, Form, Modal} from 'react-bootstrap';



class AddBooks extends React.Component {

  handleBookSubmit = (event) => {
    event.preventDefault();
    
    let newBook = {
      title: event.target.title.value,
      description: event.target.description.value,
      status: event.target.status.checked,
    }
    console.log(newBook);
    
    this.props.postBooks(newBook)
  }

  
  render() {
    return (
      <>
        <main>
        <Modal show={this.props.show} onHide={this.props.close}>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Add New Books</Modal.Title>
          </Modal.Header>

            <Container className="container1">
              <Form onSubmit={this.handleBookSubmit}>
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
                <Button onSubmit={this.props.postBooks} type="submit">Add Books</Button>
              </Form>
            </Container>
          </Modal.Dialog>
          </Modal>
        </main>
      </>
    )
  }
}

export default AddBooks;
