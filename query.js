const db = require('./db')
const { movie } = require('./models')


const findMovie = async () => {
  const movie = await movie.findOne()
  console.log("Movie Found:", )
}


const createMovie = async () => {
  const movie = await Movie.findOne()

}


const updateMovie = async () => {
  const updatedMovie = await Movie.findOneAndUpdate(
    {  },// what you are adding to
    { $set: {  } },// what are you adding
    { new: true, upsert: false } // makes sure that new document is not made
  );

  if (updatedMovie) {
    console.log("Movie Updated:", updatedMovie);
  } else {
    console.log("No Movie found with the given condition.")
  }
}


const deleteMovie = async () => {
  let deleted = await Movie.deleteOne({})//what are you deleting
  console.log("Deleted Movie:", deleted)
}


const findReview = async () => {
    const review = await review.findOne()
    console.log("Review Found:", )
  }
  
  
  const createReview = async () => {
    const review = await Review.findOne()
  
  }
  
  
  const updateReview = async () => {
    const updatedReview = await Review.findOneAndUpdate(
      {  },// what you are adding to
      { $set: {  } },// what are you adding
      { new: true, upsert: false } // makes sure that new document is not made
    )
  
    if (updatedReview) {
      console.log("Review Updated:", updatedReview);
    } else {
      console.log("No Review found with the given condition.")
    }
  }
  
  
  const deleteReview = async () => {
    let deleted = await Reivew.deleteOne({})//what are you deleting
    console.log("Deleted Review:", deleted)
  }
  

async function main() {
  try {
    
    // await findMovie()
    // await createMovie()
     // await updateMovie()
    // await deleteMovie()
  } catch (error) {
    console.log("Error:", error)
  } finally {
    await db.close()
  }
}

main()
