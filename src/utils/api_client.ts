import { APIRequestContext } from '@playwright/test';

export class ApiClient {
    private baseUrl: string;
    private apiContext: APIRequestContext;

    constructor(baseUrl: string, apiContext: APIRequestContext) {
        this.baseUrl = baseUrl;
        this.apiContext = apiContext;
    }

    private buildUrl(endpoint: string): string {
        const url = new URL(endpoint, this.baseUrl);
        return url.toString();
    }
     
    async get(endpoint: string) {
        const url = this.buildUrl(endpoint);
        const response = await this.apiContext.get(url);
        return response;
    }

    async post(endpoint: string, data: any) {
        const url = this.buildUrl(endpoint);
        const response = await this.apiContext.post(url, { data });
        return response;
    }

    async put(endpoint: string, data: any) {
        const url = this.buildUrl(endpoint);
        const response = await this.apiContext.put(url, { data });
        return response;
    }

    async patch(endpoint: string, data: any) {
        const url = this.buildUrl(endpoint);
        const response = await this.apiContext.patch(url, { data });
        return response;
    }

    async delete(endpoint: string) {
        const url = this.buildUrl(endpoint);
        const response = await this.apiContext.delete(url);
        return response;
    }
}
