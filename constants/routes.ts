export type ReturnToSearchParam = {
  returnTo?: string
}

export const Route = {
  // FrontPage: () => `/`, Commented out until we have tender-list as a front page
  HomePage: () => `/home`,
  ForgotPassword: () => `/forgot-password`,
  BrandProfile: () => `/brand-profile`,
  VenueProfile: () => `/venue-profile`,
}
