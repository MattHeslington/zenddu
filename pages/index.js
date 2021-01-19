import Link from 'next/link';
import { GraphQLClient } from 'graphql-request';

export async function getStaticProps() {
    const graphcms = new GraphQLClient(
        'https://api-us-east-1.graphcms.com/v2/ckk2nn4g5uet201xm99ve838m/master'
    );

  const { products } = await graphcms.request(
        `
        {
            products {
                slug
                name
            }
        }
        `
  );

    return {
        props: {
        products,
        },
    };
}

const Index = ({ products }) => {

    return (

        products.map(({ slug, name }) => (
            <Link key={slug} href={`/products/${slug}`}>
                <a>{name}</a>
            </Link>
        ))

    )

}

export default Index
