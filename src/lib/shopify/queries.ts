export const PRODUCT_FRAGMENT = /* GraphQL */ `
    fragment ProductFields on Product {
        id
        handle
        title
        productType
        description
        availableForSale
        featuredImage {
            url
            altText
            width
            height
        }
        priceRange {
            minVariantPrice {
                amount
                currencyCode
            }
            maxVariantPrice {
                amount
                currencyCode
            }
        }
    }
`;

export const PRODUCTS_QUERY = /* GraphQL */ `
    ${PRODUCT_FRAGMENT}
    query Products($first: Int!) {
        products(first: $first, sortKey: BEST_SELLING) {
            edges {
                node {
                    ...ProductFields
                }
            }
        }
    }
`;

export const PRODUCT_BY_HANDLE_QUERY = /* GraphQL */ `
    ${PRODUCT_FRAGMENT}
    query ProductByHandle($handle: String!) {
        product(handle: $handle) {
            ...ProductFields
            descriptionHtml
            images(first: 8) {
                edges {
                    node {
                        url
                        altText
                        width
                        height
                    }
                }
            }
            options {
                id
                name
                values
            }
            variants(first: 50) {
                edges {
                    node {
                        id
                        title
                        availableForSale
                        price {
                            amount
                            currencyCode
                        }
                        selectedOptions {
                            name
                            value
                        }
                        image {
                            url
                            altText
                            width
                            height
                        }
                    }
                }
            }
        }
    }
`;

export const CART_CREATE_MUTATION = /* GraphQL */ `
    mutation CartCreate($lines: [CartLineInput!]!) {
        cartCreate(input: { lines: $lines }) {
            cart {
                id
                checkoutUrl
            }
            userErrors {
                field
                message
            }
        }
    }
`;
