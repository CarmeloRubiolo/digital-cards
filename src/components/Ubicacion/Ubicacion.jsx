import "./Ubicacion.css"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const Ubicacion = () => {
 
    return (
        <>
            <h2 className="tittle-ubi">Ubicación y horario</h2>
            <div className="fondo-minions">
                <Card className="card-container" sx={{ maxWidth: 400 }}>
                    <CardMedia
                        sx={{ height: 200 }}
                        image="../../../imagenes/salon.jpg"
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Salón | Había Una Vez
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        <b>Dirección: </b> Gino Galeotti 457 Bº Gral. Bustos. |
                                    Córdoba | Argentina <br /><br />
                                    <b>Fecha:</b> Sábado 10/05/2022 <br /><br />
                                    <b>Horario: </b>18:00 hs
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </>

    )
}

export default Ubicacion