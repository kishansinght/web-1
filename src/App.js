import React from 'react';
import {
	HashRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import './App.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { About } from './components/About';
import { Home } from './components/Home';
import { Dashboard } from './components/Dashboard';

// "homepage": "https://http://kishan.zapto.org/",

class App extends React.Component {
	render() {
		return (
			<Router>
				<div className="container" style={{
					backgroundImage: "url(/images/background.jpg)", 
					backgroundSize: 'cover',
					overflow: 'hidden',
				}}>
					<div className='row'>
						<div className="col-md-12">
							<Navbar bg="dark" variant="dark" expand="lg" sticky="top">
								<Navbar.Brand href="#home">Sample Website</Navbar.Brand>
								<Navbar.Toggle aria-controls="basic-navbar-nav" />
								<Navbar.Collapse id="basic-navbar-nav">
									<Nav className="mr-auto">
										<Nav.Link href="/">Home</Nav.Link>
										<Nav.Link href="/dashboard">Contact Us</Nav.Link>
										<Nav.Link href="/about">About Us</Nav.Link>
										<NavDropdown title="Dropdown" id="basic-nav-dropdown">
											<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
											<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
											<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
											<NavDropdown.Divider />
											<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
										</NavDropdown>
									</Nav>
									<Form inline>
										<FormControl type="text" placeholder="Search" className="mr-sm-2" />
										<Button variant="outline-success">Search</Button>
									</Form>
								</Navbar.Collapse>
							</Navbar>
						</div>
					</div>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/dashboard" element={<Dashboard />} />
					</Routes>

					<div className='row'>
						{/* <Navbar color="primary">
						<div className="container" id="brand">
							<NavbarBrand>Personal blog coming up soon.....</NavbarBrand>
						</div>
					</Navbar> */}
						{/* <Greet /> */}
						<h1>Content</h1>
						<p></p>
						{/* <img src={window.location.origin + '/images/underconstruction.jpg'} alt="image" /> */}
						{/* <Menu places={this.state.places} /> */}
					</div>
				</div>
			</Router>

		);
	}
}

export default App;