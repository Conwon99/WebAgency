# CodaPixel - Web Design & SEO Agency

A modern, responsive website for CodaPixel - a professional web design and SEO agency serving businesses across the UK, Ireland, North America, and beyond.

## Features

- **Modern Design**: Clean, professional design with performance-optimized animations
- **Responsive**: Fully responsive design that works on all devices
- **SEO Optimized**: Proper meta tags, structured data, sitemap, and security headers
- **Performance**: WebP images, lazy loading, code splitting, and optimized JavaScript
- **Service Pages**: Detailed information about web design and SEO services
- **Location Pages**: Dynamic location-specific pages for better local SEO
- **Portfolio**: Showcase of client projects and results
- **Reviews**: Customer testimonials and Google reviews
- **Accessibility**: WCAG compliant with proper ARIA labels and semantic HTML

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Shadcn/ui components
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd sparkles-copy
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Shadcn/ui components
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Site footer
│   ├── Hero.tsx        # Homepage hero section
│   └── ContactBar.tsx  # Mobile contact bar
├── pages/              # Page components
│   ├── Index.tsx       # Homepage
│   ├── Services.tsx    # Services page
│   ├── Reviews.tsx     # Reviews page
│   ├── Gallery.tsx     # Portfolio page
│   ├── Contact.tsx     # Contact page
│   ├── Privacy.tsx     # Privacy policy
│   ├── Locations.tsx   # Locations index
│   └── Location*.tsx   # Location-specific pages
├── hooks/              # Custom React hooks
│   └── useBusiness.ts  # Business data hook
├── lib/                # Utility functions
│   └── analytics.ts    # Analytics tracking
├── content/            # Content and data
│   └── business.json   # Business information
└── App.tsx             # Main app component
```

## Configuration

### Business Information

Update business details in `src/content/business.json`:

```json
{
  "name": "CodaPixel",
  "location": "Ayr, United Kingdom",
  "phone": "+44 7792 145328",
  "phoneVerified": false,
  "email": "dorward.connor@gmail.com",
  "tagline": "Web design and local SEO that generate clients.",
  "services": [...],
  "pricing": [...]
}
```

### SEO Configuration

Update SEO settings in `index.html`:
- Title and meta description
- Open Graph tags
- Twitter Card tags
- Structured data (JSON-LD)

## Pages

### Home (/)
- Hero section with main value proposition
- Trust indicators
- Service teasers
- Call-to-action buttons

### Services (/services)
- Web Design in a Day (£79/month)
- Custom Website (£249 starting from)
- SEO & Paid Ads (£299/month)
- Detailed service descriptions
- Contact CTAs

### Reviews (/reviews)
- Customer testimonials
- Google reviews integration
- Star ratings
- Service tags

### Portfolio (/gallery)
- Real client project showcases
- WebP optimized images
- Project categories and descriptions

### Locations (/locations)
- UK regions (Scotland, England, Ireland, Wales)
- North America coverage
- Dynamic location-specific pages for local SEO

### Contact (/contact)
- Calendly booking integration
- Phone and WhatsApp contact options
- Fast response guarantee

### Privacy (/privacy)
- Comprehensive privacy policy
- GDPR compliance information
- Contact details for privacy inquiries

## Styling

The project uses a custom design system with Tailwind CSS:

### Colors
- Primary: `#3b82f6` (blue)
- Background: `#eae6e8` (off-white)
- Text: Dark grays
- CTA: Blue gradient

### Typography
- Primary Font: Figtree (Google Fonts)
- Display Font: THICCCBOI (custom TTF)
- Responsive text sizing
- Proper line heights and spacing

## Analytics

Basic analytics tracking is implemented in `src/lib/analytics.ts`:
- CTA click tracking
- Page view tracking
- Form submission tracking

## Deployment

The site is configured for deployment on Netlify with:
- `netlify.toml` configuration
- Proper redirects
- Build settings

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is private and proprietary to CodaPixel.

## Support

For support or questions, contact the development team or the business owner.

---

## Keyword Discovery (Agency)

### 50 Local-Intent Keywords for CodaPixel

| Intent Type | Keyword | Priority | Target Page |
|------------|---------|----------|-------------|
| **Emergency** | website broken ayr | High | Home/Contact |
| **Emergency** | urgent website fix ayr | High | Home/Contact |
| **Emergency** | website down ayr | High | Home/Contact |
| **Emergency** | hack recovery ayr | High | Home/Contact |
| **Emergency** | restore website ayr | Medium | Home/Contact |
| **Service** | web design ayr | Highest | Homepage |
| **Service** | local SEO ayr | Highest | Homepage |
| **Service** | website design ayr | Highest | Homepage |
| **Service** | SEO services ayr | High | Services |
| **Service** | Google Business Profile optimization ayr | High | Services |
| **Service** | landing page design ayr | High | Services |
| **Service** | conversion optimization ayr | High | Services |
| **Service** | website speed optimization ayr | Medium | Services |
| **Service** | web design prestwick | High | Homepage |
| **Service** | web design troon | High | Homepage |
| **Service** | local SEO glasgow | Medium | Homepage |
| **Service** | web design kilmarnock | Medium | Homepage |
| **Service** | web design irvine | Medium | Homepage |
| **Problem** | website not showing on google ayr | High | Blog/Services |
| **Problem** | site slow ayr | High | Blog/Services |
| **Problem** | low website traffic ayr | High | Blog/Services |
| **Problem** | no leads from website ayr | High | Blog/Services |
| **Problem** | GBP suspended ayr | High | Blog/Services |
| **Problem** | website not mobile friendly ayr | Medium | Blog/Services |
| **Problem** | poor google rankings ayr | Medium | Blog/Services |
| **Local** | best web design agency ayr | High | Homepage |
| **Local** | web designer near me ayr | High | Homepage |
| **Local** | local SEO specialist ayr | High | Homepage |
| **Local** | affordable web design ayr | Medium | Homepage |
| **Local** | small business website ayr | Medium | Homepage |
| **Local** | web design ayrshire | Medium | Homepage |
| **Commercial Research** | web design cost ayr | High | Pricing |
| **Commercial Research** | SEO pricing ayr | High | Pricing |
| **Commercial Research** | website maintenance cost ayr | Medium | Pricing |
| **Commercial Research** | monthly website hosting ayr | Medium | Pricing |
| **Commercial Research** | website redesign cost ayr | Medium | Pricing |

### Keyword Map

| Page | Primary Keywords | Secondary Keywords | Content Focus |
|------|-----------------|-------------------|---------------|
| **Homepage** | web design ayr, local SEO ayr | best web design agency ayr, web designer near me ayr, web design prestwick, web design troon | Core value proposition, service overview, trust signals |
| **Services** | SEO services ayr, Google Business Profile optimization | landing page design ayr, conversion optimization ayr, website speed optimization ayr | Individual service details, expertise, case studies |
| **Pricing** | web design cost ayr, SEO pricing ayr | website maintenance cost ayr, monthly website hosting ayr | Transparent pricing, ROI, value demonstration |
| **Contact** | urgent website fix ayr, website broken ayr | hack recovery ayr, restore website ayr | Quick response, availability, consultation booking |
| **Gallery/Portfolio** | web design projects ayr, website examples ayr | affordable web design ayr, small business website ayr | Visual proof, diverse industries, conversion results |
| **Blog** | website not showing on google ayr, GBP suspended ayr | site slow ayr, no leads from website ayr, poor rankings ayr | Educational content, problem-solving, authority building |
