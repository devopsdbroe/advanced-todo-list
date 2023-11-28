import {
	FaGithub,
	FaFacebookF,
	FaLinkedin,
	FaTwitter,
	FaYoutube,
} from "react-icons/fa";
import { FiInstagram, FiMail, FiSend } from "react-icons/fi";

const Footer = () => {
	return (
		<div className="w-full bg-bodyColor">
			<p className="text-sm text-gray-400 text-center">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat dolor
				nobis doloribus temporibus eum dicta cum, inventore necessitatibus eos
				possimus est labore ad optio laboriosam nemo totam eveniet corrupti
				dolorum!
			</p>
			<div className="flex justify-center gap-2 mt-3">
				<span className="footerIcon">
					<FaGithub />
				</span>
				<span className="footerIcon">
					<FaFacebookF />
				</span>
				<span className="footerIcon">
					<FaLinkedin />
				</span>
				<span className="footerIcon">
					<FaTwitter />
				</span>
				<span className="footerIcon">
					<FaYoutube />
				</span>
				<span className="footerIcon">
					<FiInstagram />
				</span>
				<span className="footerIcon">
					<FiMail />
				</span>
				<span className="footerIcon">
					<FiSend />
				</span>
			</div>
		</div>
	);
};

export default Footer;
