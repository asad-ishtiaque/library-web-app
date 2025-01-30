import React from "react";

function Hero() {
  return (
    <div>
      <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row px-24 mt-20">
        <div className="flex flex-col items-center justify-center sm:text-center lg:items-start lg:py-12 lg:text-left xl:w-6/12 xl:py-24">
          <h1 className="mb-3 text-4xl font-bold text-black sm:text-5xl ">
            The Library that is
          </h1>
          <h1 className="mb-3 text-4xl font-bold text-black sm:text-5xl ">
            <span className="text-orange-500"> always</span> open.
          </h1>
          <h1 className=" mb-4 text-4xl font-bold text-black sm:text-5xl ">
            Read a Book Today
          </h1>
          <p className="mb-8 leading-relaxed text-gray-800 font-bold lg:w-4/5 xl:text-lg">
            Read. Learn. Grow. Repeat.
          </p>
          <form className="flex w-full gap-2 md:max-w-md">
            <input
              placeholder="Search a book..."
              className="w-full flex-1 rounded border bg-gray-50 px-3 py-2 text-gray-800 placeholder-gray-500 outline-none transition duration-100 focus:ring"
            />

            <button className="inline-block rounded bg-orange-500 px-8 py-2 text-center text-sm font-semibold text-white outline-none  transition duration-100 hover:bg-orange-600 focus-visible:ring active:bg-indigo-700 md:text-base">
              Search
            </button>
          </form>
        </div>

        <div className="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12">
          <img
            src="/src/assets/book-stacks-vector.png"
            loading="lazy"
            alt="Photo by Fakurian Design"
            className="h-full w-full object-cover object-center"
          />
        </div>
      </section>
    </div>
    
  );
}

export default Hero;
