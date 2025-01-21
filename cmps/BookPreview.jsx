
export function BookPreview({ book }) {

    const { title, price, thumbnail } = book
    return (
        <article className="book-card">
            <h2>title: {title}</h2>
            <h4>price: {price}</h4>
            <img src={thumbnail} alt="Book Image"
                onError={({ currentTarget }) => currentTarget.src = "../BooksImages/2.jpg"}
            />
        </article>
    )
}