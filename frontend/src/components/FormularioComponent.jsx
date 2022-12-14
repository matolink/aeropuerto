import React, {Fragment, useState} from "react"
import "../stylesheets/EstilosFormulario.css"
import "bootstrap/dist/css/bootstrap.min.css"
import ResumenCompraComponent from "../components/ResumenCompraComponent"
import {Link} from "react-router-dom"
const FormularioComponent = () => {
	const [datos, setDatos] = useState({
		nombre: "",
		apellido: "",
		telefono: "",
		tipoDocumento: "",
		correo: "",
		genero: "",
		condiciones: "",
		spam: "",
	})

	const prueba = (event) => {
		// console.log(event.target.value);
		setDatos({
			...datos,
			[event.target.name]: event.target.value,
		})
	}

	const enviarDatos = (event) => {
		event.preventDefault()
	}

	return (
		<Fragment className="container mainContainer">
			<link
				rel="stylesheet"
				type="text/css"
				href="path/to/notifications.css"
			></link>
			<div className="tituloContainer container rounded d-flex justify-content-center align-items-center bg-light mt-2">
				<h1 className="titulo">Datos de los Pasajeros</h1>
			</div>
			<div className="formContainer d-flex">
				<form className="formulario" onSubmit={enviarDatos}>
					<h3 className="titulo2">Ingresa datos del pasajero Adulto 1</h3>

					<div></div>

					{/* nombre */}

					<div className="formulario__grupo" id="grupo_nombre">
						<label htmlFor="nombre" className="formulario__label">
							Nombre
						</label>
						<div className="formulario__grupo-input">
							<input
								type="text"
								id="nombre"
								name="nombre"
								placeholder="Nombre"
								required
								onChange={prueba}
							></input>
						</div>
					</div>

					{/* Apellido */}

					<div className="formulario__grupo" id="grupo_apellido">
						<label htmlFor="apellido" className="formulario__label">
							Apellido
						</label>
						<div className="formulario__grupo-input">
							<input
								type="text"
								id="apellido"
								name="apellido"
								placeholder="Apellido"
								required
								onChange={prueba}
							></input>
						</div>
					</div>

					{/* Fecha de nacimiento */}

					<div className="formulario__grupo" id="grupo_fechaNacimiento">
						<label htmlFor="fechaNacimiento" className="formulario__label">
							Fecha de nacimiento
						</label>
						<div className="formulario__grupo-input">
							<input
								type="date"
								id="fechaNacimiento"
								name="fechaNacimiento"
								required
								onChange={prueba}
							></input>
						</div>
					</div>

					{/* Numero de Telefono */}

					<div className="formulario__grupo" id="grupo_telefono">
						<label htmlFor="telefono" className="formulario__label">
							N??mero de tel??fono
						</label>
						<div className="formulario__grupo-input">
							<input
								type="tel"
								id="telefono"
								name="telefono"
								placeholder="56 9 99999999"
								required
								onChange={prueba}
							></input>
						</div>
					</div>

					{/* Tipo de documento Select */}

					<div className="" id="grupo_tipoDocumento">
						<label htmlFor="tipoDocumento" className="formulario__label">
							Tipo de Documento
						</label>
						<div>
							<select
								className="selectAltura"
								name="tipoDocumento"
								id="tipoDocumento"
								onChange={prueba}
								required
							>
								<option value=""> Selecciona </option>
								<option value={"rut"}>C??dula (Rut) </option>
								<option value={"pasaporte"}>Pasaporte </option>
							</select>
						</div>
					</div>

					{/* Rut */}
					{datos.tipoDocumento === "rut" && (
						<div className="formulario__grupo" id="grupo_rut">
							<label htmlFor="rut" className="formulario__label">
								Rut
							</label>
							<div className="formulario__grupo-input">
								<input
									type="text"
									className="test"
									id="rut"
									name="rut"
									placeholder=""
									required
								></input>
							</div>
						</div>
					)}
					{/* pasaporte */}
					{datos.tipoDocumento === "pasaporte" && (
						<div className="formulario__grupo" id="grupo_pasaporte">
							<label htmlFor="pasaporte" className="formulario__label">
								Pasaporte
							</label>
							<div className="formulario__grupo-input">
								<input
									type="text"
									className="test"
									id="pasaporte"
									name="pasaporte"
									placeholder=""
									required
								></input>
							</div>
						</div>
					)}
					{/* vacion para el mensaje de seleccion */}
					{datos.tipoDocumento === "" && <h1> </h1>}

					<div className="formulario__grupo" id="grupo_correo">
						<label htmlFor="correo" className="formulario__label">
							Email
						</label>
						<div className="formulario__grupo-input">
							<input
								type="email"
								id="correo"
								name="correo"
								plcaceholder="correo@correo.com"
								required
								onChange={prueba}
							></input>
						</div>
					</div>

					<div className="" id="grupo_genero">
						<label htmlFor="genero" className="formulario__label">
							G??nero
						</label>
						<div>
							<select
								className="selectAltura"
								name="genero"
								id="genero"
								onChange={prueba}
								required
							>
								<option value=""> Selecciona </option>
								<option value={"hombre"}>Hombre </option>
								<option value={"mujer"}>Mujer </option>
							</select>
						</div>
					</div>
					<div className="contactoContainer container form-check d-flex align-items-center">
						<input
							className="form-check-input"
							type="checkbox"
							id="condiciones"
							name="condiciones"
							required
							onChange={prueba}
						/>
						<label className="form-check-label">
							Acepto los t??rminos y condiciones{" "}
						</label>
					</div>
					<br />
					<div className=" contactoContainer container form-check d-flex align-items-center">
						<input
							className="form-check-input"
							type="checkbox"
							id="spam"
							name="spam"
							onChange={prueba}
						/>
						<label htmlFor="spam" className="form-check-label">
							Acepto que se usen estos datos para ser contactado en relaci??n a
							mi compra{" "}
						</label>
					</div>
					<br />
					<button className="btn btn-primary" type="submit">
						<Link to="/pago"> Continuar </Link>
					</button>
				</form>
				<ResumenCompraComponent className="cuadro2 container" />
			</div>
		</Fragment>
	)
}

export default FormularioComponent
