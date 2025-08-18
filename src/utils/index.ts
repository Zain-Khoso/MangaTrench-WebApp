// Lib Imports.
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Script Values.
const protectedRoutes = ['/delete-account'];
const guestOnlyRoutes = ['/sign-in', '/sign-up'];

// Util function to merge class names.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Takes in a pathname and return a boolean respective to the path being protected or not.
export function isProtectedRoute(pathname: string) {
  return protectedRoutes.some((p) => pathname.startsWith(p));
}

// Takes in a pathname and return a boolean respective to the path being guest-only or not.
export function isGuestOnlyRoute(pathname: string) {
  return guestOnlyRoutes.some((p) => pathname.startsWith(p));
}
