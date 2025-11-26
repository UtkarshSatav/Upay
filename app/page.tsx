import Hero from "./components/hero";
import Growth from "./components/growth";
import Features from "./components/features";
import HowItWorks from "./components/how-it-works";
import Navbar from "./components/navbar";
import UserInfo from "./components/user-info";
import Benefits from "./components/benefits";
import Comparison from "./components/comparison";
import Testimonials from "./components/testimonials";
import Desktop from "./components/desktop";
import Pricing from "./components/pricing";
import FAQ from "./components/faq";
import Blog from "./components/blog";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <div className="pt-[82px] w-full">
        <Hero />
        <Growth />
        <Features />
        <HowItWorks />
        <UserInfo />
        <Benefits />
        <Comparison />
        <Testimonials />
        <Desktop />
        <Pricing />
        <FAQ />
        <Blog />
        <Footer />
      </div>
    </main>
  );
}
