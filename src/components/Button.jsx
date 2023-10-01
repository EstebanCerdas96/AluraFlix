import { useNavigate } from "react-router-dom"
import styled from "styled-components";

const Button = () => {
    const navigate = useNavigate();

    return <Btn className="boton" onClick={() => navigate("/add-video")}>Nuevo video</Btn>
}

export default Button

const Btn = styled.button`
    width: 180.125px;
    height: 54px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    background: none;
    border-color: white;
    color: #FFF;
    text-align: center;
    font-family: Source Sans Pro;
    font-size: 21px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; 
    cursor: pointer;

    &:hover{
        background: #242222;
    }
`
