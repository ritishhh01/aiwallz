import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <section className="text-center py-10">
        <h1 className="text-4xl font-bold mb-3">AIWallz</h1>
        <p className="text-gray-400">Discover and download stunning AI-generated 4K wallpapers</p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="relative overflow-hidden rounded-2xl group">
            <img
              src={`https://picsum.photos/800/600?random=${i}`}
              alt="Wallpaper"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />
          </div>
        ))}
      </section>
    </main>
  );
}
