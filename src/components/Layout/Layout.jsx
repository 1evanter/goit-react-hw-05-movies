import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Loader } from "../Loader";
import { GlobalStyles } from "components/GlobalStyles";
import { Header, Container, List, StyledLink } from "./Layout.styled";

const Layout = () => {
    return (
        <Container>
        <Header>
            <nav>
                <List>
                    <li>
                        <StyledLink to="/">Home</StyledLink>
                    </li>
                    <li>
                        <StyledLink to="/movies">Movies</StyledLink>
                    </li>
                </List>
            </nav>
            </Header>
            <main>
                <Suspense fallback={<Loader/>}>
                <Outlet/>
                </Suspense>
            </main>
            <GlobalStyles/>
            </Container>
    )
}

export default Layout;