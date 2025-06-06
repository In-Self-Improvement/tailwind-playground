import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function TailwindBasics() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 네비게이션 */}
      <nav className="bg-white border-b px-4 py-3">
        <div className="container mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            ← 홈으로
          </Link>
          <h1 className="text-xl font-bold">Tailwind CSS 기초</h1>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Flexbox 연습 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>1. Flexbox 연습</CardTitle>
            <CardDescription>
              flex, justify-center, items-center 등을 연습해보세요
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-blue-100 rounded-lg">
                <h4 className="font-medium mb-3">기본 Flex 컨테이너</h4>
                <div className="flex gap-2 bg-white p-4 rounded">
                  <div className="bg-blue-500 text-white p-2 rounded">
                    Item 1
                  </div>
                  <div className="bg-green-500 text-white p-2 rounded">
                    Item 2
                  </div>
                  <div className="bg-red-500 text-white p-2 rounded">
                    Item 3
                  </div>
                </div>
                <code className="text-sm text-gray-600 block mt-2">
                  className=&quot;flex gap-2&quot;
                </code>
              </div>

              <div className="p-4 bg-green-100 rounded-lg">
                <h4 className="font-medium mb-3">중앙 정렬</h4>
                <div className="flex justify-center items-center h-24 bg-white rounded">
                  <div className="bg-purple-500 text-white p-3 rounded">
                    가운데 정렬
                  </div>
                </div>
                <code className="text-sm text-gray-600 block mt-2">
                  className="flex justify-center items-center h-24"
                </code>
              </div>

              <div className="p-4 bg-yellow-100 rounded-lg">
                <h4 className="font-medium mb-3">Space Between</h4>
                <div className="flex justify-between items-center bg-white p-4 rounded">
                  <div className="bg-indigo-500 text-white p-2 rounded">
                    왼쪽
                  </div>
                  <div className="bg-pink-500 text-white p-2 rounded">
                    오른쪽
                  </div>
                </div>
                <code className="text-sm text-gray-600 block mt-2">
                  className=&quot;flex justify-between items-center&quot;
                </code>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Grid 연습 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>2. Grid 연습</CardTitle>
            <CardDescription>CSS Grid를 사용한 레이아웃 구성</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-blue-100 rounded-lg">
                <h4 className="font-medium mb-3">3열 그리드</h4>
                <div className="grid grid-cols-3 gap-4 bg-white p-4 rounded">
                  <div className="bg-blue-500 text-white p-4 rounded text-center">
                    1
                  </div>
                  <div className="bg-green-500 text-white p-4 rounded text-center">
                    2
                  </div>
                  <div className="bg-red-500 text-white p-4 rounded text-center">
                    3
                  </div>
                  <div className="bg-yellow-500 text-white p-4 rounded text-center">
                    4
                  </div>
                  <div className="bg-purple-500 text-white p-4 rounded text-center">
                    5
                  </div>
                  <div className="bg-pink-500 text-white p-4 rounded text-center">
                    6
                  </div>
                </div>
                <code className="text-sm text-gray-600 block mt-2">
                  className=&quot;grid grid-cols-3 gap-4&quot;
                </code>
              </div>

              <div className="p-4 bg-green-100 rounded-lg">
                <h4 className="font-medium mb-3">반응형 그리드</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-white p-4 rounded">
                  <div className="bg-indigo-500 text-white p-4 rounded text-center">
                    A
                  </div>
                  <div className="bg-teal-500 text-white p-4 rounded text-center">
                    B
                  </div>
                  <div className="bg-orange-500 text-white p-4 rounded text-center">
                    C
                  </div>
                  <div className="bg-gray-500 text-white p-4 rounded text-center">
                    D
                  </div>
                </div>
                <code className="text-sm text-gray-600 block mt-2">
                  className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4
                  gap-4&quot;
                </code>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Spacing & Colors */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>3. Spacing & Colors</CardTitle>
            <CardDescription>패딩, 마진, 색상 시스템 연습</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-3">Padding & Margin</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-100 p-2 rounded">
                    <div className="bg-blue-500 text-white p-4 rounded">
                      p-4
                    </div>
                  </div>
                  <div className="bg-green-100 p-2 rounded">
                    <div className="bg-green-500 text-white px-6 py-2 rounded">
                      px-6 py-2
                    </div>
                  </div>
                  <div className="bg-purple-100 p-2 rounded">
                    <div className="bg-purple-500 text-white m-4 p-2 rounded">
                      m-4 p-2
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Color Palette</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2">
                  {[
                    "red",
                    "orange",
                    "yellow",
                    "green",
                    "blue",
                    "indigo",
                    "purple",
                    "pink",
                  ].map((color) => (
                    <div key={color} className="text-center">
                      <div
                        className={`h-16 rounded mb-2 bg-${color}-500`}
                      ></div>
                      <p className="text-sm">{color}-500</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 연습 과제 */}
        <Card>
          <CardHeader>
            <CardTitle>🎯 연습 과제</CardTitle>
            <CardDescription>직접 만들어보며 실력을 늘려보세요</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <p>
                1. <strong>카드 레이아웃:</strong> 3개의 카드를 flex 또는 grid로
                배치
              </p>
              <p>
                2. <strong>네비게이션 바:</strong> 로고와 메뉴를 양쪽 끝에 배치
              </p>
              <p>
                3. <strong>반응형 섹션:</strong> 모바일에서는 1열, 태블릿에서는
                2열, 데스크탑에서는 3열
              </p>
              <p>
                4. <strong>색상 조합:</strong> 본인만의 색상 팔레트로 컴포넌트
                꾸미기
              </p>
            </div>
            <div className="mt-6 flex gap-3">
              <Link href="/shadcn-components">
                <Button>다음: shadcn/ui 컴포넌트</Button>
              </Link>
              <Link href="/">
                <Button variant="outline">홈으로</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
