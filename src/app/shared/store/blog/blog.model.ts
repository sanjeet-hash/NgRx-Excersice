export interface blogModel{
    id:number,
    title:string,
    description:string
}

export interface blogs{
    blogList:blogModel[],
    errorMessage:string;
}