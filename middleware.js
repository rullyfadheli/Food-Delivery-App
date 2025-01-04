import { updateSession } from "@/utils/supabase/middleware";
import { createClient } from "./utils/supabase/server";

export async function middleware(request) {
  const session = await updateSession(request);

  const supabase = await createClient();
  const user = await supabase.auth.getUser();
  console.log(user);

  // Check if user is not authenticated
  if (!user) {
    // Redirect to login page
    return Response.redirect(new URL("/login", request.url));
  }

  return session;
}

export const config = {
  matcher: ["/profile", "/bag"],
};
