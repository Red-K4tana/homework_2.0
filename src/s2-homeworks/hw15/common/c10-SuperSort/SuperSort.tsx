import React from 'react'
import s from '../../HW15.module.css'


// добавить в проект иконки и импортировать

const downIcon = 'https://img.icons8.com/material-rounded/48/sort-down.png'
const upIcon = 'https://img.icons8.com/material-rounded/48/sort-up.png'
const noneIcon = 'https://img.icons8.com/material-rounded/48/sort.png'

export type SuperSortPropsType = {
  id?: string
  sort: string
  value: string
  onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
  // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
  if (sort === '') {
    return down
  } else if (sort === down) {
    return up
  } else if (sort === up) {
    return ''
  } else {
    return down
  }
}

const SuperSort: React.FC<SuperSortPropsType> = (
  {sort, value, onChange, id = 'hw15',}
) => {
  const up = '0' + value
  const down = '1' + value

  const onChangeCallback = () => {
    onChange(pureChange(sort, down, up))
  }

  const icon = sort === down
    ? downIcon
    : sort === up
      ? upIcon
      : noneIcon

  return (
    <span
      className={s.rowHeader_Span}
      id={id + '-sort-' + value}
      onClick={onChangeCallback}
    >
            {/*сделать иконку*/}
      <img
        id={id + '-icon-' + sort}
        src={icon}
      />
    </span>
  )
}

export default SuperSort
