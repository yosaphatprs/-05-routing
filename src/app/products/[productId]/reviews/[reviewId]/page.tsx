type Props = {
    params: {
        productId: string
        reviewId: string
    }
}

export default function ProductDetails({ params }: Props) {
    return (
        <>
            <h1>Here's review for {params.productId}</h1>
            <h2>Review ID: {params.reviewId}</h2>
        </>
    )
}