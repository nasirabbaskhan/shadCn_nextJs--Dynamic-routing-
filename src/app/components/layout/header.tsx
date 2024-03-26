import Link from "next/link";
import { Search, ShoppingCart } from "lucide-react";

export default function Header() {
  return (
    <>
      <section className="header bg-white flex  justify-between mb-8 lg:mb-8 lg:mt-0 md:mb-12 md:mt-10 sticky top-0 py-8 lg:px-28 px-16   items-center">
        <div className="logo font-semibold  ">
          <Link href={"/"}>
            <img
              src="/images/logo.webp"
              width={140}
              alt=""
              className="lg:w-[140px] md:w-[140px]"
            />
          </Link>
        </div>
        <div className="navbar hidden lg:block">
          <ul className="flex gap-6">
            <li>
              <Link href={"/catagory/female"}>Female</Link>
            </li>
            <li>
              <Link href={"/catagory/male"}>Male</Link>
            </li>
            <li>
              <Link href={"/catagory/kids"}>Kids</Link>
            </li>
            <li>
              <Link href={"/products"}>All Products</Link>
            </li>
          </ul>
        </div>
        {/* search tag */}
        <div className="search hidden lg:block">
          <label
            className="flex justify-center items-center border "
            htmlFor="earch"
          >
            <Search className="h-4" />
            <input
              type="search"
              className=" border  w-full rounded shadow-sm  px-2  border-gray-300"
              placeholder="What you looking for"
            />
          </label>
        </div>
        <div className="hidden lg:block">
          <div className="addtocart h-12 w-12 hover:h-[50px]  hover:w-[50px] rounded-full bg-[#f1f1f1] transform flex justify-center items-center">
            <ShoppingCart />
          </div>
        </div>
        {/* DropDown Manue */}
        <div className="dropdown flex-col space-y-[5px] lg:hidden cursor-pointer">
          <div className="h-[3px] w-6 bg-slate-800"></div>
          <div className="h-[2px] w-4  bg-slate-800 ml-2"></div>
          <div className="h-[3px] w-6 bg-slate-800"> </div>
        </div>
      </section>
    </>
  );
}
