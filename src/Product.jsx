export function Product({title, price = "Consulte" }) {
    return(
        <>
            <h1>{title}</h1>
            <h2>{price}</h2>
        </>
    )
}