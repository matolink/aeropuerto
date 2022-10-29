import React from "react"
import {Link} from "react-router-dom"
import "../stylesheets/EquipajesComponent.css"
function EquipajesComponent() {
	return (
		<div className="mainContainer">
			<br />
			<div className="container w-50 card">
				<div className="card-title d-flex justify-content-center align-items-center">
					<h1 className="">Desea agregar algun equipaje extra?</h1>
				</div>
			</div>

			<div className="container w-100 bg-light mt-2 justify-content-around align-items-center">
				<div className="container containers d-flex  m-5">
					<div className="container-sm m-2">
						<p>Bolsa de Mano</p>
						<p>25 x 35 x 45 cm</p>
						<button className="btn btn-primary">Agregar</button>
					</div>
					<div className="container-sm m-2">
						<p>Equipaje de Mano</p>
						<p>25 x 35 x 55 cm</p>
						<button className="btn btn-primary">Agregar</button>
					</div>
					<div className="container-sm m-2">
						<p>Equipaje de Bodega</p>
						<p>23 KG max y 158cm</p>
						<button className="btn btn-primary">Agregar</button>
					</div>
				</div>
			</div>
			<div className="containerButton bg-light mt-2 d-flex justify-content-center">
				<button className="btn btn-primary">
					<Link to="/resumen">Continuar</Link>
				</button>
			</div>
		</div>
	)
}

export default EquipajesComponent
