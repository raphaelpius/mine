"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
    const router = useRouter();

    const handleNavigate = (path: string) => {
        router.push(path);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
            <div className="container mx-auto px-4 py-8">
                {/* Welcome Header */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-white mb-4">Welcome Back!</h1>
                    <p className="text-xl text-white/80">We're glad to see you again</p>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-white hover:transform hover:scale-105 transition-all cursor-pointer"
                         onClick={() => handleNavigate('/boy')}>
                        <h3 className="text-2xl font-semibold mb-2">Dashboard</h3>
                        <p className="text-white/70">Access your main dashboard</p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-white hover:transform hover:scale-105 transition-all cursor-pointer"
                         onClick={() => handleNavigate('/bomu')}>
                        <h3 className="text-2xl font-semibold mb-2">Add New Data</h3>
                        <p className="text-white/70">Insert new records</p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-white hover:transform hover:scale-105 transition-all cursor-pointer"
                         onClick={() => handleNavigate('/retrieve')}>
                        <h3 className="text-2xl font-semibold mb-2">View Records</h3>
                        <p className="text-white/70">Browse your data</p>
                    </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-white rounded-lg p-4 text-center">
                        <h4 className="text-gray-500 text-sm">Last Login</h4>
                        <p className="text-2xl font-bold text-gray-800">{new Date().toLocaleDateString()}</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center">
                        <h4 className="text-gray-500 text-sm">Status</h4>
                        <p className="text-2xl font-bold text-green-600">Active</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center">
                        <h4 className="text-gray-500 text-sm">Session</h4>
                        <p className="text-2xl font-bold text-blue-600">Secure</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center">
                        <h4 className="text-gray-500 text-sm">System</h4>
                        <p className="text-2xl font-bold text-purple-600">Online</p>
                    </div>
                </div>
            </div>
        </div>
    );
}