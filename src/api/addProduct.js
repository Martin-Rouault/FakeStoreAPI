export async function addProduct() {
    try {
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

        if (!response.ok) {
            throw new Error(`Erreur HTTP ${response.status}`);
        }

        const data = await response.json();

        if (data) {
            alert(`Le produit avec l'id ${data.id} a été créé`);
        }
    } catch (error) {
        console.log("Erreur lors de l'ajout du produit :", error.message);
        alert(
            `❌ Oups ! Une erreur est survenue.\n\n🛑 Détails : ${error.message}`
        );
    }
}
