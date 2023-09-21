import {Welcome} from "./welcome/Welcome.tsx";
import {Carousel} from "./carousel/Carousel.tsx";
import {Hero} from "./hero/Hero.tsx";
import {MessageService} from "./contact/MessageService.tsx";


export const HomePage = () => {


    return (
        <>
            <Welcome/>
            <Carousel/>
            <Hero/>
            <MessageService/>
        </>
    )
}
