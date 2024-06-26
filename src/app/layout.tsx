 
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ProviderWrapper from "@/toolkit/ProviderWrapper";
import { AuthContextProvider } from "@/context/authContext";
import AdminAuth from "@/components/AdminAuth";
 
   
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
   

  return (
    <html lang="en">
      <body className={inter.className}>

       <AuthContextProvider>

       <ProviderWrapper>
       <AdminAuth>

        <Navbar/>
        {children}
        <Footer/>
        </AdminAuth>  
       </ProviderWrapper>
       </AuthContextProvider>
        
         </body>
    </html>
  );
}
