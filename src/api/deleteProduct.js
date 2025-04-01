import { useState } from "react";

export function useDeleteProduct() {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    async function deleteProduct(id) {
        try {
            const response = await fetch(
                `https://fakestoreapi.com/products/${id}`,
                {
                    method: "DELETE",
                }
            );

            if (!response.ok) {
                throw new Error(`Erreur HTTP ${response.status}`);
            }

            const data = await response.json();
            if (data) {
                alert(`Le produit avec l'id ${data.id} a été supprimé`);
            }
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    return { deleteProduct, error, loading };
}
