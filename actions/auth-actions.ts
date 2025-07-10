"use server";

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function signinAction(userData: {
    email: string;
    avatar: string;
    username: string;
}) {
    try {
        const cookieStore = await cookies();

        // Set user cookie
        cookieStore.set('user', JSON.stringify(userData), {
            path: '/',
            maxAge: 60 * 60 * 24 * 7, // 7 days
            httpOnly: false,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax'
        });

        // Set authenticated cookie
        cookieStore.set('authenticated', 'true', {
            path: '/',
            maxAge: 60 * 60 * 24 * 7, // 7 days
            httpOnly: false,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax'
        });

        return { success: true, message: 'Signed in successfully' };

    } catch (error) {
        console.error('Error setting cookies:', error);
        return { success: false, message: 'Failed to sign in' };
    }
}

export async function redirectToWallet() {
    redirect('/user/wallet');
}