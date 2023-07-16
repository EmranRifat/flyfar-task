import React from 'react';
import { Tab } from '@headlessui/react'
import Table from './Table';
import Table2 from './Table2';

// eslint-disable-next-line react/prop-types
const Tabs = ({setFee,setTable}) => {
  return (
    <div className='bg-base-100 w-[763px]'>
<Tab.Group>
      <Tab.List >
        <div className='space-x-16'>
     <button className='btn btn-ghost'>   <Tab>FLIGHT DETAILS</Tab></button>
     <button onClick={()=>setTable(true)} className='btn btn-ghost'>   <Tab>FARE SUMMARY</Tab></button>
     <button onClick={()=>setFee(true)}className='btn btn-ghost'>   <Tab>FARE SUMMARY</Tab></button>
     <button className='btn btn-ghost'>   <Tab>BAGGAGE</Tab></button>
     
        </div>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel></Tab.Panel>
        <Tab.Panel><Table></Table></Tab.Panel>
        <Tab.Panel><Table2></Table2></Tab.Panel>
        <Tab.Panel>Content 4</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
    </div>
  );
};

export default Tabs;