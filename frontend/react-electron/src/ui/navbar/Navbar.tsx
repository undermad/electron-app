export const Navbar = () => {
    return (
        <nav className={"flex gap-3 bg-sky-600 items-center p-3 text-sky-50"}>
            <div className={"ml-4"}>
                <a href={"#"}>
                    <span className={"text-xl tracking-widest p-2"}>Electron</span>
                </a>
            </div>
            <div className={"flex gap-3 ml-10"}>
                <a className={"p-2"} href={"#"}>Home</a>
                <a className={"p-2"} href={"#"}>Search</a>
            </div>
            <div className={"ml-auto mr-4"}>
                <button className={"border rounded p-2 hover:text-sky-600 hover:bg-sky-50 transition-all"}>
                    Sign in
                </button>
            </div>

        </nav>
    )
}