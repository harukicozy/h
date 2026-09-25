// Discord OAuth Configuration
// Replace these with your actual Discord application credentials
export const discordConfig = {
  clientId: process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID || "YOUR_CLIENT_ID",
  clientSecret: process.env.DISCORD_CLIENT_SECRET || "YOUR_CLIENT_SECRET",
  redirectUri: process.env.NEXT_PUBLIC_DISCORD_REDIRECT_URI || "http://localhost:3000/api/auth/discord/callback",
};

export const discordAuthUrl = `https://discord.com/oauth2/authorize?client_id=${discordConfig.clientId}&response_type=code&redirect_uri=${encodeURIComponent(discordConfig.redirectUri)}&scope=identify%20email%20guilds`;

// Function to exchange code for access token
export async function exchangeCodeForToken(code) {
  try {
    const response = await fetch("https://discord.com/api/oauth2/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        client_id: discordConfig.clientId,
        client_secret: discordConfig.clientSecret,
        grant_type: "authorization_code",
        code: code,
        redirect_uri: discordConfig.redirectUri,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to exchange code for token");
    }

    return await response.json();
  } catch (error) {
    console.error("Error exchanging code for token:", error);
    throw error;
  }
}

// Function to get user info from Discord
export async function getDiscordUser(accessToken) {
  try {
    const response = await fetch("https://discord.com/api/users/@me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch user info");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching user info:", error);
    throw error;
  }
}
