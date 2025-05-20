import React from 'react'
import type { ReactNode } from 'react'
import Footer from 'src/components/Footer/Footer'

interface MainLayoutProps {
  children: ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="antialiased flex flex-col items-center">
      <div className="flex-1 w-full flex flex-col gap-20 items-center">
        <div className="flex-1 flex flex-col gap-20">{children}</div>
        <div className="bottom-0">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default MainLayout