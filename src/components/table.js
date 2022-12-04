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
      <td className="p-3" key={column}>{column}</td>
    )}
    </>
  )
}

export function TableRows({children}) {
  return (
    <tbody>
    {Children.map(children, child =>
      <tr className="border-b-2 border-neutral-100">
      {child}
      </tr>
    )}
    </tbody>
  )
}

export function Table({children}) {
  return (
    <table className="bg-white w-full p-4  shadow-md">
      {Children.map(children, child => 
        <>{child}</>
      )}
    </table>
  )
}