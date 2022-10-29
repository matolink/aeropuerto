import {useState, useEffect} from "react"
import {Link} from "react-router-dom"
function AddVuelosComponent() {
	const [ciudadOrigen, setCiudadOrigen] = useState("")
	const [ciudadDestino, setCiudadDestino] = useState("")
	const [paisOrigen, setPaisOrigen] = useState("")
	const [paisDestino, setPaisDestino] = useState("")
	const [fechaSalida, setFechaSalida] = useState("")
	const [fechaLlegada, setFechaLlegada] = useState("")
	const [horaSalida, setHoraSalida] = useState("")
	const [horaLlegada, setHoraLlegada] = useState("")
	const [ciudades, setCiudades] = useState([])
	useEffect(() => {
		fetch("http://localhost:3000/vuelos")
			.then((res) => res.json())
			.then((json) => {
				setCiudades(json)
			})
	}, [])

	const vuelo = {
		ciudadOrigen: ciudadOrigen,
		ciudadDestino: ciudadDestino,
		fechaSalida: fechaSalida,
		horaSalida: horaSalida,
		fechaLlegada: fechaLlegada,
		horaLlegada: horaLlegada,
		paisOrigen: paisOrigen,
		paisDestino: paisDestino,
	}
	function fechasCheck(fecha) {
		if (fecha < new Date()) {
			return true
		} else {
			return false
		}
	}

	function request(datos) {
		if (datos.ciudadOrigen == datos.ciudadDestino) {
			return alert("no se debe escoger la misma ciudad como destino y origen")
		} else if (datos.fechaSalida > datos.fechaLlegada) {
			return alert(
				"no se debe escoger una fecha de salida mayor a la de llegada"
			)
		} else if (
			fechasCheck(
				new Date(`${datos.fechaSalida}T${datos.horaSalida}:00.000Z`)
			) ||
			fechasCheck(
				new Date(`${datos.fechaLlegada}T${datos.horaLlegada}:00.000Z`)
			)
		) {
			return alert("la fecha y hora deben ser mayor a la actual!")
		} else {
			fetch("http://localhost:3000/vuelos", {
				method: "post",
				headers: {"Content-Type": "application/json"},
				body: JSON.stringify({
					id_aero_salida: datos.ciudadOrigen,
					id_aero_llegada: datos.ciudadDestino,
					fecha_salida: `${datos.fechaSalida}T${datos.horaSalida}:00.000Z`,
					fecha_llegada: `${datos.fechaLlegada}T${datos.horaLlegada}:00.000Z`,
					id_pais_salida: datos.paisOrigen,
					id_pais_llegada: datos.paisDestino,
				}),
			})
		}
	}

	const handleCiudadOrigenChange = async (e) => {
		setCiudadOrigen(e.target.value)
		setPaisOrigen(e.target.options[e.target.selectedIndex].getAttribute("pais"))
	}
	const handleCiudadDestinoChange = (e) => {
		setCiudadDestino(e.target.value)
		setPaisDestino(
			e.target.options[e.target.selectedIndex].getAttribute("pais")
		)
	}
	const handleFechaSalida = (e) => {
		setFechaSalida(e.target.value)
	}
	const handleFechaLlegada = (e) => {
		setFechaLlegada(e.target.value)
	}
	const handleHoraSalida = (e) => {
		setHoraSalida(e.target.value)
	}
	const handleHoraLlegada = (e) => {
		setHoraLlegada(e.target.value)
	}
	return (
		<div className="mainContainer">
			<h1 className=" m-2 d-flex justify-content-center bg-white rounded align-items-center">
				<h1>Agregar Vuelos</h1>
			</h1>
			<div className="card cardBusqueda">
				<div className="card-title m-2"></div>
				<div className="card-body">
					<form className=" border border-primary border-5 rounded formularioPrincipal">
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
										{ciudades.map((ciudad) => {
											return (
												<option
													value={ciudad.id}
													id={ciudad.id}
													pais={ciudad.id_pais}
												>
													{ciudad.nombre}
												</option>
											)
										})}
									</select>
								</div>
								<div className="mb-3">
									<h1>Ciudad de Destino</h1>
									<select
										className="form-select"
										onChange={handleCiudadDestinoChange}
										aria-label="Default select example"
										name="ciudadDestino"
										id="ciudadDestino"
									>
										<option selected>--Seleccione su Ciudad de Origen</option>
										{ciudades.map((ciudad) => {
											return (
												<option
													key={ciudad.id}
													value={ciudad.id}
													pais={ciudad.id_pais}
												>
													{ciudad.nombre}
												</option>
											)
										})}
									</select>
								</div>
							</div>
						</div>
						<div className="datePickerContainer container">
							<label for="fechaInicio">Fecha de Salida</label>
							<input
								type="date"
								className="form-control"
								id="fechaInicio"
								onChange={handleFechaSalida}
								required
							/>
						</div>
						<div class="container">
							<label for="appt">Hora Salida</label>
							<input
								type="time"
								id="appt"
								className="form-control"
								onChange={handleHoraSalida}
								required
							/>
						</div>
						<div className="datePickerContainer container">
							<label for="fechaLlegada">Fecha de Llegada</label>
							<input
								required
								type="date"
								className="form-control"
								id="fechaLlegada"
								onChange={handleFechaLlegada}
							/>
						</div>
						<div class="container">
							<label for="appt">Hora Llegada</label>
							<input
								required
								type="time"
								id="appt"
								className="form-control"
								onChange={handleHoraLlegada}
							/>
						</div>
						<button
							onClick={(e) => {
								e.preventDefault()
								console.log(vuelo)
								request(vuelo)
							}}
							className=" m-2 btn btn-primary"
						>
							Agregar Vuelo
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default AddVuelosComponent
