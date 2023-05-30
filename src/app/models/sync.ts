export interface Sync {
    id?: string,
    name: string,
    type: string,
    api_token?: string,
    is_primary?: boolean
}

export class SyncToPost implements Sync {
    id?: string;
    name: string;
    type: string;
    api_token?: string;
    is_primary?: boolean
}