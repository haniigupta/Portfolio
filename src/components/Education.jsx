function Education() {
  return (
    <section
      id="education"
      className="px-[10%] py-[100px]"
    >
      <h2 className="mb-[55px] text-[3rem] max-md:text-[2.2rem]">
        Education
      </h2>

      <div
        className="
          mx-auto
          flex
          min-h-[320px]
          max-w-[850px]
          flex-col
          items-center
          justify-center
          rounded-[28px]
          border
          border-white/[0.08]
          bg-white/5
          p-12
          text-center
          backdrop-blur-[20px]
          transition-all
          duration-300
          hover:-translate-y-2
          hover:shadow-[0_0_30px_rgba(109,93,252,.2)]
        "
      >
        <span className="mb-6 text-[1.2rem] font-medium tracking-wide text-[#8b7dff]">
          2023 – 2027
        </span>

        <h3 className="mb-4 text-[2rem] font-bold">
          Bachelor of Technology
        </h3>

        <p className="mb-3 text-lg text-[#c7c7c7]">
          Computer Science Engineering
        </p>

        <span className="text-lg font-medium text-[#8b7dff]">
          Current CGPA: 8+
        </span>
      </div>
    </section>
  );
}

export default Education;