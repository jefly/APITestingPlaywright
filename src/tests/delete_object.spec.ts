import { expect } from '@playwright/test';
import { test } from '../fixtures/api_client_fixture'



test('Delete a mobile', async ({ apiClient }) => {
    const response = await apiClient.delete('/objects/6');
    expect(response.status()).toBe(405);
});
