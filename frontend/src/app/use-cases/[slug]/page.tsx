import { permanentRedirect } from 'next/navigation';

// Stub route — no content exists yet. Permanently redirect to /services to prevent thin-content pages.
export default async function UseCaseDetailPage() {
  permanentRedirect('/services');
}
