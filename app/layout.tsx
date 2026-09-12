import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Made Arbi Parameswara — Data / ML Engineer",
  description:
    "Data & Machine Learning Engineer specializing in scalable data platforms, MLOps, and production AI systems. Experience at Mandiri Sekuritas and BPJS Kesehatan.",
  authors: [{ name: "Made Arbi Parameswara" }],
  keywords: [
    "Data Engineer",
    "Machine Learning Engineer",
    "MLOps",
    "Kubernetes",
    "GCP",
    "BigQuery",
    "Airflow",
    "Made Arbi Parameswara",
  ],
  openGraph: {
    title: "Made Arbi Parameswara — Data / ML Engineer",
    description:
      "Data & Machine Learning Engineer specializing in scalable data platforms, MLOps, and production AI systems.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Made Arbi Parameswara — Data / ML Engineer",
    description:
      "Data & Machine Learning Engineer specializing in scalable data platforms, MLOps, and production AI systems.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} h-full`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
