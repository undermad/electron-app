import './index.css'
import {HomePage} from "./ui/hompage/HomePage.tsx";
import {Navbar} from "./ui/navbar/Navbar.tsx";
import {Footer} from "./ui/navbar/Footer.tsx";
import {SearchBookPage} from "./ui/search_book_page/SearchBookPage.tsx";

function App() {

    return (
        <div>
            <Navbar/>
            <SearchBookPage/>
            {/*<HomePage/>*/}
            <Footer/>
        </div>
    )
}

export default App
