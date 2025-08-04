import React from 'react';
import { DateRangePicker } from './DateRangePicker';
export const DashboardHeader = ({ 
  title = "Mini BI Dashboard",
  dateRange,
  onDateRangeChange 
}) => {
  return (
    <header className="bg-white border-b border-secondary-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-6">
          <div className="mb-4 sm:mb-0">
            <h1 className="text-2xl font-bold text-secondary-900">
              {title}
            </h1>
            <p className="mt-1 text-sm text-secondary-600">
              Real-time analytics and insights for laboratory operations
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <DateRangePicker
              startDate={dateRange.startDate}
              endDate={dateRange.endDate}
              onDateChange={onDateRangeChange}
            />
          </div>
        </div>
      </div>
    </header>
  );
};