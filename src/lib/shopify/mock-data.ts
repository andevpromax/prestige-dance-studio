import type {
    ShopFilters,
    ShopifyCollection,
    ShopifyProduct,
    ShopifyProductSummary,
} from './types';

// ── Collections ────────────────────────────────────────────

export const MOCK_COLLECTIONS: ShopifyCollection[] = [
    {
        id: 'col-women',
        handle: 'women',
        title: 'Women',
        description: 'Elegant dancewear designed for women of all levels.',
        image: {
            url: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=600&h=400&fit=crop',
            altText: 'Women dancewear',
            width: 600,
            height: 400,
        },
        productsCount: 12,
    },
    {
        id: 'col-men',
        handle: 'men',
        title: 'Men',
        description: 'Professional dancewear for male dancers.',
        image: {
            url: 'https://images.unsplash.com/photo-1547153760-18fc86324498?w=600&h=400&fit=crop',
            altText: 'Men dancewear',
            width: 600,
            height: 400,
        },
        productsCount: 6,
    },
    {
        id: 'col-kids',
        handle: 'kids',
        title: 'Kids',
        description: 'Dance essentials for young performers.',
        image: {
            url: 'https://images.unsplash.com/photo-1595781572248-90e9a1f7b31a?w=600&h=400&fit=crop',
            altText: 'Kids dancewear',
            width: 600,
            height: 400,
        },
        productsCount: 8,
    },
    {
        id: 'col-footwear',
        handle: 'footwear',
        title: 'Footwear',
        description: 'Ballet slippers, pointe shoes, and dance sneakers.',
        image: {
            url: 'https://images.unsplash.com/photo-1535525153412-5a42439a210d?w=600&h=400&fit=crop',
            altText: 'Dance footwear',
            width: 600,
            height: 400,
        },
        productsCount: 10,
    },
    {
        id: 'col-accessories',
        handle: 'accessories',
        title: 'Accessories',
        description: 'Bags, hair accessories, and dance essentials.',
        image: {
            url: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=400&fit=crop',
            altText: 'Dance accessories',
            width: 600,
            height: 400,
        },
        productsCount: 8,
    },
    {
        id: 'col-new',
        handle: 'new-arrivals',
        title: 'New Arrivals',
        description: 'The latest additions to our collection.',
        image: {
            url: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=600&h=400&fit=crop',
            altText: 'New arrivals',
            width: 600,
            height: 400,
        },
        productsCount: 6,
    },
    {
        id: 'col-sale',
        handle: 'sale',
        title: 'Sale',
        description: 'Special offers on selected items.',
        image: {
            url: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=400&fit=crop',
            altText: 'Sale items',
            width: 600,
            height: 400,
        },
        productsCount: 4,
    },
];

// ── Products ───────────────────────────────────────────────

export const MOCK_PRODUCTS: ShopifyProduct[] = [
    // WOMEN's PRODUCTS
    {
        id: 'mock-1',
        handle: 'classic-ballet-leotard',
        title: 'Classic Ballet Leotard',
        productType: 'Leotards',
        description:
            'Elegant black leotard with delicate lace detailing on the back. Perfect for ballet class or performances.',
        descriptionHtml:
            '<p>Elegant black leotard with delicate lace detailing on the back. Perfect for ballet class or performances.</p><ul><li>Premium stretch fabric</li><li>Moisture-wicking</li><li>Built-in shelf bra</li></ul>',
        availableForSale: true,
        tags: ['ballet', 'leotard', 'women', 'classic'],
        collections: ['women', 'new-arrivals'],
        featuredImage: {
            url: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=800&h=800&fit=crop',
            altText: 'Classic Ballet Leotard',
            width: 800,
            height: 800,
        },
        priceRange: {
            minVariantPrice: { amount: '65.00', currencyCode: 'USD' },
            maxVariantPrice: { amount: '75.00', currencyCode: 'USD' },
        },
        images: [
            {
                url: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=800&h=800&fit=crop',
                altText: 'Classic Ballet Leotard - Front',
                width: 800,
                height: 800,
            },
        ],
        options: [
            { id: 'size', name: 'Size', values: ['XS', 'S', 'M', 'L', 'XL'] },
            {
                id: 'color',
                name: 'Color',
                values: ['Black', 'Navy', 'Burgundy'],
            },
        ],
        variants: [
            {
                id: 'mock-1-s-black',
                title: 'S / Black',
                availableForSale: true,
                price: { amount: '65.00', currencyCode: 'USD' },
                selectedOptions: [
                    { name: 'Size', value: 'S' },
                    { name: 'Color', value: 'Black' },
                ],
                image: null,
            },
            {
                id: 'mock-1-m-black',
                title: 'M / Black',
                availableForSale: true,
                price: { amount: '65.00', currencyCode: 'USD' },
                selectedOptions: [
                    { name: 'Size', value: 'M' },
                    { name: 'Color', value: 'Black' },
                ],
                image: null,
            },
        ],
    },
    {
        id: 'mock-2',
        handle: 'professional-pointe-shoes',
        title: 'Professional Pointe Shoes',
        productType: 'Shoes',
        description:
            'Hand-crafted pointe shoes designed for intermediate to advanced dancers.',
        descriptionHtml:
            '<p>Hand-crafted pointe shoes designed for intermediate to advanced dancers.</p><p>Features reinforced box and flexible shank for optimal support.</p>',
        availableForSale: true,
        tags: ['ballet', 'pointe', 'women', 'professional'],
        collections: ['women', 'footwear'],
        featuredImage: {
            url: 'https://images.unsplash.com/photo-1535525153412-5a42439a210d?w=800&h=800&fit=crop',
            altText: 'Professional Pointe Shoes',
            width: 800,
            height: 800,
        },
        priceRange: {
            minVariantPrice: { amount: '120.00', currencyCode: 'USD' },
            maxVariantPrice: { amount: '120.00', currencyCode: 'USD' },
        },
        images: [
            {
                url: 'https://images.unsplash.com/photo-1535525153412-5a42439a210d?w=800&h=800&fit=crop',
                altText: 'Professional Pointe Shoes',
                width: 800,
                height: 800,
            },
        ],
        options: [
            {
                id: 'size',
                name: 'Size',
                values: ['5', '5.5', '6', '6.5', '7', '7.5', '8'],
            },
            {
                id: 'width',
                name: 'Width',
                values: ['Narrow', 'Medium', 'Wide'],
            },
        ],
        variants: [
            {
                id: 'mock-2-6-medium',
                title: '6 / Medium',
                availableForSale: true,
                price: { amount: '120.00', currencyCode: 'USD' },
                selectedOptions: [
                    { name: 'Size', value: '6' },
                    { name: 'Width', value: 'Medium' },
                ],
                image: null,
            },
        ],
    },
    {
        id: 'mock-3',
        handle: 'flowing-rehearsal-skirt',
        title: 'Flowing Rehearsal Skirt',
        productType: 'Skirts',
        description:
            'Lightweight chiffon wrap skirt that moves beautifully with every turn.',
        descriptionHtml:
            '<p>Lightweight chiffon wrap skirt that moves beautifully with every turn.</p><p>Adjustable tie waist fits all sizes.</p>',
        availableForSale: true,
        tags: ['ballet', 'skirt', 'women', 'rehearsal'],
        collections: ['women'],
        featuredImage: {
            url: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=800&h=800&fit=crop',
            altText: 'Flowing Rehearsal Skirt',
            width: 800,
            height: 800,
        },
        priceRange: {
            minVariantPrice: { amount: '38.00', currencyCode: 'USD' },
            maxVariantPrice: { amount: '38.00', currencyCode: 'USD' },
        },
        images: [
            {
                url: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=800&h=800&fit=crop',
                altText: 'Flowing Rehearsal Skirt',
                width: 800,
                height: 800,
            },
        ],
        options: [
            {
                id: 'color',
                name: 'Color',
                values: ['Black', 'White', 'Blush Pink', 'Dusty Rose'],
            },
        ],
        variants: [
            {
                id: 'mock-3-black',
                title: 'Black',
                availableForSale: true,
                price: { amount: '38.00', currencyCode: 'USD' },
                selectedOptions: [{ name: 'Color', value: 'Black' }],
                image: null,
            },
        ],
    },
    {
        id: 'mock-4',
        handle: 'prestige-dance-bag',
        title: 'Prestige Dance Bag',
        productType: 'Bags',
        description:
            'Signature studio bag with dedicated compartments for shoes, clothes, and accessories.',
        descriptionHtml:
            '<p>Signature studio bag with dedicated compartments.</p><ul><li>Water-resistant exterior</li><li>Ventilated shoe pocket</li><li>Embroidered Prestige logo</li></ul>',
        availableForSale: true,
        tags: ['bag', 'accessories', 'unisex'],
        collections: ['accessories', 'women', 'men'],
        featuredImage: {
            url: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=800&fit=crop',
            altText: 'Prestige Dance Bag',
            width: 800,
            height: 800,
        },
        priceRange: {
            minVariantPrice: { amount: '85.00', currencyCode: 'USD' },
            maxVariantPrice: { amount: '85.00', currencyCode: 'USD' },
        },
        images: [
            {
                url: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=800&fit=crop',
                altText: 'Prestige Dance Bag',
                width: 800,
                height: 800,
            },
        ],
        options: [{ id: 'color', name: 'Color', values: ['Black', 'Navy'] }],
        variants: [
            {
                id: 'mock-4-black',
                title: 'Black',
                availableForSale: true,
                price: { amount: '85.00', currencyCode: 'USD' },
                selectedOptions: [{ name: 'Color', value: 'Black' }],
                image: null,
            },
        ],
    },
    {
        id: 'mock-5',
        handle: 'convertible-dance-tights',
        title: 'Convertible Dance Tights',
        productType: 'Tights',
        description:
            'Ultra-soft convertible tights with reinforced toe. Can be worn full-foot or converted.',
        descriptionHtml:
            '<p>Ultra-soft convertible tights with reinforced toe.</p>',
        availableForSale: true,
        tags: ['tights', 'women', 'ballet'],
        collections: ['women', 'sale'],
        featuredImage: {
            url: 'https://images.unsplash.com/photo-1524590099-a2d76a3b9500?w=800&h=800&fit=crop',
            altText: 'Convertible Dance Tights',
            width: 800,
            height: 800,
        },
        priceRange: {
            minVariantPrice: { amount: '18.00', currencyCode: 'USD' },
            maxVariantPrice: { amount: '22.00', currencyCode: 'USD' },
        },
        images: [
            {
                url: 'https://images.unsplash.com/photo-1524590099-a2d76a3b9500?w=800&h=800&fit=crop',
                altText: 'Convertible Dance Tights',
                width: 800,
                height: 800,
            },
        ],
        options: [
            { id: 'size', name: 'Size', values: ['S', 'M', 'L'] },
            {
                id: 'color',
                name: 'Color',
                values: ['Ballet Pink', 'Suntan', 'Black'],
            },
        ],
        variants: [
            {
                id: 'mock-5-m-pink',
                title: 'M / Ballet Pink',
                availableForSale: true,
                price: { amount: '22.00', currencyCode: 'USD' },
                selectedOptions: [
                    { name: 'Size', value: 'M' },
                    { name: 'Color', value: 'Ballet Pink' },
                ],
                image: null,
            },
        ],
    },
    {
        id: 'mock-6',
        handle: 'warm-up-booties',
        title: 'Warm-Up Booties',
        productType: 'Shoes',
        description:
            'Cozy knitted booties to keep feet warm between exercises. Non-slip sole.',
        descriptionHtml:
            '<p>Cozy knitted booties to keep feet warm between exercises.</p>',
        availableForSale: true,
        tags: ['footwear', 'women', 'warm-up'],
        collections: ['women', 'footwear'],
        featuredImage: {
            url: 'https://images.unsplash.com/photo-1499013819532-e4ff41b00669?w=800&h=800&fit=crop',
            altText: 'Warm-Up Booties',
            width: 800,
            height: 800,
        },
        priceRange: {
            minVariantPrice: { amount: '28.00', currencyCode: 'USD' },
            maxVariantPrice: { amount: '28.00', currencyCode: 'USD' },
        },
        images: [
            {
                url: 'https://images.unsplash.com/photo-1499013819532-e4ff41b00669?w=800&h=800&fit=crop',
                altText: 'Warm-Up Booties',
                width: 800,
                height: 800,
            },
        ],
        options: [
            {
                id: 'size',
                name: 'Size',
                values: ['S (5-6)', 'M (7-8)', 'L (9-10)'],
            },
            { id: 'color', name: 'Color', values: ['Black', 'Grey', 'Blush'] },
        ],
        variants: [
            {
                id: 'mock-6-m-black',
                title: 'M (7-8) / Black',
                availableForSale: true,
                price: { amount: '28.00', currencyCode: 'USD' },
                selectedOptions: [
                    { name: 'Size', value: 'M (7-8)' },
                    { name: 'Color', value: 'Black' },
                ],
                image: null,
            },
        ],
    },
    {
        id: 'mock-7',
        handle: 'studio-logo-tee',
        title: 'Prestige Studio Tee',
        productType: 'Tops',
        description:
            'Soft cotton tee with the Prestige Dance Studio logo. Perfect for class or casual wear.',
        descriptionHtml:
            '<p>Soft cotton tee with the Prestige Dance Studio logo.</p><ul><li>100% organic cotton</li><li>Relaxed fit</li></ul>',
        availableForSale: true,
        tags: ['apparel', 'unisex', 'tee'],
        collections: ['women', 'men', 'new-arrivals'],
        featuredImage: {
            url: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=800&fit=crop',
            altText: 'Prestige Studio Tee',
            width: 800,
            height: 800,
        },
        priceRange: {
            minVariantPrice: { amount: '32.00', currencyCode: 'USD' },
            maxVariantPrice: { amount: '32.00', currencyCode: 'USD' },
        },
        images: [
            {
                url: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=800&fit=crop',
                altText: 'Prestige Studio Tee',
                width: 800,
                height: 800,
            },
        ],
        options: [
            { id: 'size', name: 'Size', values: ['XS', 'S', 'M', 'L', 'XL'] },
            { id: 'color', name: 'Color', values: ['Black', 'White'] },
        ],
        variants: [
            {
                id: 'mock-7-m-black',
                title: 'M / Black',
                availableForSale: true,
                price: { amount: '32.00', currencyCode: 'USD' },
                selectedOptions: [
                    { name: 'Size', value: 'M' },
                    { name: 'Color', value: 'Black' },
                ],
                image: null,
            },
        ],
    },
    {
        id: 'mock-8',
        handle: 'performance-hair-kit',
        title: 'Performance Hair Kit',
        productType: 'Hair Accessories',
        description:
            'Everything you need for a perfect ballet bun: hairnets, pins, elastics, and styling gel.',
        descriptionHtml: '<p>Everything you need for a perfect ballet bun.</p>',
        availableForSale: false,
        tags: ['accessories', 'hair', 'women'],
        collections: ['accessories', 'women'],
        featuredImage: {
            url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop',
            altText: 'Performance Hair Kit',
            width: 800,
            height: 800,
        },
        priceRange: {
            minVariantPrice: { amount: '15.00', currencyCode: 'USD' },
            maxVariantPrice: { amount: '15.00', currencyCode: 'USD' },
        },
        images: [
            {
                url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop',
                altText: 'Performance Hair Kit',
                width: 800,
                height: 800,
            },
        ],
        options: [
            {
                id: 'color',
                name: 'Hair Color',
                values: ['Blonde', 'Brunette', 'Black'],
            },
        ],
        variants: [
            {
                id: 'mock-8-brunette',
                title: 'Brunette',
                availableForSale: false,
                price: { amount: '15.00', currencyCode: 'USD' },
                selectedOptions: [{ name: 'Hair Color', value: 'Brunette' }],
                image: null,
            },
        ],
    },
    // MEN's PRODUCTS
    {
        id: 'mock-9',
        handle: 'mens-ballet-tights',
        title: "Men's Ballet Tights",
        productType: 'Tights',
        description:
            'Professional-grade tights with built-in support. Moisture-wicking fabric.',
        descriptionHtml:
            '<p>Professional-grade tights with built-in support.</p>',
        availableForSale: true,
        tags: ['ballet', 'tights', 'men', 'professional'],
        collections: ['men'],
        featuredImage: {
            url: 'https://images.unsplash.com/photo-1547153760-18fc86324498?w=800&h=800&fit=crop',
            altText: "Men's Ballet Tights",
            width: 800,
            height: 800,
        },
        priceRange: {
            minVariantPrice: { amount: '45.00', currencyCode: 'USD' },
            maxVariantPrice: { amount: '45.00', currencyCode: 'USD' },
        },
        images: [
            {
                url: 'https://images.unsplash.com/photo-1547153760-18fc86324498?w=800&h=800&fit=crop',
                altText: "Men's Ballet Tights",
                width: 800,
                height: 800,
            },
        ],
        options: [
            { id: 'size', name: 'Size', values: ['S', 'M', 'L', 'XL'] },
            { id: 'color', name: 'Color', values: ['Black', 'White'] },
        ],
        variants: [
            {
                id: 'mock-9-m-black',
                title: 'M / Black',
                availableForSale: true,
                price: { amount: '45.00', currencyCode: 'USD' },
                selectedOptions: [
                    { name: 'Size', value: 'M' },
                    { name: 'Color', value: 'Black' },
                ],
                image: null,
            },
        ],
    },
    {
        id: 'mock-10',
        handle: 'mens-dance-belt',
        title: "Men's Dance Belt",
        productType: 'Undergarments',
        description:
            'Essential support garment for male dancers. Seamless design under tights.',
        descriptionHtml: '<p>Essential support garment for male dancers.</p>',
        availableForSale: true,
        tags: ['men', 'undergarments', 'essential'],
        collections: ['men', 'new-arrivals'],
        featuredImage: {
            url: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&h=800&fit=crop',
            altText: "Men's Dance Belt",
            width: 800,
            height: 800,
        },
        priceRange: {
            minVariantPrice: { amount: '25.00', currencyCode: 'USD' },
            maxVariantPrice: { amount: '25.00', currencyCode: 'USD' },
        },
        images: [
            {
                url: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&h=800&fit=crop',
                altText: "Men's Dance Belt",
                width: 800,
                height: 800,
            },
        ],
        options: [{ id: 'size', name: 'Size', values: ['S', 'M', 'L', 'XL'] }],
        variants: [
            {
                id: 'mock-10-m',
                title: 'M',
                availableForSale: true,
                price: { amount: '25.00', currencyCode: 'USD' },
                selectedOptions: [{ name: 'Size', value: 'M' }],
                image: null,
            },
        ],
    },
    {
        id: 'mock-11',
        handle: 'mens-ballet-shoes',
        title: "Men's Canvas Ballet Shoes",
        productType: 'Shoes',
        description:
            'Lightweight canvas ballet shoes with split sole for flexibility.',
        descriptionHtml:
            '<p>Lightweight canvas ballet shoes with split sole.</p>',
        availableForSale: true,
        tags: ['ballet', 'shoes', 'men'],
        collections: ['men', 'footwear'],
        featuredImage: {
            url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop',
            altText: "Men's Canvas Ballet Shoes",
            width: 800,
            height: 800,
        },
        priceRange: {
            minVariantPrice: { amount: '35.00', currencyCode: 'USD' },
            maxVariantPrice: { amount: '35.00', currencyCode: 'USD' },
        },
        images: [
            {
                url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop',
                altText: "Men's Canvas Ballet Shoes",
                width: 800,
                height: 800,
            },
        ],
        options: [
            { id: 'size', name: 'Size', values: ['8', '9', '10', '11', '12'] },
        ],
        variants: [
            {
                id: 'mock-11-10',
                title: '10',
                availableForSale: true,
                price: { amount: '35.00', currencyCode: 'USD' },
                selectedOptions: [{ name: 'Size', value: '10' }],
                image: null,
            },
        ],
    },
    {
        id: 'mock-12',
        handle: 'mens-rehearsal-shirt',
        title: "Men's Rehearsal Shirt",
        productType: 'Tops',
        description:
            'Fitted stretch shirt for rehearsals and classes. Breathable fabric.',
        descriptionHtml:
            '<p>Fitted stretch shirt for rehearsals and classes.</p>',
        availableForSale: true,
        tags: ['men', 'tops', 'rehearsal'],
        collections: ['men'],
        featuredImage: {
            url: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&h=800&fit=crop',
            altText: "Men's Rehearsal Shirt",
            width: 800,
            height: 800,
        },
        priceRange: {
            minVariantPrice: { amount: '42.00', currencyCode: 'USD' },
            maxVariantPrice: { amount: '42.00', currencyCode: 'USD' },
        },
        images: [
            {
                url: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&h=800&fit=crop',
                altText: "Men's Rehearsal Shirt",
                width: 800,
                height: 800,
            },
        ],
        options: [
            { id: 'size', name: 'Size', values: ['S', 'M', 'L', 'XL'] },
            { id: 'color', name: 'Color', values: ['Black', 'White', 'Navy'] },
        ],
        variants: [
            {
                id: 'mock-12-m-black',
                title: 'M / Black',
                availableForSale: true,
                price: { amount: '42.00', currencyCode: 'USD' },
                selectedOptions: [
                    { name: 'Size', value: 'M' },
                    { name: 'Color', value: 'Black' },
                ],
                image: null,
            },
        ],
    },
    // KIDS' PRODUCTS
    {
        id: 'mock-13',
        handle: 'kids-ballet-leotard',
        title: 'Kids Ballet Leotard',
        productType: 'Leotards',
        description:
            'Adorable leotard for young dancers. Soft, stretchy fabric with flutter sleeves.',
        descriptionHtml:
            '<p>Adorable leotard for young dancers with flutter sleeves.</p>',
        availableForSale: true,
        tags: ['ballet', 'leotard', 'kids', 'girls'],
        collections: ['kids', 'new-arrivals'],
        featuredImage: {
            url: 'https://images.unsplash.com/photo-1595781572248-90e9a1f7b31a?w=800&h=800&fit=crop',
            altText: 'Kids Ballet Leotard',
            width: 800,
            height: 800,
        },
        priceRange: {
            minVariantPrice: { amount: '28.00', currencyCode: 'USD' },
            maxVariantPrice: { amount: '35.00', currencyCode: 'USD' },
        },
        images: [
            {
                url: 'https://images.unsplash.com/photo-1595781572248-90e9a1f7b31a?w=800&h=800&fit=crop',
                altText: 'Kids Ballet Leotard',
                width: 800,
                height: 800,
            },
        ],
        options: [
            {
                id: 'size',
                name: 'Size',
                values: ['4-5', '6-7', '8-10', '12-14'],
            },
            {
                id: 'color',
                name: 'Color',
                values: ['Pink', 'Lavender', 'Black'],
            },
        ],
        variants: [
            {
                id: 'mock-13-6-7-pink',
                title: '6-7 / Pink',
                availableForSale: true,
                price: { amount: '28.00', currencyCode: 'USD' },
                selectedOptions: [
                    { name: 'Size', value: '6-7' },
                    { name: 'Color', value: 'Pink' },
                ],
                image: null,
            },
        ],
    },
    {
        id: 'mock-14',
        handle: 'kids-ballet-slippers',
        title: 'Kids Ballet Slippers',
        productType: 'Shoes',
        description:
            'Soft leather ballet slippers perfect for beginners. Full sole for stability.',
        descriptionHtml:
            '<p>Soft leather ballet slippers perfect for beginners.</p>',
        availableForSale: true,
        tags: ['ballet', 'shoes', 'kids'],
        collections: ['kids', 'footwear'],
        featuredImage: {
            url: 'https://images.unsplash.com/photo-1514315384763-ba401779410f?w=800&h=800&fit=crop',
            altText: 'Kids Ballet Slippers',
            width: 800,
            height: 800,
        },
        priceRange: {
            minVariantPrice: { amount: '22.00', currencyCode: 'USD' },
            maxVariantPrice: { amount: '22.00', currencyCode: 'USD' },
        },
        images: [
            {
                url: 'https://images.unsplash.com/photo-1514315384763-ba401779410f?w=800&h=800&fit=crop',
                altText: 'Kids Ballet Slippers',
                width: 800,
                height: 800,
            },
        ],
        options: [
            {
                id: 'size',
                name: 'Size',
                values: ['10C', '11C', '12C', '13C', '1', '2', '3'],
            },
            { id: 'color', name: 'Color', values: ['Pink', 'Black'] },
        ],
        variants: [
            {
                id: 'mock-14-12c-pink',
                title: '12C / Pink',
                availableForSale: true,
                price: { amount: '22.00', currencyCode: 'USD' },
                selectedOptions: [
                    { name: 'Size', value: '12C' },
                    { name: 'Color', value: 'Pink' },
                ],
                image: null,
            },
        ],
    },
    {
        id: 'mock-15',
        handle: 'kids-tutu-skirt',
        title: 'Kids Tutu Skirt',
        productType: 'Skirts',
        description:
            'Fluffy tulle tutu skirt for little dancers. Multiple layers of soft tulle.',
        descriptionHtml: '<p>Fluffy tulle tutu skirt for little dancers.</p>',
        availableForSale: true,
        tags: ['ballet', 'tutu', 'kids', 'girls'],
        collections: ['kids'],
        featuredImage: {
            url: 'https://images.unsplash.com/photo-1621452773781-0f992fd1f5cb?w=800&h=800&fit=crop',
            altText: 'Kids Tutu Skirt',
            width: 800,
            height: 800,
        },
        priceRange: {
            minVariantPrice: { amount: '24.00', currencyCode: 'USD' },
            maxVariantPrice: { amount: '24.00', currencyCode: 'USD' },
        },
        images: [
            {
                url: 'https://images.unsplash.com/photo-1621452773781-0f992fd1f5cb?w=800&h=800&fit=crop',
                altText: 'Kids Tutu Skirt',
                width: 800,
                height: 800,
            },
        ],
        options: [
            { id: 'size', name: 'Size', values: ['4-5', '6-7', '8-10'] },
            {
                id: 'color',
                name: 'Color',
                values: ['Pink', 'White', 'Lavender'],
            },
        ],
        variants: [
            {
                id: 'mock-15-6-7-pink',
                title: '6-7 / Pink',
                availableForSale: true,
                price: { amount: '24.00', currencyCode: 'USD' },
                selectedOptions: [
                    { name: 'Size', value: '6-7' },
                    { name: 'Color', value: 'Pink' },
                ],
                image: null,
            },
        ],
    },
    {
        id: 'mock-16',
        handle: 'kids-dance-tights',
        title: 'Kids Dance Tights',
        productType: 'Tights',
        description:
            'Durable footed tights for young dancers. Extra stretch for growing bodies.',
        descriptionHtml: '<p>Durable footed tights for young dancers.</p>',
        availableForSale: true,
        tags: ['tights', 'kids'],
        collections: ['kids', 'sale'],
        featuredImage: {
            url: 'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=800&h=800&fit=crop',
            altText: 'Kids Dance Tights',
            width: 800,
            height: 800,
        },
        priceRange: {
            minVariantPrice: { amount: '12.00', currencyCode: 'USD' },
            maxVariantPrice: { amount: '15.00', currencyCode: 'USD' },
        },
        images: [
            {
                url: 'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=800&h=800&fit=crop',
                altText: 'Kids Dance Tights',
                width: 800,
                height: 800,
            },
        ],
        options: [
            {
                id: 'size',
                name: 'Size',
                values: ['Toddler', 'Child S', 'Child M', 'Child L'],
            },
            {
                id: 'color',
                name: 'Color',
                values: ['Ballet Pink', 'White', 'Black'],
            },
        ],
        variants: [
            {
                id: 'mock-16-child-m-pink',
                title: 'Child M / Ballet Pink',
                availableForSale: true,
                price: { amount: '12.00', currencyCode: 'USD' },
                selectedOptions: [
                    { name: 'Size', value: 'Child M' },
                    { name: 'Color', value: 'Ballet Pink' },
                ],
                image: null,
            },
        ],
    },
    {
        id: 'mock-17',
        handle: 'kids-dance-bag',
        title: 'Kids Dance Bag',
        productType: 'Bags',
        description:
            'Fun dance bag designed for kids. Features ballet shoe print and adjustable strap.',
        descriptionHtml:
            '<p>Fun dance bag designed for kids with ballet shoe print.</p>',
        availableForSale: true,
        tags: ['bag', 'kids', 'accessories'],
        collections: ['kids', 'accessories'],
        featuredImage: {
            url: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&h=800&fit=crop',
            altText: 'Kids Dance Bag',
            width: 800,
            height: 800,
        },
        priceRange: {
            minVariantPrice: { amount: '32.00', currencyCode: 'USD' },
            maxVariantPrice: { amount: '32.00', currencyCode: 'USD' },
        },
        images: [
            {
                url: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&h=800&fit=crop',
                altText: 'Kids Dance Bag',
                width: 800,
                height: 800,
            },
        ],
        options: [
            { id: 'color', name: 'Color', values: ['Pink', 'Purple', 'Black'] },
        ],
        variants: [
            {
                id: 'mock-17-pink',
                title: 'Pink',
                availableForSale: true,
                price: { amount: '32.00', currencyCode: 'USD' },
                selectedOptions: [{ name: 'Color', value: 'Pink' }],
                image: null,
            },
        ],
    },
    // ACCESSORIES
    {
        id: 'mock-18',
        handle: 'leg-warmers',
        title: 'Knit Leg Warmers',
        productType: 'Accessories',
        description:
            'Cozy knit leg warmers to keep muscles warm. Extra long for full coverage.',
        descriptionHtml: '<p>Cozy knit leg warmers to keep muscles warm.</p>',
        availableForSale: true,
        tags: ['accessories', 'warm-up', 'unisex'],
        collections: ['accessories', 'women'],
        featuredImage: {
            url: 'https://images.unsplash.com/photo-1544441893-675973e31985?w=800&h=800&fit=crop',
            altText: 'Knit Leg Warmers',
            width: 800,
            height: 800,
        },
        priceRange: {
            minVariantPrice: { amount: '22.00', currencyCode: 'USD' },
            maxVariantPrice: { amount: '22.00', currencyCode: 'USD' },
        },
        images: [
            {
                url: 'https://images.unsplash.com/photo-1544441893-675973e31985?w=800&h=800&fit=crop',
                altText: 'Knit Leg Warmers',
                width: 800,
                height: 800,
            },
        ],
        options: [
            { id: 'color', name: 'Color', values: ['Black', 'Grey', 'Pink'] },
        ],
        variants: [
            {
                id: 'mock-18-black',
                title: 'Black',
                availableForSale: true,
                price: { amount: '22.00', currencyCode: 'USD' },
                selectedOptions: [{ name: 'Color', value: 'Black' }],
                image: null,
            },
        ],
    },
    {
        id: 'mock-19',
        handle: 'dance-water-bottle',
        title: 'Prestige Water Bottle',
        productType: 'Accessories',
        description:
            'Insulated water bottle with Prestige logo. Keeps drinks cold for 24 hours.',
        descriptionHtml: '<p>Insulated water bottle with Prestige logo.</p>',
        availableForSale: true,
        tags: ['accessories', 'bottle', 'unisex'],
        collections: ['accessories', 'new-arrivals'],
        featuredImage: {
            url: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&h=800&fit=crop',
            altText: 'Prestige Water Bottle',
            width: 800,
            height: 800,
        },
        priceRange: {
            minVariantPrice: { amount: '28.00', currencyCode: 'USD' },
            maxVariantPrice: { amount: '28.00', currencyCode: 'USD' },
        },
        images: [
            {
                url: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&h=800&fit=crop',
                altText: 'Prestige Water Bottle',
                width: 800,
                height: 800,
            },
        ],
        options: [
            {
                id: 'color',
                name: 'Color',
                values: ['Black', 'Rose Gold', 'White'],
            },
        ],
        variants: [
            {
                id: 'mock-19-black',
                title: 'Black',
                availableForSale: true,
                price: { amount: '28.00', currencyCode: 'USD' },
                selectedOptions: [{ name: 'Color', value: 'Black' }],
                image: null,
            },
        ],
    },
    {
        id: 'mock-20',
        handle: 'stretch-band',
        title: 'Resistance Stretch Band',
        productType: 'Accessories',
        description:
            'Professional stretch band for flexibility training. Medium resistance.',
        descriptionHtml:
            '<p>Professional stretch band for flexibility training.</p>',
        availableForSale: true,
        tags: ['accessories', 'training', 'unisex'],
        collections: ['accessories', 'sale'],
        featuredImage: {
            url: 'https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=800&h=800&fit=crop',
            altText: 'Resistance Stretch Band',
            width: 800,
            height: 800,
        },
        priceRange: {
            minVariantPrice: { amount: '18.00', currencyCode: 'USD' },
            maxVariantPrice: { amount: '18.00', currencyCode: 'USD' },
        },
        images: [
            {
                url: 'https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=800&h=800&fit=crop',
                altText: 'Resistance Stretch Band',
                width: 800,
                height: 800,
            },
        ],
        options: [
            {
                id: 'resistance',
                name: 'Resistance',
                values: ['Light', 'Medium', 'Heavy'],
            },
        ],
        variants: [
            {
                id: 'mock-20-medium',
                title: 'Medium',
                availableForSale: true,
                price: { amount: '18.00', currencyCode: 'USD' },
                selectedOptions: [{ name: 'Resistance', value: 'Medium' }],
                image: null,
            },
        ],
    },
];

// ── Helper Functions ───────────────────────────────────────

export function getMockCollections(): ShopifyCollection[] {
    return MOCK_COLLECTIONS;
}

export function getMockCollection(handle: string): ShopifyCollection | null {
    return MOCK_COLLECTIONS.find((c) => c.handle === handle) ?? null;
}

export function getMockProducts(first = 24): ShopifyProductSummary[] {
    return MOCK_PRODUCTS.slice(0, first).map(toSummary);
}

export function getMockProduct(handle: string): ShopifyProduct | null {
    return MOCK_PRODUCTS.find((p) => p.handle === handle) ?? null;
}

export function getMockProductsByCollection(
    collectionHandle: string,
    first = 24,
): ShopifyProductSummary[] {
    return MOCK_PRODUCTS.filter((p) =>
        p.collections?.includes(collectionHandle),
    )
        .slice(0, first)
        .map(toSummary);
}

export function searchMockProducts(
    query: string,
    first = 24,
): ShopifyProductSummary[] {
    const q = query.toLowerCase();
    return MOCK_PRODUCTS.filter(
        (p) =>
            p.title.toLowerCase().includes(q) ||
            p.description.toLowerCase().includes(q) ||
            p.productType.toLowerCase().includes(q) ||
            p.tags?.some((t) => t.toLowerCase().includes(q)),
    )
        .slice(0, first)
        .map(toSummary);
}

export function filterMockProducts(
    filters: ShopFilters,
    first = 24,
): ShopifyProductSummary[] {
    let products = [...MOCK_PRODUCTS];

    // Filter by collection
    if (filters.collection) {
        products = products.filter((p) =>
            p.collections?.includes(filters.collection!),
        );
    }

    // Filter by product type
    if (filters.productType) {
        products = products.filter(
            (p) =>
                p.productType.toLowerCase() ===
                filters.productType?.toLowerCase(),
        );
    }

    // Filter by price range
    if (filters.minPrice !== undefined) {
        products = products.filter(
            (p) =>
                Number.parseFloat(p.priceRange.minVariantPrice.amount) >=
                filters.minPrice!,
        );
    }
    if (filters.maxPrice !== undefined) {
        products = products.filter(
            (p) =>
                Number.parseFloat(p.priceRange.maxVariantPrice.amount) <=
                filters.maxPrice!,
        );
    }

    // Filter by availability
    if (filters.availability === 'in-stock') {
        products = products.filter((p) => p.availableForSale);
    } else if (filters.availability === 'out-of-stock') {
        products = products.filter((p) => !p.availableForSale);
    }

    // Filter by search
    if (filters.search) {
        const q = filters.search.toLowerCase();
        products = products.filter(
            (p) =>
                p.title.toLowerCase().includes(q) ||
                p.description.toLowerCase().includes(q) ||
                p.productType.toLowerCase().includes(q),
        );
    }

    // Sort
    if (filters.sortBy) {
        switch (filters.sortBy) {
            case 'price-asc':
                products.sort(
                    (a, b) =>
                        Number.parseFloat(a.priceRange.minVariantPrice.amount) -
                        Number.parseFloat(b.priceRange.minVariantPrice.amount),
                );
                break;
            case 'price-desc':
                products.sort(
                    (a, b) =>
                        Number.parseFloat(b.priceRange.minVariantPrice.amount) -
                        Number.parseFloat(a.priceRange.minVariantPrice.amount),
                );
                break;
            case 'title-asc':
                products.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case 'newest':
                // Mock: reverse order (newer items added later)
                products.reverse();
                break;
            // 'best-selling' is default order
        }
    }

    return products.slice(0, first).map(toSummary);
}

export function getMockProductTypes(): string[] {
    const types = new Set<string>();
    for (const p of MOCK_PRODUCTS) {
        if (p.productType) types.add(p.productType);
    }
    return Array.from(types).sort();
}

function toSummary(p: ShopifyProduct): ShopifyProductSummary {
    return {
        id: p.id,
        handle: p.handle,
        title: p.title,
        productType: p.productType,
        description: p.description,
        availableForSale: p.availableForSale,
        featuredImage: p.featuredImage,
        priceRange: p.priceRange,
        tags: p.tags,
        collections: p.collections,
    };
}
