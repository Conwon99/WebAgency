# Ayrshire Domestic Cleaning Services

A modern, responsive website for Ayrshire Domestic Cleaning Services - a local domestic cleaning business serving Ayr and surrounding areas.

## Features

- **Modern Design**: Clean, professional design with the brand's teal-blue color scheme
- **Responsive**: Fully responsive design that works on all devices
- **SEO Optimized**: Proper meta tags, structured data, and sitemap
- **Contact Forms**: Easy-to-use contact forms with validation
- **Service Pages**: Detailed information about all cleaning services
- **Pricing**: Transparent pricing with clear disclaimers
- **Reviews**: Customer testimonials and Facebook integration
- **Gallery**: Before/after image showcase (placeholder ready)
- **Accessibility**: WCAG compliant with proper contrast and focus states

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
cd ayrshire-roof-design
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
│   ├── Pricing.tsx     # Pricing page
│   ├── Reviews.tsx     # Reviews page
│   ├── Gallery.tsx     # Gallery page
│   ├── Contact.tsx     # Contact page
│   └── Privacy.tsx     # Privacy policy
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
  "name": "Ayrshire Domestic Cleaning Services",
  "location": "Ayr, Scotland",
  "phone": "07354 194260",
  "phoneVerified": false,
  "facebookUrl": "https://www.facebook.com/p/Ayrshire-Domestic-Cleaning-Services-61552485193024/",
  "tagline": "Maintaining a clean and welcoming environment.",
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
- Detailed service descriptions
- What's included for each service
- Contact CTAs

### Pricing (/pricing)
- Pricing cards with "from" prices
- Service descriptions
- Important disclaimers
- Quote request CTAs

### Reviews (/reviews)
- Customer testimonials
- Star ratings
- Facebook page integration
- Service tags

### Gallery (/gallery)
- Before/after image grid
- Placeholder images ready for real photos
- Image categories and descriptions

### Contact (/contact)
- Contact form with validation
- Phone and Facebook contact options
- Service area information
- Why choose us section

### Privacy (/privacy)
- Comprehensive privacy policy
- GDPR compliance information
- Contact details for privacy inquiries

## Styling

The project uses a custom design system with Tailwind CSS:

### Colors
- Primary: `#1F7A8C` (teal-blue)
- Accent: `#F2C94C` (warm highlight)
- Text: `#0B1320` (dark text)
- Background: `#F7F9FC` (light background)
- Border: `#E6EDF3` (subtle borders)

### Typography
- Font: Inter (Google Fonts)
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

This project is private and proprietary to Ayrshire Domestic Cleaning Services.

## Support

For support or questions, contact the development team or the business owner.
