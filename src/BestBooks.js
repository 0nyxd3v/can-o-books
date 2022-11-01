import React from 'react';
import axios from 'axios';
import { Carousel, Container, Image } from 'react-bootstrap';


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      src: '',
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */

  getBookData = async() => {
    try {
      let bookData = await axios.get(`${process.env.REACT_APP_SERVER}/books`);
      this.setState({
        books: bookData.data,
        src: ''
      })
    } catch (error) {
      console.log('An error has occured: ', error.response);
    }
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
        </Carousel.Caption>
    </Carousel.Item>
    )

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <Container>
            <Carousel>
              {bookItems}
            </Carousel>
          </Container>
        ) : (
          <h3>No Books Found :(</h3>
        )}

        {/* <Container>
          <Carousel>
            {bookItems}
          </Carousel>
        </Container> */}

      </>
    )
  }
}

export default BestBooks;
