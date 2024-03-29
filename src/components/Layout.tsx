import Header from '@components/Header'
interface Props {
  children: React.ReactNode
}
export default function Layout({ children }: Props) {
  return (
    <div className="w-full h-screen m-auto">
      <Header />
      {children}
    </div>
  )
}
