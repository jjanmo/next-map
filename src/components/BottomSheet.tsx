import { IoIosArrowUp } from 'react-icons/io'

const BottomSheet = () => {
  return (
    <div className="flex flex-col z-[101] absolute bottom-0 left-0 w-full py-2 px-3 bg-white rounded-t-3xl border-t-[1px]">
      <div className="flex justify-center items-center animate-bounce">
        <IoIosArrowUp size={20} color="#E37E2E" />
      </div>

      <div className="w-full text-left">매장을 선택해주세요</div>
    </div>
  )
}

export default BottomSheet
