export async function deleteProduct(id) {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
        method: "DELETE",
    });
    const data = await response.json();
    if (data) {
        alert(`Le produit avec l'id ${data.id} a été supprimé`);
    }
}
