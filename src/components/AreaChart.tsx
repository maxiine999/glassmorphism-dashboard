import { Area, AreaChart as RechartsAreaChart, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', basic: 4000, enterprise: 2400 },
  { name: 'Feb', basic: 3000, enterprise: 1398 },
  { name: 'Mar', basic: 2000, enterprise: 9800 },
  { name: 'Apr', basic: 2780, enterprise: 3908 },
  { name: 'May', basic: 1890, enterprise: 4800 },
  { name: 'Jun', basic: 2390, enterprise: 3800 },
];

const AreaChartComponent = () => {
  return (
    <div className="chart-container h-full">
      <div className="space-y-4 h-full flex flex-col">
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent"></div>
            <span>Basic</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-purple-secondary"></div>
            <span>Enterprise</span>
          </div>
        </div>
        
        <div className="flex-1 min-h-0">
          <ResponsiveContainer width="100%" height="100%">
            <RechartsAreaChart data={data}>
              <defs>
                <linearGradient id="basicGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(269 91% 67%)" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="hsl(269 91% 67%)" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="enterpriseGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(269 58% 49%)" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="hsl(269 58% 49%)" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="basic"
                stackId="1"
                stroke="hsl(269 91% 67%)"
                fill="url(#basicGrad)"
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="enterprise"
                stackId="1"
                stroke="hsl(269 58% 49%)"
                fill="url(#enterpriseGrad)"
                strokeWidth={2}
              />
            </RechartsAreaChart>
          </ResponsiveContainer>
        </div>
        
        <div className="mt-auto">
          <p className="text-sm text-muted-foreground">MRR</p>
          <p className="text-2xl font-bold">$24,414</p>
        </div>
      </div>
    </div>
  );
};

export default AreaChartComponent;