import fetch from 'isomorphic-unfetch';
import { buildURL } from './utils';

type Config = {
    authKey: string,
    basePath?: string,
}

export type ResponseBase = {
    success: boolean,
    code?: string,
    message?: string
};

export abstract class RequestBase {
    private readonly key: string;
    private readonly basePath: string;

    constructor(config: Config) {
        this.key = config.authKey;
        this.basePath = config.basePath || 'https://api.optimoroute.com/v1/';
    }

    protected async request<T>(resource: string, options: RequestInit = {}, params: Object = {}): Promise<T> {
        params['key'] = this.key;
        const uri = buildURL(this.basePath, resource, params);
        console.log(`Full path: ${uri}`);
        
        const staticHeaders = {
            'Content-type': 'application/json'
        };
        const config = {
            ...options,
            staticHeaders
        };

        const response = await fetch(uri, config);
        if (!response.ok) {
            // @todo: set timeout and try again
            throw new Error(response.statusText);
        }
        return response.json();
    }
}