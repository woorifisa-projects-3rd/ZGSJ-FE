import "./globals.css";
import Navigation from "@/components/navigation/navigation";
import Header from "@/components/header/header";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="layout-container">
          
          <header className="header">
            <Header />
          </header>
          
          <aside className="sidebar">
             <Navigation />
          </aside>
          
          <div className="main">
            {children}  
          </div>

        </div>
      </body>
    </html>
  );
}
