import NueBrand from "@/components/NueBrand";
import PhoneMockup from "@/components/PhoneMockup";
import UserStats from "@/components/UserStats";
import RatingCard from "@/components/RatingCard";
import ProfileCard from "@/components/ProfileCard";
import RevenueManagement from "@/components/RevenueManagement";
import AreaChartComponent from "@/components/AreaChart";
import DonutChart from "@/components/DonutChart";
import LiquidGlass from "liquid-glass-react";
const Index = () => {
  return (
    <div
      className="min-h-screen bg-background p-8 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://cdn.dribbble.com/userupload/43036213/file/original-08495ff81acf175c640428d97d0130af.png?resize=1024x768&vertical=center')",
      }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-4 grid-rows-3 gap-4 h-[600px]">
          {/* Top Row */}
          <div className="col-span-1 row-span-1">
            <NueBrand />
          </div>

          <div className="col-span-2 row-span-1">
            <PhoneMockup />
          </div>

          <div className="col-span-1 row-span-1">
            <ProfileCard />
          </div>

          {/* Second Row */}
          <div className="col-span-1 row-span-1">
            <UserStats />
          </div>

          <div className="col-span-1 row-span-1">
            <RatingCard />
          </div>

          <div className="col-span-1 row-span-2">
            <RevenueManagement />
          </div>

          <div className="col-span-1 row-span-1">
            <DonutChart />
          </div>

          {/* Bottom Row */}
          <div className="col-span-2 row-span-1">
            <AreaChartComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
