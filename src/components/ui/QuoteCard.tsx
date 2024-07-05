// src/components/QuoteCard.tsx
import React from 'react';
import { Card, CardContent, CardDescription, CardTitle } from './card';
import { Button } from './button';

interface QuoteCardProps {
	quote: string;
	onSave: () => void;
}

const QuoteCard: React.FC<QuoteCardProps> = ({ quote, onSave }) => {
	return (
		<Card>
			<CardContent className='space-y-4'>
				<CardTitle>Random Quote</CardTitle>
				<CardDescription className='text-base font-semibold'>{quote}</CardDescription>
				<Button variant={'secondary'} onClick={onSave}>Save to List</Button>
			</CardContent>
		</Card>
	);
};

export default QuoteCard;
