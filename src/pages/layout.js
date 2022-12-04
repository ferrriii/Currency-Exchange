import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link, Outlet } from "react-router-dom";
import LoogoIcon from '@mui/icons-material/FindReplace';
import { useState } from 'react';

function LinkTab(props) {
  return (
    <Tab
      component={Link}
      onClick={props.onClick}
      {...props}
    />
  );
}

export function Layout(props) {
  console.log(props)
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="text-black font-sans font-normal text-base min-h-full bg-neutral-100">
      <div className="border-b-3 border-neutral-200 bg-white">
        <nav className="max-w-screen-lg mx-auto flex">
          <div className="flex items-center pr-6 text-xl">
            <LoogoIcon color="primary"/>
            <span>Currency<b>Exchange</b></span>
          </div>

          {/* <div className="py-5 px-6 b border-b-3 border-primary font-bold" >CURRENCY CONVERTER</div>
          <Link to="/history" className="py-5 px-6 text-gray">VIEW CONVERSTION HISTORY</Link> */}

          <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
            <LinkTab label="CURRENCY CONVERTER" to="/" />
            <LinkTab label="VIEW CONVERSTION HISTORY" to="/history" />
          </Tabs>

          <span className="ml-auto text-primary font-bold flex items-center">LOGOUT</span>
        </nav>
      </div>

      <div className="py-10">
        <div className="max-w-screen-lg mx-auto">
          <Outlet/>
        </div>
      </div>

    </div>
  )
}