import ParticlesBackground from "@/components/ParticlesBackground";

export default function Home() {
  return (
    <div className="relative h-screen w-screen">
      {/* Particles Background */}
      <ParticlesBackground />
      
      {/* Content over the particles */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">
          Welcome         
        </h1>
      </div>
    </div>
  );
}
