import './index.css'
import {HomePage} from "./ui/hompage/HomePage.tsx";
import {Navbar} from "./ui/navbar/Navbar.tsx";
import {Footer} from "./ui/navbar/Footer.tsx";

function App() {

    return (
        <div>
            <Navbar/>
            <HomePage/>
            <Footer/>
        </div>
    )
}

export default App
