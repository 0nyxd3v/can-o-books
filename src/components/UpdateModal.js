import React, { Component } from 'react'
import { Button, Form, Modal} from 'react-bootstrap';


export default class UpdateModal extends Component {
handleUpdateSubmit = (event)=>{
  console.log(event);
  event.preventDefault();

  let newBook = {
    title: event.target.title.value,
    description: event.target.description.value,
    status: event.target.status.checked,
    _id: this.props.updatedBook._id,
    __v: this.props.updatedBook.__v
  }
  console.log(newBook)
  this.props.updateBook(newBook)
}

  render() {
    return (
      <>
      <Modal className="modalSect" show={this.props.show} onHide={this.props.close}>
          <Modal.Header closeButton>
            <Modal.Title>Book Update</Modal.Title>
          </Modal.Header>
              <Form className="updateForm" onSubmit={this.handleUpdateSubmit} >
                <Form.Group controlId="title">
                  <Form.Label>Title</Form.Label>
                  <Form.Control type="text" defaultValue={this.props.updatedBook.title}/>
                </Form.Group>
                <Form.Group controlId="description">
                  <Form.Label>Description</Form.Label>
                  <Form.Control type="text" defaultValue={this.props.updatedBook.description}/>
                </Form.Group>
                <Form.Group controlId="status">
                  <Form.Check type="checkbox" label="available" defaultValue={this.props.updatedBook.status} />
                </Form.Group>
                <Button type="submit">Update Book</Button>
              </Form>
          </Modal>
          </>
    )
  }
}
