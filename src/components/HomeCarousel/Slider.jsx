import React from "react";
import { useState, useEffect } from "react";
import { buscar } from "../../api/api";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const ListVideos = ()=> {
  const [videosCategoria, setVideosCategoria] = useState([]);

  useEffect(() => {
    buscar("/videos", (videos) => {
      const videosCategorizados = videos.reduce((acc, video) => {
        const categoria = video.categoria.nombre
        if (!acc[categoria]) {
          acc[categoria] = [];
        }
        acc[categoria].push(video);
        return acc;
      }, {});
      setVideosCategoria(videosCategorizados);
    });
  }, []);

  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <Container className="videos__container">
      {Object.keys(videosCategoria).map((categoria) => {
        const videos = videosCategoria[categoria];
        

        return(
          <div key={categoria}>
            <Title className="categoria__title">{categoria}</Title>
            <Slider {...settings}>
              {videos.map((video) => {
                const {id, title, img, } = video;
                return (
                  <Link to={`/ver/${id}`} key={id}>
                    <Video className="video__card">
                      <article>
                        <Img src={`https://i.ytimg.com/vi/${img}/maxresdefault.jpg`} alt={title} className="img__video"/>
                      </article>
                    </Video>
                  </Link>
                );
              })}
            </Slider>
          </div>
        );
      })}
    </Container>
  );
}
  
export default ListVideos

const Container = styled.section`
  background: black;
`

const Title = styled.h2`
  color: white;
	text-align: center;
	display: flex;
	width: 19.3043rem;
	height: 6rem;
	flex-direction: column;
	justify-content: center;
	font-family: Roboto;
	font-size: 3.5rem;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
`

const Video = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  text-align: center;
`

const Img = styled.img`
  width: 25rem;
  border: px solid #6BD1FF;
`