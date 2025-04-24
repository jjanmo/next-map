import { forwardRef, PropsWithChildren, useCallback, useImperativeHandle, useState } from 'react'
import { FiArrowRight } from 'react-icons/fi'

export interface DrawerRef {
  drawerOpen: () => void
  drawerClose: () => void
}

const Drawer = forwardRef<DrawerRef, PropsWithChildren>(({ children }, ref) => {
  const [isActive, setIsActive] = useState(false)

  const classes = {
    active:
      'absolute top-0 left-[63px] w-[390px] h-screen bg-white border-[#E37E2E] border-x-[1px] transition-all z-10 ease-linear',
    inactive:
      'absolute top-0 left-[-327px] w-[390px] h-screen bg-white transition-all z-10 ease-linear',
  }

  const handleDrawrToggle = useCallback(() => {
    setIsActive((prev) => !prev)
  }, [])

  useImperativeHandle(
    ref,
    () => {
      return {
        drawerOpen: () => setIsActive(true),
        drawerClose: () => setIsActive(false),
      }
    },
    []
  )

  return (
    <div className={classes[isActive ? 'active' : 'inactive']}>
      {children}

      <div
        className="absolute top-1/2 translate-y-[-50%] -right-[32px] w-8 h-14 flex justify-center items-center bg-[#FDF7E9] rounded-r-lg border-[1px] border-[#E37E2E] cursor-pointer"
        onClick={handleDrawrToggle}
      >
        <FiArrowRight color="#E37E2E" size={18} />
      </div>
    </div>
  )
})

Drawer.displayName = 'Drawer'

export default Drawer
