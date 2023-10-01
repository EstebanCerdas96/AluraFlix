import banner from "./assets/img/banner.png"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import banner_background from "./assets/img/banner_background.png"

const Banner = () => {
    const navigate = useNavigate();
    return <Container >
        <TextContainer className="banner__text">
            <Title>Front End</Title>
            <SubTitle>Challenge React</SubTitle>
            <Text>Este challenge es una forma de aprendizaje. Es un mecanismo donde podras comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</Text>
        </TextContainer>
        <Img src={banner} alt="Banner" className="banner__img" onClick={() => navigate("/ver/6389196a-fdd8-4410-9b30-a49b7affb46d")} />
    </Container>
}

export default Banner

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 45rem;
    padding: 2rem;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${banner_background});
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    text-align: justify;
    width: 30rem;
    height: 18rem;
    color: white;
`

const Img = styled.img`
    height: 18rem;
    cursor: pointer;
`

const Title = styled.h1`
    display: flex;
    width: 296px;
    height: 92px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    background: #6BD1FF;
    color: #F5F5F5;
    text-align: center;
    font-family: Roboto;
    font-size: 60px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

const SubTitle = styled.h2`
    color: #F5F5F5;
    font-family: Roboto;
    font-size: 46px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

const Text = styled.p`
    width: 30rem;
    height: 110px;
    flex-shrink: 0;
    color: #F5F5F5;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
`

