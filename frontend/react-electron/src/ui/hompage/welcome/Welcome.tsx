import keyboard from "../../../resources/images/keyboard.jpg";

export const Welcome = () => {
    return (
        <div className={"overflow-hidden text-sky-50 relative"}>
            <div
                className={"w-full h-[700px] bg-cover bg-center blur-md scale-110 -z-10"}
                style={{backgroundImage: `url(${keyboard})`}}>

            </div>
            <div className={"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"}>
                <h1 className={"text-6xl py-2 mb-3 font-bold"}>Never enough electronic in your home</h1>
                <p className={"text-2xl py-2 mb-5"}>Just find what you like!</p>
                <a href={"#"}>
                    <button className={"text-xl tracking-wide border rounded p-2 px-6 bg-sky-600 hover:bg-transparent hover:text-white transition-all"}>Explore</button>
                </a>
            </div>
        </div>
    )

}