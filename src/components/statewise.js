import React, { useState, useEffect } from 'react';
import './statewise.css';
const Statewise = () => {
    const [data, setData] = useState({});
    const getCovidData = async () => {
        const res = await fetch('https://api.covid19india.org/state_district_wise.json');
        const ActualData = await res.json();
        console.log(ActualData);
        setData(ActualData);
    }
    console.log("DATA-----",data);
    useEffect(() => {
        getCovidData()
    }, []);
    return (
        <>
            <h1>INDIA Covid 19 tracker</h1>
            <div className="container-fluid mt-5">
                <div className="main-heading">
                    <h1 className="mb-5 text-center"><span className="font-weight-bold"> INDIA </span>COVID 19 DASHBOARD</h1>
                </div>
                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th>state</th>
                                <th>confirmed</th>
                                <th>recovered</th>
                                <th>deaths</th>
                                <th>active</th>
                                <th>updated</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(data).map((curElem, ind) => {
                                    return (
                                        <tr key={ind}>
                                            <th>{curElem}</th>
                                            
                                            <td>confirmed</td>
                                            <td>recovered</td>
                                            <td>deaths</td>
                                            <td>active</td>
                                            <td>updated</td>
                                        </tr>
                                        

                                    )
                                })

                            }


                        </tbody>
                    </table>

                </div>
            </div>
        </>
    )
}
export default Statewise;