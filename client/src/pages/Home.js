// this is the landing page for the app, including the search box
// import the react package and it's Component class, which includes methods (including render())
import React, { Component } from "react";
//  The following are React components, portions of the UI
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Form from "../components/Form";
import Book from "../components/Book";
import Footer from "../components/Footer";
// import the axios requests related to the google books API and the database
import API from "../utils/API";
// import functions defining HTML elements from the Grid and List components
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";

// define a Class component
class Home extends Component {
  // set the initial state properties
  state = {
    books: [],
    q: "",
    message: "Search For A Book To Begin!"
  };

  // event listener for entries into the search box.  'event' is a key press
  // the "name"attribute for the element is 'q', which is passed to the getBooks axios call in API.js
  // the 'value' is the name of the book being searched
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // function getBooks executes the getBooks call in API.js, passing in the book title
  // after the call is executed, state is updated by adding the books returned to the books array.
  // if no books are returned, the books array to set to empty. 
  getBooks = () => {
    API.getBooks(this.state.q)
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      .catch(() =>
        this.setState({
          books: [],
          message: "No New Books Found, Try a Different Query"
        })
      );
  };

  // this function is the event listener triggered when the search button is clicked
  // it calls tehe getBooks function above.
  handleFormSubmit = event => {
    event.preventDefault();
    this.getBooks();
  };

  // this function calls API.saveBook, the call to save the returned book to the database with the data
  // as defined in the schema in root /models/book.js
  handleBookSave = id => {
    const book = this.state.books.find(book => book.id === id);

    API.saveBook({
      googleId: book.id,
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail
    }).then(() => this.getBooks());
  };

  // call the render function to render the enclosed components and JSX elements to the browser
  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">
                <strong>(React) Google Books Search</strong>
              </h1>
              <h2 className="text-center">Search for and Save Books of Interest.</h2>
            </Jumbotron>
          </Col>
          <Col size="md-12">
            {/* props for the Card component (icon, title, children) are defined here */}
            <Card title="Book Search" icon="far fa-book">
              <Form
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                q={this.state.q}
              />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Results">
              {this.state.books.length ? (
                <List>
                  {/* the props provided to the Book component are defined below */}
                  {this.state.books.map(book => (
                    <Book
                      key={book.id}
                      title={book.volumeInfo.title}
                      subtitle={book.volumeInfo.subtitle}
                      link={book.volumeInfo.infoLink}
                      authors={book.volumeInfo.authors.join(", ")}
                      description={book.volumeInfo.description}
                      image={book.volumeInfo.imageLinks.thumbnail}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookSave(book.id)}
                          className="btn btn-primary ml-2"
                        >
                          Save
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                  <h2 className="text-center">{this.state.message}</h2>
                )}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default Home;
