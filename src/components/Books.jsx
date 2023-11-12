import { Link } from "react-router-dom";
import { getBooks } from "../data/data";
const Books = () => {
    const books = getBooks();
    return (
        <div style={{display: "flex"}}>
            <nav style={{ borderLeft: "1px solid", padding: "1rem" }}>
                <input type="text" placeholder="جست و جوی کتاب" />
                {
                    books.map((book) => (
                        <Link to={`/books/${book.number}`} key={books.number} style={{display: "block"}}>
                            {book.name}
                        </Link>
                    ))
                }
            </nav>
        </div>
    );
}

export default Books;
