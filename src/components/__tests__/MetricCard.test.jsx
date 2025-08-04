import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MetricCard } from '../MetricCard';

describe('MetricCard Component', () => {
  const defaultProps = {
    title: 'Total Samples',
    value: '1,234',
    change: '+12.5%',
    changeType: 'increase',
    period: 'vs last month'
  };

  it('renders all metric information correctly', () => {
    render(<MetricCard {...defaultProps} />);
    
    expect(screen.getByText('Total Samples')).toBeInTheDocument();
    expect(screen.getByText('1,234')).toBeInTheDocument();
    expect(screen.getByText('+12.5%')).toBeInTheDocument();
    expect(screen.getByText('vs last month')).toBeInTheDocument();
  });

  it('shows correct trend icon for increase', () => {
    render(<MetricCard {...defaultProps} changeType="increase" />);
    const trendElement = screen.getByLabelText(/trending up/i);
    expect(trendElement).toBeInTheDocument();
  });

  it('shows correct trend icon for decrease', () => {
    render(<MetricCard {...defaultProps} changeType="decrease" change="-5.2%" />);
    const trendElement = screen.getByLabelText(/trending down/i);
    expect(trendElement).toBeInTheDocument();
  });

  it('shows correct trend icon for neutral', () => {
    render(<MetricCard {...defaultProps} changeType="neutral" change="0%" />);
    const trendElement = screen.getByLabelText(/no change/i);
    expect(trendElement).toBeInTheDocument();
  });

  it('applies correct color classes for trend types', () => {
    const { rerender } = render(<MetricCard {...defaultProps} changeType="increase" />);
    expect(screen.getByText('+12.5%')).toHaveClass('text-success-600');
    
    rerender(<MetricCard {...defaultProps} changeType="decrease" change="-5.2%" />);
    expect(screen.getByText('-5.2%')).toHaveClass('text-error-600');
    
    rerender(<MetricCard {...defaultProps} changeType="neutral" change="0%" />);
    expect(screen.getByText('0%')).toHaveClass('text-secondary-400');
  });

  it('applies custom className', () => {
    render(<MetricCard {...defaultProps} className="custom-metric-card" />);
    const card = screen.getByText('Total Samples').closest('div[class*="rounded-lg"]');
    expect(card).toHaveClass('custom-metric-card');
  });

  it('provides accessible trend description', () => {
    render(<MetricCard {...defaultProps} />);
    const changeElement = screen.getByLabelText(/trending up.*\+12\.5%.*vs last month/i);
    expect(changeElement).toBeInTheDocument();
  });
});