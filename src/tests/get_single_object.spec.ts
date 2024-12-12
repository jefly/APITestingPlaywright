import { expect } from '@playwright/test';
import { test } from '../fixtures/api_client_fixture'



test('Get a single mobile', async ({ apiClient }) => {
    const response = await apiClient.get('/objects/7');
    expect(response.status()).toBe(200);
    
    const responseBody = await response.json();
    expect(responseBody.name).toBe('Apple MacBook Pro 16');
});
