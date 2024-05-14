import React from "react";
import AnimatedCounter from "./AnimatedCounter";
import DoughnutChart from "./DoughnutChart";

// // Khai báo một function có tên là formatAmount nhận vào một tham số có tên là amount, có kiểu dữ liệu là number và trả về một chuỗi 
// function formatAmount(amount: number) {
//   // Tạo một biến mới có tên là formatter  
//   // Đối tượng được tạo ra bởi new Intl.NumberFormat là một cách tiêu chuẩn của JavaScript để định dạng số với các quy tắc địa phương (localization). Trong trường hợp này, quy tắc định dạng số là "en-US", tức là tiếng Anh Mỹ.
//   const formatter = new Intl.NumberFormat("en-US", {
//     style: "currency", // Định dạng số dưới loại tiền tệ 
//     currency: "USD", // Xác đinh đơn vị là USD
//     minimumFractionDigits: 2, // Đảm bảo rằng có ít nhất 2 chữ số sau dấu phẩy 
//   });
//   return formatter.format(amount);
// }

const TotalBalanceBox = ({
  accounts = [],
  totalBanks,
  totalCurrentBalance,
}: TotalBalanceBoxProps) => {
  return (
    <section className="total-balance">
      <div className="total-balance-chart">
        <DoughnutChart accounts={accounts} />
      </div>
      <div className="flex flex-col gap-6">
        <h2 className="header-2">Bank Account: {totalBanks}</h2>
        <div className="flex flex-col gap-2">
          <p className="total-balance-label">Total Current Balance</p>
          <div className="text-24 lg:text-30 flex-1 font-semibold text-gray-900 flex-center gap-2">
            <AnimatedCounter amount={totalCurrentBalance} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TotalBalanceBox;
