# Environment Variables Setup

The app uses web scraping to fetch UFC rankings directly from the official UFC website. No API key is required!

## Quick Start

The scraping functionality works automatically when deployed to Vercel. For local development, you have two options:

### Option 1: Use Mock Data (Recommended for Development)

Create a `.env` file in the root of the project:

```bash
# Use mock data instead of scraping (for development)
VITE_USE_MOCK_DATA=true
```

This will use placeholder data and doesn't require running the API server.

### Option 2: Run Local API Server

1. Install Vercel CLI (if not already installed):
```bash
npm i -g vercel
# or
bun add -g vercel
```

2. In a separate terminal, start the API server:
```bash
vercel dev
```

3. The API will be available at `http://localhost:3000/api/ufc-rankings`

4. Your `.env` file should have:
```bash
VITE_USE_MOCK_DATA=false
VITE_API_URL=http://localhost:3000
```

## Environment Variables

### For Development

```bash
# Use mock data instead of API (for development)
# Set to 'true' to use mock data, 'false' to use scraping
VITE_USE_MOCK_DATA=false

# Local API URL (only needed if running vercel dev)
VITE_API_URL=http://localhost:3000
```

### For Production

No environment variables are needed! The scraping function automatically works when deployed to Vercel.

## How It Works

1. **Frontend** calls `/api/ufc-rankings` endpoint
2. **Vercel Serverless Function** scrapes `https://www.ufc.com/rankings`
3. **Data** is parsed and returned in a structured format
4. **UI** displays the rankings

## Alternative: Using External APIs

If you prefer to use external APIs instead of scraping, you can configure:

```bash
# API Provider: 'scraping' (default), 'sportradar', or 'sportsflow'
VITE_API_PROVIDER=scraping

# API Base URL (for external APIs)
VITE_API_BASE_URL=

# API Key (for external APIs)
VITE_API_KEY=your_api_key_here
```

### API Providers

#### Sportradar MMA API
- **Website**: https://developer.sportradar.com/
- **Documentation**: https://www.postman.com/sportradar-media-apis/sportradar-media-apis/collection/cr3e5fe/sportradar-mma-v2
- **Features**: Rankings, schedules, live results, fighter profiles
- **Trial**: Available with registration

#### Sportsflow UFC API
- **Website**: https://www.sportsflow.xyz/
- **Features**: Real-time fight data, detailed statistics
- **Early Beta**: Special pricing available

## Important Notes

- The `.env` file is gitignored and will not be committed to the repository
- Environment variables must be prefixed with `VITE_` to be accessible in the frontend
- After changing environment variables, restart your dev server
- The scraping function respects the UFC website's robots.txt and terms of service
- Scraping may need updates if the UFC website structure changes
