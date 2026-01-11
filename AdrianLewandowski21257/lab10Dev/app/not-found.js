'use client';
import { useRouter } from 'next/navigation';

export default function NotFound() {
    const router = useRouter();

    return (
        <main className="error">
            <h1>404</h1>
            <p>Oops! The page you are looking for could not be found.</p>
            <div className="error-actions">
                <button
                    onClick={() => router.back()}
                    className="retry-button"
                >
                    Go Back
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