import React, {Fragment, useState} from 'react';
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const FormularioPAgo = () => {
    
    const[datosPago, setDatos]= useState({

        codigoDescuento: '',
        formaPago:'',

    })

    const capturaPago = (event) => {
        // console.log(event.target.value);
        setDatos({
            ...datosPago,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) =>{
        event.preventDefault();
    }

    // ----------------------- CUERPO--------------------------------------

    return (
    <Fragment>
        <h1 className='titulo'>Finalizar Compra</h1>  

            <form className="holap" onSubmit={enviarDatos}>
                
{/* --------------------------------------------------CUPON DE DESCUENTO---------------------------------------------------------------------------- */}
            
            <p>
                <button class="botone" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                <h3 className="estilo_one"> Cupón (Descuento)</h3>    
                </button>
            </p>
                <div class="collapse" id="collapseExample">  
                    <div class="mb-3">
                        <label class=""> Si lo tienes, ingresa un Código de descuento.
                        <input type="text" class="form-control me-2" name="codigoDescuento" id="codigoDescuento" onChange={capturaPago}/></label>
                        <button class="botone_tres" type="button"> Agregar Descuento </button>
                    </div>   
                </div>
{/* ----------------------------------------------------- TARJETA DE CREDITO ----------------------------------------------------------- */}
            <p>
                <button class="botone_dos" type="button">
                    <div class="form-check">
                        <input class="cubox" type="radio" name="formaPago" value="1" id="formaPago" onChange={capturaPago}/>
                        <label className='label_uno'>
                            Tarjeta de Crédito / Débito
                        </label>
                    </div>
                </button>
            </p>
                {datosPago.formaPago == 1 && (
                <div class="" id="">  
                    <div class="row g-3">
                        <div class="col">
                            <label for="exampleFormControlInput1" class="form-label">Número Tarjeta</label>
                            <input type="num" class="form-control" id="numeroTarjeta" name='numeroTarjeta' placeholder="" onChange={capturaPago} required/>
                        </div>
                        <div class="col">
                            <label for="exampleFormControlInput1" class="form-label">Nombre de Tarjeta</label>
                            <input type="text" class="form-control" name="nombreTarjeta" id="nombreTarjeta" placeholder="" onChange={capturaPago} required/>
                        </div> 
                        <div><h1></h1></div>                        
                    </div> 
                    <div class="row">
                        <div class="col">
                            <label for="exampleFormControlInput1" class="form-label">Fecha Expiración</label>
                            <input type="month" class="form-control" id="fechaExp" name="fechaExp" onChange={capturaPago} placeholder="" required/>
                        </div>
                        <div class="col">
                            <label for="exampleFormControlInput1" class="form-label">CVV</label>
                            <input type="num" class="form-control" id="cvv" name='cvv' onChange={capturaPago} placeholder="" required/>
                        </div>
                        <div><h1 className='esconder'>'</h1></div>
                    </div>
                </div>
                )}
            
    

{/* --------------------------------------------------------- WEBPAY ------------------------------------------------------------------ */}

                <button class="botone_dos" type="button">
                <div class="form-check">
                    <input class="cubox_dos" type="radio" name="formaPago" id="formaPago" value="2" onChange={capturaPago}/>
                        <label className='label_uno'>
                            Webpay - TransBank
                        </label>
                </div>
                </button>

{/* --------------------------------------------------------- CONDICIONES ------------------------------------------------------------------ */}
                <div><h1></h1></div> 
                <div><label className='label_dos'>
                    <input class="" type="checkbox" name="aceptaCond" id="aceptaCond" onChange={capturaPago} required/> He leido y acepto el Contrato de transporte aéreo, las Politicas de 
                    Privacidad y los Términos y Condiciones.
                    </label>
                </div>
                
                                
                <button type="submit"> Ir a pagar </button>
            
            </form>
    </Fragment>
    );
}
export default FormularioPAgo;

