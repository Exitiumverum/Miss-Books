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
    
    
    const { title, price } = book
    return (
        <section className="book-details">
            <h1>Title: {title}</h1>
            <h2>Price: {price}</h2>
            <p>Lorem ipsum dolor,
                sit amet consectetur adipisicing
                elit. Illum, ex voluptatem? Commodi velit
                , iure exercitationem nisi facilis repellat
                tempora dicta id perferendis aliquid
                alias quisquam facere obcaecati
                nam error cum?
            </p>
            <img src="/BooksImages/1.jpg" alt="" />
            <button>
                <Link to="/books">Back</Link>
                </button>
        </section>
    )
}