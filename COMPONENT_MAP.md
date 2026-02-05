# Component & Section Map (Node 26769:2727)

This map correlates Figma layers to code components/sections.

## Global Layout
- **Desktop**: Frame `26652:15` (1440px width)
- **Tablet**: Frame `26761:2404` (768px width)
- **Mobile**: Frame `26761:2907` (360px width)

## Sections (Vertical Order)

| Section Name In Figma | Figma ID (Desktop) | Code ID/Class | HTML Element |
|-----------------------|--------------------|---------------|--------------|
| **Hero** | `26634:25` | `#hero` | `<section class="section-hero">` |
| **Top Nav** | `26762:3041` | `nav` | `<nav>` |
| **Mpovement Section** | `26649:2` | `#impovement` | `<section>` (Placeholder/Image?) |
| **Prices** | `26652:1500` | `#prices` | `<section>` |
| **Amenities** | `26681:2730` | `#amenities` | `<section>` |
| **Plan** | `26660:5647` | `#floor-plans` | `<section>` |
| **Galary** | `26668:5924` | `#gallery` | `<section>` |
| **2nd Last Section** | `26802:2728` | `#specs-location` | `<section>` (Contains Specs & Location) |
| **Footer** | `26668:23103` | `footer` | `<footer>` |

## Overlay Components

| Component Name | Figma ID | Code Implementation |
|----------------|----------|---------------------|
| **Lead Form Overlay** | `26681:1797` | `#lead-overlay` / `<dialog>` |

## Reusable Components

| Component | Variants | Code Path |
|-----------|----------|-----------|
| **Primary Button** | Hover states | `.btn-primary` |
| **Form Input** | Default, Focus | `.input-field` |
| **Feature Card** | Hover effects | `.card-feature` |
| **Gallery Card** | Tilted, Straight | `#gallery-container` (Custom) |

## Assets Checklist
- [ ] Hero Background (Desktop/Tab/Mob)
- [ ] Floating Image Card
- [ ] Mpovement Section Image
- [ ] Price Section Background
- [ ] Floor Plan Images
- [ ] Gallery Images
- [ ] Icons (Amenities, Specs, Socials)
