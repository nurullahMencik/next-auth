"use client";

import { useSession } from "next-auth/react";

export default function ProtectedPage() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Hoş Geldin, {session?.user?.name}!</h1>
      <p>Bu sayfaya sadece oturum açanlar erişebilir.</p>
    </div>
  );
}