import Image from "next/image";
import Link from "next/link";
import React from "react";
import BankCard from "./BankCard";

const RightSidebar = ({ user, transactions, banks }: RightSidebarProps) => {
  return (
    <aside className="no-scrollbar hidden max-h-screen flex-col border-l border-gray-200 xl:flex w-[355px] xl:overflow-y-scroll">
      <section className="flex flex-col pb-8">
        <div className="profile-banner" />
        <div className="profile">
          <div className="profile-img">
            <span className="text-5xl font-bold text-blue-500">
              {user.name[0]}
            </span>
          </div>
          <div className="profile-details">
            <h1 className="text-24 font-semibold text-gray-900">
              {user.name}
            </h1>
            <p className="profile-email">{user.email}</p>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-8 justify-between px-6 py-8">
        <div className="flex w-full justify-between">
          <h2 className="header-2">My Banks</h2>
          <Link href="/" className="flex gap-2 ">
            <Image src="/icons/plus.svg" width={20} height={20} alt="plus" />
            <h2 className="text-14 font-semibold text-gray-600">Add Bank</h2>
          </Link>
        </div>
        {banks?.length > 0 && (
          <div className="relative flex flex-1 flex-col items-center justify-center gap-5">
            <div className="relative z-10">
              <BankCard
                key={banks[0].$id}
                account={banks[0]}
                userName={user.name}
                showBalance={false}
              />
            </div>
            {banks[1] && (
              <div className="absolute right-0 top-8 z-0 w-[90%]">
                <BankCard
                  key={banks[1].$id}
                  account={banks[0]}
                  userName={user.name}
                  showBalance={false}
                />
              </div>
            )}
          </div>
        )}
      </section>
    </aside>
  );
};

export default RightSidebar;