'use client';
import { useRouter } from 'next/navigation';

export default function Error({ error, reset }) {
    const router = useRouter();

    return (
        <main className="error">
            <h1>Something went wrong!</h1>
            <p>An unexpected error occurred while processing your request.</p>
            <div className="error-actions">
                <button
                    onClick={() => reset()}
                    className="retry-button"
                >
                    Try Again
                </button>
                <button
                    onClick={() => router.push('/')}
                    className="home-button"
                >
                    Back to Home
                </button>
            </div>
        </main>
    );
}