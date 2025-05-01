/* eslint-disable @typescript-eslint/no-unused-vars */
// lib/auth.ts

// Update this to match your API URL
const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

/**
 * Attempts to login a user with the provided credentials
 */
export async function login(username: string, password: string) {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
      credentials: "include", // Important for cookies
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Login failed");
    }

    const data = await response.json();
    return { success: true, data };
    
  } catch (error) {

    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

/**
 * Checks if the user is currently authenticated
 */
export async function checkAuthentication(): Promise<boolean> {
  try {
    const response = await fetch(`${API_URL}/auth/isAuthenticated`, {
      method: "POST",
      // This is critical for cookies to be sent
      credentials: "include",
    });

    if (response.ok) {
      return true;
    } else {
      //   window.alert("Pls login first!");
      return false;
    }
  } catch (error) {
    console.error("Error checking authentication:", error);
    return false;
  }
}

/**
 * Logs out the current user
 */
export async function logout(): Promise<boolean> {
  try {
    const response = await fetch(`${API_URL}/auth/logout`, {
      method: "POST",
      credentials: "include",
    });

    if (response.ok) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    // console.error("Error during logout:", error);
    return false;
  }
}
