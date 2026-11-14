import React from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

export default function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#0f172a',
      color: 'white',
      fontFamily: 'Arial',
      padding: '30px'
    }}>
      <h1>SmartInvoice AI</h1>
      <p>Intelligent Invoicing & Accounting</p>

      <div style={{
        background: '#1e293b',
        padding: '20px',
        borderRadius: '15px',
        marginTop: '30px'
      }}>
        <h2>Welcome to SmartInvoice AI</h2>
        <p>Manage your invoices, clients and accounting with AI.</p>
        <button style={{
          background: '#2563eb',
          color: 'white',
          padding: '12px 20px',
          border: 'none',
          borderRadius: '8px'
        }}>
          Create your first invoice
        </button>
      </div>
    </div>
  );
}
