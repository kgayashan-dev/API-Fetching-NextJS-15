// components/MenuList.tsx
"use client";

import { useEffect, useState } from 'react';
import { getMenus } from '@/utils/getMenus';

export default function MenuList() {
  const [menuState, setMenuState] = useState<{
    data?: Array<{
      id: number;
      accessName: string;
      navigationURL: string;
      accessOrder: number;
    }>;
    loading: boolean;
    error?: string;
  }>({ loading: true });

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const result = await getMenus();
        if (result.errors) {
          setMenuState({ 
            loading: false, 
            error: result.message || "Failed to load menus" 
          });
        } else {
          setMenuState({ 
            loading: false, 
            data: result.data 
          });
        }
      } catch (error) {
        setMenuState({ 
          loading: false, 
          error: "An unexpected error occurred" 
        });
      }
    };

    fetchMenus();
  }, []);

  if (menuState.loading) return (
    <div className="flex justify-center items-center h-20">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
      <span className="ml-3">Loading menus...</span>
    </div>
  );

  if (menuState.error) return (
    <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg">
      Error: {menuState.error}
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Menu Items</h2>
      <ul className="space-y-3">
        {menuState.data?.map((item) => (
          <li 
            key={item.id} 
            className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <a 
              href={item.navigationURL} 
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              {item.accessName}
            </a>
            <span className="text-sm text-gray-500">Order: {item.accessOrder}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}