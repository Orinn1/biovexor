'use client';

import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function Toast({ message }) {
  if (!message) return null;

  return (
    <div className={`toast-pill ${message ? 'visible' : ''}`} role="alert">
      <CheckCircle2 size={16} style={{ color: '#38bdf8' }} />
      <span>{message}</span>
    </div>
  );
}
