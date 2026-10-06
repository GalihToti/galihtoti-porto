import Image from "next/image";
import ProfileCard from "@/components/profileCard/ProfileCard";
import RotatingText from "@/components/rotatingText/RotatingText";
import AnimatedContent from "@/components/animatedContent/AnimatedContent";
import SideRays from "@/components/sideRays/SideRays";
import SoftAurora from "@/components/softAurora/SoftAurora";
import GradientText from "@/components/gradientText/GradientText";
import Link from "next/link";
import SiteNavbar from "@/components/resizableNavbar/SiteNavbar";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0e0e0e]">
      <div className="fixed top-0 w-full z-30 mb-4">
        <SiteNavbar />
      </div>
      <div className="absolute inset-0 z-20 pointer-events-none mix-blend-screen
             [mask:linear-gradient(to_left,black_30%,transparent_75%)]">
        <SideRays
          speed={2.5}
          rayColor1="#EAB308"
          rayColor2="#96c8ff"
          intensity={2}
          spread={2}
          origin="top-right"
          tilt={0}
          saturation={1.5}
          blend={0.75}
          falloff={1.6}
          opacity={1}
        />
      </div>
      <div className="relative z-10 container mx-auto min-h-screen px-6 pt-32 md:px-12 lg:px-16">
        <div className="grid grid-cols-12">
          <div className="col-span-6">
            <div className="flex items-center h-full">
              <div className="flex flex-col gap-6">
                <AnimatedContent
                  className="flex items-center gap-2"
                  distance={100}
                  direction="vertical"
                  reverse={true}
                  duration={1.5}
                  ease="power3.out"
                  initialOpacity={0}
                  animateOpacity
                  scale={1}
                  threshold={0.1}
                  delay={0}
                >
                  <h1 className="flex flex-col font-bold text-6xl">
                    Galih Toti
                    <span className="text-[#C6F10E]">
                      Ilham Payoga
                    </span>
                  </h1>
                </AnimatedContent>
                <AnimatedContent
                  className="flex items-center gap-2"
                  distance={150}
                  direction="horizontal"
                  reverse={true}
                  duration={1.5}
                  ease="power3.out"
                  initialOpacity={0}
                  animateOpacity
                  scale={1}
                  threshold={0.1}
                  delay={0}
                >
                  <h1 className="text-lg font-bold text-white">I'm Ready For Jobs</h1>
                  <RotatingText
                    texts={['Web Development', 'IT Support', 'Cyber Security', 'Saya Satpol']}
                    mainClassName="px-2 sm:px-2 md:px-3 text-[#C6F10E] overflow-hidden py-0.5 sm:py-1 justify-center rounded-lg text-lg font-bold inline-flex transition-all"
                    staggerFrom="first"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={2000}
                    splitBy="words"
                    auto
                    loop
                  />
                </AnimatedContent>
                <AnimatedContent
                  className="flex items-center gap-2"
                  distance={150}
                  direction="horizontal"
                  reverse={true}
                  duration={1.5}
                  ease="power3.out"
                  initialOpacity={0}
                  animateOpacity
                  scale={1}
                  threshold={0.1}
                  delay={0}
                >
                  <div className="flex flex-col gap-8 items-start">
                    <p>Lorem ipsum dolor sit amet, dengan menyebut nama Allah yang maha pengasih lagi maha penyayang. Lorem Lorem ipsum dolor sit amet, dengan menyebut nama Allah yang maha pengasih lagi maha penyayang</p>
                    <Link
                      href="#"
                      className="inline-flex items-center justify-center rounded-lg border border-[#C6F10E] bg-[#C6F10E] px-2 md:px-3 py-0.5 sm:py-1 font-semibold text-black transition-all duration-100 hover:bg-transparent hover:text-[#C6F10E]"
                    >
                      Contact Me
                    </Link>
                  </div>

                </AnimatedContent>
              </div>
            </div>
          </div>
          <div className="col-span-6 h-full">
            <AnimatedContent
              className="flex items-center justify-end h-full"
              distance={150}
              direction="horizontal"
              reverse={false}
              duration={1.7}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={0.7}
              threshold={0.1}
              delay={0}
            >
              <div className="ml-auto origin-right scale-80">
                <ProfileCard />
              </div>
            </AnimatedContent>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
