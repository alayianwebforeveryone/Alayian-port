import { Link } from "react-router-dom";
import logo from "../../Images/My logo.png";

function Footer() {
  return (
    <div className=" mt-14   ">
      <div
        className="flex bgheader justify-center md:gap-20 py-10 md:flex-row flex-col items-center gap-10 "
        style={{
          boxShadow: "2px 2px 4px 2px rgba(0, 0, 0, 0.1)",
          background:
            "linear-gradient(90deg, rgba(113,8,125,1) 0%, rgba(93,176,219,1) 56%)",
        }}
      >
        <div className="md:w-[30%]  w-[60%]">
          <Link className="my-6" to="/">
            <div className="w-36 my-6 ">
              <img src={logo} alt="" className="bg-cover bg-center w-[100%]" />
            </div>
          </Link>
          <p className="text-justify text-white leading-6">
            Cultivating Innovation, Building Excellence. Welcome to a digital
            realm where creativity meets functionality. We donot just create
            websites; we craft digital experiences that resonate. Elevate your
            online presence with us – where every click tells a story, and every
            pixel paints a masterpiece.
          </p>
        </div>

        <div className="md:w-[25%]   text-center  w-[60%]">
          <p className="text-xl  headThree ">Contact</p>
          <p className="text-white text-left leading-6 md:pl-28 mt-5">
            alayiansaeed@gmail.com <br /> +92 3488759075 <br />
            Bagh Azad Kashmir
          </p>
        </div>
      </div>
      <div className=" text-white bgheader py-2">
        <p className="text-center text-black">
          All right reserved &copy; till 2024{" "}
        </p>
      </div>
    </div>
  );
}

export default Footer;
