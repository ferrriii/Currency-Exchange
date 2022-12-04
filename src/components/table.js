import { Children } from 'react';

export function TableHead({headings}) {
  return (
    <thead>
    <tr className="text-gray text-left border-b-2 border-neutral-100">
      {headings.map( heading => 
      <th className="p-3" key={heading}>{heading}</th>
      )}
    </tr>
  </thead>
  )
}

export function TableColumns({cols}) {
  return (
    <>
    {cols.map(column => 
      <td className="p-3" key={column.key || column}>{column}</td>
    )}
    </>
  )
}

export function TableRows({children, ...props}) {
  // merge className property
  props.className = props.className + ' border-b-2 border-neutral-100'
  return (
    <tbody>
    {Children.map(children, child =>
      <tr {...props}>
      {child}
      </tr>
    )}
    </tbody>
  )
}

export function Table({children, ...props}) {
  // merge className property
  props.className = props.className + ' bg-white w-full p-4  shadow-md'
  return (
    <table {...props}>
      {Children.map(children, child => 
        <>{child}</>
      )}
    </table>
  )
}