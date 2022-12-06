import { Headers } from '@atproto/xrpc';
import * as AppBskySystemDeclRef from '../system/declRef';
export interface QueryParams {
    term: string;
    limit?: number;
}
export declare type InputSchema = undefined;
export interface OutputSchema {
    users: User[];
    [k: string]: unknown;
}
export interface CallOptions {
    headers?: Headers;
}
export interface Response {
    success: boolean;
    headers: Headers;
    data: OutputSchema;
}
export declare function toKnownErr(e: any): any;
export interface User {
    did: string;
    declaration: AppBskySystemDeclRef.Main;
    handle: string;
    displayName?: string;
    [k: string]: unknown;
}
