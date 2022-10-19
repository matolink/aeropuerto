import React from "react"
import FormularioComponent from "../components/FormularioComponent"

import HeaderComponent from "../components/HeaderComponent"

function FormularioPage() {
	return (
		<div className="formularioPage">
			<HeaderComponent />
			<FormularioComponent className="cuadro1" />
		</div>
	)
}

export default FormularioPage
