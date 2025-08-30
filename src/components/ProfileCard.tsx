import profileWoman from "@/assets/profile-woman.png";

const ProfileCard = () => {
  return (
    <div className="metric-card relative overflow-hidden h-[293px]">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-purple-secondary/20 rounded-2xl"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <div className="w-20 h-30 rounded-full overflow-hidden mb-3">
          <img 
            src={profileWoman} 
            alt="Happy woman making peace signs" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-white text-black px-3 py-1 rounded-full text-sm font-semibold">
          Avail
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;