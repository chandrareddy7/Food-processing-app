import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="faq-links">
        <a href="">FAQ's</a>
        <a href="">Work with us</a>
        <a href="">Contact Us</a>
        <a href="">Customer Care</a>
      </div>
      <div className="vendor-links">
        <a href="">Add a restaurant</a>
        <a href="">Contact vendor care</a>
      </div>
      <div className="social-links">
        {" "}
        SOCIAL LINKS
        <InstagramIcon className="social-icon" />
        <YouTubeIcon className="social-icon" />
        <LinkedInIcon className="social-icon" />
        <XIcon className="social-icon" />
      </div>
    </div>
  );
};
export default Footer;
