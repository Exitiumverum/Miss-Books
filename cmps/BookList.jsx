import { BookPreview } from "./BookPreview.jsx"

const { Link } = ReactRouterDOM

export function BookList({ books, onRemoveBook }) {

    return (
        <ul className="book-list">
            {books.map(book =>
                <li className="book-container" key={book.id}>
                    <BookPreview book={book}/>
                    <section className="book-btns">
                    <button onClick={() => onRemoveBook(book.id)}>Remove</button>
                    <button>
                            <Link to={`/books/${book.id}`}>Details</Link>
                        </button>
                        {/* <button>
                            <Link to={`/book/edit/${book.id}`}>Edit</Link>
                        </button> */}
                    </section>
                </li>
            )}
        </ul>
    )
}