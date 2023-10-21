


import { AppBar, Toolbar, styled } from "@mui/material"

const Container = styled(AppBar)`
    background: #060606;
    position: static;
    border-bottom: 1px solid #2f2f2f;
    height: 9vh;
`;

const Header = () => {
    const logo = 'https://is2-ssl.mzstatic.com/image/thumb/Purple126/v4/89/45/96/8945962c-2923-681f-e63f-3459986ecbfb/AppIcon-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg';
    return (
        <Container>
            <Toolbar>
                <img src={logo} alt="logo" style={{ width: 40 }} />
            </Toolbar>
        </Container>
    )
}

export default Header