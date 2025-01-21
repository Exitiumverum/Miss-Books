const { useState, useEffect } = React

export function BookFilter({ filterBy, onSetFilter }) {

    const [filterByToEdit, setFilterByToEdit] = useState({ ...filterBy })

    useEffect(() => {
        onSetFilter(filterByToEdit)
    }, [filterByToEdit])

    function handleChange({ target }) {
        console.log('target', target.value);
        
        const field = target.name
        let value = target.value

        switch (target.type) {
            case 'number':
            case 'range':
                value = +value
                break;

            case 'checkbox':
                value = target.checked
                break;
        }
        // console.log(target)
        setFilterByToEdit(prevFilter => ({ ...prevFilter, [field]: value }))
    }
    console.log(filterByToEdit)

    const { txt, maxPrice } = filterByToEdit
    return (
        <section className="book-filter">
            <h2>Filter</h2>
            <form className="input-filter">
                <label htmlFor="txt">Title</label>
                <input onChange={handleChange} value={txt} type="text" name="txt" id="txt" />

                <label htmlFor="maxPrice">Max Price</label>
                <input onChange={handleChange} value={maxPrice} type="number" name="maxPrice" id="maxPrice" />
            </form>
        </section>
    )
}