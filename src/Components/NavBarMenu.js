import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';


export default function NavBarMenu() {
    
    return(
        <div>
        <Navbar bg="dark" variant="dark" >
            <Container>
                <Navbar.Brand href="#!">
                    Generador de <b>Facturas</b>
                </Navbar.Brand>
                <Navbar.Toggle>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text></Navbar.Text>
                    </Navbar.Collapse>
                </Navbar.Toggle>
            </Container>
        </Navbar>
        </div>
    );
};
