import './Footer.css';
import { FaGithub,FaLinkedin } from "react-icons/fa";
const Footer =()=>{
    return(
        <div className='footer'>
            <div class="footer-header">Made with <span>&lt;/&gt;</span> by Tanya Kansal</div>
        <ul>
            <li><a href="https://github.com/"><FaGithub/></a></li>
           
            <li><a class="link-no-style"
                    href="https://www.linkedin.com/in/ankita-bagale1108/"><FaLinkedin/></a></li>
        </ul>
        </div>
       
    )
}
export default Footer;