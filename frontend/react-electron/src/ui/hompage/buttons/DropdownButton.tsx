import {useState} from "react";
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';


interface DropdownButtonProps {
    name: string;
    // children: React.ReactNode,
}

export const DropdownButton = (props: DropdownButtonProps) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const [name, setName] = useState<string | null>(props.name);

    const handleButtonClick = () => {
        setIsExpanded(!isExpanded)
    }
    const handleOnListItemClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        setName(event.currentTarget.textContent);
        setIsExpanded(!isExpanded);
    }


    return (
        <div className={"relative w-[125px] "}>
            <div
                className={"border rounded p-3 cursor-pointer flex items-center gap-2"}
                onClick={handleButtonClick}>
                <span className={"mr-auto"}>{name}</span>
                {isExpanded ? <MdArrowDropUp/> : <MdArrowDropDown/>}

            </div>

            {isExpanded ?
                <div className={"absolute top-full bg-black w-[125px]"}>
                    <ul className={"px-3"}>
                        <li onClick={handleOnListItemClick} className={"py-2 cursor-pointer"}>Cat 1</li>
                        <li onClick={handleOnListItemClick} className={"py-2 cursor-pointer"}>Cat 2</li>
                        <li onClick={handleOnListItemClick} className={"py-2 cursor-pointer"}>Cat 3</li>
                    </ul>
                </div>
            :
                <></>
            }


        </div>
    )
}