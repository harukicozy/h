import { exchangeCodeForToken, getDiscordUser } from "@/lib/auth";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  const state = searchParams.get("state");

  if (!code) {
    return new Response("Missing authorization code", { status: 400 });
  }

  try {
    // Exchange code for access token
    const tokenData = await exchangeCodeForToken(code);

    // Get user info from Discord
    const user = await getDiscordUser(tokenData.access_token);

    // TODO: Store user info in your database
    // TODO: Create a session or JWT token
    // TODO: Set a secure cookie with the auth token

    // For now, redirect to dashboard with user info
    // In production, you should:
    // 1. Store the user in your database
    // 2. Create a session/JWT
    // 3. Set secure cookies
    // 4. Redirect to dashboard

    return new Response(
      JSON.stringify({
        success: true,
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
          avatar: user.avatar,
        },
        message: "Successfully logged in with Discord! Set up your session/cookies here.",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Discord OAuth error:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: "Failed to authenticate with Discord",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
