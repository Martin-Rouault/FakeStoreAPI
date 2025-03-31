import { useEffect, useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import "./App.css";

function App() {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        async function fetchProducts() {
            const url = "https://fakestoreapi.com/products";
            const response = await fetch(url);
            const data = await response.json();
            setProducts(data);
        }
        fetchProducts();
    }, []);

    console.log(products);

    const newProduct = {
        id: 0,
        title: "T-Shirt",
        price: 20,
        description: "Un t-shirt super cool.",
        category: "Haut",
        image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
    };

    async function addProduct() {
        const response = await fetch("https://fakestoreapi.com/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: "T-Shirt",
                price: 20,
                description: "Un t-shirt super cool.",
                category: "Haut",
                image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
            }),
        });
        const data = await response.json();
        if (data) {
            alert(`Le produit avec l'id ${data.id} a été créé`);
        }
    }

    return (
        <>
            <Button className="m-3" onClick={() => addProduct()}>
                Ajouter un produit
            </Button>
            <Container className="mt-4">
                <Row>
                    {products &&
                        products.map((product) => (
                            <Col key={product.id} md={3} className="mb-4">
                                <Card className="h-100">
                                    <Card.Img
                                        variant="top"
                                        src={product.image}
                                        alt={product.title}
                                        className="card-img"
                                    />
                                    <Card.Body>
                                        <Card.Title>{product.title}</Card.Title>
                                        <Card.Text>
                                            {product.description}
                                        </Card.Text>
                                        <p variant="primary" disabled>
                                            {product.price} €
                                        </p>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                </Row>
            </Container>
        </>
    );
}

export default App;
