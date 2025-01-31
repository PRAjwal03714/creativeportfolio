import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer Intern</h4>
                <h5>Celstream Technologies</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
            <ul>
  <li><strong>Enhanced</strong> the Buckman web application (a leading provider of chemical solutions) using <strong>React</strong>, supporting <strong>1,000+ daily users</strong> for a seamless experience.</li>
  <li><strong>Collaborated</strong> with cross-functional teams to <strong>migrate legacy JavaScript products to React</strong>, improving development efficiency and teamwork.</li>
  <li><strong>Resolved 10+ critical bugs</strong> in live projects, enhancing application stability and user satisfaction.</li>
</ul>
</p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>DevOps Engineer Intern</h4>
                <h5>Verana Networks</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
            <ul>
  <li><strong>Improved</strong> web application performance for CU services with BusyBox server, shell scripts, and Unix commands, reducing response times by <strong>30%</strong>.</li>
  <li><strong>Automated</strong> routine maintenance tasks using Unix commands and scripting, reducing manual intervention by <strong>50%</strong> and saving the team an estimated <strong>10 hours per month</strong>.</li>
  <li><strong>Designed and deployed</strong> monitoring tools that improved system uptime by <strong>15%</strong>, allowing for early detection and swift resolution of potential issues.</li>
</ul>

            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Career;
