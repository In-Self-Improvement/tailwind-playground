"use client";

import Link from "next/link";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Tailwind CSS 기초 학습하기", completed: false },
    { id: 2, text: "shadcn/ui 컴포넌트 사용해보기", completed: true },
    { id: 3, text: "첫 번째 프로젝트 완성하기", completed: false },
  ]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: newTodo,
          completed: false,
        },
      ]);
      setNewTodo("");
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const completedCount = todos.filter((todo) => todo.completed).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-4">
      <div className="max-w-2xl mx-auto">
        {/* 네비게이션 */}
        <div className="mb-6">
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            ← 홈으로
          </Link>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            프로젝트 2: 할 일 관리 앱
          </h1>
          <p className="text-gray-600">상태 관리와 인터랙션을 연습해보세요</p>
        </div>

        {/* 메인 앱 */}
        <Card className="shadow-xl border-0">
          <CardHeader className="bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-t-lg">
            <CardTitle className="text-2xl text-center">
              ✅ 나의 할 일 목록
            </CardTitle>
            <p className="text-center text-purple-100">
              완료: {completedCount} / {todos.length}
            </p>
          </CardHeader>
          <CardContent className="p-6">
            {/* 새 할 일 추가 */}
            <div className="flex gap-2 mb-6">
              <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && addTodo()}
                placeholder="새로운 할 일을 입력하세요..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <Button
                onClick={addTodo}
                className="bg-purple-500 hover:bg-purple-600 px-6"
              >
                추가
              </Button>
            </div>

            {/* 할 일 목록 */}
            <div className="space-y-3">
              {todos.map((todo) => (
                <div
                  key={todo.id}
                  className={`flex items-center gap-3 p-4 rounded-lg border transition-all duration-200 ${
                    todo.completed
                      ? "bg-green-50 border-green-200"
                      : "bg-white border-gray-200 hover:border-purple-300"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                    className="w-5 h-5 text-purple-500 rounded focus:ring-purple-500"
                  />
                  <span
                    className={`flex-1 ${
                      todo.completed
                        ? "text-gray-500 line-through"
                        : "text-gray-800"
                    }`}
                  >
                    {todo.text}
                  </span>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded transition-colors"
                  >
                    🗑️
                  </button>
                </div>
              ))}
            </div>

            {todos.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                할 일이 없습니다! 🎉
              </div>
            )}
          </CardContent>
        </Card>

        {/* 학습 포인트 */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 text-green-700">
              🎯 학습 목표
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                • <strong>상태 관리:</strong> useState 훅 활용
              </li>
              <li>
                • <strong>조건부 스타일링:</strong> 완료 상태에 따른 스타일
              </li>
              <li>
                • <strong>이벤트 처리:</strong> 클릭, 키보드 이벤트
              </li>
              <li>
                • <strong>동적 클래스:</strong> 템플릿 리터럴과 조건부 클래스
              </li>
              <li>
                • <strong>트랜지션:</strong> 부드러운 상태 변화
              </li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 text-blue-700">
              💡 핵심 기술
            </h3>
            <div className="space-y-2 text-sm">
              <div className="bg-gray-50 p-2 rounded font-mono">
                hover:border-purple-300
              </div>
              <div className="bg-gray-50 p-2 rounded font-mono">
                transition-all duration-200
              </div>
              <div className="bg-gray-50 p-2 rounded font-mono">
                line-through text-gray-500
              </div>
              <div className="bg-gray-50 p-2 rounded font-mono">
                focus:ring-2 focus:ring-purple-500
              </div>
            </div>
          </Card>
        </div>

        {/* 확장 아이디어 */}
        <Card className="p-6 mt-6">
          <h3 className="text-lg font-semibold mb-4 text-orange-700">
            🚀 확장 아이디어
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium mb-2">기능 추가</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• 우선순위 설정</li>
                <li>• 마감일 추가</li>
                <li>• 카테고리 분류</li>
                <li>• 검색 기능</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">스타일 개선</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• 드래그 앤 드롭</li>
                <li>• 애니메이션 효과</li>
                <li>• 다크 모드</li>
                <li>• 모바일 최적화</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
