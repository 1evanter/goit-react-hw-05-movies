import { Link, Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Loader } from "./Loader";

const Layout = () => {
    return (
        <div>
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/movies">Movies</Link>
                    </li>
                </ul>
            </nav>
            </header>
            <main>
                <Suspense fallback={<Loader/>}>
                <Outlet/>
                </Suspense>
            </main>
            </div>
    )
}

export default Layout;