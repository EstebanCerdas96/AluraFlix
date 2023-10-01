import axios from "axios"

export const api = axios.create({
    baseURL: "https://aluraflix-api-orcin.vercel.app/" //"http://localhost:5000" //  
})

export const buscar = async(url, setData) => {
  try{
    const respuesta = await api.get(url)
    setData(respuesta.data)
  } catch(error){
    console.error("Error al obtener datos:", error)
  }
    
}

export const obtenerCategorias = async () => {
  try {
    const respuesta = await api.get('/categoria'); 
    return respuesta.data;
  } catch (error) {
    console.error('Error al obtener las categorías:', error)
  }
};

export const agregarVideo = async (data) => {
    try {
      const respuesta = await api.post('/videos', data);
      console.log('Datos enviados:', respuesta.data);
      return respuesta.data; 
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
  };

  export const agregarCategoria = async(data) => {
    try{
      const respuesta = await api.post("/categoria", data);
      console.log("Datos enviados:", respuesta.data);
      return respuesta.data;
    } catch(error) {
      console.error("Error al agregar la categoría:", error);
    }
  }

  export const editarCategoria = async(id, data) => {
    try{
      const respuesta = await api.put(`/categoria/${id}`, data);
      console.log("catehoria editada:", respuesta.data);
      return respuesta.data
    } catch(error) {
      console.error("Error al editar la categoria:", error);
    }
  }
  
  export const eliminarCategoria = async(id) => {
    try{
      const respuesta = await api.delete(`/categoria/${id}`);
      console.log("Categoria eliminada", respuesta.data);
      return respuesta.data
    } catch(error) {
      console.error("Error al eliminar la categoria:", error);
    }
  }