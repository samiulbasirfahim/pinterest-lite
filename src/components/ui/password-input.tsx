"use client";

import { ComponentProps, useState } from "react";
import { Input } from "./input";
import { Eye, EyeOff } from "lucide-react";

export default function PasswordInput(props: ComponentProps<"input">) {
    const [show, setShow] = useState(false);
    return (
        <div className="form-group flex gap-3 items-center relative">
            <Input {...props}
                type={show ? "text" : "password"}
                name="password"
                className="pr-10"
            />
            <span onClick={() => setShow((prev) => !prev)}>
                {show ? (
                    <EyeOff
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-primary-gray cursor-pointer"
                        size={18}
                    />
                ) : (
                    <Eye
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-primary-gray cursor-pointer"
                        size={18}
                    />
                )}
            </span>
        </div>
    );
}
