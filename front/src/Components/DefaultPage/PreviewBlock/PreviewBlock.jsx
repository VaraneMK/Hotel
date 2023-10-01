import React from 'react';
import styles from './PreviewBlock.module.css';
import DateFrame from '../../UI/DateFrame/DateFrame';
import { useDispatch } from 'react-redux';
import { getRooms } from '../../../Redux/slices/userSlice';
import { useToast } from '@chakra-ui/react';
import { getDateToString } from '../../../constats';

function PreviewBlock() {
	const dispatch = useDispatch();
	const toast = useToast();
	const [toDate, setToDate] = React.useState(new Date());

	const [fromDate, setFromDate] = React.useState(new Date());

	const [persons, setPersons] = React.useState({ adults: 0, child: 0 });

	const handleSubmit = () => {
		if (fromDate > toDate) {
			if (persons.adults > 0) {
				dispatch(
					getRooms({
						start_date: getDateToString(toDate),
						end_date: getDateToString(fromDate),
						persons: persons.adults + persons.child,
					}),
				);
			} else {
				toast({
					title: 'Внимание',
					description: 'В заявке должен быть как минимум 1 взрослый человек',
					status: 'error',
					duration: 4000,
					isClosable: true,
					variant: 'customError',
				});
			}
		} else {
			toast({
				title: 'Внимание',
				description: 'Дата заезда должна быть раньше даты выезда',
				status: 'error',
				duration: 4000,
				isClosable: true,
				variant: 'customError',
			});
		}
	};

	return (
		<section className={styles.preview__block}>
			<div className={styles.preview__text}>
				{' '}
				<h1 className={styles.preview__title}>Добро пожаловать!</h1>
				<h3 className={styles.preview__subtitle}>
					В отеле «Счастье» каждый гость для нас особенный! Мы гарантируем вам приятное пребывание, радушный
					приём и заботу о каждой вашей потребности.
				</h3>
			</div>

			<DateFrame
				main={true}
				toDate={toDate}
				setToDate={setToDate}
				fromDate={fromDate}
				setFromDate={setFromDate}
				persons={persons}
				setPersons={setPersons}
				handleSubmit={handleSubmit}
			/>
		</section>
	);
}

export default PreviewBlock;
