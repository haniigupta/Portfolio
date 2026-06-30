import { FaCode, FaBrain, FaLaptopCode } from "react-icons/fa";

function Leetcode() {
  return (
    <section
      id="leetcode"
      className="px-[10%] py-[100px]"
    >
      <h2 className="mb-[55px] text-[3rem] max-md:text-[2.2rem]">
        DSA Journey
      </h2>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div
          className="flex min-h-[320px] flex-col items-center justify-center rounded-[28px] border border-white/[0.08] bg-white/5 p-10 text-center
          backdrop-blur-[20px] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(109,93,252,.2)] "
        >
          <FaCode className="mb-8 text-[3rem] text-[#6d5dfc]" />

          <h3 className="mb-5 text-[2rem] font-bold">
            200+
          </h3>

          <p className="leading-7 text-[#c7c7c7]">Problems Solved</p>
        </div>

       <div
          className="flex min-h-[320px] flex-col items-center justify-center rounded-[28px] border border-white/[0.08] bg-white/5 p-10 text-center
          backdrop-blur-[20px] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(109,93,252,.2)] "
        >
          <FaBrain className="mb-8 text-[3rem] text-[#6d5dfc]" />

          <h3 className="mb-5 text-[2rem] font-bold">
            Core Topics
          </h3>

          <p className="leading-7 text-[#c7c7c7]">
            Arrays, Trees, Graphs, DP,
            Linked Lists, Recursion
          </p>
        </div>

        <div
          className="flex min-h-[320px] flex-col items-center justify-center rounded-[28px] border border-white/[0.08] bg-white/5 p-10 text-center
          backdrop-blur-[20px] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(109,93,252,.2)] "
        >
          <FaLaptopCode className="mb-8 text-[3rem] text-[#6d5dfc]" />

          <h3 className="mb-5 text-[2rem] font-bold">
            Platform
          </h3>

          <p className="leading-7 text-[#c7c7c7]">LeetCode</p>
        </div>
      </div>
    </section>
  );
}

export default Leetcode;