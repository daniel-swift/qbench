# Mini BI Dashboard

A modern, responsive Business Intelligence dashboard built with React and JavaScript, featuring a comprehensive design system and accessibility-first approach.

![Dashboard Preview](https://via.placeholder.com/800x600/3b82f6/ffffff?text=Mini+BI+Dashboard)

## 🚀 Quick Start

### Prerequisites

- Node.js 16.0 or higher
- npm or yarn package manager

### Installation & Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:5173
```

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run test         # Run unit tests
npm run test:ui      # Run tests with UI
npm run storybook    # Start Storybook development server
npm run build-storybook  # Build Storybook for production
```

## 🏗️ Architecture & Design Decisions

### Component Architecture

The dashboard follows a modular component architecture with clear separation of concerns:

- **UI Components**: Reusable, design-token-based components (`/src/components/ui/`)
- **Dashboard Components**: Specialized components for BI functionality (`/src/components/`)
- **Data Layer**: Mock data and utilities (`/src/data/`, `/src/lib/`)

### Design System

#### Design Tokens
A comprehensive design token system ensures consistency across the application:

- **Colors**: Primary, secondary, success, warning, error palettes
- **Typography**: Font sizes, weights, and line heights
- **Spacing**: Consistent spacing scale (xs to 3xl)
- **Border Radius**: Standardized corner radii
- **Shadows**: Card and hover shadows

```javascript
// Example design tokens usage
const colors = {
  primary: { 500: '#3b82f6', 600: '#2563eb' },
  secondary: { 500: '#64748b', 600: '#475569' }
};
```

#### Component Design Principles

1. **Composability**: Components are designed to work together seamlessly
2. **Flexibility**: Props-based customization without breaking the design system
3. **Accessibility**: ARIA labels, keyboard navigation, and screen reader support
4. **Consistency**: Unified styling through design tokens

### Technology Stack

- **React 18**: Modern React with hooks and functional components
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **Recharts**: Accessible and responsive charting library
- **Vitest**: Fast unit testing framework
- **Storybook**: Component development and documentation
- **Lucide React**: Modern icon library

## 📊 Dashboard Features

### Key Metrics Cards
- Real-time KPI display with trend indicators
- Color-coded change indicators (green: positive, red: negative, gray: neutral)
- Accessible trend descriptions for screen readers

### Interactive Chart
- Line chart showing samples per day with target reference line
- Responsive design that adapts to different screen sizes
- Accessible tooltips and keyboard navigation

### Data Tables
- Sortable columns for data exploration
- Status indicators with color coding
- Responsive design with horizontal scrolling on mobile

### Date Range Picker
- Accessible date selection with keyboard navigation
- Visual feedback for selected ranges
- Form validation and error handling

## 🎨 Design System Components

### Core UI Components

#### Button
```jsx
<Button variant="primary" size="md" onClick={handleClick}>
  Click me
</Button>
```

Variants: `primary`, `secondary`, `outline`, `ghost`
Sizes: `sm`, `md`, `lg`

#### Card
```jsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content goes here</CardContent>
</Card>
```

#### Input
```jsx
<Input
  label="Email"
  type="email"
  placeholder="Enter your email"
  required
  error={errors.email}
/>
```

### Dashboard Components

- **MetricCard**: KPI display with trend indicators
- **SamplesChart**: Line chart with target reference
- **DataTable**: Sortable data presentation
- **DateRangePicker**: Accessible date selection

## ♿ Accessibility Features

### ARIA Implementation
- Comprehensive ARIA labels for all interactive elements
- `role` attributes for complex components (tables, dialogs)
- `aria-expanded`, `aria-haspopup` for disclosure widgets

### Keyboard Navigation
- Full keyboard support for all interactive elements
- Logical tab order throughout the application
- Escape key handling for modal/dropdown components

### Screen Reader Support
- Descriptive alt text and labels
- Live regions for dynamic content updates
- Semantic HTML structure with proper headings

### Visual Accessibility
- High contrast color ratios (WCAG AA compliant)
- Focus indicators for keyboard users
- Responsive design that works at 200% zoom

## 🧪 Testing Strategy

### Unit Testing
- **Button Component**: Variant rendering, event handling, accessibility
- **MetricCard Component**: Data display, trend indicators, ARIA labels
- **App Integration**: Full dashboard rendering and interaction

### Test Coverage
```bash
# Run tests with coverage
npm run test -- --coverage
```

### Storybook Testing
- Visual regression testing through Storybook
- Component interaction testing
- Accessibility testing with addon-a11y

## 📱 Responsive Design

The dashboard is fully responsive with breakpoints:

- **Mobile**: 320px - 767px (single column layout)
- **Tablet**: 768px - 1023px (2-column grid)
- **Desktop**: 1024px+ (4-column grid for metrics)

### Responsive Features
- Flexible grid layouts using CSS Grid and Flexbox
- Adaptive typography and spacing
- Touch-friendly interactive elements
- Horizontal scrolling for data tables on mobile

## 🛠️ Development Workflow

### Component Development
1. Design component API and props
2. Implement with design tokens
3. Add accessibility features
4. Write unit tests
5. Create Storybook stories
6. Document usage examples

### Code Quality
- ESLint configuration for code consistency
- Prettier for code formatting
- Git hooks for pre-commit validation

## 🚧 Future Improvements

### With More Time, I Would Add:

#### Enhanced Features
- **Real-time Data**: WebSocket integration for live updates
- **Advanced Filtering**: Multi-dimensional data filtering
- **Export Functionality**: PDF/Excel export capabilities
- **User Preferences**: Customizable dashboard layouts
- **Dark Mode**: Complete dark theme implementation

#### Technical Improvements
- **Performance**: Virtual scrolling for large datasets
- **Caching**: React Query for data caching and synchronization
- **Internationalization**: Multi-language support
- **Progressive Web App**: Offline functionality and mobile app features

#### Enhanced Testing
- **E2E Testing**: Playwright or Cypress integration
- **Visual Regression**: Automated screenshot testing
- **Performance Testing**: Core Web Vitals monitoring
- **Accessibility Auditing**: Automated a11y testing in CI/CD

#### Advanced Visualizations
- **Interactive Charts**: Drill-down capabilities and brushing
- **Dashboard Builder**: Drag-and-drop dashboard customization
- **Advanced Analytics**: Statistical analysis and forecasting
- **Data Exploration**: Interactive data discovery tools

## 🤖 AI Tool Usage

This project leveraged AI assistance for:

- **Code Structure**: Initial component architecture planning
- **Design Tokens**: Color palette and spacing system generation
- **Test Cases**: Comprehensive test scenario identification
- **Documentation**: README structure and content organization
- **Accessibility**: ARIA implementation best practices

All AI-generated code was reviewed, customized, and enhanced to meet project requirements and best practices.

## 📄 License

MIT License - feel free to use this project as a foundation for your own BI dashboards.

## 🤝 Contributing

Contributions are welcome! Please read the contributing guidelines and submit pull requests for any improvements.

---

Built with ❤️ using React, Tailwind CSS, and modern web development best practices.