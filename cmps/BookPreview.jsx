
export function BookPreview({ book }) {
    console.log('book: ', book)

    const { title, listPrice, thumbnail } = book
    return (
        <article className="book-card">
            <h2>title: {title}</h2>
            <h4>price: {listPrice.amount}<span> {listPrice.currencyCode}</span></h4>
            <img src={thumbnail} alt="Book Image"
                onError={({ currentTarget }) => currentTarget.src = "../BooksImages/2.jpg"}
            />
        </article>
    )
}