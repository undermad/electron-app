import React from "react";

export const HeroHeader: React.FC<{
    children: React.ReactNode
}> = (props) =>{

    return (
            <h2 className={"text-4xl mb-5"}>{props.children}</h2>
    )
}