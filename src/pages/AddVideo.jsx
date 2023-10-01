import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"; 
import { v4 as uuidv4 } from "uuid";
import { obtenerCategorias, agregarVideo } from "../api/api";
import styled from "styled-components";

export default function AddVideo() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		getValues,
		setValue,
	} = useForm();
	const navigate = useNavigate(); 
	const [categorias, setCategorias] = useState([]);

	useEffect(() => {
		const fetchCategorias = async() => {
			try{
				const categoriasData = await obtenerCategorias();
				setCategorias(categoriasData);
			} catch(error) {
				console.log("Error al obtener las categorias:", error)
			}
		};
		fetchCategorias();
	}, []);

	const onSubmit = async (data) => {
		try {
			const categoriaId = getValues("categoria");
			const categoriaSeleccionada = categorias.find((categoria) => categoria.id === categoriaId);

			if(categoriaSeleccionada) {
				const videoId = uuidv4();
				const videoData = { ...data, categoria: { nombre: categoriaSeleccionada.nombre},
				id: videoId, };

				await agregarVideo(videoData);
				reset();
				navigate("/");
			}else{
				console.error("Categoria no encontrada");
			}
		} catch (error) {
			console.error("Error al enviar los datos:", error);
		}
	};

	return (
		<Container>
			<Title>Nuevo Video</Title>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Input
					type="text"
					placeholder="Titulo"
					{...register("title", { required: true })}
					required
				/>
				<Input
					type="text"
					placeholder="Link del video"
					{...register("embedId", { required: true, maxLength: 11 })}
					required
				/>
				<Input
					type="text"
					placeholder="Link imagen del video"
					{...register("img", { required: true, maxLength: 11 })}
					required
				/>
				<CategoriaContainer>
					<Categoria
						value={getValues("categoria")}
						onChange={(e) => setValue("select", e.target.value)}
						{...register("categoria", {required: true})}
					>
						<option value="" defaultValue="" hidden>Elegir categoría</option>
						{categorias.map((categoria) => (
							<option key={categoria.id} value={categoria.id} required>{categoria.nombre}</option>
						))}
					</Categoria>
				</CategoriaContainer>
				<Descripcion
					placeholder="Descripción"
					{...register("metadescription", { required: true, maxLength: 200 })}
					required
				/>
				<BtnContainer>
					<BtnGuardar type="submit" value="Guardar"/>
					<BtnCategoria onClick={() => navigate("/add-category")}>Agregar Categoría</BtnCategoria>
				</BtnContainer>
				
			</Form>
		</Container>
		
	);
}

const Container = styled.div`
	display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
    padding: 30px 0;
    background: rgba(0, 0, 0, 0.90);
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

const CategoriaContainer = styled.div`
	
`

const Categoria = styled.select`
	width: 40rem;
    margin: 15px 0;
    height: 50px;
	font-family: Roboto;
	font-size: 18px;
	font-style: normal;
	font-weight: 300;
	line-height: normal;
	color: gray;
	padding: 0 10px;
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

const BtnGuardar = styled.input`
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
    line-height: 24px;
	cursor: pointer;

    &:hover{
        background: #242222;
    }
`

const BtnCategoria = styled.button`
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
