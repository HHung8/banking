export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <main>
    <h1>SIDEBAR</h1>
     {children}
    <h1>FOOTER</h1>  
    </main>;
}
