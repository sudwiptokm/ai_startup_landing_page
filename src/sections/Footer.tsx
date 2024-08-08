import Logo from "@/assets/logo.svg";
import SocialInsta from "@/assets/social-instagram.svg";
import SocialX from "@/assets/social-x.svg";
import SocialYoutube from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="border-t border-white/15 py-5">
      <div className="container">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-2">
            <Logo className="size-6" />
            <div className="font-medium">AI Startup landing page</div>
          </div>

          <nav className="flex flex-col gap-5 lg:flex-row lg:gap-7">
            <a
              href=""
              className="text-xs text-white/70 transition hover:text-white md:text-sm"
            >
              Features
            </a>
            <a
              href=""
              className="text-xs text-white/70 transition hover:text-white md:text-sm"
            >
              Developers
            </a>
            <a
              href=""
              className="text-xs text-white/70 transition hover:text-white md:text-sm"
            >
              Company
            </a>
            <a
              href=""
              className="text-xs text-white/70 transition hover:text-white md:text-sm"
            >
              Blog
            </a>
            <a
              href=""
              className="text-xs text-white/70 transition hover:text-white md:text-sm"
            >
              Changelog
            </a>
          </nav>

          <div className="flex items-center gap-5 lg:justify-end">
            <SocialX className="text-white/40 transition hover:text-white" />
            <SocialInsta className="text-white/40 transition hover:text-white" />
            <SocialYoutube className="text-white/40 transition hover:text-white" />
          </div>
        </div>
      </div>
    </footer>
  );
};
