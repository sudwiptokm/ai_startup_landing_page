"use client";

import AcmeLogo from "@/assets/logo-acme.png";
import ApexLogo from "@/assets/logo-apex.png";
import CelestialLogo from "@/assets/logo-celestial.png";
import EchoLogo from "@/assets/logo-echo.png";
import PulseLogo from "@/assets/logo-pulse.png";
import QuantumLogo from "@/assets/logo-quantum.png";
import { motion } from "framer-motion";
import Image from "next/image";

export const LogoTicker = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div className="flex items-center gap-5">
          <div className="flex-1 md:flex-none">
            <h2>Trusted by top innovative teams</h2>
          </div>

          <div className="flex flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              className="flex flex-none gap-14 pr-14"
              initial={{ translateX: "-50%" }}
              animate={{ translateX: "0%" }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              <Image src={AcmeLogo} alt="Acme Logo" className="h-6 w-auto" />
              <Image src={ApexLogo} alt="Apex Logo" className="h-6 w-auto" />
              <Image
                src={CelestialLogo}
                alt="Celestial Logo"
                className="h-6 w-auto"
              />
              <Image src={EchoLogo} alt="Echo Logo" className="h-6 w-auto" />
              <Image src={PulseLogo} alt="Pulse Logo" className="h-6 w-auto" />
              <Image
                src={QuantumLogo}
                alt="Quantum Logo"
                className="h-6 w-auto"
              />

              {/* Duplicate Sets of logo */}
              <Image src={AcmeLogo} alt="Acme Logo" className="h-6 w-auto" />
              <Image src={ApexLogo} alt="Apex Logo" className="h-6 w-auto" />
              <Image
                src={CelestialLogo}
                alt="Celestial Logo"
                className="h-6 w-auto"
              />
              <Image src={EchoLogo} alt="Echo Logo" className="h-6 w-auto" />
              <Image src={PulseLogo} alt="Pulse Logo" className="h-6 w-auto" />
              <Image
                src={QuantumLogo}
                alt="Quantum Logo"
                className="h-6 w-auto"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
