import React from "react"
import "../stylesheets/ResumenComponent.css"
import {Link} from "react-router-dom"

function ResumenComponent() {
	return (
		<div className="mainContainer">
			<br />
			<div className="container w-50 card">
				<div className="card-title d-flex justify-content-center align-items-center">
					<h1 className="">Resumen de tu Reserva</h1>
				</div>
			</div>
			<div className="contenedorPrincipal rounded d-flex justify-content-around">
				{/* Contenedor de Detalles de los pasajes */}
				<div className="card m-2">
					<div className="card-title m-2">
						<h4>Detalle</h4>
					</div>
					<div className="card-body">
						<p>Tipo de Pasaje:</p>
						<div className="pasajeIda container m-2">
							<p>
								<strong> Pasaje Ida</strong>
							</p>
							<p>Origen: Santiago</p>
							<p>Destino: La Serena</p>
							<p>Fecha de Partida: 11-12-2022 14:50</p>
							<p>Fecha de Llegada: 11-12-2022 16:40 </p>
							<p>Valor: $30.000 </p>
						</div>
						<div className="pasajeIda container m-2">
							<p>
								<strong> Pasaje Vuelta</strong>
							</p>
							<p>Origen: La Serena</p>
							<p>Destino: Santiago</p>
							<p>Fecha de Partida: 17-12-2022 14:50</p>
							<p>Fecha de Llegada: 17-12-2022 16:40</p>
							<p>Valor: $40.000 </p>
						</div>
					</div>
				</div>
				{/* Contenedor de Equipajes y Asientos */}
				<div className="contenedorAsientosEquipajes ">
					<div className="card m-2 cardAsientos">
						<div className="card-title m-2">
							<h4>Asientos</h4>
						</div>
						<div className="card">
							<div className="d-flex justify-content-around mx-2">
								<p>Pasajero -</p>
								<p>- Santiago > La Serena -</p>
								<p>- La Serena > Santiago - </p>
							</div>
							<div className="d-flex justify-content-around mx-2">
								<p>Adulto 1 -</p>
								<p>- Asiento Ida: -</p>
								<p>- Asiento Vuelta: - </p>
							</div>
							<div className="d-flex justify-content-around mx-2">
								<p>Adulto 2 -</p>
								<p>- Asiento Ida: -</p>
								<p>- Asiento Vuelta: - </p>
							</div>
							<button className="btn btn-primary">
								<Link to="/asientos">Modificar Asientos</Link>
							</button>
						</div>
					</div>
					<div className="card m-2">
						<div className="card-title m-2">
							<h4>Equipaje</h4>
						</div>
						<div className="card">
							<div className="d-flex justify-content-around mx-2">
								<p>Pasajero -</p>
								<p>- Santiago > La Serena -</p>
								<p>- La Serena > Santiago - </p>
							</div>
							<div className="d-flex justify-content-around mx-2">
								<p>Adulto 1 -</p>
								<p>- No Seleccionado -</p>
								<p>- No Seleccionado - </p>
							</div>
							<div className="d-flex justify-content-around mx-2">
								<p>Adulto 2 -</p>
								<p>- No Seleccionado -</p>
								<p>- No Seleccionado - </p>
							</div>
							<button className="btn btn-primary">
								<Link to="/asientos">Modificar Asientos</Link>
							</button>
						</div>
					</div>
				</div>
				<div className="card m-2">
					{/* Contenedor de Servicios */}
					<div className="card-title m-2">
						<h4>Otros Servicios</h4>
					</div>
					<div className="card">
						<div>
							<h5 className="m-2">Sin Filas</h5>
							<div className="pasajeIda card-body d-flex">
								<div>
									<p className="containerText">
										Olvidate de las filas, embarca rapidamente.
									</p>
								</div>
								<div class="form-check form-switch ms-2">
									<input
										class="form-check-input"
										type="checkbox"
										id="flexSwitchCheckDefault"
									></input>
								</div>
							</div>
						</div>
						<div className="card-footer">Desde 10.000</div>
					</div>
					<div className="card">
						<div>
							<h5 className="m-2">Seguro de Viaje</h5>
							<div className="pasajeIda card-body d-flex">
								<div>
									<p className="containerText">
										Asistencia medica, Equipaje asegurado y Asistencia 24 Horas
										del dia!
									</p>
								</div>
								<div class="form-check form-switch ms-2">
									<input
										class="form-check-input"
										type="checkbox"
										id="flexSwitchCheckDefault"
									></input>
								</div>
							</div>
						</div>
						<div className="card-footer">Desde 15.000</div>
					</div>
					<div className="card">
						<div>
							<h5 className="m-2">Necesidades especiales</h5>
							<div className="pasajeIda card-body d-flex">
								<div>
									<p className="containerText">
										Servicios especiales para hacer tu viaje mas agradable!
									</p>
								</div>
								<div class="form-check form-switch ms-2">
									<input
										class="form-check-input"
										type="checkbox"
										id="flexSwitchCheckDefault"
									></input>
								</div>
							</div>
						</div>
						<div className="card-footer">Desde 25.000</div>
					</div>
					<div className="card">
						<div>
							<h5 className="m-2">Mascota en Cabina</h5>
							<div className="pasajeIda card-body d-flex">
								<div>
									<p className="containerText">
										Viaje con tu mascota en cabina! Sujeto a condiciones.
									</p>
								</div>
								<div class="form-check form-switch ms-2">
									<input
										class="form-check-input"
										type="checkbox"
										id="flexSwitchCheckDefault"
									></input>
								</div>
							</div>
						</div>
						<div className="card-footer">Desde 35.000</div>
					</div>
					<button className="btn btn-primary">
						<Link to="/formulario">Continuar</Link>
					</button>
				</div>
			</div>
		</div>
	)
}

export default ResumenComponent
