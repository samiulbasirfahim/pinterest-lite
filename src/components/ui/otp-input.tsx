"use client";

import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";

export default function OTPInput() {
    return (
        <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
            <InputOTPGroup className="w-full flex items-center justify-center">
                <InputOTPSlot index={0} className="flex-1" />
                <InputOTPSlot index={1} className="flex-1" />
                <InputOTPSlot index={2} className="flex-1" />
                <InputOTPSlot index={3} className="flex-1" />
                <InputOTPSlot index={5} className="flex-1" />
                <InputOTPSlot index={5} className="flex-1" />
            </InputOTPGroup>
        </InputOTP>
    );
}
