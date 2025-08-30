import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
const data = [
  { name: 'Revenue', value: 75 },
  { name: 'Other', value: 25 },
];

const COLORS = ['hsl(269 91% 67%)', 'hsl(240 4% 16%)'];

const DonutChart = () => {
  return (
    <div className="chart-container h-[293px] mt-[102px]">
      <div className="space-y-8 h-full flex flex-col relative">
        <div className="flex items-center justify-end">
          <span className="text-xs bg-white text-black px-2 py-1 rounded-full font-semibold">
            +23%
          </span>
        </div>
        
        <div className="flex- flex items-center justify-center relative">
          <div className="relative h-32 w-32 ">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={35}
                  outerRadius={55}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            
            {/* Revenue text inside the donut */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <p className="text-xs text-muted-foreground">Revenue</p>
              <p className="text-lg font-bold mt-[150px]">$230,545</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonutChart;