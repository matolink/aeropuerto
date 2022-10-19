import React from "react"

function AsientosComponent() {
	return (
		<div className="mainContainer">
			<br />
			<div className="container card">
				<div className="card-title d-flex justify-content-center align-items-center">
					<h1 className="">Porfavor Elija su asiento</h1>
				</div>
			</div>
			<br />
			<div className="container rounded bg-light containerEleccion">
				<div className="mb-3">
					<label htmlFor="" className="form-label">
						Seleccione su fila de asiento
					</label>
					<select name="" id="">
						<option value="">--Seleccione su tipo de asiento--</option>
					</select>
				</div>
				<br />
			</div>
		</div>
	)
}

export default AsientosComponent
