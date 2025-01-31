import { useEffect } from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import HoverLinks from "./HoverLinks";

const SocialIcons = () => {
  // Handle resume click to open in a new tab
  const handleResumeClick = () => {
    window.open("/Resume_Prajwal_Venugopal.pdf", "_blank");
  };

  useEffect(() => {
    const social = document.getElementById("social") as HTMLElement;

    const mouseMoveHandler = (item: HTMLElement) => {
      const link = item.querySelector("a") as HTMLElement;
      const rect = item.getBoundingClientRect();
      let mouseX = rect.width / 2;
      let mouseY = rect.height / 2;
      let currentX = 0;
      let currentY = 0;

      const updatePosition = () => {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;
        link.style.setProperty("--siLeft", `${currentX}px`);
        link.style.setProperty("--siTop", `${currentY}px`);

        requestAnimationFrame(updatePosition);
      };

      const onMouseMove = (e: MouseEvent) => {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x < 40 && x > 10 && y < 40 && y > 5) {
          mouseX = x;
          mouseY = y;
        } else {
          mouseX = rect.width / 2;
          mouseY = rect.height / 2;
        }
      };

      item.addEventListener("mousemove", onMouseMove);
      updatePosition();

      return () => {
        item.removeEventListener("mousemove", onMouseMove);
      };
    };

    if (social) {
      social.querySelectorAll("span").forEach((item) => {
        mouseMoveHandler(item as HTMLElement);
      });
    }

    return () => {
      // Clean up if necessary
      social?.querySelectorAll("span").forEach((item) => {
        const link = item.querySelector("a");
        if (link) {
          link.style.removeProperty("--siLeft");
          link.style.removeProperty("--siTop");
        }
      });
    };
  }, []);

  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        <span>
          <a href="https://github.com/PRAjwal03714" target="_blank">
            <FaGithub />
          </a>
        </span>
        <span>
          <a href="https://www.linkedin.com/in/PrajwalVenugopal/" target="_blank">
            <FaLinkedinIn />
          </a>
        </span>
        <span>
          <a href="https://x.com" target="_blank">
            <FaXTwitter />
          </a>
        </span>
      </div>
      <a className="resume-button" onClick={handleResumeClick}>
        <HoverLinks text="RESUME" />
        <span>
          <TbNotes />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;
