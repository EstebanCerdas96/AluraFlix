import logo from "./assets/img/logo.png"
import styled from "styled-components"

const Footer = () => {
    return <FooterStyle>
        <Logo src={logo} alt="Logo"/>
    </FooterStyle>
}

export default Footer

const FooterStyle = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 82px;
    background: black;
    padding: 20px;
    border-top: 1px solid #2A7AE4;
`

const Logo = styled.img`
    width: 200px;
`