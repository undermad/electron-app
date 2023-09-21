import {HeroText} from "../hero/HeroText.tsx";
import messageImage from "../../../resources/images/message.jpg";
import {LoginButton} from "../buttons/LoginButton.tsx";

export const MessageService = () => {

    return (
        <section className={"container m-auto"}>
            <div className={"flex flex-row p-10 my-5 border rounded mx-10"}>
                <div
                    className={"bg-cover bg-center basis-1/2"}
                    style={{backgroundImage: `url(${messageImage})`}}
                ></div>
                <HeroText>
                    <h2 className={"mb-5 text-6xl"}>Can't find what you looking for</h2>
                    <p className={"text-xl mb-5 leading-snug font-thin"}>
                        If you can not find what you looking for just send us message!
                        Our dedicated team will answer you shortly!
                    </p>
                    <LoginButton>Sign up</LoginButton>
                </HeroText>
            </div>

        </section>
    )
}