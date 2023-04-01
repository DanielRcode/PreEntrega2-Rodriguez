import React from "react";

import {
    Button,
    Flex,
    Card,
    CardBody,
    Image,
    Stack,
    Heading,
    Text,
    Divider,
    CardFooter,
    ButtonGroup,
} from "@chakra-ui/react";


import ItemDetailContainer from "./ItemDetailContainer";

import { Link } from "react-router-dom";

const Item = ({ title, id, quantity, userId }) => {
    return (
        <>
            <Link to={`/item/${id}`}>
                <Card className="card" maxW="sm" minW="sm">
                    <CardBody className="cardbody">
                        <Image
                            src="https://i.pinimg.com/originals/6b/22/98/6b2298fec93ad8240f87c8228ab87969.jpg"
                            alt="Green double couch with wooden legs"
                            borderRadius="lg"
                        />
                        <Stack mt="6" spacing="3">
                            <Heading size="md"> ID: {id}</Heading>
                            <Text> Title: {title}</Text>
                            <Text> UserID: {userId}</Text>
                            <Text> { quantity ? `Quantity: ${quantity}` : "" } </Text>
                        </Stack>
                        <CardFooter justifyContent="center"></CardFooter>
                    </CardBody>
                </Card>
            </Link>
        </>
    );
};

export default Item;
