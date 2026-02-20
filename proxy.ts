import { NextRequest, NextResponse } from "next/server";

export async function proxy(request: NextRequest) {
  let accessToken = request.cookies.get("r3sonance_token");
  const baseurl =
    process.env.NODE_ENV == "production"
      ? "https://r3sonance-backend.pxxl.click/api/v1"
      : "http://127.0.0.1:8080/api/v1";

  if (!accessToken) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  try {
    let req = await fetch(`${baseurl}/users/profile`, {
      headers: {
        Authorization: `Bearer ${accessToken.value}`,
      },
    });

    if (req.status != 200) {
      throw new Error("unauthorized");
    }
    const data = await req.json();
    // console.log(data)
    
  } catch (error) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/compare/:path*", "/dashboard/:path*"],
};
