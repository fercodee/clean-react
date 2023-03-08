import { HttpResponse } from "."

export type HttpPostParams<T> = {
    url: string
    body: T
}

// Need pass type from body and response 
export interface HttpPostClient<T, R> {
    post (params: HttpPostParams<T>): Promise<HttpResponse<R>>
}