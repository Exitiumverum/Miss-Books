
export function BookPreview({ book }) {

    const { title, price } = book
    return (
        <article>
            <h2>title: {title}</h2>
            <h4>price: {price}</h4>
            <img src={`../BooksImages/1.jpg`} alt="Book Image"
                onError={({ currentTarget }) => currentTarget.src = "../BooksImages/2.jpg"}
            />
        </article>
    )
}