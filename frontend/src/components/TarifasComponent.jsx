import React from "react"
import "../stylesheets/TarifasComponent.css"
import {Link} from "react-router-dom"
function TarifaComponent() {
	return (
		<div>
			<div class="container my-3 ">
				<div class="row">
					<div class="col-sm-12 col-md-4 col-lg-4 col-xl-4  py-4 bg-white">
						<h2>AIRLINES</h2>
						<form>
							<div class="mb-3">
								<label for="nombre" class="form-label">
									Si eres usuario, introduce tu mail
								</label>
								<input
									type="text"
									class="form-control"
									id="nombre"
									placeholder="@airlines.com"
									autofocus
								/>
							</div>
							<div class="mb-3">
								<label for="descripcion" class="form-label">
									Descripcion
								</label>
								<textarea
									class="form-control"
									id="descripcion"
									placeholder="Deja tus comentarios"
									rows="3"
								></textarea>
							</div>

							<div class="mb-3">
								<label for="programadores" class="form-label">
									Numero de Pasajeros
								</label>
								<input
									type="number"
									class="form-control"
									id="programadores"
									rows="3"
								/>
							</div>
							<div class="d-grid gap-2">
								<button class="btn btn-success">Guardar</button>
								<button class="btn btn-secondary">Limpiar</button>
							</div>
						</form>
					</div>
					<div class="col-sm-12 col-md-8 col-lg-8 col-xl-8 py-4 bg-white ">
						<h2>Valores</h2>
						<table class="table table-striped table-dark">
							<thead>
								<tr>
									<th class="centrado">#</th>
									<th class="centrado">Servicio</th>
									<th class="centrado">Valores fijos en $usd</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td class="centrado">1</td>
									<td class="centrado">Tarifa Economica</td>
									<td class="centrado">usd 105</td>
								</tr>

								<tr>
									<td class="centrado">2</td>
									<td class="centrado">Tarifa Normal</td>
									<td class="centrado">usd 147</td>
								</tr>

								<tr>
									<td class="centrado">3</td>
									<td class="centrado">Tarifa Premiun</td>
									<td class="centrado">usd 210</td>
								</tr>
							</tbody>
						</table>
					</div>
					<button className="btn btn-primary">
						<Link to="/asientos">Continuar</Link>
					</button>
				</div>
			</div>
			<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"></script>
		</div>
	)
}

export default TarifaComponent
