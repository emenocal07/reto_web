import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import phonesService from '../../services/phone.services'

import './PhoneDetailsPage.css'

const PhoneDetailsPage = () => {

    const [phoneDetails, setPhoneDetails] = useState({})
    const { id } = useParams()



    useEffect(() => {
        phonesService
            .getOnePhone(id)
            .then(({ data }) => setPhoneDetails(data))
            .catch(err => console.log(err))
    }, [])


    return (

        <>
            < Container >
                <h2>{phoneDetails.name}</h2>
                <hr />
                <Card>


                    <Row className='detailsCard'>
                        <Col md={3}>
                            <img style={{ width: '150%', paddingRight: '80px' }} src={phoneDetails.imageFileName} alt={phoneDetails.name} />
                        </Col>

                        <Col md={8}>
                            <h3>Información</h3>

                            <p>Nombre: {phoneDetails.name}</p>
                            <p>Descripción: {phoneDetails.description}</p>
                            <p>Precio: {phoneDetails.price}</p>

                            <h3>Especificaciones</h3>

                            <p>Color: {phoneDetails.color} metros</p>
                            <p>Pantalla: {phoneDetails.screen}</p>
                            <p>Procesador: {phoneDetails.processor}</p>
                            <p>Ram: {phoneDetails.ram} gb RAM</p>
                        </Col>
                        <Link to="/">
                            <Button variant="dark">Volver</Button>
                        </Link>

                    </Row>
                </Card>

            </Container >
        </>


    )
}

export default PhoneDetailsPage

