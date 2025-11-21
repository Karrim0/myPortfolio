import React from 'react';
import Background from './Background/Background';

export default function Spinner() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 z-50">
      <Background />
    </div>
  );
}