import Image from "next/image";
import ProfileCard from "@/components/profileCard/ProfileCard";
import RotatingText from "@/components/rotatingText/RotatingText";
import AnimatedContent from "@/components/animatedContent/AnimatedContent";
import SideRays from "@/components/sideRays/SideRays";
import SoftAurora from "@/components/softAurora/SoftAurora";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0e0e0e]">
      <div className="absolute inset-0 z-0">
        <SoftAurora
          speed={0.6}
          scale={1.5}
          brightness={0.5}
          color1="#f7f7f7"
          color2="#C6F10E"
          noiseFrequency={2.5}
          noiseAmplitude={1}
          bandHeight={0.5}
          bandSpread={1}
          octaveDecay={0.1}
          layerOffset={0}
          colorSpeed={1}
          enableMouseInteraction
          mouseInfluence={0.25}
        />
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
      <div className="relative z-10 container mx-auto h-screen">
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
                    mainClassName="px-2 sm:px-2 md:px-3 bg-[#C6F10E] text-black overflow-hidden py-0.5 sm:py-1 justify-center rounded-lg text-lg font-bold inline-flex transition-all"
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
                  <p>lorem ipsum dolor sit amet, dengan menyebut nama Allah yang maha pengasih lagi maha penyayang.</p>
                </AnimatedContent>

              </div>
            </div>
          </div>
          <div className="col-span-6 h-full">
            <AnimatedContent
              className="flex items-center gap-2"
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
              <ProfileCard />
            </AnimatedContent>
          </div>
        </div>
      </div>
    </div>
  );
}
