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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function Forget() {
    return (
        <Card className="w-full max-w-100 border-0 shadow-none">
            <CardHeader>
                <CardTitle>Forget Password</CardTitle>
                <CardDescription>
                    Enter your email below to send a OTP to your email
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
                <form>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="m@example.com"
                                required
                            />
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex-col gap-2">
                <Button type="submit" className="w-full cursor-pointer">
                    Send OTP
                </Button>
            </CardFooter>
        </Card>
    );
}
