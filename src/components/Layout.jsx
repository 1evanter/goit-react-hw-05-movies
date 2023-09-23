import { Link, Outlet } from "react-router-dom";
import { Suspense } from "react";

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
                <Suspense fallback={<div>Loading...</div>}>
                <Outlet/>
                </Suspense>
            </main>
            </div>
    )
}

export default Layout;