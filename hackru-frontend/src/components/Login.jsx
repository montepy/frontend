/**
 * @author Shivan Modha
 * @description The standard login page
 * @version 0.0.1
 * Created 12/25/18
 */
/***************************************************************IMPORTS***************************************************************/
import React, { Component } from "react";
import { Container, Col, Input, InputGroup, InputGroupAddon, Form, FormGroup, Button, FormText } from "reactstrap";
import { theme } from "../Defaults";
import { Icon } from "react-fa";
import { Link } from "react-router-dom";
/***************************************************************IMPORTS***************************************************************/

/*****************************************************************APP*****************************************************************/
/**
 * Login application for "/login"
 */
class LoginPage extends Component {
    render() {
        let contents = (
            <div style={{ padding: 30 }}>
                <h1 className="display-1 theme-font">Login</h1>
                <p className="lead">Welcome to HackRU!</p>
                <Form onSubmit={(e) => {
                    e.preventDefault();
                    let email = document.getElementById("email").value;
                    let password = document.getElementById("password").value;
                    this.props.profile.Login(email, password, (msg) => {
                        if (msg) {
                            console.log(msg);
                        } else {
                            console.log("YAYA");
                        }
                    });
                }}>
                    <FormGroup row>
                        <InputGroup>
                            <Input required id="email" type="email" placeholder="email" style={{ borderRadius: 0, background: "rgba(255, 255, 255, 0.2)", border: "none", color: "black" }} />
                        </InputGroup>
                    </FormGroup>
                    <FormGroup row>
                        <InputGroup>
                            <Input required type="password" id="password" placeholder="password" style={{ borderRadius: 0, background: "rgba(255, 255, 255, 0.2)", border: "none", color: "black" }} />
                            <InputGroupAddon addonType="append">
                                <Button color="success" style={{ borderRadius: 0 }}><Icon name="chevron-right" /></Button>
                            </InputGroupAddon>
                        </InputGroup>
                    </FormGroup>
                    <FormText><Link to="/signup" style={{ color: "rgba(255, 255, 255, 0.5)" }}>Not a member? Create an Account!</Link></FormText>
                    <FormText><Link to="/" style={{ color: "rgba(255, 255, 255, 0.5)" }}>Return Home</Link></FormText>
                </Form>
            </div>
        );
        if (!this.props.isMobile) {
            return (
                <Container fluid style={{ width: "100%", minHeight: "100vh", textAlign: "center", backgroundColor: theme.secondary[1] }} className="d-flex align-items-center">
                    <Col />
                    <Col xs={3} style={{ display: "block", zIndex: 3, color: "white", background: "rgba(255, 255, 255, 0.05)" }}>
                        {contents}
                    </Col>
                    <Col />
                </Container>
            );
        } else {
            return (
                <Container fluid style={{ width: "100%", minHeight: "100vh", textAlign: "center", backgroundColor: theme.secondary[1] }} className="d-flex align-items-center">
                    <Col xs={12} style={{ display: "block", zIndex: 3, color: "white", background: "rgba(255, 255, 255, 0.05)" }}>
                        {contents}
                    </Col>
                </Container>
            );
        }
    }
}
/*****************************************************************APP*****************************************************************/

/***************************************************************EXPORTS***************************************************************/
export default LoginPage;
/***************************************************************EXPORTS***************************************************************/