import React from "react";
import Image from "next/image";

// Nó nhận một props có tên là children. Props này là một React Node (hoặc React Node array), và đại diện cho các thành phần con được truyền vào RootLayout từ các trang hoặc component cha.
// RootLayout có nhiệm vụ là định nghĩa layout chung cho toàn bộ ứng dụng hoặc một phần của ứng dụng.
// Trong trường hợp này, layout được định nghĩa là một phần tử <main>, trong đó các thành phần con (các trang hoặc thành phần con khác) sẽ được render.
// Điều này có nghĩa là bất kỳ thành phần nào được truyền vào RootLayout qua props children sẽ được render bên trong một phần tử <main>.

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="flex min-h-screen w-full justify-between font-inter">
      {children}
      <div className="auth-asset">
        <div>
          <Image
            src="/icons/banking2.avif"
            alt="Auth image"
            width={900}
            height={800}
          />
        </div>
      </div>
    </main>
  );
}
