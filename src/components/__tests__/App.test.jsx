import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../../App';


vi.mock('recharts', () => ({
  LineChart: ({ children }) => <div data-testid="line-chart">{children}</div>,
  Line: () => <div data-testid="line" />,
  XAxis: () => <div data-testid="x-axis" />,
  YAxis: () => <div data-testid="y-axis" />,
  CartesianGrid: () => <div data-testid="grid" />,
  Tooltip: () => <div data-testid="tooltip" />,
  ResponsiveContainer: ({ children }) => <div data-testid="responsive-container">{children}</div>,
  ReferenceLine: () => <div data-testid="reference-line" />
}));

describe('App Component', () => {
  it('renders the main dashboard title', () => {
    render(<App />);
    expect(screen.getByText('Mini BI Dashboard')).toBeInTheDocument();
  });

  it('displays all key metric cards', () => {
    render(<App />);
    
    expect(screen.getByText('Total Samples')).toBeInTheDocument();
    expect(screen.getAllByText('Avg. Processing Time')).toHaveLength(2);
    expect(screen.getByText('Active Laboratories')).toBeInTheDocument();
    expect(screen.getByText('Quality Score')).toBeInTheDocument();
  });

  it('displays the samples chart', () => {
    render(<App />);
    expect(screen.getByText('Samples per Day')).toBeInTheDocument();
    expect(screen.getByTestId('line-chart')).toBeInTheDocument();
  });

  it('displays data tables', () => {
    render(<App />);
    
    expect(screen.getByText('Breakdown by Location')).toBeInTheDocument();
    expect(screen.getByText('Breakdown by Sample Type')).toBeInTheDocument();
  });

  it('displays location data in the table', () => {
    render(<App />);
    
    expect(screen.getByText('North Laboratory')).toBeInTheDocument();
    expect(screen.getByText('South Laboratory')).toBeInTheDocument();
    expect(screen.getByText('East Laboratory')).toBeInTheDocument();
    expect(screen.getByText('West Laboratory')).toBeInTheDocument();
  });

  it('displays sample type data in the table', () => {
    render(<App />);
    
    expect(screen.getByText('Blood')).toBeInTheDocument();
    expect(screen.getByText('Urine')).toBeInTheDocument();
    expect(screen.getByText('Tissue')).toBeInTheDocument();
    expect(screen.getByText('Saliva')).toBeInTheDocument();
  });

  it('has accessible structure with headings', () => {
    render(<App />);
    
    expect(screen.getByText('Key Metrics', { selector: 'h2' })).toBeInTheDocument();
    expect(screen.getByText('Sample Trends', { selector: 'h2' })).toBeInTheDocument();
    expect(screen.getByText('Data Breakdown', { selector: 'h2' })).toBeInTheDocument();
  });

  it('renders the footer', () => {
    render(<App />);
    expect(screen.getByText(/Mini BI Dashboard - Built with React/)).toBeInTheDocument();
  });
});