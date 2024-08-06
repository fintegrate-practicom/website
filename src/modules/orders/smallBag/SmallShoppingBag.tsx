import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import './smallShoppingBag.css';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Typography,
} from '@mui/material';
=======
import "./smallShoppingBag.css";
import Typography from '../../../common/components/Typography/Typography'
import { Table, TableBody, TableCell, TableHead, TableRow} from '@mui/material';
>>>>>>> f8b73226242f36f204d36727c38172d2ad2806b7

const bag = [
	{
		id: 1,
		image: '/dress.jpg',

		name: 'casual dress',
		model: 'blue flowers',
		description: 'bla bla...',
		price: 125.9,
		size: 4,
		amount: 1,
	},
	{
		id: 2,
		image: '/dress.jpg',

		name: 'casual dress',
		model: 'blue flowers',
		description: 'bla bla...',
		price: 125.9,
		size: 6,
		amount: 1,
	},
	{
		id: 3,
		image: '/dress.jpg',
		name: 'snickers',
		model: 'red',
		description: 'bla bla...',
		price: 89.9,
		size: 28,
		amount: 1,
	},
	{
		id: 4,
		image: '/dress.jpg',
		name: 'snickers',
		model: 'red',
		description: 'bla bla...',
		price: 89.9,
		size: 28,
		amount: 1,
	},
];

const SmallShoppingBag = () => {
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setIsVisible(false);
		}, 3000);

		return () => clearTimeout(timeoutId);
	}, []);

	return (
		<div className='shopping-bag-container'>
			{isVisible && (
				<>
					<Typography className='shopping-bag-title'>סל קניות</Typography>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell>פריטים</TableCell>
								<TableCell>דגם</TableCell>
								<TableCell>כמות</TableCell>
								<TableCell>מחיר</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{bag.map((item) => (
								<TableRow key={item.id}>
									<div className='product-name'>
										<TableCell>
											<div className='image-text-container'>
												<img
													src={item.image}
													width='50px'
													className='product-image'
												/>
												<span className='product-text'>{item.name}</span>
											</div>
										</TableCell>
									</div>

									<TableCell>{item.model}</TableCell>
									<TableCell>{item.amount}</TableCell>
									<TableCell>{item.price} ₪</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</>
			)}
		</div>
	);
};

export default SmallShoppingBag;
