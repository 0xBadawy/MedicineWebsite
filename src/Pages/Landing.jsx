import AboutUsSection from "../Sections/AboutUsSection";
import ArticleSection from "../Sections/ArticleSection";
import DeanSection from "../Sections/DeanSection";
import DepartmentSection from "../Sections/DepartmentSection";
import HeroSection from "../Sections/HeroSection";
import MessageSection from "../Sections/MessageSection";
import NewsSection from "../Sections/NewsSection";
import StatsCounter from "../Sections/StatsCounter";
import VisionSection from "../Sections/VisionSection";

const Landing = () => {
  return (
    <div>
      <HeroSection />
      <AboutUsSection />
      <NewsSection />
      <DeanSection />
      <MessageSection />
      <VisionSection />
      <DepartmentSection />
      <ArticleSection />
      <StatsCounter />
    </div>
  );
};

export default Landing;
