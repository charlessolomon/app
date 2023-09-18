import React from 'react'
import StatCard from './StatCard'
import {FiTruck} from 'react-icons/fi'
import './StatCollection.css'

function StatCollection() {
  return (
    <div className='StatCollection'>
        <StatCard label={"Vans"} icon={<FiTruck/>} number={"89"} colour={"#0C32BD"}/>
        <StatCard label={"Box Trucks"} icon={<FiTruck/>} number={"34"} colour={"#FD1F9B"}/>
        <StatCard label={"Rigid Trucks"} icon={<FiTruck/>} number={"45"} colour={"#FE8900"}/>
        <StatCard label={"Semi Trucks"} icon={<FiTruck/>} number={"23"} colour={"#8F43BE"}/>
        <StatCard label={"Crane Trucks"} icon={<FiTruck/>} number={"78"} colour={"#4EAE52"}/>
    </div>
  )
}

export default StatCollection