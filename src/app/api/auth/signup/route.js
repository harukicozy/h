import bcrypt from 'bcryptjs';
import { query, initializeDatabase } from '@/lib/db';

export async function POST(request) {
  try {
    // Initialize database on first request
    await initializeDatabase();

    const { email, password, username } = await request.json();

    // Validation
    if (!email || !password) {
      return new Response(
        JSON.stringify({ error: "Email and password are required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email format" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    if (password.length < 6) {
      return new Response(
        JSON.stringify({ error: "Password must be at least 6 characters" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Check if user already exists
    const existingUser = await query(
      'SELECT * FROM users WHERE email = $1',
      [email]
    );

    if (existingUser.rows.length > 0) {
      return new Response(
        JSON.stringify({ error: "Email already registered" }),
        { status: 409, headers: { "Content-Type": "application/json" } }
      );
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const result = await query(
      'INSERT INTO users (email, password, username) VALUES ($1, $2, $3) RETURNING id, email, username',
      [email, hashedPassword, username || email.split('@')[0]]
    );

    const user = result.rows[0];

    // Create session
    const response = new Response(
      JSON.stringify({
        success: true,
        message: "Account created successfully!",
        user: {
          id: user.id,
          email: user.email,
          username: user.username,
        },
      }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );

    // Set session cookie
    response.cookies.set({
      name: "user_id",
      value: String(user.id),
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    response.cookies.set({
      name: "user_email",
      value: user.email,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return response;
  } catch (error) {
    console.error("Signup error:", error);
    return new Response(
      JSON.stringify({ error: "An error occurred during signup" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
