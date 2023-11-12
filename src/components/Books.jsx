import { NavLink, Link, Outlet, useSearchParams, useLocation } from "react-router-dom";
import { getBooks } from "../data/data";

const Books = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    const books = getBooks();

    return (
        <div style={{ display: "flex" }}>
            <nav style={{ borderLeft: "1px solid", padding: "1rem" }}>
                <input type="text"
                    value={searchParams.get("filter") || ""}
                    onChange={event => {
                        let filter = event.target.value;
                        if(filter){
                            setSearchParams({filter});
                            // setSearchParams({filter : filter});
                        } else {
                            setSearchParams({});
                        }
                    }}
                    placeholder="جست و جوی کتاب" />
                    
                {
                     books.filter((book) => {
                        let filter = searchParams.get("filter");
                        if(!filter) return true;
                        let name = book.name.toLocaleLowerCase();
                        return name.startsWith(filter.toLocaleLowerCase());
                    })
                    .map((book) => (
                        // <Link to={`/books/${book.number}`} key={books.number} style={{display: "block"}}>
                        //     {book.name}
                        // </Link>

                        // to add active class :
                        <NavLink 
                        to={`/books/${book.number}${location.search}`} 
                        key={books.number}
                            style={({ isActive }) => {
                                return {
                                    display: "block",
                                    margin: "1rem 0",
                                    color: isActive ? "red" : "",
                                }
                            }}
                        >
                            {/* <NavLink to={`/books/${book.number}`} key={books.number} className={isActive ? "text-danger" : ""}> */}
                            {book.name}
                        </NavLink>
                    ))
                }
            </nav>
            <Outlet />
        </div>
    );
}

export default Books;
