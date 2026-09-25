export async function GET() {
  const clientId = process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID;
  const redirectUri = process.env.NEXT_PUBLIC_DISCORD_REDIRECT_URI;

  if (!clientId || !redirectUri) {
    return new Response(
      JSON.stringify({ error: "Discord credentials not configured" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  const discordAuthUrl = `https://discord.com/oauth2/authorize?client_id=${clientId}&response_type=code&redirect_uri=${encodeURIComponent(redirectUri)}&scope=identify%20email%20guilds`;

  return new Response(
    JSON.stringify({ url: discordAuthUrl }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
}
