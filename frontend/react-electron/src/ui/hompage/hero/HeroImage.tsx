export const HeroImage: React.FC<{
    image: string
}> = (props) => {

    return (
        <div className={"basis-1/2 w-[1000px] h-[600px] bg-cover bg-center"}
             style={{backgroundImage: `url(${props.image})`}}/>
    )
}
