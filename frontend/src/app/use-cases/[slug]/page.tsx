import { redirect } from 'next/navigation';

// Stub route — no content exists yet. Redirect to /services to prevent thin-content pages.
export default async function UseCaseDetailPage() {
  redirect('/services');
}
