const Banner = () => (
  <div className="relative">
    <video autoPlay loop muted className="w-full h-[400px] object-cover">
      <source src="b1.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
      <h1 className="text-5xl font-bold mb-4">Welcome to Technolgy FAB</h1>
      <p className="text-lg">
        Explore the latest trends in technology and innovation.
      </p>
    </div>
  </div>
);

export default Banner;
