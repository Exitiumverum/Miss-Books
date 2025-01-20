import { bookService } from "../services/book.service.js"
import { BookList } from "../cmps/BookList.jsx"


const { useState, useEffect } = React
const { Link } = ReactRouterDOM

export function BookIndex() {

    const [books, setBooks] = useState(null)
    const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())

    useEffect(() => {
        loadBooks()
    }, [filterBy])

    function loadBooks(){
        bookService.query(filterBy)
        .then(setBooks)
        .catch(err => {
            console.log('err: ', err);
            
        })
    }

    function onRemoveBook(bookId){
        bookService.remove(bookId)
        .then(() => {
            setBooks(books => 
                books.filter(book => book.id !== bookId)
            )
            console.log('book removed')
        })
        .catch(err => {
            console.log("err cannot remove book", err);
            
        })
    }

    function onSetFilter(filterByToEdit){
        setFilterBy(prevFilter => ({...prevFilter, ...filterByToEdit}))
    }

    if(!books) return <div>Loading...</div>
    return (
        <section className="book-index">
            <React.Fragment>
                {/* <BookFilter onSetFilter={onSetFilter} filterBy={filterBy} /> */}
                {/* <button> */}
                    {/* <Link to="/book/edit">Add Book</Link> */}
                {/* </button> */}
                <BookList onRemoveBook={onRemoveBook} books={books} />
            </React.Fragment>
        </section>
    )
}