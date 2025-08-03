import { Error } from "@/types/error";
import { User } from "@/types/user";
import { cookies } from "next/headers";

function getCurrentUser(): User | Error {
    return new Error("User not found", 401);
}

function loginAction() { }
function registerAction() { }
