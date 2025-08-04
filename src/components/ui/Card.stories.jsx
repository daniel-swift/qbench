import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './Card';
import { Button } from './Button';

export default {
  title: 'UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Basic = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>
          This is a description that provides additional context about the card content.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-secondary-600">
          This is the main content area of the card. You can put any content here,
          including forms, lists, or other components.
        </p>
      </CardContent>
      <CardFooter className="justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Save</Button>
      </CardFooter>
    </Card>
  ),
};

export const WithoutFooter = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Simple Card</CardTitle>
        <CardDescription>
          A card without a footer section.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p className="text-sm text-secondary-600">
            This card demonstrates the flexibility of the card component.
          </p>
          <ul className="text-sm text-secondary-600 list-disc list-inside">
            <li>Reusable design</li>
            <li>Flexible content slots</li>
            <li>Consistent styling</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  ),
};

export const ContentOnly = {
  render: () => (
    <Card className="w-96">
      <CardContent className="pt-6">
        <div className="text-center">
          <h3 className="text-lg font-semibold">Minimal Card</h3>
          <p className="text-sm text-secondary-600 mt-2">
            This card only uses the content section for a cleaner look.
          </p>
        </div>
      </CardContent>
    </Card>
  ),
};

export const MetricCard = {
  render: () => (
    <Card className="w-80">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-secondary-600">
          Total Revenue
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">$45,231.89</div>
        <p className="text-xs text-secondary-500 mt-1">
          +20.1% from last month
        </p>
      </CardContent>
    </Card>
  ),
};