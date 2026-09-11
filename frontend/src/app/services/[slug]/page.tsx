import Navbar from '../../components/Navbar';

const SERVICE_DATA: Record<string, { title: string; icon: string; description: string; features: string[]; platforms?: string[] }> = {
  'content-removal': {
    title: 'Content Removal',
    icon: '🗑️',
    description: 'We remove unauthorized, harmful, and infringing content from websites, social media platforms, and search engines quickly and legally.',
    features: ['TikTok Content Removal', 'Mugshot Removal & Suppression', 'BBB Review Removal', 'Facebook Review Removal', 'Instagram Content Removal', 'Twitter / X Content Removal', 'Fake Review Removal', 'Google Review Removal', 'Yelp Review Removal', 'Trustpilot Review Removal', 'Ripoff Report Removal', 'Indeed Review Removal', 'Travel & Hospitality Review Removal'],
    platforms: ['Google', 'Facebook', 'Instagram', 'Twitter/X', 'TikTok', 'Trustpilot', 'BBB', 'Yelp', 'Indeed', 'Ripoff Report'],
  },
  'dating-reputation': {
    title: 'Dating Reputation',
    icon: '🔥',
    description: 'Protect your personal reputation by removing leaked photos, private content, and dating site profiles across the internet.',
    features: ['Leaked Photo Removal', 'Private Content Takedown', 'Dating Site Profile Removal', 'Adult Content Removal', 'OnlyFans Leaked Content Removal', 'Reddit Post Removal', 'Telegram Content Removal', 'Discord Content Removal'],
    platforms: ['OnlyFans', 'Reddit', 'Telegram', 'Discord', 'Dating Sites'],
  },
  'search-result-cleanup': {
    title: 'Search Result Cleanup',
    icon: '🔍',
    description: 'Remove negative, harmful, or outdated links from Google, Bing, and other search engines through DMCA and de-indexing services.',
    features: ['Google Search Suppression', 'Bing Content Removal', 'Negative Link Removal', 'De-Indexing Service', 'Autocomplete Cleanup', 'Knowledge Panel Management', 'News Article Suppression', 'Mugshot De-Indexing'],
    platforms: ['Google', 'Bing', 'Yahoo', 'DuckDuckGo'],
  },
  'job-reputation': {
    title: 'Job Reputation',
    icon: '👤',
    description: 'Protect your professional reputation by removing defamatory employer reviews and cleaning up your digital career profile.',
    features: ['Glassdoor Review Removal', 'Indeed Review Management', 'LinkedIn Defamation Removal', 'Employment History Cleanup', 'Professional Profile Protection', 'Employer Review Removal', 'Background Check Cleanup', 'Career Reputation Management'],
    platforms: ['Glassdoor', 'Indeed', 'LinkedIn'],
  },
  'monitoring-alerts': {
    title: 'Monitoring & Alerts',
    icon: '📊',
    description: 'Our AI-powered monitoring system continuously scans the internet 24/7 to detect threats to your brand and content before they spread.',
    features: ['AI-Powered Brand Monitoring', 'Real-time Infringement Detection', 'Social Media Monitoring', 'Dark Web Monitoring', '24/7 Content Alerts', 'Trademark Monitoring', 'Review Alert System', 'Competitor Monitoring'],
    platforms: ['Social Media', 'Search Engines', 'Review Sites', 'Dark Web'],
  },
  'reputation-management': {
    title: 'Reputation Management',
    icon: '⭐',
    description: 'Safeguard and improve your online reputation using legal, ethical, and platform-compliant strategies that deliver lasting results.',
    features: ['Online Reputation Management (ORM)', 'Defamatory Content Removal', 'Negative Article Suppression', 'Search Result Reputation Cleanup', 'Brand Image Restoration', 'Crisis Management', 'Review Management & Rating Improvement', 'Long-term Reputation Monitoring'],
    platforms: ['Google', 'Yelp', 'Trustpilot', 'Facebook', 'News Sites'],
  },
  'reputation-audit': {
    title: 'Reputation Audit',
    icon: '📋',
    description: 'Get a comprehensive overview of your current online reputation with a detailed audit report and actionable remediation plan.',
    features: ['Full Brand Reputation Audit', 'Search Engine Audit', 'Social Media Profile Audit', 'Review & Rating Audit', 'Content Threat Analysis', 'Competitive Reputation Benchmarking', 'Legal Risk Assessment', 'Free Case Evaluation'],
  },
  'industries': {
    title: 'Industries We Serve',
    icon: '🏢',
    description: 'Our services are built for anyone whose digital work, brand, or reputation has value worth protecting across all industries.',
    features: ['Content Creators & Influencers', 'E-Commerce Brands', 'Healthcare & Medical Professionals', 'Legal & Law Firms', 'Real Estate Professionals', 'Restaurants & Hospitality', 'Educators & Online Coaches', 'Enterprises & Corporations'],
  },
  // Individual service slugs
  'copyright-protection': { title: 'Copyright Protection', icon: '©️', description: 'We detect and remove stolen or unauthorized use of your content across websites, search engines, and social media platforms.', features: ['Website copyright takedowns', 'Google & Bing DMCA removals', 'Image, video, and text protection', 'Search engine de-indexing'] },
  'ai-brand-monitoring': { title: 'AI Brand Monitoring', icon: '🤖', description: 'Our AI-assisted monitoring system continuously scans the internet for copyright violations, brand misuse, leaked content, and reputation threats.', features: ['Real-time infringement detection', 'Similarity & pattern matching', 'Early threat alerts', 'AI + human verification'] },
  'intellectual-property-protection': { title: 'Intellectual Property Protection', icon: '🛡️', description: 'Protect your brand from impersonation, counterfeiting, and misuse across digital platforms.', features: ['Fake profile & impersonation removal', 'Trademark monitoring', 'Anti-counterfeiting enforcement', 'Brand misuse detection'] },
  'leaked-content-removal': { title: 'Leaked Content Removal', icon: '🔐', description: 'We help remove leaked, private, and subscription-based content from unauthorized sources.', features: ['Leaked OnlyFans content removal', 'Private & premium content protection', 'Adult content takedowns', 'Rapid response enforcement'] },
  'online-reputation-management': { title: 'Online Reputation Management', icon: '⭐', description: 'Safeguard and improve your online reputation using legal, ethical, and platform-compliant strategies.', features: ['Defamatory & harmful content removal', 'Negative article suppression', 'Search result reputation cleanup', 'Long-term reputation monitoring'] },
  'review-management': { title: 'Review Management', icon: '📝', description: 'We help businesses manage, protect, and improve their online reviews across platforms.', features: ['Removal of fake, spam, or policy-violating reviews', 'Review dispute & reporting support', 'AI-based review monitoring & alerts', 'Positive review growth strategies'] },
  'article-blog-removal': { title: 'Article & Blog Removal', icon: '📰', description: 'Remove plagiarized, scraped, or unauthorized articles published without your consent.', features: ['Blog & news site removals', 'Copyright article takedowns', 'Duplicate content handling'] },
  'application-protection': { title: 'Application Protection', icon: '📱', description: 'Protect mobile apps, software, and digital products from piracy and illegal distribution.', features: ['App store infringement removals', 'Pirated software takedowns', 'E-learning content protection'] },
  'legal-support-case-evaluation': { title: 'Legal Support & Case Evaluation', icon: '⚖️', description: 'Expert guidance for complex copyright, trademark, reputation, and privacy cases.', features: ['Free case evaluation', 'Hosting provider & platform coordination', 'Legal-compliant enforcement support'] },
  'facebook-takedowns': { title: 'Facebook Takedowns', icon: '📘', description: 'Removal of unauthorized posts, impersonation accounts, and infringing content on Facebook.', features: ['Unauthorized post removal', 'Impersonation account removal', 'Infringing content takedown'] },
  'instagram-takedowns': { title: 'Instagram Takedowns', icon: '📷', description: 'Comprehensive protection against unauthorized accounts and stolen content on Instagram.', features: ['Stolen content removal', 'Fake account takedown', 'DMCA notices on Instagram'] },
  'twitter-takedowns': { title: 'Twitter/X Takedowns', icon: '🐦', description: 'Deletion of defamatory tweets, leaked content, and copyright violations on Twitter/X platform.', features: ['Defamatory tweet removal', 'Leaked content takedown', 'Copyright violation notices'] },
};

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICE_DATA[slug];

  if (!service) {
    const title = slug.split('-').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    return (
      <div style={{ minHeight: '100vh', background: '#080e1c', color: '#f4f6fb', fontFamily: 'sans-serif' }}>
        <Navbar />
        <div style={{ paddingTop: '120px', textAlign: 'center', padding: '120px 24px' }}>
          <h1 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '16px' }}>{title}</h1>
          <p style={{ color: '#a9b3c9', marginBottom: '32px' }}>Expert {title.toLowerCase()} services to protect your brand and digital assets.</p>
          <a href="/contact" style={{ background: '#e0ac2f', color: '#12100a', fontWeight: 700, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none' }}>Get Started</a>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: '#080e1c', color: '#f4f6fb', fontFamily: 'sans-serif' }}>
      <Navbar />

      {/* Hero */}
      <div style={{ paddingTop: '100px', padding: '100px 24px 60px', maxWidth: '900px', margin: '0 auto' }}>
        <a href="/services" style={{ color: '#e0ac2f', textDecoration: 'none', fontSize: '14px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '32px' }}>
          ← Back to All Services
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '24px' }}>
          <div style={{ background: 'rgba(224,172,47,0.1)', border: '1px solid rgba(224,172,47,0.3)', borderRadius: '16px', width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '30px' }}>
            {service.icon}
          </div>
          <div>
            <p style={{ fontSize: '11px', fontWeight: 700, color: '#e0ac2f', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 8px' }}>RepuKeel Service</p>
            <h1 style={{ fontSize: 'clamp(26px,4vw,42px)', fontWeight: 900, margin: 0 }}>{service.title}</h1>
          </div>
        </div>

        <p style={{ fontSize: '16px', color: '#a9b3c9', lineHeight: 1.7, marginBottom: '36px', maxWidth: '700px' }}>
          {service.description}
        </p>

        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '60px' }}>
          <a href="/contact" style={{ background: '#e0ac2f', color: '#12100a', fontWeight: 700, fontSize: '14px', padding: '13px 28px', borderRadius: '8px', textDecoration: 'none' }}>
            Get Protected Now
          </a>
          <a href="/contact" style={{ background: 'transparent', border: '2px solid #22304d', color: '#f4f6fb', fontWeight: 700, fontSize: '14px', padding: '13px 28px', borderRadius: '8px', textDecoration: 'none' }}>
            Request Free Analysis
          </a>
        </div>

        {/* Features */}
        <div style={{ background: '#0c1526', border: '1px solid #22304d', borderRadius: '16px', padding: '36px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '24px', color: '#e0ac2f' }}>What&apos;s Included</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '14px' }}>
            {service.features.map((feature, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 16px', background: '#16223c', borderRadius: '10px', border: '1px solid #22304d' }}>
                <div style={{ width: '22px', height: '22px', background: 'rgba(224,172,47,0.15)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#e0ac2f" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                </div>
                <span style={{ fontSize: '13px', fontWeight: 500 }}>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Platforms */}
        {service.platforms && (
          <div style={{ marginTop: '32px', background: '#0c1526', border: '1px solid #22304d', borderRadius: '16px', padding: '36px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '20px' }}>Platforms We Cover</h2>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {service.platforms.map((platform, i) => (
                <span key={i} style={{ padding: '8px 16px', background: 'rgba(224,172,47,0.08)', border: '1px solid rgba(224,172,47,0.25)', borderRadius: '20px', fontSize: '13px', fontWeight: 600, color: '#e0ac2f' }}>
                  {platform}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div style={{ marginTop: '48px', background: 'linear-gradient(135deg, #16223c, #0c1526)', border: '1px solid #22304d', borderRadius: '16px', padding: '48px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '26px', fontWeight: 800, marginBottom: '12px' }}>Ready to protect yourself?</h2>
          <p style={{ color: '#a9b3c9', marginBottom: '28px', fontSize: '14px' }}>Contact our team today for a free case evaluation and fast action.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <a href="/contact" style={{ background: '#e0ac2f', color: '#12100a', fontWeight: 700, fontSize: '14px', padding: '13px 28px', borderRadius: '8px', textDecoration: 'none' }}>
              Contact Us Now
            </a>
            <a href="/pricing" style={{ background: 'transparent', border: '2px solid #22304d', color: '#f4f6fb', fontWeight: 700, fontSize: '14px', padding: '13px 28px', borderRadius: '8px', textDecoration: 'none' }}>
              View Pricing
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
