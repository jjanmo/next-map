import { forwardRef, PropsWithChildren, useCallback, useImperativeHandle, useState } from 'react'
import { FiArrowRight } from 'react-icons/fi'
import { DrawerRef } from '@/types/store'

const Drawer = forwardRef<DrawerRef, PropsWithChildren>(({ children }, ref) => {
  const [isActive, setIsActive] = useState(false)

  const classes = {
    active:
      'absolute top-0 left-[63px] w-[390px] h-screen bg-white border-[#E37E2E] border-x-[1px] transition-all z-10 ease-linear',
    inactive:
      'absolute top-0 left-[-327px] w-[390px] h-screen bg-white transition-all z-10 ease-linear',
  }

  const handleRightArrowClick = useCallback(() => {
    setIsActive(!isActive)
  }, [isActive])

  useImperativeHandle(
    ref,
    () => {
      return {
        toggle: handleRightArrowClick,
      }
    },
    [handleRightArrowClick]
  )

  return (
    <div className={classes[isActive ? 'active' : 'inactive']}>
      {children}

      <div
        className="absolute top-1/2 translate-y-[-50%] -right-[32px] w-8 h-14 flex justify-center items-center bg-[#FDF7E9] rounded-r-lg border-[1px] border-[#E37E2E] cursor-pointer"
        onClick={handleRightArrowClick}
      >
        <FiArrowRight color="#E37E2E" size={18} />
      </div>
    </div>
  )
})

Drawer.displayName = 'Drawer'

export default Drawer
