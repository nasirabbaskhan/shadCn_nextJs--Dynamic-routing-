import { StaticImageData } from "next/image";

export type Products = {
  id: number;
  name: string;
  price: number;
  catagory: string;
  img: StaticImageData;
  desc: string;
};
