const UserStats = () => {
  return (
    <div className="metric-card h-full flex flex-col justify-center">
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">New users</p>
        <div className="flex items-end gap-2">
          <span className="text-3xl font-bold">78K</span>
          <span className="text-success text-xs font-semibold bg-success/10 px-2 py-1 rounded-full">
            +10%
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserStats;