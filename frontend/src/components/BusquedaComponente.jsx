import React, {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import "../stylesheets/BusquedaComponente.css"
import {Ciudades} from "../JS-Objects/Ciudades.js"
function BusquedaComponente() {
	const [tipoDeViaje, setTipoDeViaje] = useState("")
	const [ciudadOrigen, setCiudadOrigen] = useState("")
	const [ciudadDestino, setCiudadDestino] = useState("")
	const [fechaSalida, setFechaSalida] = useState("")
	const [fechaRegreso, setFechaRegreso] = useState("")

	const pasaje = {
		tipoDeViaje: tipoDeViaje,
		ciudadOrigen: ciudadOrigen,
		ciudadDestino: ciudadDestino,
	}

	const handleTipoDeViaje = (e) => {
		setTipoDeViaje(e.target.value)
	}

	const handleCiudadOrigenChange = (e) => {
		setCiudadOrigen(e.target.value)
		console.log(e.target.value)
	}

	return (
		<div className="container mainContainer">
			<h1 className=" m-2 d-flex justify-content-center bg-white rounded align-items-center">
				Bienvenido a la Aerolinea Heavenly Sky!
			</h1>
			<div className="card cardBusqueda">
				<div className="card-title m-2">
					<h1>Busqueda de Pasajes</h1>
				</div>
				<div className="card-body">
					<form className=" border border-primary border-5 rounded formularioPrincipal">
						<div className="radioContainer m-2">
							<div className="form-check form-check-inline ">
								<input
									onClick={handleTipoDeViaje}
									type="radio"
									className=" m-2 form-check-input"
									name="inlineRadioViaje"
									id="inlineRadioIda"
									value="viajeIda"
								/>
								<label for="inlineRadioIda" className="form-check-label">
									Ida
								</label>
							</div>
							<div className="mb-3 form-check form-check-inline">
								<input
									onClick={handleTipoDeViaje}
									type="radio"
									className="m-2 form-check-input"
									name="inlineRadioViaje"
									id="inlineRadioIdaVuelta"
									value="viajeIdaVuelta"
								/>
								<label for="inlineRadioIdaVuelta" className="form-check-label">
									Ida y Vuelta
								</label>
							</div>
						</div>
						<div className="ciudadContainer m-2">
							<div className="ciudadTitulo">
								<p>Seleccione su ciudad de origen y su ciudad de destino</p>
							</div>
							<div className="ciudadOrigen m-4">
								<div className="mb-3">
									<h1>Ciudad de Origen</h1>
									<select
										onChange={handleCiudadOrigenChange}
										className="form-select"
										aria-label="Default select example"
										name="ciudadOrigen"
										id="ciudadOrigen"
									>
										<option selected disabled>
											--Seleccione su Ciudad de Origen
										</option>
										{Ciudades.map((ciudad) => {
											return <option value={ciudad.name}>{ciudad.name}</option>
										})}
									</select>
								</div>
								<div className="mb-3">
									<h1>Ciudad de Destino</h1>
									<select
										className="form-select"
										aria-label="Default select example"
										name="ciudadDestino"
										id="ciudadDestino"
									>
										<option selected>--Seleccione su Ciudad de Origen</option>
										{Ciudades.map((ciudad) => {
											return (
												<option key={ciudad.id} value={ciudad.name}>
													{ciudad.name}
												</option>
											)
										})}
									</select>
								</div>
							</div>
						</div>
						<div className="datePickerContainer container">
							<label for="fechaInicio">Fecha de Salida</label>
							<input type="date" className="form-control" id="fechaInicio" />
						</div>
						<div
							className={
								tipoDeViaje === "viajeIdaVuelta"
									? "datepickerContainer container"
									: "claseOculta"
							}
						>
							<label for="fechaInicio">Fecha de Regreso</label>
							<input type="date" className="form-control" id="fechaInicio" />
						</div>
						<button
							onClick={(e) => {
								e.preventDefault()
							}}
							className=" m-2 btn btn-secondary"
						>
							<Link to={"/Tarifas"}>Buscar</Link>
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default BusquedaComponente
