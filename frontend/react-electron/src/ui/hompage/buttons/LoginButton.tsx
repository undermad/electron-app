export const LoginButton: React.FC<{
    children: React.ReactNode,
}> = (props) => {

    return (
        <button className={
            "text-xl text-sky-100 tracking-wide w-fit border rounded p-2 " +
            "px-6 bg-sky-600 " +
            "hover:bg-transparent hover:text-black transition-all"}>
            {props.children}</button>
    )
}