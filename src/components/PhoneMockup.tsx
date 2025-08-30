import iphoneMockup from "@/assets/iphone-mockup.png";

const PhoneMockup = () => {
  return (
    <div className="rounded-2xl flex flex-col items-center justify-center space-y-6 h-full relative overflow-hidden">
      <div className="relative w-[600px] h-[240px]">
        <img
          src="https://yastudio.net/wp-content/uploads/2019/01/Wssel-Work-By-YaStudio-13.jpg"
          alt="App Icon"
          className="w-full h-full  ml-12 mt-6 rounded-2xl object-cover shadow-md"
        />

        {/* Text overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-5xl font-bold text-white drop-shadow-lg mr-[380px]">
            App
          </h2>
        </div>
      </div>

      <div className="absolute -top-10 -right-10 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
    </div>
  );

};

export default PhoneMockup;