
export const samplesPerDayData = [
  { date: '2024-01-01', samples: 145, target: 150 },
  { date: '2024-01-02', samples: 158, target: 150 },
  { date: '2024-01-03', samples: 142, target: 150 },
  { date: '2024-01-04', samples: 167, target: 150 },
  { date: '2024-01-05', samples: 155, target: 150 },
  { date: '2024-01-06', samples: 149, target: 150 },
  { date: '2024-01-07', samples: 163, target: 150 },
  { date: '2024-01-08', samples: 151, target: 150 },
  { date: '2024-01-09', samples: 174, target: 150 },
  { date: '2024-01-10', samples: 139, target: 150 },
  { date: '2024-01-11', samples: 168, target: 150 },
  { date: '2024-01-12', samples: 156, target: 150 },
  { date: '2024-01-13', samples: 145, target: 150 },
  { date: '2024-01-14', samples: 162, target: 150 },
];


export const locationBreakdown = [
  {
    id: 1,
    location: 'North Laboratory',
    samples: 2145,
    percentage: 35.2,
    trend: '+5.2%',
    status: 'active',
    lastUpdate: '2024-01-14T10:30:00Z'
  },
  {
    id: 2,
    location: 'South Laboratory',
    samples: 1876,
    percentage: 30.8,
    trend: '+2.1%',
    status: 'active',
    lastUpdate: '2024-01-14T09:45:00Z'
  },
  {
    id: 3,
    location: 'East Laboratory',
    samples: 1234,
    percentage: 20.3,
    trend: '-1.5%',
    status: 'maintenance',
    lastUpdate: '2024-01-14T08:15:00Z'
  },
  {
    id: 4,
    location: 'West Laboratory',
    samples: 823,
    percentage: 13.7,
    trend: '+8.3%',
    status: 'active',
    lastUpdate: '2024-01-14T11:20:00Z'
  }
];


export const sampleTypeBreakdown = [
  {
    id: 1,
    type: 'Blood',
    count: 2890,
    percentage: 47.5,
    priority: 'high',
    avgProcessingTime: '2.3 hours'
  },
  {
    id: 2,
    type: 'Urine',
    count: 1567,
    percentage: 25.8,
    priority: 'medium',
    avgProcessingTime: '1.8 hours'
  },
  {
    id: 3,
    type: 'Tissue',
    count: 892,
    percentage: 14.7,
    priority: 'high',
    avgProcessingTime: '4.2 hours'
  },
  {
    id: 4,
    type: 'Saliva',
    count: 567,
    percentage: 9.3,
    priority: 'low',
    avgProcessingTime: '1.2 hours'
  },
  {
    id: 5,
    type: 'Other',
    count: 162,
    percentage: 2.7,
    priority: 'medium',
    avgProcessingTime: '2.1 hours'
  }
];


export const keyMetrics = {
  totalSamples: {
    value: 6078,
    change: '+12.5%',
    changeType: 'increase',
    period: 'vs last month'
  },
  averageProcessingTime: {
    value: '2.4 hours',
    change: '-8.2%',
    changeType: 'decrease',
    period: 'vs last month'
  },
  activeLaboratories: {
    value: 3,
    change: '0',
    changeType: 'neutral',
    period: 'no change'
  },
  qualityScore: {
    value: '98.7%',
    change: '+0.3%',
    changeType: 'increase',
    period: 'vs last month'
  }
};