"use client";

import { useState } from "react";

const SignUpForm = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
  };

  const isSubmitting = false;

  const errors = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="mb-4 text-2xl font-bold">회원가입</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block font-medium">
            이름
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={form.username}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
          />
          {errors.username && (
            <p className="mt-1 text-sm text-red-500">{errors.username}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block font-medium">
            이메일
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="password" className="block font-medium">
            비밀번호
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-500">{errors.password}</p>
          )}
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block font-medium">
            비밀번호 확인
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
          />
          {errors.confirmPassword && (
            <p className="mt-1 text-sm text-red-500">
              {errors.confirmPassword}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-2 px-4 font-bold text-white rounded-md ${
            isSubmitting ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {isSubmitting ? "처리 중..." : "회원가입"}
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
