import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function VerifyOtp() {
    const [otp, setOtp] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const navigate = useNavigate();

    // Email stored during login success
    const email = localStorage.getItem("pendingOtpEmail") || "";

    const handleVerifyOtp = async (e) => {
        e.preventDefault();
        setSubmitted(true);
        setError("");

        if (!email) {
            setError("No pending login found. Please login again.");
            return;
        }

        const cleanedOtp = otp.trim();

        // Basic validation (6 digits)
        if (!/^\d{6}$/.test(cleanedOtp)) {
            setError("Please enter a valid 6-digit OTP.");
            return;
        }

        setLoading(true);

        try {
            const res = await fetch(
                import.meta.env.VITE_API_KEY + "user/verify-login-otp",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    credentials: "include",
                    body: JSON.stringify({
                        email,
                        otp: cleanedOtp,
                    }),
                }
            );

            const json = await res.json().catch(() => ({}));

            if (!res.ok) {
                setError(json?.message || "OTP verification failed");
                return;
            }

            const user = json?.data ?? null;
            if (!user) {
                setError("OTP verified but user data was missing.");
                return;
            }

            localStorage.setItem("loggedInUser", JSON.stringify(user));
            localStorage.removeItem("pendingOtpEmail");

            navigate("/dashboard");
        } catch (err) {
            setError(err?.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    const otpNotValid = submitted && !/^\d{6}$/.test(otp.trim());

    return (
        <div className="mx-auto mt-12 w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
            {error && (
                <div className="mb-4 rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-800">
                    {error}
                </div>
            )}

            <form onSubmit={handleVerifyOtp}>
                <div className="flex flex-col gap-4">
                    <p className="m-0">
                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            value={email}
                            disabled
                            className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-500 outline-none"
                        />
                    </p>

                    <p className="m-0">
                        <label
                            className={`mb-2 block text-sm font-semibold ${otpNotValid ? "text-red-600" : "text-gray-700"
                                }`}
                        >
                            OTP
                        </label>
                        <input
                            type="text"
                            inputMode="numeric"
                            maxLength={6}
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            placeholder="Enter 6-digit OTP"
                            className={`w-full rounded-xl px-4 py-3 text-sm outline-none transition ${otpNotValid
                                    ? "border border-red-600 bg-red-50 text-gray-900 focus:ring-4 focus:ring-red-100"
                                    : "border border-gray-300 bg-white text-gray-900 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                                }`}
                        />
                    </p>
                </div>

                <div className="mt-6 flex gap-3 max-sm:flex-col">
                    <Link
                        to="/login"
                        className="flex-1 rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-center text-sm font-semibold text-gray-900 transition hover:bg-gray-100"
                    >
                        Back to Login
                    </Link>

                    <button
                        className="flex-1 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-gray-900 transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-300"
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? "Verifying..." : "Verify OTP"}
                    </button>
                </div>
            </form>
        </div>
    );
}