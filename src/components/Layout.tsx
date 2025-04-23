import Wrapper from "./Wrapper";
import Header from "./Header";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <Wrapper>
            <Header />
            {children}
        </Wrapper>
    );
}

export default Layout;