import { test as baseTest } from '@playwright/test';
import { request, APIRequestContext } from '@playwright/test';
import { ApiClient } from '../utils/api_client';


export const test = baseTest.extend<{
  apiClient: ApiClient;
}>({
  apiClient: async ({}, use) => {
    const BASE_URL = process.env.BASE_URL || 'https://api.restful-api.dev';
    const apiContext: APIRequestContext = await request.newContext(); 

    const apiClient = new ApiClient(BASE_URL, apiContext);
    await use(apiClient);
  },
});
