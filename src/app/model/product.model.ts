export interface Product {
  id?:string;
  cate?:string;
  mfg?: string;
  img?:{
    src?:string;
    alt?:string;
  }
  pn?: string;
  lnk?:string;
  des?:string;
  price?: number;
}

export interface Cate{
  name:string
}
