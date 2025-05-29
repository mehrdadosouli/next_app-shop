

async function getProductDetails(shoppingId) {

  const response = await fetch(`http://localhost:3000/api/products/${shoppingId}`, {
    cache: "no-store",
  }).then((res) => res.json());
  return response
}

export {getProductDetails}