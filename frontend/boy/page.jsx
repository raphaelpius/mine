"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Dashboard() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-white text-center mb-12">Dashboard</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Insert Card */}
                    <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Insert Data</h2>
                        <p className="text-gray-600 mb-4">Add new records to the database</p>
                        <Link href="/bomu" 
                            className="inline-block w-full bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700 transition duration-300">
                            Go to Insert
                        </Link>
                    </div>

                    {/* Retrieve Card */}
                    <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">View Records</h2>
                        <p className="text-gray-600 mb-4">Browse and manage existing records</p>
                        <Link href="/retrieve" 
                            className="inline-block w-full bg-green-600 text-white text-center py-3 rounded-lg hover:bg-green-700 transition duration-300">
                            View Data
                        </Link>
                    </div>

                    {/* Update Card */}
                    <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Update Records</h2>
                        <p className="text-gray-600 mb-4">Modify existing records</p>
                        <Link href="/update" 
                            className="inline-block w-full bg-amber-600 text-white text-center py-3 rounded-lg hover:bg-amber-700 transition duration-300">
                            Update Data
                        </Link>
                    </div>

                    {/* Delete Card */}
                    <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Delete Records</h2>
                        <p className="text-gray-600 mb-4">Remove unwanted records</p>
                        <Link href="/retrieve" 
                            className="inline-block w-full bg-red-600 text-white text-center py-3 rounded-lg hover:bg-red-700 transition duration-300">
                            Manage Deletions
                        </Link>
                    </div>

                    {/* Login Card */}
                    <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Login</h2>
                        <p className="text-gray-600 mb-4">Access your account</p>
                        <Link href="/login" 
                            className="inline-block w-full bg-purple-600 text-white text-center py-3 rounded-lg hover:bg-purple-700 transition duration-300">
                            Go to Login
                        </Link>
                    </div>

  {/* Report Card */}
                    <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">View Reports</h2>
                        <p className="text-gray-600 mb-4">Browse and manage existing records</p>
                        <Link href="/report" 
                            className="inline-block w-full bg-gray-600 text-white text-center py-3 rounded-lg hover:bg-green-700 transition duration-300">
                            View Report
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
}