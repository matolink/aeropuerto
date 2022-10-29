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
			<div className="contenedorPrincipal d-flex justify-content-around">
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
				<div className="contenedorAsientosEquipajes">
					<div className="card m-2">
						<div className="card-title m-2">
							<h4>Asientos</h4>
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
							</div>
						</div>
					</div>
					<div className="card m-2">
						<div className="card-title m-2">
							<h4>Equipaje</h4>
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
							</div>
						</div>
					</div>
				</div>
				<div className="card m-2">
					{/* Contenedor de Servicios */}
					<div className="card-title m-2">
						<h4>Otros Servicios</h4>
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
						</div>
					</div>
					<button>
						<Link to="/formulario">Continuar</Link>
					</button>
				</div>
			</div>
		</div>
	)
}

export default ResumenComponent
