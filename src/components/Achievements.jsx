function Achievements() {
  const achievements = [
    {
      title: "LeetCode",
      value: "200+ Problems",
    },
    {
      title: "Open Source",
      value: "3 Programs",
    },
    {
      title: "Projects",
      value: "2 Deployed Apps",
    },
    {
      title: "Current Focus",
      value: "MERN + DSA",
    },
  ];

  return (
    <section className="px-[10%] py-[100px]">
      <h2 className="mb-[30px] text-5xl max-md:text-[2.2rem]">
        Highlights
      </h2>

      <div className="grid grid-cols-4 gap-[25px] max-md:grid-cols-2 max-[480px]:grid-cols-1">
        {achievements.map((item, i) => (
          <div
            key={i}
            className="rounded-[20px] bg-white/5 p-[30px] text-center backdrop-blur-[15px] transition duration-300 hover:-translate-y-[10px]"
          >
            <h2 className="text-5xl text-[#6d5dfc]">
              {item.value}
            </h2>

            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;