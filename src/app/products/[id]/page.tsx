import Link from "next/link";
import Image from "next/image";

import { products } from "@/src/utils/mock";
import { Button } from "@/components/ui/button";

const getProductsDetail = (id: number) => {
  console.log("id", id);
  const product = products.filter((items) => items.id == id);
  console.log(product);
  return product;
};

export default function DetailPage({ params }: { params: { id: number } }) {
  const product = getProductsDetail(params.id);

  return (
    <div>
      Detailed page of product id:{params.id}
      <div className="main   ">
        {product.map((item) => {
          return (
            <div key={item.id} className="flex gap-4">
              <div className="imag">
                <Image src={item.img} alt="" />
              </div>
              <div className="detail">
                <p className="text-2xl font-bold">Product detail: </p>
                <p className="text-2xl  ">
                  Catagory: <span className="ml-8">{item.catagory}</span>{" "}
                </p>
                <p className="text-2xl ">
                  Price:<span className="ml-20">${item.price}</span>
                </p>
                <p className="text-2xl ">
                  Name:<span className="ml-20">{item.name}</span>
                </p>

                <p className="max-w-72 text-2xl">
                  Features: <p className="text-lg">{item.desc}</p>{" "}
                </p>
                <Button className="mt-3 bg-blue-900 ">Add to Card</Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
