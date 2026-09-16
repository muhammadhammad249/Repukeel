'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      
      // Admin bypass
      if (email === 'admin@repukeel.com' && password === 'admin123') {
        localStorage.setItem('authToken', 'admin_token');
        router.push('/dashboard/admin');
        return;
      }
      
      // Check for registered user
      const savedUserStr = localStorage.getItem('registeredUser');
      if (savedUserStr) {
        try {
          const parsedUser = JSON.parse(savedUserStr);
          if (parsedUser.email === email && parsedUser.password === password) {
            localStorage.setItem('authToken', 'user_token');
            router.push('/');
            return;
          } else if (parsedUser.email === email) {
            setError('Incorrect password. Please try again.');
            return;
          }
        } catch (e) {
          console.error('Error parsing stored user data');
        }
      }
      
      // Not registered or completely incorrect email
      setError('You are not registered yet. Please Sign Up first to continue.');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 font-sans">
      <div className="w-full min-h-screen flex">
        
        {/* Left Form Section */}
        <div className="w-full lg:w-1/2 p-8 md:p-16 flex flex-col justify-center relative bg-white">
          {/* Top Left Logo */}
          <div className="absolute top-10 left-10 flex items-center gap-3">
            <div className="w-[36px] h-[36px] bg-[#d4af37] rounded-lg flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-[20px] h-[20px]">
                <path d="M12 2l8 4v6c0 5.25-3.6 9-8 10.3C7.6 21 4 17.25 4 12V6l8-4z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="font-[900] text-[#0a192f] tracking-tight text-[18px] uppercase">REPUKEEL</span>
          </div>

          <div className="max-w-[420px] w-full mx-auto mt-12">
            <h1 className="text-[40px] font-[900] text-[#0a192f] mb-2">Welcome Back</h1>
            <p className="text-[15px] text-gray-500 mb-8">Please enter your credentials to access your account</p>

            {error && (
              <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm font-medium border border-red-100 mb-6 flex items-center gap-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
                {error}
              </div>
            )}

            <form className="flex flex-col gap-6" onSubmit={handleLogin}>
              <div className="flex flex-col gap-2">
                <label className="text-[14px] font-[700] text-[#0a192f]">Email Address</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[20px] h-[20px]"><rect x="3" y="5" width="18" height="14" rx="2" ry="2"/><path d="M3 7l9 6 9-6"/></svg>
                  </span>
                  <input 
                    type="email" 
                    placeholder="your.email@example.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-[52px] pl-12 pr-4 bg-white border border-gray-200 rounded-[12px] outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all text-[15px] shadow-sm"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <label className="text-[14px] font-[700] text-[#0a192f]">Password</label>
                  <Link href="/forgot-password" className="text-[13px] font-[600] text-[#d4af37] hover:underline">Forgot Password?</Link>
                </div>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[20px] h-[20px]"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  </span>
                  <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="••••••••" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full h-[52px] pl-12 pr-12 bg-white border border-gray-200 rounded-[12px] outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all text-[15px] shadow-sm tracking-widest"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[20px] h-[20px]">
                      {showPassword ? (
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                      ) : (
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24M1 1l22 22"/>
                      )}
                    </svg>
                  </button>
                </div>
              </div>

              <button 
                type="submit" 
                disabled={isLoading}
                className="w-full h-[52px] bg-[#d4af37] hover:bg-[#c19b2e] text-white font-[700] text-[16px] rounded-[12px] flex items-center justify-center gap-2 mt-4 transition-colors shadow-lg shadow-[#d4af37]/20 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Signing In...
                  </>
                ) : (
                  <>
                    Sign In
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[20px] h-[20px]"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </>
                )}
              </button>
            </form>

            <p className="text-center text-[14px] text-gray-500 mt-8">
              Don't have an account? <Link href="/signup" className="text-[#d4af37] font-[700] hover:underline">Sign Up</Link>
            </p>
          </div>
        </div>

        {/* Right Info Section */}
        <div className="hidden lg:flex w-1/2 relative items-center justify-center p-12 overflow-hidden bg-gradient-to-br from-[#0c1940] via-[#10245a] to-[#0c1940]">
          {/* Background Grid */}
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          
          {/* Floating Blurred Dots */}
          <div className="absolute top-[20%] left-[30%] w-1.5 h-1.5 bg-white rounded-full opacity-30 blur-[1px]"></div>
          <div className="absolute top-[15%] left-[50%] w-2 h-2 bg-white rounded-full opacity-20 blur-[1.5px]"></div>
          <div className="absolute top-[35%] right-[20%] w-1.5 h-1.5 bg-white rounded-full opacity-20 blur-[1px]"></div>
          <div className="absolute bottom-[40%] right-[30%] w-2 h-2 bg-white rounded-full opacity-10 blur-[2px]"></div>
          <div className="absolute bottom-[20%] left-[25%] w-1 h-1 bg-white rounded-full opacity-30 blur-[0.5px]"></div>
          <div className="absolute bottom-[15%] right-[40%] w-1.5 h-1.5 bg-[#d4af37] rounded-full opacity-30 blur-[1px]"></div>

          <div className="relative z-10 flex flex-col items-center text-center text-white max-w-[450px]">
            {/* Custom Tall Diamond Shield Graphic */}
            <div className="mb-12 relative flex items-center justify-center" style={{ perspective: '1000px' }}>
              <style>{`
                @keyframes spinY {
                  0% { transform: rotateY(0deg); }
                  100% { transform: rotateY(360deg); }
                }
                .animate-spinY {
                  animation: spinY 6s linear infinite;
                  transform-style: preserve-3d;
                }
              `}</style>
              
              <div className="relative flex items-center justify-center animate-spinY">
                {/* Outer Gold Diamond */}
                <svg width="100" height="160" viewBox="0 0 100 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 0C50 0 100 50 100 80C100 110 50 160 50 160C50 160 0 110 0 80C0 50 50 0 50 0Z" fill="#d4af37" />
                </svg>
                {/* Inner White Shield Outline */}
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" className="w-[42px] h-[42px] absolute">
                  <path d="M12 2l8 4v6c0 5.25-3.6 9-8 10.3C7.6 21 4 17.25 4 12V6l8-4z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            
            <h2 className="text-[36px] font-[900] mb-5 tracking-tight">Repukeel Portal</h2>
            <p className="text-[16px] text-blue-100/60 font-[400] leading-relaxed max-w-[360px]">
              Track your cases, submit new protection requests, and manage your digital rights.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
