import React from "react";

export const HeroParagraph: React.FC<{
    children: React.ReactNode
}> = (props) =>{

    return (
        <p className={"text-xl mb-5 leading-snug"}>{props.children}</p>
    )
}