import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import { cn } from '../lib/utils';
export const MetricCard = ({
  title,
  value,
  change,
  changeType,
  period,
  className
}) => {
  const getTrendIcon = () => {
    switch (changeType) {
      case 'increase':
        return <TrendingUp className="h-4 w-4 text-success-600" aria-hidden="true" />;
      case 'decrease':
        return <TrendingDown className="h-4 w-4 text-error-600" aria-hidden="true" />;
      default:
        return <Minus className="h-4 w-4 text-secondary-400" aria-hidden="true" />;
    }
  };

  const getTrendColor = () => {
    switch (changeType) {
      case 'increase':
        return 'text-success-600';
      case 'decrease':
        return 'text-error-600';
      default:
        return 'text-secondary-400';
    }
  };

  const getTrendDescription = () => {
    switch (changeType) {
      case 'increase':
        return 'Trending up';
      case 'decrease':
        return 'Trending down';
      default:
        return 'No change';
    }
  };

  return (
    <Card className={cn('hover:shadow-lg transition-shadow', className)}>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-secondary-600">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold text-secondary-900">
              {value}
            </div>
            <div className="flex items-center gap-1 mt-1">
              {getTrendIcon()}
              <span 
                className={cn('text-sm font-medium', getTrendColor())}
                aria-label={`${getTrendDescription()}: ${change} ${period}`}
              >
                {change}
              </span>
              <span className="text-sm text-secondary-500">
                {period}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};