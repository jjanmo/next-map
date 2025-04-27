import Link from 'next/link'

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FDF7E9] p-4">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-[#E37E2E]">오우! 페이지를 찾을 수 없어요!</h1>

        <p className="text-lg text-gray-600">
          죄송합니다. 요청하신 페이지가 다른 맛집으로 이동했거나 삭제되었을 수 있어요.
        </p>

        <div>
          <Link
            href="/"
            className="px-6 py-2 bg-[#E37E2E] text-white rounded-full hover:bg-[#D16D1D] transition-colors"
          >
            홈으로 가기
          </Link>
        </div>

        <p className="text-sm text-gray-500 mt-8">맛있는 여정을 계속 이어가세요! 🍽️</p>
      </div>
    </div>
  )
}

export default NotFoundPage
