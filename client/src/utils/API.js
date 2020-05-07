// this file includes the code for making axios calls to the google books API
// and to the database.  axios is the bridge between the client and the server side.
// use axios to make requests both to the google API and the database
import axios from "axios";

export default {
  // Gets books from the Google API
  getBooks: function (q) {
    return axios.get("/api/google", { params: { q: "title:" + q } });
  },
  // Gets all saved books
  getSavedBooks: function () {
    return axios.get("/api/books");
  },
  // Deletes the saved book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves an book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  }
};
