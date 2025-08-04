import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import { Input } from './ui/Input';
import { Button } from './ui/Button';
import { formatDate } from '../lib/utils';
export const DateRangePicker = ({ 
  startDate, 
  endDate, 
  onDateChange,
  className 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [tempStartDate, setTempStartDate] = useState(startDate);
  const [tempEndDate, setTempEndDate] = useState(endDate);

  const handleApply = () => {
    onDateChange({
      startDate: tempStartDate,
      endDate: tempEndDate
    });
    setIsOpen(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      setIsOpen(false);
    }
    if (event.key === 'Enter') {
      handleApply();
    }
  };

  return (
    <div className={`relative ${className}`}>
      <Button
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full sm:w-auto flex items-center gap-2"
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        aria-label="Select date range"
      >
        <Calendar className="h-4 w-4" />
        <span className="text-sm">
          {startDate && endDate 
            ? `${formatDate(startDate)} - ${formatDate(endDate)}`
            : 'Select date range'
          }
        </span>
      </Button>

      {isOpen && (
        <div 
          className="absolute top-full left-0 mt-2 p-4 bg-white border border-secondary-200 rounded-lg shadow-lg z-50 min-w-[320px]"
          role="dialog"
          aria-label="Date range picker"
          onKeyDown={handleKeyDown}
        >
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <Input
                type="date"
                label="Start Date"
                value={tempStartDate}
                onChange={(e) => setTempStartDate(e.target.value)}
                aria-label="Start date"
              />
              <Input
                type="date"
                label="End Date"
                value={tempEndDate}
                onChange={(e) => setTempEndDate(e.target.value)}
                aria-label="End date"
              />
            </div>
            
            <div className="flex justify-end gap-2 pt-2 border-t border-secondary-200">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </Button>
              <Button
                size="sm"
                onClick={handleApply}
              >
                Apply
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};