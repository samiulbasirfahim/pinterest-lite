import { Button } from "@/components/ui/button";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import OTPInput from "@/components/ui/otp-input";
import Link from "next/link";

export default function Otp() {
    return (
        <Card className="w-full max-w-100 border-0 shadow-none">
            <CardHeader>
                <CardTitle>Verify OTP</CardTitle>
                <CardDescription>
                    Enter the OTP we&apos;ve sent to reset your password
                </CardDescription>
                <CardAction>
                    <Link href={"/login"}>
                        <Button variant="link" className="cursor-pointer">
                            Sign In
                        </Button>
                    </Link>
                </CardAction>
            </CardHeader>
            <CardContent>
                <form className="w-full">
                    <OTPInput />
                </form>
            </CardContent>
            <CardFooter className="flex-col gap-2">
                <Button type="submit" className="w-full cursor-pointer">
                    Verify OTP
                </Button>
            </CardFooter>
        </Card>
    );
}
