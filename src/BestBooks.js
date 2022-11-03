import React from 'react';
import axios from 'axios';
import BookFormModal from './components/BookFormModal'
import UpdateModal from './components/UpdateModal'
import { Button, Carousel, Container, Image } from 'react-bootstrap';
import './BestBook.css';
// import { useLoaderData } from 'react-router-dom';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      updatedBook:null,
      modalState: false,
      updateModalState:false
    }
  }

// * ASYNC FUNCTIONS*

  getBookData = async() => {
    try {
      let bookData = await axios.get(`${process.env.REACT_APP_SERVER}/books`);
      this.setState({
        books: bookData.data,
      })
    } catch (error) {
      console.log('An error has occured: ', error.response);
    }
  }

  deleteBooks = async (bookID) => {
    try {
      let url =`${process.env.REACT_APP_SERVER}/books/${bookID}`;
      await axios.delete(url);

      let updatedBooks = this.state.books.filter(book => book._id !== bookID);

      this.setState({
        books: updatedBooks
      });

    } catch (error) {
      console.log(error.message);
    }

  }

  postBooks = async (newBookObj) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/books`;
      let newCreatedBook = await axios.post(url, newBookObj);

      this.setState({
        books: [...this.state.books, newCreatedBook.data]
      })
    } catch (error) {
      console.log(error.message)
    }
  } 

 updateBook = async (bookToUpdate) => { 
  console.log(bookToUpdate); 
  try {
  
    let url =`${process.env.REACT_APP_SERVER}/books/${bookToUpdate._id}`;
    let updatedBook = await axios.put(url, bookToUpdate);

    let updatedBookArr= this.state.books.map(existingBook =>{
      return existingBook._id === bookToUpdate._id ? updatedBook.data : existingBook
    })

    this.setState({
      books: updatedBookArr
    })
  }catch(error){
   console.log(error.message)
  }
  }
  
  // *ONCLICK/SUBMIT FUNCTIONS
  handleButtonClick = () => {
    this.props.handleOpenModal(this.props)
  }
// modal to add 
  handleOpenModal = () => {
    this.setState({
      modalState: true,
    })
  }

  handleClosedModal = () => {
    this.setState({
      modalState: false,
    })
  }

// *modal to update 

handleOpenUpModal = (book) => {
  this.setState({
    updateModalState: true,
    updatedBook:book
  })
}

handleCloseUpModal = () => {
  this.setState({
   updateModalState: false,
  })
}

  // REACT LIFE CYCLE METHOD
  componentDidMount() {
    this.getBookData();
  }


  render() {

    /* TODO: render all the books in a Carousel */
    console.log('App State: ', this.state);
    let bookItems = this.state.books.map(book =>  
      <Carousel.Item key={book._id}>
        <Image src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"  alt ={book.title}fluid />
        <Carousel.Caption>
          <h3>{book.title}</h3>
          <p>{book.description}</p>
          <Button onClick= {()=>{this.deleteBooks(book._id)}}>Delete Book</Button>
          <Button className="updateButton" onClick= {()=> this.handleOpenUpModal(book)}>Update Book</Button>
        </Carousel.Caption>  
      </Carousel.Item>
      

    )

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length > 0 ? (
          <Container className="carousel-cont">
            <Carousel>
              {bookItems}
            </Carousel>
          </Container>
        ) : (
          <h3>No Books Found :(</h3>
        )}

        <div className= "addButtonDiv">
          <Button onClick={this.handleOpenModal}>Add Book</Button>
        </div>
        
        <BookFormModal 
          show={this.state.modalState}
          close={this.handleClosedModal}
          postBooks={this.postBooks}
        />
        { this.state.updatedBook &&
        <UpdateModal
        show={this.state.updateModalState}
        close = {this.handleCloseUpModal}
        updateBook={this.updateBook}
        books = {this.state.books}
        updatedBook ={this.state.updatedBook}
        />
        }
      </>
    )
  }
}

export default BestBooks;
