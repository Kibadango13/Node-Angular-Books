export interface Book {
    id?:number;
    title : string;
    author: string;
    price : number ;
    reviews : number;
    rating :number;
    descripcion? : string;
    image?: string;
    publishedDate?: Date;
}
