import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-[#f0f0f0] py-12 md:py-24 px-4 md:px-6 overflow-hidden">
      <div className="mx-auto flex max-w-7xl flex-col md:flex-row items-center md:items-stretch gap-12 min-h-[calc(100vh-100px)]">
        {/* Left Content */}
        <div className="flex w-full md:w-1/2 flex-col items-start justify-center gap-6 py-6 md:py-12">
          {/* Kicker Badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full bg-white px-3.5 py-1.5 shadow-[0_0_0_3px_rgb(248,248,250)]">
            <div className="rounded-full bg-linear-to-br from-green-600 to-green-500 px-2.5 py-0.5">
              <span className="text-xs font-semibold text-white">Version 2.0</span>
            </div>
            <h6 className="text-[13px] font-semibold text-gray-900">Smarter & Faster</h6>
          </div>

          {/* Main Heading */}
          <header className="flex flex-wrap items-center gap-2 md:gap-3 text-[40px] md:text-[72px] font-bold leading-[1.1] tracking-tight text-gray-900">
            <h1>Stop</h1>
            <div className="inline-flex rotate-[8deg] items-center justify-center rounded-xl bg-gray-100 p-1.5 shadow-[0_0.4px_1.3px_-0.4px_rgba(8,203,0,0.09),0_1.6px_4.8px_-0.8px_rgba(8,203,0,0.12),0_7px_21px_-1.25px_rgba(8,203,0,0.24)]">
              <div className="rounded-lg bg-linear-to-br from-green-600 to-green-500 p-1 md:p-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  className="h-8 w-8 md:h-12 md:w-12 fill-white"
                >
                  <path d="M213.85,125.46l-112,120a8,8,0,0,1-13.69-7l14.66-73.33L45.19,143.49a8,8,0,0,1-3-13l112-120a8,8,0,0,1,13.69,7L153.18,90.9l57.63,21.61a8,8,0,0,1,3,12.95Z" />
                </svg>
              </div>
            </div>
            <h1>bleeding</h1>
            <h1 className="w-full">margin</h1>
            <h1>on AI</h1>
            <h1>agents.</h1>
          </header>

          {/* Subtitle */}
          <p className="max-w-md text-sm md:text-base leading-relaxed text-gray-600">
            Track every cost, automate billing, and get real-time profit insights for your AI agents—all in one platform.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-xl border-2 border-gray-100 bg-linear-to-br from-green-600 to-green-500 px-5 py-2.5 text-[15px] font-semibold text-white shadow-[0_0.4px_0.9px_-0.4px_rgba(8,203,0,0.13),0_1.6px_3.5px_-0.8px_rgba(8,203,0,0.17),0_7px_15.4px_-1.25px_rgba(8,203,0,0.36)] transition-all hover:scale-105 w-full md:w-auto"
            >
              <span>Get started</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                className="h-4 w-4 fill-white transition-transform group-hover:translate-x-1"
              >
                <path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z" />
              </svg>
            </Link>

            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 text-[15px] font-semibold text-gray-900 transition-all hover:gap-3 w-full md:w-auto"
            >
              <span>Talk to sales</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                className="h-4 w-4 fill-gray-900 transition-transform group-hover:translate-x-1"
              >
                <path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z" />
              </svg>
            </Link>
          </div>

          {/* Logo Carousel */}
          <div className="mt-6 w-full overflow-hidden opacity-50 mask-[linear-gradient(to_right,transparent_0%,black_25%,black_75%,transparent_100%)]">
            <div className="flex animate-scroll items-center gap-8 md:gap-16">
              {/* Logos - repeat twice for seamless infinite loop */}
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex shrink-0 items-center gap-8 md:gap-16">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 22" className="h-5 md:h-6 w-auto shrink-0" aria-hidden="true">
                    <path d="M 11.182 22 C 17.358 22 22.364 17.075 22.364 11 L 22.364 3.3 C 22.364 1.477 20.862 0 19.009 0 L 11.741 0 L 11.741 4.826 C 11.741 5.927 11.809 7.067 12.396 8.005 C 13.247 9.364 14.655 10.292 16.256 10.55 L 16.47 10.584 C 16.651 10.645 16.773 10.812 16.773 11 C 16.773 11.188 16.651 11.355 16.47 11.416 L 16.256 11.45 C 13.885 11.831 12.027 13.66 11.64 15.992 L 11.605 16.202 C 11.543 16.38 11.373 16.5 11.182 16.5 C 10.991 16.5 10.82 16.38 10.759 16.202 L 10.724 15.992 C 10.462 14.417 9.518 13.031 8.137 12.195 C 7.184 11.617 6.025 11.55 4.905 11.55 L 0.013 11.55 C 0.306 17.37 5.194 22 11.182 22 Z M 0 10.45 L 4.905 10.45 C 6.025 10.45 7.184 10.383 8.137 9.805 C 8.882 9.354 9.509 8.737 9.967 8.005 C 10.555 7.067 10.623 5.927 10.623 4.826 L 10.623 0 L 3.355 0 C 1.502 0 0 1.477 0 3.3 Z M 25.973 1.1 C 25.973 1.708 25.472 2.2 24.854 2.2 C 24.237 2.2 23.736 1.708 23.736 1.1 C 23.736 0.492 24.237 0 24.854 0 C 25.472 0 25.973 0.492 25.973 1.1 Z M 118.366 6.657 C 121.492 6.657 123 8.805 123 11.293 L 123 15.965 L 119.729 15.965 L 119.729 11.847 C 119.729 10.72 119.311 9.789 118.111 9.789 C 116.912 9.789 116.512 10.72 116.512 11.847 L 116.512 15.964 L 113.241 15.964 L 113.241 11.847 C 113.241 10.72 112.841 9.789 111.642 9.789 C 110.442 9.789 110.024 10.72 110.024 11.847 L 110.024 15.964 L 106.753 15.964 L 106.753 11.292 C 106.753 8.804 108.261 6.657 111.387 6.657 C 113.096 6.657 114.331 7.319 114.895 8.411 C 115.494 7.319 116.803 6.656 118.366 6.656 Z M 100.875 13.101 C 101.929 13.101 102.384 12.152 102.384 11.024 L 102.384 7.015 L 105.654 7.015 L 105.654 11.418 C 105.654 14.049 104.092 16.233 100.875 16.233 C 97.658 16.233 96.095 14.05 96.095 11.418 L 96.095 7.015 L 99.367 7.015 L 99.367 11.024 C 99.367 12.152 99.821 13.101 100.875 13.101 Z" fill="currentColor" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61 25" className="h-5 md:h-6 w-auto shrink-0" aria-hidden="true">
                    <path d="M 3.862 2.541 C 4.018 1.801 4.756 1.2 5.508 1.2 L 9.595 1.2 L 6.196 17.294 L 2.109 17.294 C 1.356 17.294 0.873 16.694 1.029 15.953 Z M 17.486 2.541 C 17.643 1.801 18.38 1.2 19.132 1.2 L 23.219 1.2 L 19.82 17.294 L 15.733 17.294 C 14.981 17.294 14.497 16.694 14.654 15.953 Z" fill="currentColor" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 21" className="h-5 md:h-6 w-auto shrink-0" aria-hidden="true">
                    <path d="M 12.818 0 C 10.709 0 8.687 0.847 7.195 2.355 L 2.329 7.275 C 0.838 8.783 0 10.828 0 12.96 C 0 17.401 3.56 21 7.951 21 C 10.06 21 12.083 20.153 13.574 18.645 L 16.94 15.242 L 26.748 5.325 C 27.46 4.605 28.426 4.2 29.433 4.2 C 31.119 4.2 32.549 5.311 33.045 6.849 L 36.14 3.719 C 34.728 1.483 32.252 0 29.433 0 C 27.324 0 25.302 0.847 23.811 2.355 L 10.637 15.675 C 9.924 16.395 8.959 16.8 7.951 16.8 C 5.854 16.8 4.154 15.081 4.154 12.96 C 4.154 11.942 4.554 10.965 5.266 10.245 L 10.133 5.325 C 10.845 4.605 11.811 4.2 12.818 4.2 C 14.504 4.2 15.934 5.311 16.429 6.849 L 19.525 3.719 C 18.113 1.483 15.637 0 12.818 0 Z" fill="currentColor" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 77 35" className="h-5 md:h-6 w-auto shrink-0" aria-hidden="true">
                    <path d="M 45.454 6.485 C 45.59 6.622 45.766 6.714 45.965 6.667 C 47.695 6.258 49.391 5.702 50.96 4.852 C 51.149 4.749 51.294 4.516 51.365 4.322 C 51.446 4.1 51.479 3.795 51.414 3.563 C 51.36 3.371 51.266 3.146 51.076 3.052 C 50.895 2.962 50.715 2.968 50.535 3.066 C 50.032 3.339 49.514 3.583 48.985 3.8 C 47.982 4.195 46.945 4.49 45.896 4.738 C 45.442 4.845 45.201 5.425 45.232 5.855 C 45.247 6.073 45.295 6.324 45.454 6.485 Z" fill="currentColor" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 23" className="h-5 md:h-6 w-auto shrink-0" aria-hidden="true">
                    <path d="M 49.391 7.175 C 49.391 11.365 49.391 13.02 43.873 13.02 C 49.391 13.02 49.391 14.674 49.391 18.865 C 49.391 14.699 49.391 13.02 54.823 13.02 C 49.391 13.02 49.391 11.34 49.391 7.175 Z" fill="currentColor" />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Dashboard Image */}
        <div className="relative flex w-full md:w-1/2 flex-col items-center overflow-visible py-6 md:py-12">
          <div
            className="relative w-full h-[300px] md:h-full flex items-center justify-center"
            style={{
              transform: 'perspective(1200px) rotateY(-12deg) rotateX(4deg) scale(0.9)',
              transformStyle: 'preserve-3d'
            }}
          >
            {/* Dashboard Container with white border - stretches full height */}
            <div className="relative h-full rounded-[20px] md:rounded-[32px] bg-white p-2 md:p-3 shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
              <div className="relative h-full overflow-hidden rounded-[16px] md:rounded-[24px]">
                <img
                  src="/screenshot/Hero-img-1.png"
                  alt="Dashboard Preview"
                  className="block h-full w-auto object-cover object-left"
                  width={888}
                  height={621}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
