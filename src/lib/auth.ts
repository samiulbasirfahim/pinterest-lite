"use server";
import { User } from "@/types/user";
import { cookies } from "next/headers";

function getCurrentUser(): User | null {
    return null;
}

async function loginAction(formData: FormData) {
    const data = {
        email: formData.get("email"),
        password: formData.get("password"),
    };

    console.log(data);
}
async function registerAction() { }
async function sendOTP() { }
async function verifyOTP(email: string, formData: FormData) {
    const data = {
        email,
        otp: formData.get("otp"),
    };

    console.log(data);
}
async function resetPassword() { }
