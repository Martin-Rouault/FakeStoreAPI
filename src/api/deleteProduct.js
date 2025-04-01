export async function deleteProduct(id) {
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
        console.log(error.message);
    } finally {
        console.log("Done");
    }
}
