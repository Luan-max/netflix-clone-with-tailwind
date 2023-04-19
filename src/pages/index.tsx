import { menus } from "@/constants/header-menus";
import Header from "@/components/header";
import Image from "next/image";
import Button from "@/components/button";

import play from "../../public/play.svg";
import info from "../../public/info.svg";
import Section from "@/components/sections";
import SectionTop10Movies from "@/components/section-top-10";
import {
  moviesSeeAgain,
  moviesShow,
  moviesTop10,
  moviesTrendingNow,
} from "@/constants/movies";

export default function Home() {
  return (
    <main className="flex h-screen flex-col bg-background bg-cover bg-no-repeat ">
      <Header items={menus} />
      <div className="flex flex-col items-start absolute top-96 left-16">
        <div className="flex flex-row items-center gap-3">
          <Image
            src="/netflix-symbol.svg"
            alt="Netflix Symbol"
            width={18}
            height={31}
          />{" "}
          <span className=" tracking-1 text-base font-bold text-white">
            show
          </span>
        </div>
        <Image
          className="pt-6"
          src="/MAID.png"
          alt="Maid"
          width={334}
          height={103}
        />{" "}
        <div className="flex flex-row items-start pt-8 gap-4">
          <Button
            className="transition ease-in-out delay-150 duration-300 hover:-translate-y-1 hover:scale-110 cursor-pointer flex flex-row items-center justify-center bg-white w-20 h-10 rounded p-2"
            labelClassName="text-sm font-bold text-black"
            label="Play"
            image={play}
            alt="Play"
          />
          <Button
            className="transition ease-in-out delay-150 duration-300 hover:-translate-y-1 hover:scale-110 cursor-pointer flex flex-row items-center justify-center bg-secondary-1  w-32 gap-1  h-10 rounded p-2"
            labelClassName="text-sm font-bold text-white"
            label="More Info"
            image={info}
            alt="Info"
          />
        </div>
      </div>
      <section className="bg-gradient-radial absolute w-full h-screen left-0 top-[840px]">
        <Section
          title="See Again"
          className="px-16 flex-col w-[1364px] h-48 flex items-start justify-center"
          items={moviesSeeAgain}
        />
        <SectionTop10Movies
          title="Top 10 in your country"
          className="mt-10 px-16 flex-col w-[1364px] h-48 flex items-start justify-center"
          items={moviesTop10}
        />
        <Section
          title="Trending now"
          className="px-16 mt-10 flex-col w-[1364px] h-48 flex items-start justify-center"
          items={moviesTrendingNow}
        />
        <Section
          title="Shows"
          className="px-16 mt-10 flex-col w-[1364px] h-48 flex items-start justify-center"
          items={moviesShow}
        />
      </section>
    </main>
  );
}
