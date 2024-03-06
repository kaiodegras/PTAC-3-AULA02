import Menu from "./componentes/Menu";
import Footer from "./componentes/footer";



export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Menu/>
        {children}
        <Footer/>
      </body>
      
    </html>
  )
}
