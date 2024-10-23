import React from 'react';

const OnePage = () => {
    return (
        <div class="container mx-auto p-4">
            <div class="text-center mb-12">
                <h1 class="text-3xl font-bold text-teal-500">PTE AI Practice Platform</h1>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 ">
                
                <div class="bg-white border rounded-tl-lg p-6 text-center">
                    <div class="text-teal-500 text-5xl mb-4">📄</div>
                    <h2 class="text-lg font-bold text-gray-700">Daily Updated</h2>
                    <p class="text-gray-500">0 Exam Questions, Highly Repeated</p>
                </div>

                
                <div class="bg-white border p-6 text-center">
                    <div class="text-teal-500 text-5xl mb-4">🎤</div>
                    <h2 class="text-lg font-bold text-gray-700">Speaking AI</h2>
                    <p class="text-gray-500">Simulate PTE official scoring engine</p>
                </div>

                
                <div class="bg-white border rounded-tr-lg p-6 text-center">
                    <div class="text-teal-500 text-5xl mb-4">✍️</div>
                    <h2 class="text-lg font-bold text-gray-700">Writing AI</h2>
                    <p class="text-gray-500">Accurate Scoring, Grammar correction</p>
                </div>

                
                <div class="bg-white border rounded-bl-lg p-6 text-center">
                    <div class="text-teal-500 text-5xl mb-4">💡</div>
                    <h2 class="text-lg font-bold text-gray-700">Answers</h2>
                    <p class="text-gray-500">Quality answers provided by our team</p>
                </div>

                
                <div class="bg-white border p-6 text-center">
                    <div class="text-teal-500 text-5xl mb-4">🌍</div>
                    <h2 class="text-lg font-bold text-gray-700">Community</h2>
                    <p class="text-gray-500">Largest PTE Online Community</p>
                </div>

                
                <div class="bg-white border rounded-br-lg p-6 text-center">
                    <div class="text-teal-500 text-5xl mb-4">📊</div>
                    <h2 class="text-lg font-bold text-gray-700">Classification</h2>
                    <p class="text-gray-500">Questions categorized with ease</p>
                </div>
            </div>
        </div>

    );
};

export default OnePage;