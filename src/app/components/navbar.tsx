import Link from "next/link";
export default function Navbar() {
  return (
    <div className="flex items-center text-white h-[91px] w-[1322px] absolute left-[59px] text-xl">
      <div className="w-[187px] h-[58px] absolute top-[17px] left-[136px] text-[24px]">
        <h3 className="mt-3">BrandName</h3>
      </div>
      <div className=" flex items-center w-[815px] h-[58px] gap-[351px] absolute top-[16px] left-[364px] text-sm ">
        <ul className="flex gap-[21px] w-auto">
          <li>
            <Link href="/"> Home </Link>
          </li>
          <li>
            <Link href="/Product"> Product </Link>
          </li>
          <li>
            <Link href="/Pricing"> Pricing </Link>
          </li>
          <li>
            <Link href="/Contact"> Contact </Link>
          </li>
        </ul>
        <div className="absolute left-[626px] top-[3px] w-[189px] flex gap-[45px]">
         <button className="text-sm text-center"> Log in </button>
         <button className="text-sm font-bold text-center bg-sky-blue text-white w-auto px-[25px] py-[15px] rounded-[5px]">
            Join Us
          </button>
        </div>
      </div>
    </div>
  );
}
