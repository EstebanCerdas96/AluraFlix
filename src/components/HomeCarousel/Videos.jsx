import { useState, useEffect } from "react";
import { buscar } from "../../api/api";

const VideosPorCategorias = ({ children }) => {
  const [videosPorCategoria, setVideosPorCategoria] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await buscar("/videos");

        const videosCategorizados = response.reduce((acc, video) => {
          const categoria = video.categorias.nombre;
          if (!acc[categoria]) {
            acc[categoria] = [];
          }
          acc[categoria].push(video);
          return acc;
        }, {});

        setVideosPorCategoria(videosCategorizados)
      } catch(error) {
        console.log("Error al obtener los videos:", error);
      }
    };

    fetchData();
  }, []);

  return <div>{children(videosPorCategoria)}</div>;
};

export default VideosPorCategorias;
