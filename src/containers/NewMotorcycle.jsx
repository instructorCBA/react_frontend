// containers/NewMotorcycle.jsx

import axios from 'axios'
import React, {useState} from 'react'
import { Container, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const NewMotorcycle = () => {

    const navigate = useNavigate();

    const [data, setData] = useState({trademark: "", model: "", reference:"", price:"", image:"", supplier:""})
    
    const handleChange = ({target}) => {
        setData({
            ...data,
            [target.name]: target.value
        })
    }

    const URL = "http://localhost:8000/api/"

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post(URL,data);
        if (response.status === 201) {
            Swal.fire(
                'Guardado!',
                `El registro ${response.data.reference} ha sido guardado exitosamente!`,
                'success'
            )
            navigate('/')
        }else {
            Swal.fire(
                'Error!',
                'Hubo un problema al crear el registro!',
                'error'
            )
        }
    }

    return (
        <Container>
            <h1 className="text-center">Nueva Moto</h1>
            <Form
                onSubmit={handleSubmit}
            >
                <Form.Group className="mb-3">
                    <Form.Control 
                        type="text"
                        name="reference"
                        placeholder="Referencia"
                        value={data.reference}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control 
                        type="text"
                        name="model"
                        placeholder="Modelo"
                        value={data.model}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control 
                        type="number"
                        name="price"
                        placeholder="Precio"
                        value={data.price}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control 
                        type="text"
                        name="image"
                        placeholder="URL de la imagen"
                        value={data.image}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <select 
                        className="form-control"
                        name="trademark"
                        onChange={handleChange}
                        required
                    >
                        <option value="">Seleccione la Marca de la motocicleta</option>
                        <option value="YAMAHA">YAMAHA</option>
                        <option value="SUZUKI">SUZUKI</option>
                        <option value="HONDA">HONDA</option>
                        <option value="DUCATI">DUCATI</option>
                    </select>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control 
                        type="text"
                        name="supplier"
                        placeholder="Proveedor"
                        value={data.supplier}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <button className="btn btn-success">Guardar</button>
            </Form>
        </Container>
    )
}

export default NewMotorcycle;
