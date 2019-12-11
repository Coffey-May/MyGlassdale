// Convert a raw data flower to an HTML representation of that flower
const SingleCriminalComponent = (criminal) => {
    return `
  <div class ="criminal--Inner" >
       <div> NAME:${criminal.name}</div>
       <div> AGE:${criminal.age}</div>
       <div> CONVICTION:${criminal.conviction}</div>
       <div> INCARCERATION START:${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}</div>
       <div> INCARCERATION END:${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}</div>
  </div>
   
    `
}

export default SingleCriminalComponent
