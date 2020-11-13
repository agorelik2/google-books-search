import React, { useEffect, useState } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";

function SavedBooks() {
  const [savedBooks, setSavedBooks] = useState([]);

  // const { id } = useParams()
  useEffect(() => {
    loadBooks();
  }, []);

  function loadBooks() {
    API.getBooks()
      .then((res) => setSavedBooks(res.data))
      .catch((err) => console.log(err));
  }

  function deleteBook(id) {
    API.deleteBook(id)
      .then((res) => loadBooks())
      .catch((err) => console.log(err));
  }

  return (
    <Container fluid>
      <Row>
        <Col size="md-10">
          <Jumbotron className="fluid jumbtop">
            <h1>My Favorite Books</h1>
          </Jumbotron>
          <br></br>
          <br></br>

          {savedBooks.length ? (
            <List>
              {savedBooks.map((savedBook) => (
                <ListItem key={savedBook._id}>
                  <strong className="saved-book">
                    {savedBook.title + "   "}
                    by
                    {"   " + savedBook.authors}
                  </strong>
                  <br></br>
                  <br></br>
                  <a href={savedBook.link}>
                    <img
                      src={
                        savedBook.image === undefined
                          ? ""
                          : `${savedBook.image}`
                      }
                      alt={savedBook.title}
                      // className="md"
                    />
                  </a>

                  <p className="book-description">{savedBook.description}</p>

                  <DeleteBtn onClick={() => deleteBook(savedBook._id)} />
                </ListItem>
              ))}
            </List>
          ) : (
            <h2>No Books to Display</h2>
          )}
        </Col>
      </Row>
    </Container>
  );
}
export default SavedBooks;
