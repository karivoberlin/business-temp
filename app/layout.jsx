import "./globals.css";

export const metadata = {
  title: "KARIVO 2.0 | Websites, die im Kopf bleiben",
  description: "KARIVO entwickelt hochwertige Websites für Unternehmen, die online professioneller wirken und mehr Anfragen gewinnen wollen.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
