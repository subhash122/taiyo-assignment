import { LineChart, CartesianGrid, XAxis, YAxis, Line, Legend, Tooltip } from 'recharts'

function CovidChart({ data }) {

    return (
        <div className='flex justify-center my-6'>
            <LineChart width={900} height={350} data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="4" vertical={false} />
                <XAxis dataKey='title' allowDataOverflow hide />
                <YAxis allowDataOverflow />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="cases" stroke="#8884d8" dot={false} />
                <Line type="monotone" dataKey="deaths" stroke="#fc0d21" />
                <Line type="monotone" dataKey="recovered" stroke="#82ca9d" />
            </LineChart>
        </div>
    )
}

export default CovidChart
