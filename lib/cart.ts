export function addToCart(product: any) {
  const existingCart = localStorage.getItem("cart")

  const cart = existingCart ? JSON.parse(existingCart) : []

  const existingProduct = cart.find(
    (item: any) => item.name === product.name
  )

  if (existingProduct) {
    existingProduct.quantity += 1
  } else {
    cart.push({
      ...product,
      quantity: 1,
    })
  }

  localStorage.setItem("cart", JSON.stringify(cart))
  window.dispatchEvent(new Event("cartUpdated"))
}