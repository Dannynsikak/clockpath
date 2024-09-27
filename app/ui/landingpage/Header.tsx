import Image from "next/image";

export default function MyHeader() {
  return (
    <header className=" p-[2em_0] border-b border-gray-300">
      <div className="w-[90%] m-[0_auto]">
        <nav className="flex  items-center *:w-[90%] ">
          <div className="flex gap-2">
            <Image
              src="/Group 2.png"
              width={39}
              height={39}
              alt="clockpath logo"
            />
            <p className="text-3xl font-normal">ClockPath</p>
          </div>
          <ul className="flex gap-3 justify-evenly">
            <li className="text-[#6200EE] font-bold text-[1.2rem] ">Home</li>
            <li className="font-normal text-[1.2rem] w-[40%]">
              Why Choose ClockPath
            </li>
            <li className="font-normal text-[1.2rem] ">Pricing</li>
          </ul>
          <div className="flex *:flex-1 gap-5">
            <button className="border-2 border-[#6200EE] p-[.5em_1em] rounded-xl text-[#6200EE]">
              Contact Us
            </button>
            <button className="bg-[#6200EE] text-white p-[.5em_1.5em] rounded-xl">
              Login
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
