import { Navbar, Nav, Container } from 'react-bootstrap';
import Link from 'next/link';

export default function MainNav() {
    return (
      <>
        <Navbar className="fixed-top dark bg-dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand>Ashwin B N</Navbar.Brand>
            <Nav className="me-auto">
              <Link href="/" passHref legacyBehavior>
                <Nav.Link>Countries</Nav.Link>
              </Link>
              <Link href="/about" passHref legacyBehavior>
                <Nav.Link>About</Nav.Link>
              </Link>
            </Nav>
          </Container>
        </Navbar>
        <br /> <br />
      </>
    );
  }