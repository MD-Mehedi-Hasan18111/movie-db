import Header from "@/components/Header";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Movie DB",
  description: "Movie DB build by Next JS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="dark:bg-body bg-white font-[Sora] dark:text-white text-dark">
        <div>
          <Header />
          <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            <Sidebar />
            <div>{children}</div>
          </div>
          <Footer />
        </div>
        {/* <div id="modal-root-content" /> */}
      </body>
    </html>
  );
}
