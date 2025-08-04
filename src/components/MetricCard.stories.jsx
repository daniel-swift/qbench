import { MetricCard } from './MetricCard';

export default {
  title: 'Dashboard/MetricCard',
  component: MetricCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    changeType: {
      control: { type: 'select' },
      options: ['increase', 'decrease', 'neutral'],
    },
  },
};

export const Increase = {
  args: {
    title: 'Total Samples',
    value: '6,078',
    change: '+12.5%',
    changeType: 'increase',
    period: 'vs last month',
  },
};

export const Decrease = {
  args: {
    title: 'Processing Time',
    value: '2.4 hours',
    change: '-8.2%',
    changeType: 'decrease',
    period: 'vs last month',
  },
};

export const Neutral = {
  args: {
    title: 'Active Labs',
    value: '3',
    change: '0',
    changeType: 'neutral',
    period: 'no change',
  },
};

export const AllTypes = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <MetricCard
        title="Revenue"
        value="$24,500"
        change="+15.3%"
        changeType="increase"
        period="vs last quarter"
      />
      <MetricCard
        title="Expenses"
        value="$18,200"
        change="-5.7%"
        changeType="decrease"
        period="vs last quarter"
      />
      <MetricCard
        title="Active Users"
        value="1,247"
        change="0%"
        changeType="neutral"
        period="no change"
      />
    </div>
  ),
};