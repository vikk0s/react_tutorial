import React from 'react';
import ReactDom from 'react-dom/client';

import './index.css'

const firstBook = {
    img: './images/book_1.jpg',
    title: 'Good Energy',
    author: 'Casey Means MD',
}

const secondBook = {
    img: './images/book_2.jpg',
    title: 'It Starts with Us',
    author: 'Golleen Hoover',
}

const BookList = () => {
    return (
        <section className='booklist'>
            <Book author={firstBook.author} title={firstBook.title} img={firstBook.img} />
            <Book author={secondBook.author} title={secondBook.title} img={secondBook.img} />
        </section>
    )
}

const Book = (props) => {
    console.log(props)
    return (
        <article className='book'>
            <img src={props.img} alt={props.title} />
            <h2>{props.title}</h2>
            <h4>{props.author}</h4>
        </article>
    )
}

const Image = () => {
    return 
}
const Title = () => {
    return 
}
const Author = () => {
    return 
}

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(<BookList />);