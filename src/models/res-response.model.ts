export interface ResResponse<T> {
    count: number;
    items: Array<T>;
    limit: number;
    offset: number;
}
