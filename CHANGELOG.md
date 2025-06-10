# Changelog

All notable changes and progress for the ApexSwitch frontend project will be documented in this file.

## [Unreleased]
- Project setup and changelog initialized.
- Added wallet page (`/dashboard/wallet`) with balance display, quick actions, and recent transactions table.
- Updated routing and sidebar navigation for wallet feature.

---

_Continue to update this file as you make progress or changes._


### Fixed

- Resolved "Cannot find name 'navigate'" error in `WalletPage.tsx` by importing and initializing `useNavigate`.

### Added

- Created new page <mcfile name="TvSubscriptionsPage.tsx" path="src/pages/TvSubscriptionsPage.tsx"></mcfile> for TV Subscriptions.
- Created new page <mcfile name="InternetServicesPage.tsx" path="src/pages/InternetServicesPage.tsx"></mcfile> for Internet Services.
- Added routes for TV Subscriptions (`/dashboard/services/tv-subscriptions`) and Internet Services (`/dashboard/services/internet-services`) in <mcfile name="App.tsx" path="src/App.tsx"></mcfile>.

- Implemented navigation for feature cards in <mcfile name="FeaturesSection.tsx" path="src/components/FeaturesSection.tsx"></mcfile>. Each card now redirects to its respective service page (e.g., `/airtime`, `/data`, `/electricity`, `/tv-subscriptions`, `/internet-services`, `/wallet`) upon click using `useNavigate`.

- Implemented navigation for the "Get Started" button in <mcfile name="HeroSection.tsx" path="src/components/HeroSection.tsx"></mcfile> to redirect to the `/register` route.
- Implemented navigation for the "Login" button in <mcfile name="HeroSection.tsx" path="src/components/HeroSection.tsx"></mcfile> to redirect to the `/login` route using `useNavigate`.
- Added network selection dropdown to Data Bundle page (<mcfile name="DataPage.tsx" path="c:\Users\ABU-UMAR\Desktop\ApexSwitch\ApexSwitch-frontend(web)\src\pages\DataPage.tsx"></mcfile>).
- Implemented a dedicated "Fund Wallet" page (`FundWalletPage.tsx`) accessible via `/dashboard/fund-wallet`.
- Updated the "Fund Wallet" button in `WalletPage.tsx` to navigate to the new funding page.
- Designed the "Fund Wallet" page (`FundWalletPage.tsx`) with options for Bank Transfer, Card Payment, and QR Code, along with an amount input field.
- Airtime Page: Implemented a dedicated page for airtime top-up at `/dashboard/services/airtime`.
- Data Page: Implemented a dedicated page for data bundle purchase at `/dashboard/services/data`.
- Electricity Page: Implemented a dedicated page for electricity bill payment at `/dashboard/services/electricity`.
- Routing: Added new routes in `App.tsx` for `/dashboard/services/airtime`, `/dashboard/services/data`, and `/dashboard/services/electricity` to render the respective components.

- User Dashboard: Made quick service cards clickable and linked them to their respective service pages (Airtime, Data, Electricity, Wallet).