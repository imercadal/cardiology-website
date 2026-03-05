import { Azeret_Mono, Cardo, Inter } from "next/font/google";
 
const azeretMono = Azeret_Mono({
    variable: "--font-azeret-mono",
    subsets: ["latin"],
});
  
const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"]
});

const cardo = Cardo({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-cardo' })


 
export { azeretMono, inter, cardo }
