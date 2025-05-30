

async function getProductDetails(shoppingId) {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${shoppingId}`, {
    cache: "no-store",
  }).then((res) => res.json());
  return response
}

export {getProductDetails}
