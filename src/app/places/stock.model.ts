export interface Stock {
  id: string;
  title: string;
  image: {
    src: string;
    alt: string;
  };
  des: string;
  qty: number;
}
