import React from 'react';
import { Link } from 'react-router-dom';
import { deleteBook } from './bookSlice';
import { useSelector, useDispatch } from 'react-redux';

const BooksView = () => {

  const books = useSelector(state => state.bookReducer.books)
  const dispatch = useDispatch()

  const handleDeleteBook = (id) => {
    dispatch(deleteBook(id))
  }

  return (
    <div className="bookList">
      <h2 className='bookListTitle'
       style={{textAlign:"center"}} >List of Books 📚</h2>
      <div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            books && books.map(book => {
              const { id, title, author } = book
              return (
                <tr key={id}>
                  <td>{title}</td>
                  <td>{author}</td>
                  <td>
                    <Link to='/edit-book' state={{id, title, author}}>
                      <button className='editBtn'>Edit</button>
                    </Link>
                    <button className='deleteBtn' onClick={() => handleDeleteBook(id)}>Delete</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div></div>
  )
}

export default BooksView