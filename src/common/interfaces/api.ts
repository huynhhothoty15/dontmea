export interface ISwaggerExample<T = any> {
    [key: string]: {
        summary: string;
        value: T;
    };
}

export interface ICommonResponse<T> {
    statusCode: number;
    message?: string;
    data: T;
}
