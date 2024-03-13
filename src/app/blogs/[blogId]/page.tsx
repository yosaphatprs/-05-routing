type Props = {
    params: {
        blogId: string
    }
}

export default function ProductDetails({ params }: Props) {
    return (
        <h1>This is Blog {params.blogId}</h1>
    )
}