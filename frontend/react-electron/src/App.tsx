import './index.css'
import {Navbar} from "./ui/Navbar/Navbar.tsx";
import {ExploreTopProducts} from "./ui/hompage/ExploreTopProducts.tsx";
import {Carousel} from "./ui/carousel/Carousel.tsx";
import {Hero} from "./ui/hero/Hero.tsx";

function App() {

    return (
        <div>
            <Navbar/>
            <ExploreTopProducts/>
            <Carousel/>
            <Hero/>
        </div>
    )
}

export default App
