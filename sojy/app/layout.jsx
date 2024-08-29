import '@/styles/globals.css';

export const metadata = {
  title: "Sojy",
  description: "This Website is designed to make you the greatest version of your self"
}

const Rootlayout = ({ children }) => {
  return (
    <html lang='en'>
      <body className='bg-gray-100'>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}

export default Rootlayout