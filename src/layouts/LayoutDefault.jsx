import Navbar from '../components/Navbar'

export default function LayoutDefault({ children }) {
  return (
    <>
      <Navbar />
      <div className="container">
        {children}
      </div>
    </>
  )
}
