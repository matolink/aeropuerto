import React from "react"
import "../stylesheets/EstilosFormulario.css"
const ResumenCompraComponent = () => {
	return (
		<div className="cuadroResumen container-sm">
			<div>
				<label className="labelResumen">
					<li>
						<b>Vuelo de ida</b> / fecha y hora
					</li>
				</label>
			</div>
			<div></div>
			<div>
				<label className="labelResumen">
					<li>
						<b>Vuelo de ida</b> / fecha y hora
					</li>
				</label>
			</div>
			<div>
				<label className="labelResumen">
					<li>
						<b>Adicionales</b>{" "}
					</li>
				</label>
			</div>
			<div>
				<p className="labelValor">$Valor</p>
			</div>
		</div>
	)
}

export default ResumenCompraComponent
