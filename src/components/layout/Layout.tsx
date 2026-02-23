import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50">
      <Header />
      <div className="bg-[#fef3c7] px-4 py-2 text-center text-[13px] text-amber-900 border-b border-[#fcd34d]">
        ⚠️ rrbnursing.com is an independent information portal and is not associated with Indian Railways or the Railway Recruitment Board (RRB).
      </div>
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
