import type { NextAuthConfig } from 'next-auth'
export default {
  providers: [],
  callbacks: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    authorized: ({ request, auth }: any) => {
      const protectedPaths = [
        /\/chat(\/.*)?/,
      ]
      const { pathname } = request.nextUrl
      if (protectedPaths.some((path) => pathname.match(path))) return !!auth
      return true
    },
  },
} satisfies NextAuthConfig
