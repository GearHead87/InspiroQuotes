// src/App.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import QuoteCard from './components/ui/QuoteCard';
import './App.css'

const App: React.FC = () => {
	const [quote, setQuote] = useState<string>('');
	const [savedQuotes, setSavedQuotes] = useState<string[]>(() => {
		const saved = localStorage.getItem('savedQuotes');
		return saved ? JSON.parse(saved) : [];
	});

	const fetchQuote = async () => {
		try {
			const response = await axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
			setQuote(response.data[0]);
		} catch (error) {
			console.error('Error fetching quote:', error);
		}
	};

	const saveQuote = () => {
		const newSavedQuotes = [...savedQuotes, quote];
		setSavedQuotes(newSavedQuotes);
		localStorage.setItem('savedQuotes', JSON.stringify(newSavedQuotes));
	};

	useEffect(() => {
		fetchQuote();
	}, []);

	return (
		<div className="text-center p-5">
			<h1 className='text-2xl mb-5'>Random Quote Generator</h1>
			{quote && <QuoteCard quote={quote} onSave={saveQuote} />}
			<h2 className='text-2xl mt-5 font-semibold'>Saved Quotes</h2>
			<ul className=''>
				{savedQuotes.map((savedQuote, index) => (
					<li className='bg-slate-600 text-white mx-auto max-w-lg p-3  m-3 rounded-lg' key={index}>{savedQuote}</li>
				))}
			</ul>
		</div>
	);
};

export default App;
