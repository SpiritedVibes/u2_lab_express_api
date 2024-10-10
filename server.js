const express = require(`express`)
const cors = require(`cors`)
const PORT = process.env.PORT || 3005
const db = require(`./db`)
const {Actor, Movie, Review} = require(`./models`)

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('This is root!')
})


app.get('/actors', async (req, res) => {
    const actors = await Actor.find({})
    //sending our response as JSON
    res.json(actors)
  })

  
  app.get(`/actors/:id`, async (req,res)=> {
    try {
        const id = req.params
        const actor = await Actor.findById(id)
        if (!actor) throw Error(`404 Actor not found`)
            res.json(actor)
    }
    catch (e) {
        console.log(e)
        res.send(`Actor not found`)
    }
  })


 
app.get('/reviews', async (req, res) => {
    const sortBy = req.query.sortBy || 'asc'
    const reviews = await Review.find({})
    .sort({ score: sortBy === 'asc' ? 1 : -1 }) // 1 for ascending, -1 for descending easier than I tought

    //sending our response as JSON
    res.json(reviews)
  })

  
  app.get(`/reviews/:id`, async (req,res)=> {
    try {
        const id = req.params
        const review = await Review.findById(id)
        if (!review) throw Error(`404 Review not found`)
            res.json(review)
    }
    catch (e) {
        console.log(e)
        res.send(`Review not found`)
    }
  })

  
app.get('/movies', async (req, res) => {
    const sortBy = req.query.sortBy || 'newest'
    const movies = await Movie.find({})
    .sort({ yearReleased: sortBy === 'newest' ? -1 : 1 })
    //sending our response as JSON
    res.json(movies)
  })

 
  app.get(`/movies/:id`, async (req,res)=> {
    try {
        const id = req.params
        const movie = await Movie.findById(id)
        if (!movie) throw Error(`404 Movie not found`)
            res.json(movie)
    }
    catch (e) {
        console.log(e)
        res.send(`Movie not found`)
    }
  })

  app.get('/movieActor', async (req, res) => {
    try {
      const movies = await Movie.find({})
        .populate('actors') 
        .populate('reviews') 
      res.json(movies)
    } catch (e) {
      console.log(e)
      res.status(404).send('Movies or actors not found')
    }
  })
  

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})