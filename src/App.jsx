import { useEffect, useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

import { addProduct } from "./api/addProduct";
import { updateFullProduct } from "./api/updateFullProduct";
import { updatePartialProduct } from "./api/updatePartialProduct";
import { deleteProduct } from "./api/deleteProduct";

import "./App.css";

function App() {
    const [products, setProducts] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProducts() {
            const url = "https://fakestoreapi.com/products";
            try {
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(`Erreur HTTP ${response.status}`);
                }

                const data = await response.json();

                setProducts(data);
            } catch (error) {
                setError(error.message);
                console.log(error.message);
            } finally {
                setLoading(false);
            }
        }
        fetchProducts();
    }, []);

    if (error) return <p>Erreur : {error}</p>;

    if (loading) return <p>Chargement ...</p>;

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
                                    <Card.Body className="d-flex flex-column">
                                        <Card.Title>{product.title}</Card.Title>
                                        <Card.Text>
                                            {product.description}
                                        </Card.Text>
                                        <p variant="primary" disabled>
                                            {product.price} €
                                        </p>
                                        <div className="mt-auto">
                                            <Button
                                                onClick={() =>
                                                    updateFullProduct(
                                                        product.id
                                                    )
                                                }
                                            >
                                                Modifier le produit complet
                                            </Button>
                                            <Button
                                                onClick={() =>
                                                    updatePartialProduct(
                                                        product.id
                                                    )
                                                }
                                                className="mt-2"
                                                variant="secondary"
                                            >
                                                Modifier le prix du produit
                                            </Button>
                                            <Button
                                                onClick={() =>
                                                    deleteProduct(product.id)
                                                }
                                                className="mt-2"
                                                variant="danger"
                                            >
                                                Supprimer le produit
                                            </Button>
                                        </div>
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
