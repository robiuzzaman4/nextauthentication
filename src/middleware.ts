import NextAuth from "next-auth";
import authConfig from "@/auth.config";
import {
  API_AUTH_PREFIX,
  AUTH_ROUTES,
  DEFAULT_LOGIN_REDIRECT,
  PUBLIC_ROUTES,
} from "@/routes";

const { auth } = NextAuth(authConfig);

export default auth(async (req) => {
  const { nextUrl } = req;

  // check is logged in or not
  const isLoggedIn = !!req.auth;

  // find current route
  const isApiAuthRoute = nextUrl.pathname.startsWith(API_AUTH_PREFIX);
  const isAuthRoute = AUTH_ROUTES.includes(nextUrl.pathname);
  const isPublicRoute = PUBLIC_ROUTES.includes(nextUrl.pathname);

  // if the route is '/api/auth' then allow user to access this route.
  if (isApiAuthRoute) return;

  // if the route is auth route ('/login' or '/register'), and user is logged in then redirect to 'DEFAULT_LOGIN_REDIRECT' route. otherwise allow the user to access this route.
  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }

    return;
  }

  // if the user is not logged in and route is not a public route then redirect to '/' page
  if (!isLoggedIn && !isPublicRoute) {
    return Response.redirect(new URL("/", nextUrl));
  }

  // OPTIONAL - this logic for only ssr and csr example no need to use in yours.
  // if route === '/dashboard' then redirect to '/dashboard/ssr' page
  if (nextUrl.pathname === "/dashboard") {
    return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
  }

  // this return means default doing nothing
  return;
});

// route mathcher [note: collected from 'https://clerk.com/docs/quickstarts/nextjs#add-clerk-middleware-to-your-app']
export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
