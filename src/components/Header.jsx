import { useNavigate } from "react-router-dom"
import logo from "./assets/img/logo.png"
import Button from "./Button"
import styled from "styled-components"

const Header = () => {
    const navigate = useNavigate()
    
    return <HeaderStyle className="header__container">
        <Logo src={logo} alt="Logo AluraFlix" className="logo" onClick={() => navigate("/")}/>
        <Button />
    </HeaderStyle>
}

export default Header

const HeaderStyle = styled.header`
    height: 94px;
    flex-shrink: 0;
    border-bottom: 1px solid #2A7AE4;
    background: rgba(0, 0, 0, 0.90);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 25px;
`

const Logo = styled.img`
    width: 200px;
    cursor: pointer;
`