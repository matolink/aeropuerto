import React from 'react'

const ResumenCompra = () => {

    return(
        <div className='cuadroResumen'>
            <div><label className="labelResumen" ><li><b>Vuelo de ida</b> / fecha y hora</li></label></div>
            <div></div>
            <div><label className="labelResumen"><li><b>Vuelo de ida</b> / fecha y hora</li></label></div>
            <div><label className="labelResumen"><li><b>Adicionales</b> </li></label></div>
            <div><p className="labelValor">$Valor</p></div>

        </div>
        
    );
}

export default ResumenCompra;