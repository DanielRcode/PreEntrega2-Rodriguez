import logo from "../assets/icons/logo.png";

import React from "react";

import { Flex, Button, Image } from "@chakra-ui/react";

import { Link } from "react-router-dom";

import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <>
            <Flex className="navbar-container" h="10vh" alignItems="center" >
                <Flex w="20vw">
                    <Link to="/">
                        <Image className="nav-logo" src={logo} h="20vh" w="25vw" />
                    </Link>
                </Flex>

                <Flex justifyContent="center" className="navbar-list" w="100vw">
                    <ul className="none-style-list">
                    <li className="list-item">
                            <Link to={"/catalogue"}>
                                <Button
                                    className="item-button"
                                    variant="link"
                                    colorScheme="white"
                                    fontSize={20}
                                >
                                    Catalogo
                                </Button>
                            </Link>
                        </li>
                        {">>"}
                        <li className="list-item">
                            <Link to={`/catalogue/${"sudaderas"}`}>
                                <Button
                                    className="item-button"
                                    variant="link"
                                    colorScheme="white"
                                >
                                    Sudaderas
                                </Button>
                            </Link>
                        </li>
                        <li className="list-item">
                            <Link to={`/catalogue/${"calzado"}`}>
                                <Button
                                    className="item-button"
                                    variant="link"
                                    colorScheme="white"
                                >
                                    Calzado
                                </Button>
                            </Link>
                        </li>
                        <li className="list-item">
                            <Link to={`/catalogue/${"pantalones"}`}>
                                <Button
                                    className="item-button"
                                    variant="link"
                                    colorScheme="white"
                                >
                                    Pantalones
                                </Button>
                            </Link>
                        </li>
                        <li className="list-item">
                            <Link to={`/catalogue/${"accesorios"}`}>
                                <Button
                                    className="item-button"
                                    variant="link"
                                    colorScheme="white"
                                >
                                    Accesorios
                                </Button>
                            </Link>
                        </li>
                    </ul>
                </Flex>

                <Flex flexDirection="column" className="navbar-item" w="20vw">
                    <CartWidget />
                </Flex>
            </Flex>
        </>
    );
};

export default NavBar;
