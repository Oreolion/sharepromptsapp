import Nav from "@/components/Nav";
import "../styles/global.css";
import Provider from "@/components/Provider";

export const metadata = {
  title: "Promptopia App",
  description: "Discover and Share AI Prompts.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient"></div>
          </div>
          <main className="app">
            <Nav></Nav>
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
