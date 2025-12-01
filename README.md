# MMA Ranks

A modern, sleek website for displaying current MMA rankings across all weight classes and organizations.

## Tech Stack

- **React** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Material UI (MUI)** - UI component library
- **Bun** - Package manager and runtime
- **Vercel** - Hosting platform

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed on your system
- (Optional) API key from Sportradar or Sportsflow for live UFC data

### Installation

```bash
# Install dependencies
bun install

# Configure environment variables (see ENV_SETUP.md)
# Create a .env file with your API credentials

# Start development server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview
```

### API Configuration

The app uses web scraping to fetch UFC rankings directly from the official UFC website (ufc.com/rankings). No API key is required!

**For Local Development:**
- The scraping runs via a Vercel serverless function
- To test locally, run `vercel dev` in a separate terminal to start the API server
- Or set `VITE_USE_MOCK_DATA=true` in your `.env` file to use mock data

**For Production:**
- The scraping function automatically works when deployed to Vercel
- No additional configuration needed

See [ENV_SETUP.md](./ENV_SETUP.md) for detailed instructions.

## Project Structure

```
/api
  - ufc-rankings.ts      # Vercel serverless function for scraping UFC rankings
/src
  /components
    - Header.tsx          # Site header/navigation
    - RankingsTable.tsx   # Rankings table component
    - LoadingSpinner.tsx  # Loading state component
    - ErrorAlert.tsx      # Error state component
  /pages
    - Home.tsx            # Homepage
    - UFC.tsx             # UFC rankings page
  /hooks
    - useUFCRankings.ts   # Custom hook for fetching UFC data
  /services
    - api.ts              # API service layer
  /types
    - index.ts            # TypeScript type definitions
  /theme
    - theme.ts            # Material UI theme configuration
  App.tsx                 # Main app component
  main.tsx                # Entry point
```

## Deployment

This project is configured for deployment on Vercel. The `vercel.json` file contains the necessary configuration for:

- Build command: `bun run build`
- Output directory: `dist`
- Framework: Vite
- SPA routing support

Simply connect your repository to Vercel and it will automatically detect the configuration.

## License

MIT
