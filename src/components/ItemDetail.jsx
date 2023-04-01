import React from "react";

import {
    Flex,
    Card,
    CardBody,
    Image,
    Stack,
    Text,
    Heading,
    CardFooter,
} from "@chakra-ui/react";

import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
    return (
        <>
            {item.map((product) => {
                return (
                    <Card key={product.id} className="card" maxW="sm" minW="sm">
                        <CardBody className="cardbody">
                            <Image
                                src="https://i.pinimg.com/originals/6b/22/98/6b2298fec93ad8240f87c8228ab87969.jpg"
                                alt="Green double couch with wooden legs"
                                borderRadius="lg"
                            />
                            <Stack mt="6" spacing="3">
                                <Heading size="md">{product.title}</Heading>
                                <Text>{product.title}</Text>
                                <Text>ID:: {product.id}</Text>
                                <Text>UserId: {product.userId}</Text>
                                <Text>Precio Stock Color Talle Otro</Text>
                            </Stack>

                            <CardFooter justifyContent="center">
                                <ItemCount product={product} />
                            </CardFooter>
                        </CardBody>
                    </Card>
                );
            })}
        </>
    );
};

export default ItemDetail;
