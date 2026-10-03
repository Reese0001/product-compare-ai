import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import AddProductsPage from './pages/AddProductsPage';
import CreateComparisonPage from './pages/CreateComparisonPage';
import HomePage from './pages/HomePage';
import ResultPage from './pages/ResultPage';
import { mockProducts, mockProject, mockRecommendations } from './data/mockProducts';
import './styles/global.css';

function App() {
  const [step, setStep] = useState('home');
  const [project, setProject] = useState(mockProject);

  if (step === 'create') {
    return <CreateComparisonPage project={project} onProjectChange={setProject} onNext={() => setStep('products')} />;
  }

  if (step === 'products') {
    return <AddProductsPage project={project} products={mockProducts} onGenerate={() => setStep('result')} />;
  }

  if (step === 'result') {
    return (
      <ResultPage
        project={project}
        products={mockProducts}
        recommendations={mockRecommendations}
        onRestart={() => setStep('home')}
      />
    );
  }

  return <HomePage onStart={() => setStep('create')} />;
}

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
