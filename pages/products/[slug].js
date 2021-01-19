import { GraphQLClient } from 'graphql-request';
import Link from 'next/link'

const graphcms = new GraphQLClient(
    'https://api-us-east-1.graphcms.com/v2/ckk2nn4g5uet201xm99ve838m/master'
);

export async function getStaticProps({ params }) {
    const { product } = await graphcms.request(
        `
        query ProductPageQuery($slug: String!) {
            product(where: { slug: $slug }) {
                name
                description
                price
            }
        }
    `,
        {
        slug: params.slug,
        }
    );

    return {
        props: {
        product,
        },
    };
}

export async function getStaticPaths() {
    const { products } = await graphcms.request(`
        {
        products {
            slug
            name
        }
        }
    `);

    return {
        paths: products.map(({ slug }) => ({
        params: { slug },
        })),
        fallback: false,
    };
}

const productPage = ({ product }) => (
    <>
        <h1 className="font-bold">{product.name}</h1>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <p><Link href="/"><a>Return to homepage</a></Link></p>
    </>
);

export default productPage