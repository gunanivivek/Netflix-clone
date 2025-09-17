import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import { useAppSelector } from "@/hooks/useAppSelector"

const Layout = () => {
  const { user } = useAppSelector((state) => state.auth)

  return (
    <>
      {!user ? (
        <div className="relative">
          {/* Background image */}
          <div
            className="fixed inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/IN-en-20250901-TRIFECTA-perspective_48d84d4e-9558-46b8-a0f3-8b2dc8478431_small.jpg')`,
            }}
          >
            <div className="absolute inset-0 bg-black/70"></div>
          </div>

          {/* Foreground */}
          <div className="relative z-10">
            <Header />
            <main>
              <Outlet />
            </main>
          </div>
        </div>
      ) : (
        <div className="relative">
          {/* Foreground */}
          <div className="relative z-10">
            <Header />
            <main>
              <Outlet />
            </main>
          </div>
        </div>
      )}
    </>
  )
}

export default Layout
