import Link from "next/link";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

const SignInForm = () => {
  const form = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">
          로그인
        </h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">Username</FormLabel>
                  <FormControl>
                    <Input
                      className="border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your username"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="mt-1 text-sm text-red-500" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      className="border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="mt-1 text-sm text-red-500" />
                </FormItem>
              )}
            />
            <Link
              href="/auth/sign-up"
              className="flex justify-end text-sm text-gray-500"
            >
              회원가입
            </Link>

            <Button
              type="submit"
              className="w-full py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              로그인
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SignInForm;
