export async function updatePartialProduct(id) {
    try {
        const response = await fetch(
            `https://fakestoreapi.com/products/${id}`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    price: 20,
                }),
            }
        );

        if (!response.ok) {
            throw new Error(`Erreur HTTP ${response.status}`);
        }

        const data = await response.json();

        if (data) {
            alert(`Le prix du produit avec l'id ${data.id} a été modifié`);
        }
    } catch (error) {
        console.log(error.message);
        alert(error.message);
    }
}
