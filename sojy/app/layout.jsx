import Navbar from '@/components/Navbar';
import '@/styles/globals.css';

export const metadata = {
  title: "Sojy",
  description: "This Website is designed to make you the greatest version of your self"
}

const Rootlayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}

export default Rootlayout