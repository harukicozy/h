export async function POST(request) {
  const { email, password } = await request.json();

  // Basic validation
  if (!email || !password) {
    return new Response(
      JSON.stringify({ error: "Email and password are required" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return new Response(
      JSON.stringify({ error: "Invalid email format" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  // Validate password length
  if (password.length < 6) {
    return new Response(
      JSON.stringify({ error: "Password must be at least 6 characters" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  try {
    // TODO: In production:
    // 1. Hash the password with bcrypt
    // 2. Store user in database
    // 3. Create a session/JWT token
    // 4. Set secure HTTP-only cookie
    // 5. Verify email (send confirmation email)

    // For now, just create a session
    const response = new Response(
      JSON.stringify({
        success: true,
        message: "Login successful",
        user: {
          email: email,
          id: Buffer.from(email).toString('base64'), // temp user ID
        },
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );

    // Set a simple session cookie (in production, make this more secure)
    response.cookies.set({
      name: "user_email",
      value: email,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return response;
  } catch (error) {
    console.error("Login error:", error);
    return new Response(
      JSON.stringify({ error: "An error occurred during login" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
