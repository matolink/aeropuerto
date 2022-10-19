import { useState, useEffect } from 'react'

function AddVuelosComponent() {
  const [ciudadOrigen, setCiudadOrigen] = useState('')
  const [ciudadDestino, setCiudadDestino] = useState('')
  const [fechaSalida, setFechaSalida] = useState('')
  const [fechaRegreso, setFechaRegreso] = useState('')
  const [horaSalida, setHoraSalida] = useState('')
  const [horaRegreso, setHoraRegreso] = useState('')
  const [ciudades, setCiudades] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/vuelos')
      .then((res) => res.json())
      .then((json) => {
        setCiudades(json)
      })
  }, [])

  const vuelo = {
    ciudadOrigen: ciudadOrigen,
    ciudadDestino: ciudadDestino,
    fechaSalida: fechaSalida,
    horaSalida: horaSalida,
    fechaRegreso: fechaRegreso,
    horaRegreso: horaRegreso,
  }

  const handleCiudadOrigenChange = (e) => {
    setCiudadOrigen(e.target.value)
  }
  const handleCiudadDestinoChange = (e) => {
    setCiudadDestino(e.target.value)
  }
  const handleFechaSalida = (e) => {
    setFechaSalida(e.target.value)
  }
  const handleFechaRegreso = (e) => {
    setFechaRegreso(e.target.value)
  }
  const handleHoraSalida = (e) => {
    setHoraSalida(e.target.value)
  }
  const handleHoraRegreso = (e) => {
    setHoraRegreso(e.target.value)
  }
  return (
    <div className='mainContainer'>
      <h1 className=' m-2 d-flex justify-content-center bg-white rounded align-items-center'>
        Agregar Aviones
      </h1>
      <div className='card cardBusqueda'>
        <div className='card-title m-2'>
          <h1>Agregar Vuelos</h1>
        </div>
        <div className='card-body'>
          <form className=' border border-primary border-5 rounded formularioPrincipal'>
            <div className='ciudadContainer m-2'>
              <div className='ciudadTitulo'>
                <p>Seleccione su ciudad de origen y su ciudad de destino</p>
              </div>
              <div className='ciudadOrigen m-4'>
                <div className='mb-3'>
                  <h1>Ciudad de Origen</h1>
                  <select
                    onChange={handleCiudadOrigenChange}
                    className='form-select'
                    aria-label='Default select example'
                    name='ciudadOrigen'
                    id='ciudadOrigen'
                  >
                    <option selected disabled>
                      --Seleccione su Ciudad de Origen
                    </option>
                    {ciudades.map((ciudad) => {
                      return (
                        <option value={ciudad.id} id={ciudad.id}>
                          {ciudad.nombre}
                        </option>
                      )
                    })}
                  </select>
                </div>
                <div className='mb-3'>
                  <h1>Ciudad de Destino</h1>
                  <select
                    className='form-select'
                    onChange={handleCiudadDestinoChange}
                    aria-label='Default select example'
                    name='ciudadDestino'
                    id='ciudadDestino'
                  >
                    <option selected>--Seleccione su Ciudad de Origen</option>
                    {ciudades.map((ciudad) => {
                      return (
                        <option key={ciudad.id} value={ciudad.id}>
                          {ciudad.nombre}
                        </option>
                      )
                    })}
                  </select>
                </div>
              </div>
            </div>
            <div className='datePickerContainer container'>
              <label for='fechaInicio'>Fecha de Salida</label>
              <input
                type='date'
                className='form-control'
                id='fechaInicio'
                onChange={handleFechaSalida}
              />
            </div>
            <div class='container'>
              <label for='appt'>Hora Salida</label>
              <input type='time' id='appt' className='form-control' onChange={handleHoraSalida}/>
            </div>
            <div className='datePickerContainer container'>
              <label for='fechaRegreso'>Fecha de Regreso</label>
              <input
                type='date'
                className='form-control'
                id='fechaRegreso'
                onChange={handleFechaRegreso}
              />
            </div>
            <div class='container'>
              <label for='appt'>Hora Regreso</label>
              <input type='time' id='appt' className='form-control' onChange={handleHoraRegreso}/>
            </div>
            <button
              onClick={(e) => {
                e.preventDefault()
                console.log(vuelo)
              }}
              className=' m-2 btn btn-primary'
            >
              Agregar Vuelo
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddVuelosComponent
