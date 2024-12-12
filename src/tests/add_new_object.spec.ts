import { expect } from '@playwright/test';
import { test } from '../fixtures/api_client_fixture'



test('Add a new mobile', async ({ apiClient }) => {

    const newResource = {
        name: 'Android J4',
        data: {
            year: '2024',
            price: '2000',
            "CPU model": "Intel Core i9", 
            "Hard disk size": "1 TB"
        }
    };

    const response = await apiClient.post('/objects', newResource);
    expect(response.status()).toBe(200);
    
    const responseBody = await response.json();
    expect(responseBody.name).toBe('Android J4');
});
