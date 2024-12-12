import { expect } from '@playwright/test';
import { test } from '../fixtures/api_client_fixture'


test('Get all mobiles', async ({ apiClient }) => {
    const response = await apiClient.get('/objects');
    expect(response.status()).toBe(200);
});
