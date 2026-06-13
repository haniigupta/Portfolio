import { FaCode, FaBrain, FaLaptopCode } from "react-icons/fa";

function Leetcode() {
  return (
    <section id="leetcode">
      <h2 className="section-title">DSA Journey</h2>

      <div className="dsa-grid">
        <div className="dsa-card">
          <FaCode />
          <h3>160+</h3>
          <p>Problems Solved</p>
        </div>

        <div className="dsa-card">
          <FaBrain />
          <h3>Core Topics</h3>
          <p>
            Arrays, Trees, Graphs, DP,
            Linked Lists, Recursion
          </p>
        </div>

        <div className="dsa-card">
          <FaLaptopCode />
          <h3>Platform</h3>
          <p>LeetCode</p>
        </div>
      </div>
    </section>
  );
}

export default Leetcode;