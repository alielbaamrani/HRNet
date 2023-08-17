import React from 'react'
import type { DatePickerProps } from 'antd'
import { DatePicker } from 'antd'

function Datepicker() {
  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString)
  }

  return (
    <div>
      <DatePicker onChange={onChange} />
    </div>
  )
}

export default Datepicker
