import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';
function Parents(){
    const data = [
        {name: 'Learn', students: 400},
        {name: 'Play', students: 700}
        // {name: 'Geek-i-knack', students: 200},
        // {name: 'Geek-o-mania', students: 1000}
      ];
    return(
        <>
        <div className="flex justify-evenly pt-28 hell">
            <img src="https://clueylearning.com.au/wp-content/uploads/2019/08/parent-child-using-MySchool-website.jpg" alt="hel"/> 
            <div className="pt-12">
            <h1 className="text-6xl text-center pb-4 tracking-wider">Lets find </h1>
            <h1 className="text-6xl text-center pb-4 tracking-wider"> Parenting Guide </h1>
            <h1 className="text-6xl text-center pb-4 tracking-wider">and</h1>
            <h1 className="text-6xl text-center tracking-wider">Child Statistics</h1>
        </div>
        </div>
        <div>
        <BarChart width={600} height={600} data={data}>
    <Bar dataKey="students" fill="green" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="name" />
    <YAxis />
  </BarChart>
  </div>
  </>

    )
}
export default Parents;