import Image from "next/image";

import product1 from "@/public/images/p1.png";
import product2 from "@/public/images/prooo2.webp";
import product3 from "@/public/images/p3.png";
import { products } from "@/src/utils/mock";
import Producs from "@/src/app/components/producs";
import Link from "next/link";

const first3Products = products.slice(0, 3);

export default function ProductList() {
  return (
    <>
      <div className="main flex justify-around  ">
        {first3Products.map((item) => {
          return (
            <Producs
              id={item.id}
              title={item.name}
              price={item.price}
              img={item.img}
              catagory={item.catagory}
            />
          );
        })}
      </div>
    </>
  );
}
