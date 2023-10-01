import styled from "styled-components";

const Tabla = ({ categorias, onEditar, onEliminar }) => {
	return (
		<>
			<Table>
				<thead>
					<Tr>
						<ThNombre>Nombre</ThNombre>
						<ThDescripcion>Descripción</ThDescripcion>
						<Th>Editar</Th>
						<Th>Remover</Th>
					</Tr>
				</thead>
				<tbody>
					{categorias.map((categoria) => (
						<Tr key={categoria.id}>
							<TdNombre>
                            {categoria.nombre}
							</TdNombre>
							<TdDescripcion>
								<p>{categoria.descripcion}</p>
							</TdDescripcion>
							<Td>
								<Btn onClick={() => onEditar(categoria)}>Editar</Btn>
							</Td>
							<Td>
								<Btn onClick={() => onEliminar(categoria.id)}>Eliminar</Btn>
							</Td>
						</Tr>
					))}
				</tbody>
			</Table>
		</>
	);
};

export default Tabla;

const Table = styled.table`
	display: flex;
	flex-direction: column;
	width: 100%;
	justify-content: center;
	align-items: center;
	align-items: center;
	margin-top: 5rem;
`;

const Tr = styled.tr`
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: space-around;
`;

const ThNombre = styled.th`
	text-align: center;
	width: 14vw;
	padding: 0.5rem;
	border: 0.1rem solid white;
	align-items: center;
	display: flex;
	justify-content: center;
	font-weight: bold;
	font-size: 2rem;
	border: 0.2rem solid ;
	color: #F5F5F5;
	font-family: Roboto;
	font-size: 35px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
`

const ThDescripcion = styled.th`
	text-align: center;
	width: 30vw;
	border: 0.1rem solid white;
	padding: 0.5rem;
	align-items: center;
	display: flex;
	justify-content: center;
	font-weight: bold;
	font-size: 2rem;
	border: 0.2rem solid ;
	color: #F5F5F5;
	font-family: Roboto;
	font-size: 35px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
`

const Th = styled.th`
	text-align: center;
	width: 11vw;
	padding: 0.5rem;
	border: 0.1rem solid white;
	align-items: center;
	display: flex;
	justify-content: center;
	font-weight: bold;
	font-size: 2rem;
	border: 0.2rem solid ;
	color: #F5F5F5;
	font-family: Roboto;
	font-size: 35px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
`;

const TdNombre = styled.td`
	text-align: center;
	width: 14vw;
	border: 0.1rem solid #9e9e9e;
	padding: 0.2rem;
	align-items: center;
	display: flex;
	justify-content: center;
	height: 9vh;
	color: #F5F5F5;
	font-family: Roboto;
	font-size: 27px;
	font-style: normal;
	font-weight: 300;
	line-height: normal;
`

const TdDescripcion = styled.td`
	text-align: center;
	width: 30vw;
	border: 0.1rem solid #9e9e9e;
	padding: 0.4rem;
	height: 9vh;
	color: #F5F5F5;
	font-family: Roboto;
	font-size: 27px;
	font-style: normal;
	font-weight: 300;
	line-height: normal;
`

const Td = styled.td`
	text-align: center;
	width: 11vw;
	border: 0.1rem solid #9e9e9e;
	padding: 0.2rem;
	align-items: center;
	display: flex;
	justify-content: center;
	height: 9vh;
`;

const Btn = styled.button`
	color:#E5E5E5;
	text-align: center;
	font-family: Roboto;
	font-size: 27px;
	font-style: normal;
	font-weight: 300;
	line-height: normal;
	background: none;
	border: none;
	cursor: pointer;
`