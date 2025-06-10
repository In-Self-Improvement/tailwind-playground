"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ShadcnComponents() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b px-4 py-3">
        <div className="container mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            ← 홈으로
          </Link>
          <h1 className="text-xl font-bold">shadcn/ui 컴포넌트</h1>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Button 컴포넌트 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>1. Button 컴포넌트</CardTitle>
            <CardDescription>다양한 버튼 스타일과 사이즈</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-3">Variants</h4>
                <div className="flex flex-wrap gap-3">
                  <Button variant="default">Default</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Sizes</h4>
                <div className="flex flex-wrap items-center gap-3">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">States</h4>
                <div className="flex flex-wrap gap-3">
                  <Button>Normal</Button>
                  <Button disabled>Disabled</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Card 컴포넌트 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>2. Card 컴포넌트</CardTitle>
            <CardDescription>정보를 그룹화하는 카드 레이아웃</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">기본 카드</CardTitle>
                  <CardDescription>간단한 카드 예시</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    카드 내용이 들어갑니다.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-800">
                    컬러 카드
                  </CardTitle>
                  <CardDescription className="text-blue-600">
                    색상이 적용된 카드
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-blue-700">
                    색상 테마가 적용된 카드입니다.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">인터랙티브 카드</CardTitle>
                  <CardDescription>호버 효과가 있는 카드</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">마우스를 올려보세요!</p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Form 요소들 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>3. Form 요소들</CardTitle>
            <CardDescription>
              Input, Label 등 폼 관련 컴포넌트 (추후 추가 예정)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  기본 Input
                </label>
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="텍스트를 입력하세요"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  TextArea
                </label>
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={3}
                  placeholder="긴 텍스트를 입력하세요"
                />
              </div>

              <div>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">체크박스 옵션</span>
                </label>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 실전 예제 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>4. 실전 조합 예제</CardTitle>
            <CardDescription>
              여러 컴포넌트를 조합한 실제 사용 예시
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {/* 프로필 카드 */}
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                      JS
                    </div>
                    <div>
                      <CardTitle className="text-lg">John Smith</CardTitle>
                      <CardDescription>Frontend Developer</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    React와 TypeScript를 좋아하는 개발자입니다.
                  </p>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      Follow
                    </Button>
                    <Button size="sm">Message</Button>
                  </div>
                </CardContent>
              </Card>

              {/* 설정 카드 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">설정</CardTitle>
                  <CardDescription>계정 설정을 관리하세요</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">알림 받기</span>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="rounded"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">다크 모드</span>
                      <input type="checkbox" className="rounded" />
                    </div>
                    <Button className="w-full" variant="outline">
                      설정 저장
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* 더 많은 컴포넌트 추가 안내 */}
        <Card>
          <CardHeader>
            <CardTitle>🚀 더 많은 컴포넌트 추가하기</CardTitle>
            <CardDescription>
              다음 명령어로 추가 컴포넌트를 설치할 수 있습니다
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="bg-gray-100 p-3 rounded font-mono text-sm">
                npx shadcn@latest add dialog
              </div>
              <div className="bg-gray-100 p-3 rounded font-mono text-sm">
                npx shadcn@latest add input
              </div>
              <div className="bg-gray-100 p-3 rounded font-mono text-sm">
                npx shadcn@latest add form
              </div>
              <div className="bg-gray-100 p-3 rounded font-mono text-sm">
                npx shadcn@latest add dropdown-menu
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <Link href="/responsive-design">
                <Button>다음: 반응형 디자인</Button>
              </Link>
              <Link href="/tailwind-basics">
                <Button variant="outline">이전: Tailwind 기초</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
