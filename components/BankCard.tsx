import Link from "next/link";
import React from "react";
import Image from "next/image";
import { formatAmount } from "@/lib/utils";

interface CreditCardProps2 {
  account: Account;
  userName: string;
  showBalance?: boolean;
}

const BankCard = ({
  account,
  userName,
  showBalance = true,
}: CreditCardProps2) => {
  return (
    <div className="flex flex-col">
      <Link
        href="/"
        className="relative flex h-[190px] w-full max-w-[320px] justify-between rounded-[20px] border border-white bg-bank-gradient shadow-creditCard backdrop-blur-[6px]"
      >
        <div className="bank-card_content">
          <div>
            <h1 className="text-16 font-semibold text-white">
              {userName}
            </h1>
            <p>{formatAmount(account.currentBalance)}</p>
          </div>
          <article className="flex flex-col gap-2">
            <div className="flex justify-between">
              <h1 className="text-12 font-semibold text-white">{userName}</h1>
              <h2 className="text-12 font-semibold text-white"> ●● / ●●</h2>
            </div>
            <p className="text-14 font-semibold tracking-[1.1]px text-white">
              ●●●● ●●●● ●●●● <span className="text-16">1234</span>
            </p>
          </article>
        </div>
        <div className="bank-card_icon">
          <Image src="/icons/Paypass.svg" width={20} height={24} alt="pay" />
          <Image
            src="/icons/mastercard.svg"
            width={45}
            height={32}
            alt="mastercard"
            className="ml-5"
          />
          <Image
            src="/icons/lines.png"
            width={316}
            height={190}
            alt="lines"
            className="absolute top-0 left-0"
          />
        </div>
      </Link>
    </div>
  );
};

export default BankCard;
