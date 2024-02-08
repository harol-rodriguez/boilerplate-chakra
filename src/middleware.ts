import { chain } from '@/shared/middlewares/chain'
import { withMiddleware1 } from '@/shared/middlewares/middleware1'
import { withAuthMiddleware } from '@/shared/middlewares/auth-middleware'

export default chain([withMiddleware1, withAuthMiddleware])

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}