import Link from "next/link";
import Producs from "../../components/producs";
import { products } from "@/src/utils/mock";

const getProductsBycatagory = (catagory: string) => {
  return products.filter((items) => items.catagory === catagory);
};

export default function Slug({ params }: { params: { slug: string } }) {
  const products = getProductsBycatagory(params.slug);
  return (
    <div>
      catogary is:{params.slug}
      <div className="main flex justify-center gap-5   ">
        {products.map((item) => {
          return (
            <div key={item.id}>
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
    </div>
  );
}
