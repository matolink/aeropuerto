import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import {Routes, Route} from "react-router-dom"
import BusquedaPage from "./pages/BusquedaPage"
import AsientosPage from "./pages/AsientosPage"
import FormularioPage from "./pages/FormularioPage"
import AddVuelosPage from "./pages/AddVuelosPage"
import PagoPage from "./pages/PagoPage"
import EquipajesPage from "./pages/EquipajesPage"
import ResumenPage from "./pages/ResumenPage"
import TarifasPage from "./pages/TarifasPage"
function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<BusquedaPage />} />
				<Route path="/asientos" element={<AsientosPage />} />
				<Route path="/formulario" element={<FormularioPage />} />
				<Route path="/pago" element={<PagoPage />} />
				<Route path="/aviones" element={<AddVuelosPage />} />
				<Route path="/equipajes" element={<EquipajesPage />} />
				<Route path="/resumen" element={<ResumenPage />} />
				<Route path="/tarifas" element={<TarifasPage />} />
			</Routes>
		</div>
	)
}

export default App
