# Design Guidelines: Landing Page de Livro Infantil Cristão

## Design Approach
**Reference-Based Design**: Replicate the exact landing page provided in the screenshots with complete fidelity to the original design.

## Core Design Elements

### A. Color Palette

**Primary Colors:**
- Red (Urgency/Pricing): 0 84% 60% - for top banner and discount highlights
- Green (Primary CTA): 142 71% 45% - for main action buttons
- Blue (Icons/Accents): 217 91% 60% - for icons and section headers
- Orange (Secondary CTA): 25 95% 53% - for final conversion button

**Supporting Colors:**
- Yellow (Stars): 48 96% 53% - for testimonial ratings
- White: 0 0% 100% - main background
- Light Gray: 0 0% 98% - subtle section backgrounds
- Dark Text: 0 0% 20% - primary text color

### B. Typography

**Font Families:**
- Primary: 'Poppins' or 'Montserrat' via Google Fonts - for headings and important text
- Body: 'Open Sans' or 'Roboto' via Google Fonts - for body copy

**Text Hierarchy:**
- Hero Title: text-4xl md:text-5xl lg:text-6xl, font-bold
- Section Headers: text-3xl md:text-4xl, font-bold
- Card Titles: text-xl md:text-2xl, font-semibold
- Body Text: text-base md:text-lg
- CTA Buttons: text-lg md:text-xl, font-bold, uppercase

### C. Layout System

**Spacing Primitives:** Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent spacing (e.g., p-4, gap-8, mb-12, py-20)

**Container Structure:**
- Max width: max-w-7xl for content sections
- Padding: px-4 md:px-6 lg:px-8
- Sections: py-16 md:py-20 lg:py-24

### D. Component Library

**Top Price Banner:**
- Full-width red background (0 84% 60%)
- White text, bold, centered
- Strikethrough for original price
- Large emphasized discount price
- Sticky positioning optional

**Hero Section:**
- Two-column layout (lg:grid-cols-2)
- Left: Headline + subtext + green CTA button
- Right: Book illustration/mockup image
- White background

**Benefit Cards (Por Que Escolher):**
- 4-column grid (grid-cols-1 md:grid-cols-2 lg:grid-cols-4)
- White cards with shadow (shadow-lg)
- Blue circular icon backgrounds
- Icon + title + description
- Rounded corners (rounded-xl)

**Process Steps (Como Funciona):**
- 3-column grid (grid-cols-1 md:grid-cols-3)
- Numbered circles with blue backgrounds
- Title + description per step
- Icons for each step

**Chapter List Section:**
- Single column centered layout
- Checkmark icons in green
- List of chapters/content

**Target Audience Cards:**
- 3-column grid (grid-cols-1 md:grid-cols-3)
- Blue icon + title + description
- Light background cards

**Testimonials:**
- 3-column grid (grid-cols-1 md:grid-cols-3)
- White cards with shadow
- 5 yellow stars at top
- Quote text
- Name and relationship

**Pricing/CTA Section:**
- Centered content
- Large pricing display with strikethrough
- Orange CTA button (large, bold)
- Urgency text below

**FAQ Accordion:**
- Single column
- Expandable questions
- Plus/minus icons
- Border between items

**Footer:**
- Centered text
- Brand name "Quero Ser Como Jesus"
- Copyright notice
- Minimal styling

### E. Buttons & CTAs

**Primary Green Button:**
- Background: 142 71% 45%
- Text: White, bold, uppercase
- Padding: px-8 py-4
- Rounded: rounded-full
- Shadow: shadow-xl
- Hover: Slight scale and brightness increase

**Secondary Orange Button:**
- Background: 25 95% 53%
- Same styling as green button
- Used for final conversion CTA

### F. Images

**Hero Image:**
- Book cover or illustration mockup
- Positioned on right side of hero section
- Should show the book prominently
- Consider 3D mockup style if possible

**Icon Library:**
- Use Heroicons or Font Awesome for all icons
- Blue circular backgrounds for feature icons
- Checkmarks in green for lists
- Stars in yellow for ratings

## Key Design Principles

1. **High Contrast & Bold Colors**: Use vibrant reds, greens, oranges for CTAs and urgency elements
2. **Card-Based Layout**: Extensive use of white cards with shadows for content organization
3. **Family-Friendly Aesthetic**: Rounded corners, friendly colors, approachable typography
4. **Clear Visual Hierarchy**: Large headings, distinct sections, obvious CTAs
5. **Social Proof Emphasis**: Prominent testimonials with star ratings
6. **Conversion Focus**: Multiple CTAs throughout, pricing transparency, urgency indicators

## Animations

**Minimal animations only:**
- Subtle hover effects on buttons (scale: 1.05)
- Card hover: slight shadow increase
- No complex scroll animations

## Layout Notes

- Multi-column grids for features, steps, testimonials, and audience cards
- Single column for hero headline, pricing, and FAQs
- Responsive: Stack to single column on mobile
- Generous whitespace between sections
- Full-width sections with contained content