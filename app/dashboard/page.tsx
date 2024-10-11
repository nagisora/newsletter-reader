import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Upload Newsletter</CardTitle>
            <CardDescription>Upload a new .eml file to read</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="newsletter-file">Newsletter File (.eml)</Label>
                <Input id="newsletter-file" type="file" accept=".eml" />
              </div>
              <Button>Upload</Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Newsletters</CardTitle>
            <CardDescription>Your recently read newsletters</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside">
              <li>Newsletter 1</li>
              <li>Newsletter 2</li>
              <li>Newsletter 3</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Reading Progress</CardTitle>
            <CardDescription>Your overall reading progress</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">75%</div>
            <p className="text-sm text-muted-foreground">3 out of 4 newsletters read</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}