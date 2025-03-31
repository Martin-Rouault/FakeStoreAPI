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

    return (
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
                                    style={{
                                        width: "100%", // Largeur fixe pour s'adapter au Card
                                        height: "350px", // Hauteur fixe pour uniformiser toutes les images
                                        objectFit: "cover", // Garde les proportions et remplit l'espace
                                    }}
                                />
                                <Card.Body>
                                    <Card.Title>{product.title}</Card.Title>
                                    <Card.Text>{product.description}</Card.Text>
                                    <p variant="primary" disabled>
                                        {product.price} €
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
            </Row>
        </Container>
    );
}

export default App;
