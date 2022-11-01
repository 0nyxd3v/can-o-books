import React from 'react';
import axios from 'axios';
import { Carousel, Container } from 'react-bootstrap';


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */

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

  // REACT LIFE CYCLE METHOD
  componentDidMount() {
    this.getBookData();
  }


  render() {

    /* TODO: render all the books in a Carousel */
    console.log('App State: ', this.state);
    let bookItems = this.state.books.map(book =>  
      <Carousel.Item key={book._id}>
        <img
          src='book.src'
          alt='book.alt'        
        />
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
