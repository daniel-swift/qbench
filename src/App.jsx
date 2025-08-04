import React, { useState } from 'react';
import { DashboardHeader } from './components/DashboardHeader';
import { MetricCard } from './components/MetricCard';
import { SamplesChart } from './components/SamplesChart';
import { DataTable } from './components/DataTable';
import { 
  samplesPerDayData, 
  locationBreakdown, 
  sampleTypeBreakdown, 
  keyMetrics 
} from './data/mockData';
function App() {
  const [dateRange, setDateRange] = useState({
    startDate: '2024-01-01',
    endDate: '2024-01-14'
  });


  const locationColumns = [
    { key: 'location', label: 'Location', sortable: true },
    { key: 'samples', label: 'Samples', sortable: true },
    { 
      key: 'percentage', 
      label: 'Percentage', 
      sortable: true,
      render: (value) => `${value}%`
    },
    { key: 'trend', label: 'Trend', sortable: false },
    { key: 'status', label: 'Status', sortable: true },
  ];


  const sampleTypeColumns = [
    { key: 'type', label: 'Sample Type', sortable: true },
    { key: 'count', label: 'Count', sortable: true },
    { 
      key: 'percentage', 
      label: 'Percentage', 
      sortable: true,
      render: (value) => `${value}%`
    },
    { key: 'priority', label: 'Priority', sortable: true },
    { key: 'avgProcessingTime', label: 'Avg. Processing Time', sortable: false },
  ];

  const handleDateRangeChange = (newDateRange) => {
    setDateRange(newDateRange);
    console.log('Date range changed:', newDateRange);
  };

  return (
    <div className="min-h-screen bg-secondary-50">
      <DashboardHeader
        dateRange={dateRange}
        onDateRangeChange={handleDateRangeChange}
      />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        <section 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          aria-labelledby="metrics-heading"
        >
          <h2 id="metrics-heading" className="sr-only">Key Metrics</h2>
          <MetricCard
            title="Total Samples"
            value={keyMetrics.totalSamples.value}
            change={keyMetrics.totalSamples.change}
            changeType={keyMetrics.totalSamples.changeType}
            period={keyMetrics.totalSamples.period}
          />
          <MetricCard
            title="Avg. Processing Time"
            value={keyMetrics.averageProcessingTime.value}
            change={keyMetrics.averageProcessingTime.change}
            changeType={keyMetrics.averageProcessingTime.changeType}
            period={keyMetrics.averageProcessingTime.period}
          />
          <MetricCard
            title="Active Laboratories"
            value={keyMetrics.activeLaboratories.value}
            change={keyMetrics.activeLaboratories.change}
            changeType={keyMetrics.activeLaboratories.changeType}
            period={keyMetrics.activeLaboratories.period}
          />
          <MetricCard
            title="Quality Score"
            value={keyMetrics.qualityScore.value}
            change={keyMetrics.qualityScore.change}
            changeType={keyMetrics.qualityScore.changeType}
            period={keyMetrics.qualityScore.period}
          />
        </section>


        <section className="mb-8" aria-labelledby="chart-heading">
          <h2 id="chart-heading" className="sr-only">Sample Trends</h2>
          <SamplesChart data={samplesPerDayData} />
        </section>


        <section 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          aria-labelledby="tables-heading"
        >
          <h2 id="tables-heading" className="sr-only">Data Breakdown</h2>
          <DataTable
            data={locationBreakdown}
            columns={locationColumns}
            title="Breakdown by Location"
          />
          <DataTable
            data={sampleTypeBreakdown}
            columns={sampleTypeColumns}
            title="Breakdown by Sample Type"
          />
        </section>
      </main>

      <footer className="bg-white border-t border-secondary-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-secondary-600">
            Mini BI Dashboard - Built with React, Tailwind CSS, and design tokens
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;