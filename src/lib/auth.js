import { SignJWT, jwtVerify } from "jose";

// ADMIN_JWT_SECRET must be set as a Netlify environment variable. An empty key
// makes jose reject every sign/verify call, so a missing secret fails closed.
const secret = new TextEncoder().encode(process.env.ADMIN_JWT_SECRET ?? "");

export async function signToken(payload) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("7d")
    .sign(secret);
}

export async function verifyToken(token) {
  try {
    const { payload } = await jwtVerify(token, secret);
    return payload;
  } catch {
    return null;
  }
}
