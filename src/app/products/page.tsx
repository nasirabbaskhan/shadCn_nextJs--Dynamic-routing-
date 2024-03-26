import { products } from "@/src/utils/mock";
import Producs from "../components/producs";
import product1 from "@/public/images/p1.png";
import product2 from "@/public/images/prooo2.webp";
import product3 from "@/public/images/p3.png";
import Link from "next/link";

const first3Products = products.slice(0, 3);
const second3Products = products.slice(3, 6);
export default function AllProducts() {
  return (
    <>
      <div className="main flex justify-between py-10 flex-wrap mt-16  ">
        {products.map((item) => {
          return (
            <div>
              <Producs
                id={item.id}
                title={item.name}
                price={item.price}
                img={item.img}
                catagory={item.catagory}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
