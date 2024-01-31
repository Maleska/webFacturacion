// import  Select from "react-selelect/dist/declarations/src/Select";
import Select from "react-select";
import "./Formulario.css";

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Container, InputGroup } from "react-bootstrap";



const options = [

    { id: 'AGS', value: "AGS", label: "Aguascalientes" },
    { id: 'BC', value: "BC", label: "Baja California" },
    { id: 'BCS', value: "BCS", label: "Baja California Sur" },
    { id: 'CAM', value: "CAM", label: "Campeche" },
    { id: 'CHI', value: "CHI", label: "Chihuahua" },
    { id: 'CHS', value: "CHS", label: "Chiapas" },
    { id: 'COA', value: "COA", label: "Coahuila" },
    { id: 'COL', value: "COL", label: "Colima" },
    { id: 'DF', value: "DF", label: "Distrito Federal" },
    { id: 'DUR', value: "DUR", label: "Durango" },
    { id: 'GRO', value: "GRO", label: "Guerrero" },
    { id: 'GTO', value: "GTO", label: "Guanajuato" },
    { id: 'HID', value: "HID", label: "Hidalgo" },
    { id: 'JAL', value: "JAL", label: "Jalisco" },
    { id: 'MCH', value: "MCH", label: "Michoacan" },
    { id: 'MEX', value: "MEX", label: "Estado de México" },
    { id: 'MOR', value: "MOR", label: "Morelos" },
    { id: 'NAY', value: "NAY", label: "Nayarit" },
    { id: 'NL', value: "NL", label: "Nuevo León" },
    { id: 'OAX', value: "OAX", label: "Oaxaca" },
    { id: 'PUE', value: "PUE", label: "Puebla" },
    { id: 'QR', value: "QR", label: "Quintana Roo" },
    { id: 'QUE', value: "QUE", label: "Queretaro" },
    { id: 'SIN', value: "SIN", label: "Sinaloa" },
    { id: 'SLP', value: "SLP", label: "San Luis Potosi" },
    { id: 'SON', value: "SON", label: "Sonora" },
    { id: 'TAB', value: "TAB", label: "Tabasco" },
    { id: 'TAM', value: "TAM", label: "Tamaulipas" },
    { id: 'TLA', value: "TLA", label: "Tlaxcala" },
    { id: 'VER', value: "VER", label: "Veracruz" },
    { id: 'YUC', value: "YUC", label: "Yucatan" },
    { id: 'ZAC', value: "ZAC", label: "Zacatecas" },






];
const opcionRegimeen=[
    {id:'601',value:"601",label:"General de Ley Personas Morales"},
    {id:'603',value:"603",label:"Personas Morales con Fines no Lucrativos"},
    {id:'605',value:"605",label:"Sueldos y Salarios e Ingresos Asimilados a Salarios"},
    {id:'606',value:"606",label:"Arrendamiento"},
    {id:'607',value:"607",label:"Régimen de Enajenación o Adquisición de Bienes"},
    {id:'608',value:"608",label:"Demás ingresos"},
    {id:'610',value:"610",label:"Residentes en el Extranjero sin Establecimiento Permanente en México"},
    {id:'611',value:"611",label:"Ingresos por Dividendos (socios y accionistas)"},
    {id:'612',value:"612",label:"Personas Físicas con Actividades Empresariales y Profesionales"},
    {id:'614',value:"614",label:"Ingresos por intereses"},
    {id:'615',value:"615",label:"Régimen de los ingresos por obtención de premios"},
    {id:'616',value:"616",label:"Sin obligaciones fiscales"},
    {id:'620',value:"620",label:"Sociedades Cooperativas de Producción que optan por diferir sus ingresos"},
    {id:'621',value:"621",label:"Incorporación Fiscal"},
    {id:'622',value:"622",label:"Actividades Agrícolas, Ganaderas, Silvícolas y Pesqueras"},
    {id:'623',value:"623",label:"Opcional para Grupos de Sociedades"},
    {id:'624',value:"624",label:"Coordinados"},
    {id:'625',value:"625",label:"Régimen de las Actividades Empresariales con ingresos a través de Plataformas Tecnológicas"},
    {id:'626',value:"626",label:"Régimen Simplificado de Confianza"}

];
const RazonSocial =[
    {id:'D',value:"D",label:"DermaExpress"},
    {id:'C',value:"C",label:"Call Center"},
    {id:'A',value:"A",label:"Alicia"}

];
const UsoPrincipal=[
    {id:'G01',value:"Adquisición de mercancías",label:"Adquisición de mercancías"},
    {id:'G02',value:"Devoluciones, descuentos o bonificaciones",label:"Devoluciones, descuentos o bonificaciones"},
    {id:'G03',value:"Gastos en general ",label:"Gastos en general "},
    {id:'H01',value:"Construcciones ",label:"Construcciones "},
    {id:'I02',value:"Mobiliario y equipo de oficina por inversiones ",label:"Mobiliario y equipo de oficina por inversiones "},
    {id:'I03',value:"Equipo de transporte ",label:"Equipo de transporte "},
    {id:'I04',value:"Equipo de cómputo y accesorios ",label:"Equipo de cómputo y accesorios"},
    {id:'I05',value:"Dados, troqueles, moldes, matrices y herramental ",label:"Dados, troqueles, moldes, matrices y herramental "},
    {id:'I06',value:"Comunicaciones telefónicas ",label:"Comunicaciones telefónicas "},
    {id:'I07',value:"Comunicaciones satelitales ",label:"Comunicaciones satelitales "},
    {id:'I08',value:"Otra maquinaria y equipo ",label:"Otra maquinaria y equipo "},
    {id:'D01',value:"Honorarios médicos, dentales y gastos hospitalarios. ",label:"Honorarios médicos, dentales y gastos hospitalarios. "},
    {id:'D02',value:"Gastos médicos por incapacidad o discapacidad ",label:"Gastos médicos por incapacidad o discapacidad "},
    {id:'D03',value:"Gastos funerales. ",label:"Gastos funerales. "},
    {id:'D04',value:"Donativos",label:"Donativos"},
    {id:'D05',value:"Intereses reales efectivamente pagados por créditos hipotecarios (casa habitación). ",label:"Intereses reales efectivamente pagados por créditos hipotecarios (casa habitación). "},
    {id:'D06',value:"Aportaciones voluntarias al SAR. ",label:"Aportaciones voluntarias al SAR. "},
    {id:'D07',value:"Primas por seguros de gastos médicos. ",label:"Primas por seguros de gastos médicos. "},
    {id:'D08',value:"Gastos de transportación escolar obligatoria. ",label:"Gastos de transportación escolar obligatoria. "},
    {id:'D09',value:"Depósitos en cuentas para el ahorro, primas que tengan como base planes de pensiones. ",label:"Depósitos en cuentas para el ahorro, primas que tengan como base planes de pensiones. "},
    {id:'D10',value:"Pagos por servicios educativos (colegiaturas) ",label:"Pagos por servicios educativos (colegiaturas) "},
    {id:'CP01',value:"Pagos",label:"Pagos"},
    {id:'CN01',value:"Nómina",label:"Nómina"},
    {id:'S01',value:"Sin Efectos Fiscales",label:"Sin Efectos Fiscales"},

];

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
                            <Form.Label>Pais</Form.Label>
                            {/* //<Form.Control type="text" placeholder="Pais" required /> */}
                            {/* <Select defaultValue={selectOption} onChange={setSelectOption}option={options} isSearchable isMulti></Select> */}
                            <Select defaultValue={selectOption} onChange={setSelectOption} options={options} ></Select>
                            <Form.Control.Feedback type="invalid">
                                Favor de seleccionar un pais
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
                    {/* <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group> */}
                    <br />
                    <Button type="submit">Generar</Button>

                </Form>
            </Container>
        </div>
    );
}

export default Formulario;