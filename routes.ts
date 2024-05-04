/** An array of accessible routes w/o auth */

export const publicRoutes = [
    "/"
]

/** Also accessible, but if authed, will redirect to /settings */

export const authRoutes = [
    "/auth/login",
    "/auth/register"
]

export const apiAuthPrefix = "/api/auth"

export const DEFAULT_LOGIN_REDIRECT = "/settings"