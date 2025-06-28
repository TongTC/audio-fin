export interface Stock {
  id:string;
  cate:string;
  mfg: string;
  img:{
    src:string;
    alt:string;
  }
  grp:string;
  pn: string;
  lnk:string;
  qty: number;
  des:string;
}

export interface Cate{
  name:string
}
