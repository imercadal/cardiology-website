import { Azeret_Mono, Cardo, Inter } from "next/font/google";
 
const azeretMono = Azeret_Mono({
    variable: "--font-azeret-mono",
    subsets: ["latin"],
});
  
const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"]
});
    

const cardoRegular = Cardo({ weight: '400', subsets: ['latin'] })
const cardoBold = Cardo({ weight: '700', subsets: ['latin']  })
 
export { azeretMono, inter, cardoRegular, cardoBold }