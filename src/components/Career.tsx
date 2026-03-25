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
                <h4>Java Programming Internship</h4>
                <h5>self</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              The internship will provide practical experience by allowing Nitish to apply skills and 
              knowledge gained during training to real projects. (10/2024 - 10/2025)
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>App Development Certificate</h4>
                <h5>self / DUCAT</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Certificate awarded for successful app development project demonstrating proficiency in 
              Android app design and implementation. (01/2023 - 01/2024)
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Computer Applications</h4>
                <h5>IGNOU (Minor in CSE, IIT Mandi)</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Focused on core computer science concepts, object-oriented programming, and software development methodologies. (07/2022 - Present)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
