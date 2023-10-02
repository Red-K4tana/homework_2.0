import React, {useState} from 'react'
import s from './HW11.module.css'
import s2 from '../../s1-main/App.module.css'
import {restoreState} from '../hw06/localStorage/localStorage'
import SuperRange from './common/c7-SuperRange/SuperRange'
import {Box, Slider, styled, Typography} from "@mui/material";


/*
* 1 - передать значения в оба слайдера
* 2 - дописать типы и логику функции change
* 3 - сделать стили в соответствии с дизайном
* */

function HW11() {
	// for autotests // не менять // можно подсунуть в локалСторэдж нужные числа, чтоб увидеть как они отображаются
	const [value1, setValue1] = useState(restoreState<number>('hw11-value1', 0))
	const [value2, setValue2] = useState(restoreState<number>('hw11-value2', 50))

	const change = (event: Event, value: number | number[], activeThumb: number) => {
		// пишет студент // если пришёл массив - сохранить значения в оба useState, иначе в первый
		// примитивный вариант
		// if (Array.isArray(value)) {
		// 	setValue1(value[0])
		// 	setValue2(value[1])
		// } else {
		// 	setValue1(value)
		// }

		// правильный вариант
		if (Array.isArray(value)) {
			if (activeThumb === 0) {
				setValue1(value[0])
			} else {
				setValue2(value[1])
			}
		} else {
			setValue1(value)
		}

	}
	// =================================================================================================================
	const PrettoSlider = styled(Slider)({
		color: '#52af77',
		height: 8,
		'& .MuiSlider-track': {
			border: 'none',
		},
		'& .MuiSlider-thumb': {
			height: 24,
			width: 24,
			backgroundColor: '#fff',
			border: '2px solid currentColor',
			'&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
				boxShadow: 'inherit',
			},
			'&:before': {
				display: 'none',
			},
		},
		'& .MuiSlider-valueLabel': {
			lineHeight: 1.2,
			fontSize: 12,
			background: 'unset',
			padding: 0,
			width: 32,
			height: 32,
			borderRadius: '50% 50% 50% 0',
			backgroundColor: '#52af77',
			transformOrigin: 'bottom left',
			transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
			'&:before': { display: 'none' },
			'&.MuiSlider-valueLabelOpen': {
				transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
			},
			'& > *': {
				transform: 'rotate(45deg)',
			},
		},
	});
	// =================================================================================================================

	return (
		<div id={'hw11'}>
			<div className={s2.hwTitle}>Homework #11</div>

			<div className={s2.hw}>
				<div className={s.container}>
					<div className={s.wrapper}>
						<span id={'hw11-value'} className={s.number}>{value1}</span>
						<SuperRange
							id={'hw11-single-slider'}
							max={100}
							min={0}
							value={value1}
							onChange={change}
							sx={{
								'& .MuiSlider-thumb': {
									backgroundColor: '#ffffff',
									border: '4px solid #52af77',
								},
								'& .MuiSlider-track': {
									border: 'none',
									backgroundColor: '#52af77',
								},
							}}
							// сделать так чтоб value1 изменялось // пишет студент

						/>
					</div>
					<div className={s.wrapper}>
						<span id={'hw11-value-1'} className={s.number}>{value1}</span>
						<SuperRange
							id={'hw11-double-slider'}
							// сделать так чтоб value1/2 изменялось // пишет студент
							max={100}
							min={0}
							value={[value1, value2]}
							onChange={change}
						/>
						<span id={'hw11-value-2'} className={s.number}>{value2}</span>
					</div>
					<Box sx={{ m: 3 }} />
					<Typography gutterBottom>pretto.fr</Typography>
					<PrettoSlider
						valueLabelDisplay="auto"
						aria-label="pretto slider"
						defaultValue={20}
					/>
				</div>
			</div>
		</div>
	)
}

export default HW11
