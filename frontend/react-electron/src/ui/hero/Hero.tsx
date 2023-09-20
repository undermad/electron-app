import lenovo from "../images/lenovo.jpg"
import alienware from "../images/alienware.jpg"
import {HeroImage} from "./HeroImage.tsx";
import {HeroText} from "./HeroText.tsx";
import {HeroHeader} from "./HeroHeader.tsx";
import {HeroParagraph} from "./HeroParagraph.tsx";


export const Hero = () => {

    return (
        <section className={"flex flex-col items-center"}>
            <div className={"flex"}>
                <HeroImage image={lenovo}/>
                <HeroText>
                    <HeroHeader>Greener data, healthier planet</HeroHeader>
                    <HeroParagraph>How innovative liquid cooling technology keeps data center emissions in check and offers a sustainable path to a healthier planet.</HeroParagraph>
                </HeroText>
            </div>

            <div className={"flex"}>
                <HeroText>
                    <HeroHeader>Greener data, healthier planet</HeroHeader>
                    <HeroParagraph>How innovative liquid cooling technology keeps data center
                        emissions in check and offers a sustainable path to a healthier planet.</HeroParagraph>
                </HeroText>
                <HeroImage image={alienware}/>
            </div>

        </section>
    )
}