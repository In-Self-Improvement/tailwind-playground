import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'

export default function ProfileCard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        {/* 네비게이션 */}
        <div className="mb-8">
          <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium">
            ← 홈으로
          </Link>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">프로젝트 1: 개인 프로필 카드</h1>
          <p className="text-gray-600">기본적인 레이아웃과 스타일링을 연습해보세요</p>
        </div>

        {/* 완성 예시 */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">📋 완성 예시</h2>
          <div className="flex justify-center">
            <Card className="w-80 bg-white shadow-xl rounded-2xl overflow-hidden">
              <div className="h-32 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <CardContent className="p-6 text-center relative">
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto -mt-12 mb-4 border-4 border-white shadow-lg flex items-center justify-center text-2xl font-bold text-gray-600">
                  👤
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">김태일</h3>
                <p className="text-gray-600 mb-4">Frontend Developer</p>
                <p className="text-sm text-gray-500 mb-6">
                  React와 TypeScript를 사랑하는 개발자입니다. 
                  사용자 경험을 중시하며 깔끔한 코드 작성을 지향합니다.
                </p>
                <div className="flex justify-center space-x-4">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                    Follow
                  </button>
                  <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors">
                    Message
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* 학습 포인트 */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 text-green-700">🎯 학습 목표</h3>
            <ul className="space-y-2 text-sm">
              <li>• <strong>레이아웃:</strong> flexbox, positioning 연습</li>
              <li>• <strong>색상:</strong> gradient, hover 상태</li>
              <li>• <strong>간격:</strong> padding, margin, spacing</li>
              <li>• <strong>타이포그래피:</strong> 폰트 크기, 굵기</li>
              <li>• <strong>그림자:</strong> shadow 효과</li>
              <li>• <strong>둥근 모서리:</strong> rounded 클래스</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 text-blue-700">💡 핵심 클래스</h3>
            <div className="space-y-2 text-sm font-mono bg-gray-50 p-4 rounded">
              <div>bg-gradient-to-r from-purple-500 to-pink-500</div>
              <div>w-24 h-24 rounded-full</div>
              <div>shadow-xl border-4 border-white</div>
              <div>hover:bg-blue-600 transition-colors</div>
              <div>text-center space-x-4</div>
            </div>
          </Card>
        </div>

        {/* 단계별 가이드 */}
        <Card className="p-6 mb-8">
          <h3 className="text-lg font-semibold mb-4">📝 단계별 만들기 가이드</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-medium">1단계: 기본 카드 구조</h4>
              <p className="text-sm text-gray-600">Card 컴포넌트와 기본 레이아웃 설정</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-medium">2단계: 헤더 배경</h4>
              <p className="text-sm text-gray-600">그라디언트 배경과 높이 설정</p>
            </div>
            <div className="border-l-4 border-yellow-500 pl-4">
              <h4 className="font-medium">3단계: 프로필 이미지</h4>
              <p className="text-sm text-gray-600">원형 이미지와 포지셔닝</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-medium">4단계: 텍스트 정보</h4>
              <p className="text-sm text-gray-600">이름, 직책, 소개글 스타일링</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h4 className="font-medium">5단계: 액션 버튼</h4>
              <p className="text-sm text-gray-600">버튼 스타일과 호버 효과</p>
            </div>
          </div>
        </div>

        {/* 도전 과제 */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4 text-orange-700">🚀 도전 과제</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">레벨 1</h4>
              <p className="text-sm">다른 색상 조합으로 변경해보기</p>
            </div>
            <div className="bg-orange-100 p-4 rounded-lg">
              <h4 className="font-medium mb-2">레벨 2</h4>
              <p className="text-sm">소셜 미디어 아이콘 추가하기</p>
            </div>
            <div className="bg-orange-200 p-4 rounded-lg">
              <h4 className="font-medium mb-2">레벨 3</h4>
              <p className="text-sm">여러 카드를 grid로 배치하기</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
} 