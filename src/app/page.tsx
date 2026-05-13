  // /app/page.tsx
  import Hero from "@/component/sections/Hero";
  import About from "@/component/sections/About";
  import VisionMission from "@/component/sections/VisionMission";
  import Business from "@/component/sections/Business";
  import HealthCarousel from "@/component/sections/HealthCarousel";
  import LifeAtEris from "@/component/sections/LifeatEris";
  import OurTeam from "@/component/sections/Team";



  export default function Home() {
    return (
      <main className="flex flex-col">

        {/* Navbar */}
     

        {/* Section 1 */}
          <Hero />

        {/* Section 2 */}     
          <About />

        {/* Section 2.5 */}
          <VisionMission />
        
        {/* Section 3 */}   
          <Business />
        
        {/* Section 4 */}
          <HealthCarousel />

        {/* Section 5 */}  
          <LifeAtEris />

        {/* Section 6 */}  
          <OurTeam />

        {/* Footer */}
       
      </main>
    );
  }
