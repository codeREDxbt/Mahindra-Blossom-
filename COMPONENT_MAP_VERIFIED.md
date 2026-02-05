# Component & Section Catalog (Verified via MCP)

## Section Render Order (Vertical Y-Axis)

1.  **Top Nav** (`26762:3041`) - Fixed/Sticky Header
2.  **Hero** (`26634:25`)
3.  **About** (`26649:2`) - *Formerly 'Mpovement'*
4.  **Prices** (`26652:1500`)
5.  **Amenities** (`26681:2730`)
6.  **Floor Plans** (`26660:5647`)
7.  **Gallery** (`26668:5924`)
8.  **Specifications & Location** (`26802:2728`)
9.  **Footer** (`26668:23103`)

## Component Inventory

### Reusable Primitives
- **Cards (Amenities/Hover)**: Instances found in `Frame 32`, `Frame 28` inside Amenities.
- **Specs Cards**: Frame `1707335187` etc. inside Specifications.
- **Buttons**: (Implied in Hero/Form) - *Note: Inspect `26647:1473` for button styles.*

### Complex Components
- **Lead Form Overlay**: Frame `Frame 1707335183` (in Hero context or global).
- **Navigation Pills**: Inside Top Nav instance.
- **Gallery Grid**: Frame `26668:5924` / `images`.

## Assets Required
- **Hero BG**: `Rectangle 16` (`26595:899`)
- **About Texture**: Background of `26649:2`
- **Gallery Images**: All children of `26668:23694`
- **Maps/Location**: `Rectangle 864` (`26802:3968`)

