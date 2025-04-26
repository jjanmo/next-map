import { Store } from '@/types/store'
import { swrKey } from '@constants/swr'
import useRandomStore from '@hooks/useRandomStore'
import { motion } from 'motion/react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import useSWR from 'swr'

const EmptyDetail = () => {
  const { data: stores } = useSWR<Store[]>(swrKey.stores)
  const { setRandomStore } = useRandomStore()

  const handleIconClick = () => {
    if (!stores) {
      return
    }

    setRandomStore()
  }

  return (
    <div className="relative flex flex-col items-center justify-center p-8 gap-6 h-full overflow-hidden">
      {/* 배경 패턴 */}
      <div className="absolute inset-0 z-0">
        {/* 기본 그라데이션 배경 */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50" />

        {/* 패턴 오버레이 */}
        <div className="absolute inset-0 opacity-10 bg-dot-pattern bg-dot-pattern-size bg-dot-pattern-position" />

        {/* 부드러운 그라데이션 오버레이 */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/80" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-24 h-24"
      >
        {/* 배경 원 */}
        <motion.div
          className="absolute inset-0 rounded-full bg-orange-100/80"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* 마커 아이콘 */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleIconClick}
        >
          <FaMapMarkerAlt size={40} color="#E37E2E" />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="relative z-10 text-center space-y-2"
      >
        <h2 className="text-2xl font-bold text-gray-800">맛집을 찾아보세요</h2>
        <p className="text-gray-600 max-w-sm">
          지도에서 마커를 선택하면
          <br />
          해당 가게의 상세 정보를 볼 수 있습니다
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="relative z-10 mt-4"
      >
        <motion.div
          className="flex items-center gap-2 text-sm text-gray-600 bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-sm"
          whileHover={{ x: 5 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <span className="text-orange-500">🍽️</span>
          <span>마커를 클릭하여 가게 정보 확인</span>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default EmptyDetail
