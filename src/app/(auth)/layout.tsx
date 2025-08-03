import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen w-full flex relative bg-[url(/auth-bg.jpg)] bg-cover">
            <div className="w-1/2 flex-1"></div>
            <div className="w-1/2 flex-1 items-center flex justify-center">
                {children}
            </div>
        </div>
    );
}
