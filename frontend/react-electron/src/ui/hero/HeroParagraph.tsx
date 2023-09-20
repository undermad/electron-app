import React from "react";

export const HeroParagraph: React.FC<{
    children: React.ReactNode
}> = (props) =>{

    return (
        <h2 className={"text-xl"}>{props.children}</h2>
    )
}