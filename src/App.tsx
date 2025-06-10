
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import WalletPage from "./pages/WalletPage";
import TransactionPage from "./pages/TransactionPage";
import SettingsPage from "./pages/SettingsPage";
import SupportPage from "@/pages/SupportPage";
import ServicesPage from "@/pages/ServicesPage";
import AirtimePage from "@/pages/AirtimePage";
import DataPage from "@/pages/DataPage";
import ElectricityPage from "@/pages/ElectricityPage";
import FundWalletPage from "./pages/FundWalletPage";
import TvSubscriptionsPage from "./pages/TvSubscriptionsPage";
import InternetServicesPage from "./pages/InternetServicesPage";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<UserDashboard />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/dashboard/wallet" element={<WalletPage />} />
            <Route path="/dashboard/transactions" element={<TransactionPage />} />
            <Route path="/dashboard/settings" element={<SettingsPage />} />
            <Route path="/dashboard/support" element={<SupportPage />} />
            <Route path="/dashboard/services" element={<ServicesPage />} />
            <Route path="/dashboard/services/airtime" element={<AirtimePage />} />
            <Route path="/dashboard/services/data" element={<DataPage />} />
            <Route path="/dashboard/services/electricity" element={<ElectricityPage />} />
            <Route path="/dashboard/fund-wallet" element={<FundWalletPage />} />
            <Route path="/dashboard/services/tv-subscriptions" element={<TvSubscriptionsPage />} />
            <Route path="/dashboard/services/internet-services" element={<InternetServicesPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
