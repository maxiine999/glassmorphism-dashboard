const RatingCard = () => {
  const avatars = [
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1494790108755-2616b612b372?w=40&h=40&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
  ];

  return (
    <div className="metric-card space-y-3 h-full flex flex-col justify-center">
      <div className="flex items-center gap-2">
        <span className="text-3xl font-bold">4.9</span>
        <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 10l9-7 9 7-3 5-6-2-6 2z"/>
        </svg>
      </div>
      <div className="flex -space-x-2">
        {avatars.map((avatar, index) => (
          <img
            key={index}
            src={avatar}
            alt={`User ${index + 1}`}
            className="w-7 h-7 rounded-full border-2 border-background"
          />
        ))}
      </div>
    </div>
  );
};

export default RatingCard;