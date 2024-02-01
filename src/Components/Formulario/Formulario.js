// import  Select from "react-selelect/dist/declarations/src/Select";
import Select from "react-select";

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Container, InputGroup } from "react-bootstrap";
 import  {options, opcionRegimeen, RazonSocial, UsoPrincipal}  from "./Index";


function Formulario() {
    const [validated, setValidated] = useState(false);

    const [selectOption, setSelectOption] = useState(null);
    const [selectUN, setSelectUN] = useState(null);
    const [selectUsoP,setSelectUsoP] = useState(null);
    const [selectRF,setSelectRF] =  useState(null);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

         setValidated(true);
    };



    return (
        <div style={{ display: 'block', paddingLeft: '70px', paddingRight: '80px' }}>
            <Container fluid>
                <Form noValidate validated={validated} onSubmit={handleSubmit} >
                <Row className="justify-content-md-center">
                <Form.Group as={Col} md="3" controlId="idRazonSocial">
                            <Form.Label>Unidad de Negocio</Form.Label>
                            <Select defaultValue={selectUN} onChange={setSelectUN} options={RazonSocial} ></Select>
                            <Form.Control.Feedback type="invalid">
                                Favor de seleccionar un pais
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationCustom01">
                            <Form.Label> <span> Código de ticket</span></Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Código de ticket"
                                defaultValue=""
                            />
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="idRF">
                            <Form.Label>Uso CFDI</Form.Label>
                            {/* //<Form.Control type="text" placeholder="Pais" required /> */}
                            {/* <Select defaultValue={selectOption} onChange={setSelectOption}option={options} isSearchable isMulti></Select> */}
                            <Select defaultValue={selectUsoP} onChange={setSelectUsoP} options={UsoPrincipal} required></Select>
                            <Form.Control.Feedback type="invalid">
                                Favor de seleccionar un uso de CFDI
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="justify-content-md-center">
                        
                        <Form.Group as={Col} md="3" controlId="validationCustom01">

                            <Form.Label>Razon Social</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Razon social"
                                defaultValue=""
                            />
                        </Form.Group>

                        <Form.Group as={Col} md="3" controlId="validationCustom02">
                            <Form.Label>RFC</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="RFC"
                                defaultValue=""
                            />
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationCustom02">
                            <Form.Label>Total del ticket</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Total"
                                defaultValue=""
                            />
                        </Form.Group>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Form.Group as={Col} md="3" controlId="validationCustom03">
                            <Form.Label>Domicilio Fiscal</Form.Label>
                            <Form.Control type="text" placeholder="Domicilio fiscal" />
                            <Form.Control.Feedback type="invalid">
                                Favor de agregar un domicilio valido
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationCustom04">
                            <Form.Label>C.P</Form.Label>
                            <Form.Control type="text" placeholder="Código postal" required />
                            <Form.Control.Feedback type="invalid">
                                Favor de agregar un Código postal valido
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationCustom05">
                            <Form.Label>Estado</Form.Label>
                            <Form.Control type="text" placeholder="Estado" />
                            <Form.Control.Feedback type="invalid">
                                Favor de agegar un estado
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Form.Group as={Col} md="3" controlId="idPais">
                            <Form.Label>Estado</Form.Label>
                            {/* //<Form.Control type="text" placeholder="Pais" required /> */}
                            {/* <Select defaultValue={selectOption} onChange={setSelectOption}option={options} isSearchable isMulti></Select> */}
                            <Select defaultValue={selectOption} onChange={setSelectOption} options={options} ></Select>
                            <Form.Control.Feedback type="invalid">
                                Favor de seleccionar un Estado
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="idRF">
                            <Form.Label>Regimen Fiscal</Form.Label>
                            {/* //<Form.Control type="text" placeholder="Pais" required /> */}
                            {/* <Select defaultValue={selectOption} onChange={setSelectOption}option={options} isSearchable isMulti></Select> */}
                            <Select defaultValue={selectRF} onChange={setSelectRF} options={opcionRegimeen} required></Select>
                            <Form.Control.Feedback type="invalid">
                                Favor de seleccionar un pais
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationFormikUsername">
                            <Form.Label>Corre electrónico</Form.Label>
                            <InputGroup hasValidation>
                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                            <Form.Control
                                    type="text"
                                    placeholder="Correo electrónico" required/>
                            <Form.Control.Feedback type="invalid">
                                Favor de agregar un correo valido
                            </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Row >
                    <br />
                    <Row className="justify-content-md-center">

                    <Button as={Col} md="3" type="submit" variant="outline-primary" size="sm">Generar</Button>
                    </Row>

                </Form>
            </Container>
        </div>
    );
}

export default Formulario;