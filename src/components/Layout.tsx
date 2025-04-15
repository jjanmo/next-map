import Sidebar from './Sidebar'

interface Props {
  children: React.ReactNode
}
export default function Layout({ children }: Props) {
  return (
    <div className="relative w-screen h-screen bg-slate-100">
      <Sidebar />
      {children}
    </div>
  )
}
