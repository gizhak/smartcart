# Mister Charts - Initial Plan

## TODO

- [x] Review plan file
- [x] Inspect `package.json` and scripts
- [x] Start dev server
- [ ] Verify app loads in browser

## Project Overview
Create a web application that allows users to create beautiful animated charts and export them as GIFs or PNGs.

## Core Features
1. **Chart Editor** - Create and customize charts with multiple data points (terms)
2. **Chart Types** - Support different visualization styles (bars, circles, rectangles, donut)
3. **Animations** - Smooth animated transitions when previewing charts
4. **Export** - Download charts as animated GIF or static PNG
5. **Gallery** - Save charts locally and manage the collection

## Tech Stack
- React, TS, Zustand# SmartCart - Initial Plan

## Project Overview
An AI-powered home inventory and automatic grocery ordering system.
A camera monitors the fridge, detects missing products, and automatically
builds and places grocery orders based on the user's preferences.

## Core Features
1. **Dashboard** - Overview of inventory status and missing products
2. **Inventory** - Grid of all detected products with status
3. **Favorites** - Products that must always be in stock
4. **Smart Cart** - Auto-generated shopping cart with supermarket integration
5. **Order History** - Past orders and their status
6. **Settings** - Shopping schedule, camera management, supermarket connection

## Tech Stack
- React, TS, Zustand (state management)
- Google Vision API (product detection via camera)
- Node.js + Express (backend server)
- MongoDB (inventory, favorites, orders)
- Lucide icons

## Architecture (MVC)
```
src/
├── main.tsx                  # App entry
├── pages/
│   ├── DashboardPage.tsx     # Home - inventory overview
│   ├── InventoryPage.tsx     # All detected products
│   ├── FavoritesPage.tsx     # Must-have products
│   ├── SmartCartPage.tsx     # Auto-generated cart
│   ├── OrderHistoryPage.tsx  # Past orders
│   └── SettingsPage.tsx      # App configuration
├── cmps/
│   ├── AppHeader.tsx         # Logo, nav, notifications
│   ├── AppFooter.tsx         # Links, version
│   ├── ProductCard.tsx       # Single product display
│   ├── CartItem.tsx          # Single cart item
│   └── CameraUpload.tsx      # Camera / image upload
└── services/
    ├── vision.service.ts     # Google Vision API calls
    ├── inventory.service.ts  # Inventory CRUD operations
    ├── cart.service.ts       # Smart cart logic
    ├── order.service.ts      # Order management
    └── util.service.ts       # Helpers, formatters
```

## Data Models

### Product (detected by camera)
```typescript
{
  id: string,
  name: string,
  image: string,           // base64 or URL
  status: 'in_stock' | 'missing',
  location: 'fridge' | 'pantry' | 'trash',
  lastSeen: string,        // timestamp
  isFavorite: boolean
}
```

### Favorite
```typescript
{
  id: string,
  productName: string,
  minQuantity: number,
  currentQuantity: number
}
```

### Order
```typescript
{
  id: string,
  date: string,
  supermarket: 'rami_levy' | 'shufersal',
  items: Product[],
  totalAmount: number,
  status: 'pending' | 'approved' | 'completed'
}
```

## Development Phases
1. **Phase 1** - Frontend with mock data + Google Vision camera test
2. **Phase 2** - Node.js backend + MongoDB + connect to frontend
3. **Phase 3** - ESP32-WROVER camera hardware integration
4. **Phase 4** - Supermarket API integration (auto ordering)
- Canvas API for chart rendering
- gif.js library for GIF generation
- LocalStorage for data persistence
- Lucide icons 
C:\Users\User\שולחן העבודה\proj-chartush\plan\002-initial-proj.md
## Architecture (MVC)
```
js/
├── main.tsx            # App entry
├── pages/
│   ├── AboutPage.tsx   # About
│   └── HomePage.tsx    # Home
└── services/
    ├── chart.service.ts       # Chart data model
    ├── gallery.service.ts     # LocalStorage operations
    └── util.service.ts        # Colors, fonts, helpers
```

## Data Model

### Chart Object
```javascript
{
  type: 'circles',           // 'circles' | 'bars' | 'rectangles' | 'donut'
  title: 'Chart Title',
  style: {
    font: 'Arial',
    fontSize: '45px',
    backgroundColor: 'transparent'
  },
  valueType: 'value',        // 'value' | 'percent'
  terms: [
    { label: 'Item A', value: 42, color: '#a8d5e5' },
    { label: 'Item B', value: 58, color: '#7ec8e3' }
  ]
}
```

