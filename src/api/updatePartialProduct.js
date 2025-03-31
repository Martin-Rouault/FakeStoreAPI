export async function updatePartialProduct(id) {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            price: 20,
        }),
    });
    const data = await response.json();
    if (data) {
        alert(`Le prix du produit avec l'id ${data.id} a été modifié`);
    }
}
