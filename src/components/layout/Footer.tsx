import Link from "next/link";
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FiGithub, href: "https://github.com/0evashish", label: "GitHub" },
    { icon: FiLinkedin, href: "https://www.linkedin.com/in/dexashish", label: "LinkedIn" },
    { icon: FiTwitter, href: "https://twitter.com/Dexashish", label: "Twitter" },
    { icon: FiMail, href: "mailto:devashishbadariya@gmail.com", label: "Email" },
  ];

  return (
    <footer className="bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="text-xl font-bold text-gradient block mb-4">
              Devashish
            </Link>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
              Full Stack Developer & Open Source Enthusiast passionate about building amazing web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-neutral-900 dark:text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {["About", "Projects", "Skills", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-neutral-900 dark:text-white mb-4">
              Resources
            </h4>
            <ul className="space-y-2">
              {["Blog", "Documentation", "Resume", "Source Code"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-neutral-900 dark:text-white mb-4">
              Connect
            </h4>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors"
                >
                  <Icon size={20} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-neutral-200 dark:border-neutral-800 pt-8 flex flex-col sm:flex-row items-center justify-between text-sm text-neutral-600 dark:text-neutral-400">
          <p>&copy; {currentYear} Devashish Badaria. All rights reserved.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <Link href="#" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
