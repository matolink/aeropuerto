import React, {useState, useEffect} from "react"
import {tiposAsientos} from "../JS-Objects/tiposAsientos"
import {lugarAsientos} from "../JS-Objects/lugarAsientos"
function AsientosComponent() {
	const [tipoDeAsientoIda, setTipoDeAsientoIda] = useState("")
	const [idaOIdaVuelta, setIdaOIdaVuelta] = useState("No")
	const [asientoSeleccionadoIda, setAsientoSeleccionadoIda] = useState("")
	const handleAsientoChange = (e) => {
		setTipoDeAsientoIda(e.target.value)
		console.log(e.target.value)
	}
	const checkState = () => {
		console.log(tipoDeAsientoIda)
	}
	const handleIdaOIdaVueltaChange = (e) => {
		if (idaOIdaVuelta == "Yes") {
			setIdaOIdaVuelta("No")
		} else {
			setIdaOIdaVuelta("Yes")
		}
	}
	return (
		<div className="mainContainer">
			<br />
			<div className="container w-50 card">
				<div className="card-title d-flex justify-content-center align-items-center">
					<h1 className="">Porfavor Elija su asiento</h1>
				</div>
			</div>
			<br />
			<div className="mainContainer d-flex justify-content-around">
				<div className="contenedorTipoAsiento d-flex justify-content-start">
					<div className="container w-100  rounded bg-light containerEleccion">
						<div className="m-3">
							<h1>Asiento de Ida</h1>
							<label htmlFor="" className="form-label">
								Seleccione su tipo de asiento:
							</label>
							<select
								onChange={handleAsientoChange}
								name="seleccionAsiento"
								id="seleccionAsiento"
							>
								<option value="null" disabled>
									-- Seleccione su Asiento --
								</option>
								{tiposAsientos.map((asiento) => {
									return (
										<option key={asiento.id} value={asiento.nombre}>
											{asiento.nombre}
										</option>
									)
								})}
							</select>
						</div>
						<div className="mb-3"></div>
						<button className="btn btn-primary m-2" onClick={checkState}>
							Confirmar Asiento
						</button>
						<div className="m-3">
							<h1>Asiento de Vuelta</h1>
							<label htmlFor="" className="form-label">
								Seleccione su tipo de asiento:
							</label>
							<select
								onChange={handleAsientoChange}
								name="seleccionAsiento"
								id="seleccionAsiento"
							>
								<option value="null" disabled>
									-- Seleccione su Asiento --
								</option>
								{tiposAsientos.map((asiento) => {
									return (
										<option key={asiento.id} value={asiento.nombre}>
											{asiento.nombre}
										</option>
									)
								})}
							</select>
						</div>
						<div className="mb-3"></div>
						<button className="btn btn-primary m-2" onClick={checkState}>
							Confirmar Asiento
						</button>
					</div>
				</div>
				<div className="contenedorSeleccionarLugar mt-2">
					<div className="container container w-75  rounded bg-light containerEleccion">
						<h1>Seleccione el lugar del asiento de Ida</h1>
						<div className="contenedorRadios m-3">
							<h3>Asientos de la Izquierda</h3>
							<div className="contenedorRadioInputs d-flex justify-content-between">
								<input
									type="radio"
									className="form-check-input"
									name="flexRadioLugar"
									value="asiento izquierda - ventana"
								/>
								<input
									type="radio"
									className="form-check-input"
									name="flexRadioLugar"
									value="asiento izquierda - centro"
								/>
								<input
									type="radio"
									className="form-check-input"
									name="flexRadioLugar"
									value="asiento izquierda - salida"
								/>
							</div>
						</div>
						<div className="contenedorRadios m-3">
							<h4>Asientos de la Derecha</h4>
							<div className="contenedorRadioInputs d-flex justify-content-between">
								<input
									type="radio"
									className="form-check-input"
									name="flexRadioLugar"
									value="asiento derecha - salida"
								/>
								<input
									type="radio"
									className="form-check-input"
									name="flexRadioLugar"
									value="asiento derecha - centro"
								/>
								<input
									type="radio"
									className="form-check-input"
									name="flexRadioLugar"
									value="asiento derecha - ventana"
								/>
							</div>
							<br />
						</div>
					</div>
					<div className="container container w-75  rounded bg-light containerEleccion">
						<h1>Seleccione el lugar del asiento de Vuelta</h1>
						<div className="contenedorRadios m-3">
							<h3>Asientos de la Izquierda</h3>
							<div className="contenedorRadioInputs d-flex justify-content-between">
								<input
									type="radio"
									className="form-check-input"
									name="flexRadioLugar"
									value="asiento izquierda - ventana"
								/>
								<input
									type="radio"
									className="form-check-input"
									name="flexRadioLugar"
									value="asiento izquierda - centro"
								/>
								<input
									type="radio"
									className="form-check-input"
									name="flexRadioLugar"
									value="asiento izquierda - salida"
								/>
							</div>
						</div>
						<div className="contenedorRadios m-3">
							<h4>Asientos de la Derecha</h4>
							<div className="contenedorRadioInputs d-flex justify-content-between">
								<input
									type="radio"
									className="form-check-input"
									name="flexRadioLugar"
									value="asiento derecha - salida"
								/>
								<input
									type="radio"
									className="form-check-input"
									name="flexRadioLugar"
									value="asiento derecha - centro"
								/>
								<input
									type="radio"
									className="form-check-input"
									name="flexRadioLugar"
									value="asiento derecha - ventana"
								/>
							</div>
							<br />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AsientosComponent
