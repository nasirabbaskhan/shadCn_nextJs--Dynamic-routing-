import { Button } from "@/components/ui/button";
import product1 from "@/public/images/p1.png";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface Iprops {
  id: number;
  title: string;
  price: number;
  catagory: string;
  img: StaticImageData;
}
// nasir
export default function Producs(props: Iprops) {
  return (
    <>
      <Link href={`/products/${props.id}`}>
        <div className="productcart py-5">
          <Image src={props.img} alt="" />
          <h4 className=" text-xl font-semibold text-slate-900 font-sans mt-3">
            {props.title}
          </h4>
          <p className="text-xl font-semibold text-slate-900 font-sans">
            ${props.price}
          </p>
          <p>
            <span className="text-xl font-semibold text-slate-900 font-sans">
              Catagory:
            </span>{" "}
            <span>{props.catagory}</span>
          </p>
          <Button className="bg-blue-700 mt-3">Add to Cart</Button>
        </div>
      </Link>
    </>
  );
}
