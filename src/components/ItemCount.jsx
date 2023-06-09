import { React, useState } from "react";
import { Flex, Button, useToast, Box } from "@chakra-ui/react";
import Error from "./Error";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const ItemCount = ({ product }) => {
    const [quantity, setQuantity] = useState(0);

    const toast = useToast();

    function getCarrito() {
        let carrito = [];
        if (localStorage.getItem("carrito")) {
            carrito = JSON.parse(localStorage.getItem("carrito"));
        } else {
            carrito = [];
        }
        return carrito;
    }

    function addToCart(product, quantity) {
        if (quantity > 0) {
            let compra = [];
            let carrito = getCarrito();

            if (carrito.find((compra) => compra[0].id == product.id)) {
                let prod = carrito.find((compra) => compra[0].id == product.id);
                prod[1] = quantity;
                localStorage.setItem("carrito", JSON.stringify(carrito));
                toast({
                    position: "bottom-right",
                    render: () => (
                        <Box color="black" p={3} bg="white">
                            Se modifico la cantidad seleccionada
                        </Box>
                    ),
                });
            } else {
                compra.push(product);
                compra.push(quantity);
                carrito.push(compra);
                localStorage.setItem("carrito", JSON.stringify(carrito));
                toast({
                    position: "bottom-right",
                    render: () => (
                        <Box color="black" p={3} bg="white">
                            Se agrego el producto al carrito
                        </Box>
                    ),
                });
            }
        }
    }

    return (
        <>
            <Flex>
                <Button
                    textColor="black"
                    onClick={() => setQuantity(quantity - 1)}
                >
                    -
                </Button>

                <Button
                    textColor="black"
                    ml={4}
                    mr={4}
                    onClick={() => {
                        addToCart(product, quantity);
                    }}
                >
                    Add to Cart: {quantity}
                </Button>

                <Button
                    textColor="black"
                    onClick={() => setQuantity(quantity + 1)}
                >
                    +
                </Button>
            </Flex>
        </>
    );
};

export default ItemCount;
