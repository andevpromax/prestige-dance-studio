'use server';

import { redirect } from 'next/navigation';
import { createCart, isShopifyConfigured } from '@/lib/shopify/client';

export async function buyNowAction(formData: FormData): Promise<void> {
    const variantId = formData.get('variantId');
    const quantityRaw = formData.get('quantity');

    if (typeof variantId !== 'string' || !variantId) {
        throw new Error('Missing product variant.');
    }

    // Handle mock products - can't checkout without real Shopify
    if (!isShopifyConfigured() || variantId.startsWith('mock-')) {
        throw new Error(
            'This is a demo product. Connect your Shopify store to enable checkout.',
        );
    }

    const quantity =
        typeof quantityRaw === 'string'
            ? Math.max(1, Number.parseInt(quantityRaw, 10) || 1)
            : 1;

    const cart = await createCart(variantId, quantity);
    redirect(cart.checkoutUrl);
}
