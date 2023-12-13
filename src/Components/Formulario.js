import { Form, Row, Col, Button } from "react-bootstrap";
export const Formulario = () =>{
    return(
        <section className="formulario" id="formulario">
            <div className="registro-text">
                <h2>
                Registrate para tener todas las novedades de la tienda
                </h2>
            </div>
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Ingresa un correo" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Contraseña" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Dirreccion</Form.Label>
                    <Form.Control placeholder="#123 zona /calle" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Dirreccion 2</Form.Label>
                    <Form.Control placeholder="Casa, Apartamento, etc." />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Pais</Form.Label>
                    <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Ciudad</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Selecciona...</option>
                        <option>La Paz</option>
                        <option>Cochabamba</option>
                        <option>Santa Cruz</option>
                        <option>Pando</option>
                        <option>Beni</option>
                        <option>Tarija</option>
                        <option>Sucre</option>
                        <option>Oruro</option>
                        <option>Potosi</option>
                    </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Notificame mi correo" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Registro 
                </Button>
            </Form>
        </section>
    );
}