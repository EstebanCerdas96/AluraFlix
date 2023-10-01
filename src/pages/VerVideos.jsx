import { useState, useEffect } from "react";
import { buscar } from "../api/api";
import { useParams } from "react-router-dom";
import YoutubeEmbed from "../components/EmbedYt/EmbedYt"
import styled from "styled-components";

const VerVideo = ()=>{
    const [vid, setVideo] = useState({});
    const { id } = useParams();

    useEffect(() => {
		buscar( `/videos/${id}`, setVideo).catch(() => {
			console.log(id)
		});
	}, [id]);

    return(
        <Container>
            <YoutubeEmbed embedId={vid.embedId}/>
            <Text>
                <Title>{vid.title}</Title>
			    <Description>{vid.metadescription}</Description>
            </Text>
        </Container>
    )
}

export default VerVideo

const Container = styled.div`
    background: black;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px;
`
const Text = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 27rem;
    text-align: justify;
`

const Title = styled.h1`
    color: white;
    text-align: center;
    font-size: 46px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 20px;
`

const Description = styled.p`
    color: white;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;

`