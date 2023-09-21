import React from "react";

export const HeroText: React.FC<{
    children: React.ReactNode
}> = (props) =>{

    return (
        <div className={"basis-1/2 max-w-[1000px] h-[600px] flex flex-col justify-center px-10"}>
            {props.children}
        </div>
    )

}