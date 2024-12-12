import { expect } from '@playwright/test';
import { test } from '../fixtures/api_client_fixture'



test('Update a mobile', async ({ apiClient }) => {

    const newResource = {
        name: 'Apple MacBook Pro 16',
        data: {
            year: '2019',
            price: '2049.99',
            "CPU model": "Intel Core i9", 
            "Hard disk size": "2 TB",
            color: 'silver'
        }
    };

    const response = await apiClient.patch('/objects/7', newResource);
    expect(response.status()).toBe(405);
    
});
