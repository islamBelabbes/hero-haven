import ResponsiveOnlyProvider from "@/providers/responsive-only-provider";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <ResponsiveOnlyProvider>{children}</ResponsiveOnlyProvider>;
}
