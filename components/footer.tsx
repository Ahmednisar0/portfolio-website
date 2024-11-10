// components/Footer.js
import { FaInstagram, FaLinkedinIn, FaEnvelope, FaPhoneAlt, FaGithub } from 'react-icons/fa';

export default function Footer() {
    // Functions to handle clicks on the icons
    const handleInstagramClick = () => {
        window.open('https://www.instagram.com/yourusername', '_blank');
    };

    const handleLinkedinClick = () => {
        window.open('https://www.linkedin.com/in/yourusername', '_blank');
    };

    const handleEmailClick = () => {
        window.location.href = 'mailto:youremail@example.com';
    };

    const handlePhoneClick = () => {
        window.location.href = 'tel:+1234567890'; // Replace with your phone number
    };

    const handleGithubClick = () => {
        window.open('https://github.com/yourusername', '_blank'); // Replace with your GitHub URL
    };

    return (
        <footer className="bg-black text-white py-8">
            <div className="max-w-screen-xl mx-auto flex justify-center items-center space-x-8">
                {/* Instagram Icon */}
                <div 
                    onClick={handleInstagramClick} 
                    className="text-2xl cursor-pointer hover:text-[#ff4500] transition-colors"
                >
                    <FaInstagram />
                </div>

                {/* LinkedIn Icon */}
                <div 
                    onClick={handleLinkedinClick} 
                    className="text-2xl cursor-pointer hover:text-[#ff4500] transition-colors"
                >
                    <FaLinkedinIn />
                </div>

                {/* Email Icon */}
                <div 
                    onClick={handleEmailClick} 
                    className="text-2xl cursor-pointer hover:text-[#ff4500] transition-colors"
                >
                    <FaEnvelope />
                </div>

                {/* Phone Icon */}
                <div 
                    onClick={handlePhoneClick} 
                    className="text-2xl cursor-pointer hover:text-[#ff4500] transition-colors"
                >
                    <FaPhoneAlt />
                </div>

                {/* GitHub Icon */}
                <div 
                    onClick={handleGithubClick} 
                    className="text-2xl cursor-pointer hover:text-[#ff4500] transition-colors"
                >
                    <FaGithub />
                </div>
            </div>

            {/* Footer Text */}
            <div className="text-center mt-4 text-sm">
                <p>&copy; {new Date().getFullYear()} Ahmed Raza. All rights reserved.</p>
            </div>
        </footer>
    );
}

