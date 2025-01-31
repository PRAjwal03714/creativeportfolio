import "./styles/Work.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;
    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      duration: 40,
      delay: 0.2,
    });
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
  {[...Array(3)].map((_value, index) => (
    <div className="work-box" key={index}>
      <div className="work-info">
        <div className="work-title">
          <h3>0{index + 1}</h3>
          <div>
            <h4>{index === 0 ? "Automated Water Meter Reader" : index === 1 ? "Laundry Management System" : "Noble Cure: Health Care Platform"}</h4>
            <p>{index === 0 ? "IoT, Python, Google Cloud" : index === 1 ? "Web Development, JavaScript" : "Python, Flask, PostgreSQL"}</p>
          </div>
        </div>
        <h4>Project Description</h4>
        <p style={{ fontWeight: 'bold', fontSize: '1.2em' }}>
          {index === 0 ? "Integrated ESP32 camera modules with existing meters, reducing billing errors by 90%. Implemented Python scripts and Google Cloud for real-time data analysis, processing 1,000+ readings per day. Used Twilio API for automated notifications, sending 200+ timely alerts to users, achieving a 30% increase in billing reliability." : 
          index === 1 ? "The Laundry Management System is a web-based application designed to streamline and simplify the process of managing laundry services seamlessly and effectively. It offers an intuitive interface for users to track and efficiently manage laundry orders, payment status, and delivery schedules with ease." : 
          "Created a healthcare platform prescribing medications using Python and regression algorithms, processing 200+ prescriptions daily. Utilized Flask and HTML/CSS to build a user-friendly interface, resulting in a 20% increase in user engagement. Integrated PostgreSQL for robust data management."}
        </p>
      </div>
    </div>
  ))}
</div>
      </div>
    </div>
  );
};

export default Work;
