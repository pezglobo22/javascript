import STRIPE_KEYS from "./stripe-keys.js"; 
//console.log(STRIPE_KEYS)
const d = document,
    $gabos = d.getElementById("gabos"),
    $template = d.getElementById("gabo-template").content,
    $fragment = d.createDocumentFragment(),
    fetchOptions = {
        headers: {
            Authorization: `Bearer ${STRIPE_KEYS.secret}`,
        }
    };
let products, prices;
const moneyFormat = num => `$${num.slice(0, -2)}.${num.slice(-2)}`;
Promise.all([
    fetch("https://api.stripe.com/v1/products", fetchOptions),    
    fetch("https://api.stripe.com/v1/prices", fetchOptions),
])
.then(responses => Promise.all(responses.map(res => res.json())))
.then(json => {
    products = json[0].data;
    prices = json[1].data;
    prices.forEach(el => {
        let productData = products.filter(product => product.id === el.product);
        $template.querySelector(".gabo").setAttribute("data-price", el.id);
        $template.querySelector("img").src = productData[0].images[0];
        $template.querySelector("img").alt = productData[0].name;
        $template.querySelector("figcaption").innerHTML = `
        ${productData[0].name}
        <br>
        ${moneyFormat(el.unit_amount_decimal)} ${el.currency}
        `;
        let $clone = d.importNode($template, true);
        $fragment.appendChild($clone);
    });
    $gabos.appendChild($fragment);
})
.catch(err => {
    let message = err.statusText || "Ocurrió un error";
    $gabos.innerHTML = `<p>Error ${err.status}: ${message}</p>`
});

d.addEventListener("click", e => {
    if(e.target.matches(".gabo *")){
        let price = e.target.parentElement.getAttribute("data-price");
        Stripe(STRIPE_KEYS.public).redirectToCheckout({
            lineItems: [{price, quantity: 1}],
            mode: "subscription",
            successUrl: "https://127.0.0.1:5500/ajax-ejercicios/assets/stripe-success.html",
            cancelUrl: "https://127.0.0.1:5500/ajax-ejercicios/assets/stripe-success.html"
        })
        .then(res => {
            if(res.error){
                $gabos.insertAdjacentElement("afterend", res.error.message);
            }
        })
    }
});