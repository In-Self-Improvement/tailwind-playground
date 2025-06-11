import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const pricingPlans = [
  {
    name: "스타터",
    price: "무료",
    period: "",
    description: "개인 학습용",
    features: [
      "기본 컴포넌트 5개",
      "커뮤니티 지원",
      "문서 접근",
      "개인 프로젝트 1개",
    ],
    buttonText: "시작하기",
    buttonStyle: "outline",
    popular: false,
  },
  {
    name: "프로",
    price: "29,000원",
    period: "/월",
    description: "전문 개발자용",
    features: [
      "모든 컴포넌트",
      "우선 지원",
      "고급 템플릿",
      "무제한 프로젝트",
      "팀 협업 기능",
    ],
    buttonText: "프로 시작하기",
    buttonStyle: "default",
    popular: true,
  },
  {
    name: "팀",
    price: "79,000원",
    period: "/월",
    description: "팀 및 기업용",
    features: [
      "프로 플랜 모든 기능",
      "팀 관리 도구",
      "전용 지원",
      "맞춤 컴포넌트",
      "온보딩 지원",
    ],
    buttonText: "팀으로 시작하기",
    buttonStyle: "outline",
    popular: false,
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* 네비게이션 */}
        <div className="mb-8">
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            ← 홈으로
          </Link>
        </div>

        {/* 헤더 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            프로젝트 3: 요금제 페이지
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            완벽한 플랜을 선택하고 시작해보세요
          </p>
          <div className="flex justify-center items-center space-x-4 text-sm">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
              ✓ 14일 무료 체험
            </span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
              ✓ 언제든 취소 가능
            </span>
          </div>
        </div>

        {/* 가격표 */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <Card
              key={plan.name}
              className={`relative overflow-hidden transition-all duration-300 hover:scale-105 ${
                plan.popular
                  ? "border-2 border-blue-500 shadow-2xl ring-4 ring-blue-100"
                  : "border border-gray-200 shadow-lg hover:shadow-xl"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-1 -right-1">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 text-sm font-medium transform rotate-12 origin-center">
                    인기!
                  </div>
                </div>
              )}

              <CardHeader
                className={`text-center p-6 ${
                  plan.popular
                    ? "bg-gradient-to-r from-blue-50 to-purple-50"
                    : "bg-white"
                }`}
              >
                <CardTitle className="text-2xl font-bold text-gray-900">
                  {plan.name}
                </CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                <p className="text-gray-600 mt-2">{plan.description}</p>
              </CardHeader>

              <CardContent className="p-6">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.buttonStyle as "default" | "outline"}
                  className={`w-full py-3 font-medium ${
                    plan.popular
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : ""
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ 섹션 */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-bold text-center mb-8">
            자주 묻는 질문
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-2">
                언제든지 플랜을 변경할 수 있나요?
              </h3>
              <p className="text-gray-600 text-sm">
                네, 언제든지 업그레이드하거나 다운그레이드할 수 있습니다.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">환불 정책은 어떻게 되나요?</h3>
              <p className="text-gray-600 text-sm">
                30일 내 100% 환불이 가능합니다.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">
                팀 플랜에서 몇 명까지 사용할 수 있나요?
              </h3>
              <p className="text-gray-600 text-sm">
                기본 10명이며, 추가 멤버당 월 5,000원입니다.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">
                기술 지원은 어떻게 받을 수 있나요?
              </h3>
              <p className="text-gray-600 text-sm">
                이메일, 채팅, 그리고 프로 플랜 이상에서는 전화 지원도
                제공됩니다.
              </p>
            </div>
          </div>
        </Card>

        {/* 학습 포인트 */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 text-green-700">
              🎯 학습 목표
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                • <strong>Grid 시스템:</strong> 반응형 3열 레이아웃
              </li>
              <li>
                • <strong>조건부 스타일링:</strong> 인기 플랜 강조
              </li>
              <li>
                • <strong>호버 효과:</strong> scale, shadow 변화
              </li>
              <li>
                • <strong>그라디언트:</strong> 배경과 테두리 효과
              </li>
              <li>
                • <strong>포지셔닝:</strong> 절대/상대 위치 활용
              </li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 text-blue-700">
              💡 핵심 기술
            </h3>
            <div className="space-y-2 text-sm font-mono bg-gray-50 p-4 rounded">
              <div>hover:scale-105 transition-all</div>
              <div>ring-4 ring-blue-100</div>
              <div>transform rotate-12 origin-center</div>
              <div>bg-gradient-to-r from-blue-50</div>
              <div>grid md:grid-cols-3 gap-8</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
