function Achievements() {
  const achievements = [
    {
      title: "LeetCode",
      value: "160+ Problems",
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
    <section>
      <h2 className="section-title">
        Highlights
      </h2>

      <div className="stats-grid">
        {achievements.map((item, i) => (
          <div className="stat-card" key={i}>
            <h2>{item.value}</h2>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;