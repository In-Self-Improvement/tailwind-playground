import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const learningModules = [
  {
    title: "Tailwind 기초",
    description: "Flexbox, Grid, Spacing, Colors 등 기본 유틸리티 클래스",
    href: "/tailwind-basics",
    color: "bg-blue-50 border-blue-200 hover:bg-blue-100",
  },
  {
    title: "shadcn/ui 컴포넌트",
    description: "Button, Card, Form, Dialog 등 재사용 가능한 컴포넌트들",
    href: "/shadcn-components",
    color: "bg-green-50 border-green-200 hover:bg-green-100",
  },
];

const practiceProjects = [
  {
    title: "프로필 카드",
    description: "레이아웃과 스타일링 기초 연습",
    href: "/projects/profile-card",
    color: "bg-purple-50 border-purple-200 hover:bg-purple-100",
    difficulty: "초급",
    time: "30분",
  },
  {
    title: "할 일 관리 앱",
    description: "상태 관리와 인터랙션 연습",
    href: "/projects/todo-app",
    color: "bg-orange-50 border-orange-200 hover:bg-orange-100",
    difficulty: "초-중급",
    time: "1-2시간",
  },
  {
    title: "요금제 페이지",
    description: "반응형 그리드와 시각적 효과",
    href: "/projects/pricing-page",
    color: "bg-red-50 border-red-200 hover:bg-red-100",
    difficulty: "초급",
    time: "45분",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            Tailwind CSS & shadcn/ui 학습 플레이그라운드
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            실습을 통해 빠르게 배우는 모던 CSS 프레임워크
          </p>
        </div>

        {/* 기초 학습 섹션 */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8 text-slate-700">
            📚 기초 학습
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {learningModules.map((module) => (
              <Card
                key={module.href}
                className={`transition-all duration-200 ${module.color}`}
              >
                <CardHeader>
                  <CardTitle className="text-lg">{module.title}</CardTitle>
                  <CardDescription>{module.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href={module.href}>
                    <Button variant="default" className="w-full">
                      학습 시작하기
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* 실습 프로젝트 섹션 */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8 text-slate-700">
            🛠️ 실습 프로젝트
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {practiceProjects.map((project) => (
              <Card
                key={project.href}
                className={`transition-all duration-200 ${project.color} hover:scale-105`}
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <div className="text-right">
                      <span className="text-xs bg-white px-2 py-1 rounded-full text-gray-600">
                        {project.difficulty}
                      </span>
                    </div>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                  <p className="text-sm text-slate-500 mt-2">
                    ⏱️ 예상 시간: {project.time}
                  </p>
                </CardHeader>
                <CardContent>
                  <Link href={project.href}>
                    <Button variant="default" className="w-full">
                      프로젝트 시작
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-white/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>🎯 학습 팁</CardTitle>
            </CardHeader>
            <CardContent className="text-left space-y-3">
              <p>
                • <strong>실습 위주로:</strong> 코드를 직접 작성하고 결과를
                확인하세요
              </p>
              <p>
                • <strong>공식 문서 활용:</strong> Tailwind CSS와 shadcn/ui 공식
                문서를 참고하세요
              </p>
              <p>
                • <strong>단계별 진행:</strong> 기초부터 차근차근 익혀나가세요
              </p>
              <p>
                • <strong>실전 적용:</strong> 간단한 프로젝트를 만들어보며
                응용하세요
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
