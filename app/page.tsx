import Link from "next/link";
import { PiInstagramLogo } from "react-icons/pi";

export default function Home() {
  return (
    <>
      <div className="relative">
        <main className="absolute w-screen h-screen grid place-content-center z-20">
          <div className="flex flex-col items-center text-center">
            <div className="blur-[1px]">
              <h1
                className="uppercase text-6xl lg:text-8xl mb-8 uppercase glitch"
                data-text="DREAMER"
              >
                Dreamer
              </h1>
            </div>
            <p className="mb-20 blur-[0.65px]">
              Short cyberpunk film | 2025 | dir. Michal Špitálský
            </p>

            <p className="blur-[0.65px]">Follow for more:</p>
            <Link
              href={"https://www.instagram.com/dreamer_the_film/"}
              target="_blank"
            >
              <div className="flex gap-4 mt-4 link blur-[0.65px]">
                <PiInstagramLogo size={30} />
              </div>
            </Link>
          </div>
        </main>
        <div className="crt w-screen h-screen pointer-events-none absolute top-0 left-0 z-10 mix-blend-hard-light"></div>
        <video
          width="1920"
          height="1080"
          loop
          autoPlay
          muted
          className="absolute top-0 left-0 w-screen h-screen object-cover z-0"
        >
          <source src="cyberspace.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
}
