

async function getProductDetails(shoppingId) {

  const response = await fetch(`/api/products/${shoppingId}`, {
    cache: "no-store",
  }).then((res) => res.json());
  return response
}

export {getProductDetails}
