import { bookService } from "../services/book.service.js"

const { useEffect, useState } = React
const { useParams, useNavigate, Link } = ReactRouterDOM

export function BookDetails() {

    const [book, setBook] = useState(null)
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        loadBook()
    }, [params.bookId])

    function loadBook() {
        bookService.get(params.bookId)
            .then(setBook)
            .catch(err => {
                console.log('problem getting book: ', err);
            })
    }

    if(!book) return <div>Loading...</div>
    // console.log(book);
    
    
    const { title, listPrice, pageCount, description, thumbnail } = book
    // console.log(thumbnail);
    
    let Difficulity 
    if(pageCount > 500) Difficulity = 'Serious Reading'
    else if(pageCount > 200) Difficulity = 'Decent Reading'
    else Difficulity = 'Light Reading'

    console.log(Difficulity);


    return (
        <section className="book-details">
            <h1>Title: {title}</h1>
            <h2>Price: {listPrice.amount} {listPrice.currencyCode}</h2>
            <h3>Difficulty: {Difficulity}</h3>
            <p>Description: {description}</p>
            <img src={thumbnail} alt={`${title} thumbnail`} />
            <button>
                <Link to="/books">Back</Link>
                </button>
        </section>
    )
}