import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { getDatos, getBomba } from '../services/services'
import { BombaTable } from './BombaTable';
import { SensoresTable } from './SensoresTable';
import { Navbar } from './Navbar';



export function Dashboard() {
    // const [datos, setDatos] = useState([{ fecha: "1" }]);
    // const [bomba, setBomba] = useState([{ fecha: "1" }]);

    // useEffect(() => {
    //     getDatos().then((response) => {
    //         setDatos(response.data)
    //     })
    //     getBomba().then((res) => {
    //         setBomba(res.data)
    //     })
    // }, []);


    //if (localStorage.getItem('user') === 'true') {
        return (
            <div>
                <Navbar />
                <div>



                    <h1>
                        Ultimos datos recoletados de la planta
                    </h1>

                    <div>
                        {/* Tabla del ultimo dato obtenido del hardware */}
                        <table className="table table-striped ">

                            <thead className='thead-dark'>
                                <tr className='table-primary'>
                                    <th colSpan="7"><p className="text-center">Tabla de datos recolectados</p></th>
                                </tr>
                                <tr className='text-center table-primary'>
                                    <th >ID</th>
                                    <th>HORA</th>
                                    <th>FECHA</th>
                                    <th>Temperatura</th>
                                    <th>humedad</th>
                                    <th>Agua</th>
                                    <th>Suelo</th>
                                </tr>
                            </thead>

                            <tbody >
                                {/* <SensoresTable {...datos[datos.length - 1]} /> */}


                            </tbody>
                        </table>

                        {/* Tabla del historial de regado */}
                        <table className="table table-striped">

                            <thead>
                                <tr className='table-primary'>
                                    <th colSpan="3"><p className="text-center">Tabla de Historial de regado</p></th>
                                </tr>
                                <tr className='text-center table-primary'>
                                    <th>ID</th>
                                    <th>HORA</th>
                                    <th>FECHA</th>
                                </tr>
                            </thead>

                            <tbody>
                                {/* <BombaTable  {...bomba[bomba.length - 1]} /> */}


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    //} else {
      //  return <Navigate to='/' />
    //}



}