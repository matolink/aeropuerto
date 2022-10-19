import React from "react"
import HeaderComponent from "../components/HeaderComponent"
import AddVuelosComponent from "../components/AddVuelosComponent.jsx"
// import AsientosComponent from "../components/AsientosComponent"

function AddVuelosPage() {
	return (
		<div className="mainPage">
			<HeaderComponent />
            <AddVuelosComponent/>
			{/* <AsientosComponent /> */}
		</div>
	)
}

export default AddVuelosPage
