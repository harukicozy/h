# PostgreSQL Setup Guide

## Option 1: Local PostgreSQL (For Development)

### On Windows:
1. Download PostgreSQL: https://www.postgresql.org/download/windows/
2. Install with default settings
3. Remember the password for `postgres` user
4. Open pgAdmin (comes with PostgreSQL)
5. Create a new database:
   - Right-click "Databases" → Create → Database
   - Name: `haruki_services`
6. Get your connection string:
   ```
   DATABASE_URL=postgresql://postgres:your_password@localhost:5432/haruki_services
   ```

### On Mac:
```bash
brew install postgresql@15
brew services start postgresql@15
createdb haruki_services
```

### On Linux:
```bash
sudo apt-get install postgresql
sudo -u postgres createdb haruki_services
```

## Option 2: Free Cloud Database

### Railway (Recommended - Easiest)
1. Go to https://railway.app
2. Sign up with GitHub
3. Create new project → PostgreSQL
4. Copy the connection string
5. Paste into `.env.local` as `DATABASE_URL`

### Render
1. Go to https://render.com
2. Create new PostgreSQL database
3. Copy connection string
4. Paste into `.env.local` as `DATABASE_URL`

### Vercel Postgres (Best for Vercel)
1. Go to https://vercel.com/storage/postgres
2. Create database
3. Copy connection string
4. Paste into `.env.local` as `DATABASE_URL`

## Testing Your Connection

Once you have DATABASE_URL set:
1. Start the dev server: `npm run dev`
2. Go to http://localhost:3000
3. Click "Email Login" → "Create Account"
4. Fill in details and submit
5. If it works, your database is connected! ✅

## Environment Variable Format

```
DATABASE_URL=postgresql://username:password@host:port/database_name
```

Example:
```
DATABASE_URL=postgresql://postgres:mypassword123@localhost:5432/haruki_services
```

## Production Deployment

When deploying to Vercel:
1. Add DATABASE_URL to Vercel Environment Variables
2. Use a free cloud database (Railway, Render, Vercel Postgres)
3. Never hardcode credentials
4. Use `postgresql+psycopg2://` for some providers

## Troubleshooting

**"ECONNREFUSED" error?**
- Database isn't running
- Check if PostgreSQL service is started
- Verify DATABASE_URL is correct

**"table users does not exist"?**
- This is normal on first run
- The table is created automatically when you try to signup
- Check your database is running

**Connection timeout?**
- Add to .env: `DATABASE_URL="...?sslmode=require"`
- For Render and other cloud databases
