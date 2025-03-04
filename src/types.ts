import React from 'react';

export interface ExperienceDetailsProps {
  title: string;
  status: string | string[];
  imageUrl?: string;
  content: React.ReactNode;
} 