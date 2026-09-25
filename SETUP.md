# Haruki Services - Setup Guide

## 🎨 Design Improvements Made

Your website has been upgraded with:
- ✨ **Smooth Animations** - Framer Motion animations on all interactive elements
- 🎯 **Rounded Boxes** - Modern rounded corners (rounded-2xl) with gradient borders
- 🌈 **Gradient UI** - Beautiful gradient backgrounds and text
- ⚡ **Hover Effects** - Interactive elements with scale and shadow effects
- 🎬 **Animated Blobs** - Floating animated backgrounds for visual interest
- 📱 **Responsive Design** - Works perfectly on all devices

## 🔐 Discord OAuth Setup

### Step 1: Create a Discord Application

1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Click "New Application"
3. Give it a name (e.g., "Haruki Services")
4. Accept the terms and create

### Step 2: Get Your Credentials

1. Go to the "OAuth2" tab
2. Copy your **Client ID** and **Client Secret**
3. Under "Redirects", add:
   - For Development: `http://localhost:3000/api/auth/discord/callback`
   - For Production: `https://yourdomain.com/api/auth/discord/callback`

### Step 3: Configure Environment Variables

1. Copy `.env.local.example` to `.env.local`
2. Fill in your Discord credentials:
   ```
   DISCORD_CLIENT_ID=your_client_id_here
   DISCORD_CLIENT_SECRET=your_client_secret_here
   DISCORD_REDIRECT_URI=http://localhost:3000/api/auth/discord/callback
   ```

### Step 4: Update Login URLs in Code

In `src/app/page.js`, update the `discordLoginUrl` variable:
```javascript
const discordLoginUrl = `https://discord.com/oauth2/authorize?client_id=${process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(process.env.NEXT_PUBLIC_DISCORD_REDIRECT_URI)}&scope=identify%20email%20guilds`;
```

To make this work, update `.env.local` to use `NEXT_PUBLIC_` prefix for public variables:
```
NEXT_PUBLIC_DISCORD_CLIENT_ID=your_client_id_here
DISCORD_CLIENT_SECRET=your_client_secret_here
NEXT_PUBLIC_DISCORD_REDIRECT_URI=http://localhost:3000/api/auth/discord/callback
```

## 🚀 Running the Project

```bash
# Install dependencies (already done)
npm install

# Run development server
npm run dev

# Build for production
npm build

# Start production server
npm start
```

Visit `http://localhost:3000` to see your updated website!

## 📁 Project Structure

```
src/
├── app/
│   ├── api/auth/discord/callback/route.js  # OAuth callback handler
│   ├── globals.css                         # Global styles & animations
│   ├── layout.js                           # Root layout
│   └── page.js                             # Main page with animations
├── lib/
│   └── auth.js                             # Discord OAuth utilities
```

## 🔄 Next Steps for Full Integration

After the basic setup works, implement:

1. **User Database** - Store Discord user info in MongoDB, Prisma, or your preferred database
2. **Session Management** - Use cookies or JWT tokens to maintain logged-in state
3. **Dashboard Page** - Create `/dashboard` page for authenticated users
4. **Discord Bot Integration** - Add your Discord bot commands
5. **Logout Functionality** - Clear sessions/cookies
6. **User Profiles** - Show Discord user info in dashboard

## 🎯 Features Included

- ✅ Animated hero section
- ✅ Smooth scrolling navigation
- ✅ Interactive service cards
- ✅ Gradient backgrounds with animations
- ✅ Mobile responsive menu
- ✅ Discord login button
- ✅ Modern glassmorphism effects
- ✅ Hover animations on buttons and cards

## 🐛 Troubleshooting

**OAuth button not working?**
- Make sure Discord app credentials are in `.env.local`
- Verify redirect URI matches exactly in Discord Developer Portal
- Check browser console for error messages

**Animations not showing?**
- Make sure framer-motion is installed: `npm install framer-motion`
- Clear browser cache (Ctrl+Shift+Delete)

## 📚 Resources

- [Framer Motion Docs](https://www.framer.com/motion/)
- [Discord OAuth Docs](https://discord.com/developers/docs/topics/oauth2)
- [Tailwind CSS](https://tailwindcss.com/)
- [Next.js Documentation](https://nextjs.org/docs)
