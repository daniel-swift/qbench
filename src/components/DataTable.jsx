import React, { useState } from 'react';
import { ChevronUp, ChevronDown, MapPin, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import { Button } from './ui/Button';
import { cn } from '../lib/utils';
export const DataTable = ({ 
  data, 
  columns, 
  title,
  className 
}) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedData = React.useMemo(() => {
    if (!sortConfig.key) return data;

    return [...data].sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];

      if (aValue < bValue) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }, [data, sortConfig]);

  const getSortIcon = (columnKey) => {
    if (sortConfig.key !== columnKey) {
      return null;
    }
    return sortConfig.direction === 'asc' 
      ? <ChevronUp className="h-4 w-4" />
      : <ChevronDown className="h-4 w-4" />;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'bg-success-100 text-success-800';
      case 'maintenance':
        return 'bg-warning-100 text-warning-800';
      case 'inactive':
        return 'bg-error-100 text-error-800';
      default:
        return 'bg-secondary-100 text-secondary-800';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'text-error-600 font-semibold';
      case 'medium':
        return 'text-warning-600 font-medium';
      case 'low':
        return 'text-success-600';
      default:
        return 'text-secondary-600';
    }
  };

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table 
            className="w-full border-collapse"
            role="table"
            aria-label={title}
          >
            <thead>
              <tr className="border-b border-secondary-200">
                {columns.map((column) => (
                  <th
                    key={column.key}
                    className="text-left py-3 px-4 font-medium text-secondary-900"
                  >
                    {column.sortable ? (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleSort(column.key)}
                        className="h-auto p-0 font-medium text-secondary-900 hover:text-primary-600"
                        aria-label={`Sort by ${column.label}`}
                      >
                        <span className="flex items-center gap-1">
                          {column.label}
                          {getSortIcon(column.key)}
                        </span>
                      </Button>
                    ) : (
                      column.label
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sortedData.map((row, index) => (
                <tr
                  key={row.id || index}
                  className="border-b border-secondary-100 hover:bg-secondary-50 transition-colors"
                >
                  {columns.map((column) => (
                    <td
                      key={column.key}
                      className="py-3 px-4 text-sm text-secondary-700"
                    >
                      {column.render ? (
                        column.render(row[column.key], row)
                      ) : column.key === 'status' ? (
                        <span
                          className={cn(
                            'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
                            getStatusColor(row[column.key])
                          )}
                        >
                          {row[column.key]}
                        </span>
                      ) : column.key === 'priority' ? (
                        <span className={getPriorityColor(row[column.key])}>
                          {row[column.key]}
                        </span>
                      ) : column.key === 'location' ? (
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4 text-secondary-400" />
                          {row[column.key]}
                        </div>
                      ) : column.key === 'avgProcessingTime' ? (
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4 text-secondary-400" />
                          {row[column.key]}
                        </div>
                      ) : (
                        row[column.key]
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};