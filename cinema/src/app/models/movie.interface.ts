import { GenreType } from "./movie.model";

export interface Movie {
    id: number,
    key: string,
    name: string,
    description: string,
    genres: GenreType[],
    rate: string,
    length: string,
    img: string
}
