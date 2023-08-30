import { Bricolage_Grotesque, Dela_Gothic_One } from "next/font/google";
import "@/app/globals.css";

export const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: "400",
  variable: "--bricolage-grotesque",
});

export const delaGothicOne = Dela_Gothic_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--dela-gothic-one",
});