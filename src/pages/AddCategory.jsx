import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom"; 
import { v4 as uuidv4 } from "uuid";
import Tabla from "../components/TablaCategorias";
import { agregarCategoria, editarCategoria, eliminarCategoria, obtenerCategorias } from "../api/api";
import styled from "styled-components";

const AddCategory = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		//getValues,
		setValue,
	} = useForm();
    const [categorias, setCategorias] = useState([]);
    const [categoriaEditada, setCategoriaEditada] = useState(null);

    useEffect(() => {
        cargarCategorias();
    }, []);

    const cargarCategorias = async() => {
        try{
            const categoriasData = await obtenerCategorias();
            setCategorias(categoriasData);
        }catch(error) {
            console.error("error al obtener las categorias:", error);
        }
    };

    const onSubmit = async(data) => {
        const id = uuidv4();
        const newData = {
            ...data,
            id,
        };
        try{
            if(categoriaEditada) {
                await editarCategoria(categoriaEditada.id, newData);
                setCategoriaEditada(null);
                reset();
            }else{
                await agregarCategoria(newData);
                reset();
            }
            cargarCategorias()
        }catch(error) {
            console.error("Error al agregar/editar la categoria:", error);
        }
    };

    const handleEditarCategoria = (categoria) => {
        setCategoriaEditada(categoria);
        setValue("nombre", categoria.nombre);
        setValue("descripcion", categoria.descripcion);
    }

    const handleEliminarCategoria = async(id) => {
        try{
            await eliminarCategoria(id);
            cargarCategorias();
        }catch(error) {
            console.error("Error al eliminar la categoria:", error);
        }
    };
	
	return (
		<Container className="form">
			<Title>Nueva Categoría</Title>
			<Form onSubmit={handleSubmit(onSubmit)} className="form__container">
				<Input
					type="text"
					placeholder="Agregue el nombre de la categoría"
					{...register("nombre", { required: true })}
                    error={errors.nombre}
				/>
				<Descripcion
					placeholder="Descripción de la categoría"
					{...register("descripcion", { required: true})}
				/>
                <BtnContainer>
                    <Btn type="submit" value="Guardar" />	
                    <Btn type="submit" value="Limpiar" />	
                </BtnContainer>		
                
			</Form>
            <Tabla categorias={categorias} onEditar={handleEditarCategoria} onEliminar={handleEliminarCategoria}/>
		</Container>
		
	);
}

export default AddCategory

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 50px 0;
    height: auto;
    background: black;
`

const Title = styled.h2`
    color: #F5F5F5;
    text-align: center;
    font-family: Roboto;
    font-size: 60px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 80%;
`

const Input = styled.input`
    width: 40rem;
    margin: 15px 0;
    height: 50px;
    border: none;
    padding: 0 10px;

    &:placeholder-shown{
		color: #E5E5E5;
		font-family: Roboto;
		font-size: 18px;
		font-style: normal;
		font-weight: 300;
		line-height: normal;
	}
`

const Descripcion = styled.textarea`
    width: 40rem;
    margin: 15px 0;
    height: 140px;
    border: none;
	padding: 10px;

	&:placeholder-shown{
		color: #E5E5E5;
		font-family: Roboto;
		font-size: 18px;
		font-style: normal;
		font-weight: 300;
		line-height: normal;
	}
`

const BtnContainer = styled.div`
    width: 40rem;
	display: flex;
	justify-content: space-between;
`

const Btn = styled.input`
    width: 190px;
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
    line-height: 24px; /* 114.286% */

    &:hover{
        background: #242222;
    }
	cursor: pointer;
`