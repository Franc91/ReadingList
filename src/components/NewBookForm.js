import React, { useContext, useState } from 'react'
import { BookContext } from '../contexts/BookContext'

const NewBookForm = () => {
    const { dispatch } = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = e =>{
        e.preventDefault();
        dispatch({type: 'ADD_BOOK', book:{
            title,
            author
        }});
        setTitle('');
        setAuthor('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Book title" onChange={e => setTitle(e.target.value)} value={title} />
            <input type="text" placeholder="Author" onChange={e => setAuthor(e.target.value)} value={author} />
            <input type="submit" value="Add book"/>
        </form>
    )
}

export default NewBookForm
  