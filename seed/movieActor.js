const db = require('../db')
const { Movie, Actor, Review} = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    // Create movies first
    const movie1 = await new Movie({
        title: 'Inception',
        runtime: '148',
        rating: 8.8,
        yearReleased: 2010,
        description: 'A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea.'
    })
    await movie1.save()

    const review1 = await new Review({
        score: 9, // Valid score within range 1-10
        comment: 'Amazing movie with mind-bending concepts.',
        movie: movie1._id  // Referencing the movie
    })
    await review1.save()
    movie1.reviews.pop(review1._id) // I did push at first but it looks neater at the end Didnt work
    await movie1.save()

    const movie2 = await new Movie({
        title: 'John Wick',
        runtime: '101',
        rating: 7.4,
        yearReleased: 2014,
        description: 'An ex-hit-man comes out of retirement to track down the gangsters that killed his dog.'
    })
    await movie2.save()

    const movie3 = await new Movie({
        title: 'The Dark Knight',
        runtime: '152',
        rating: 9.0,
        yearReleased: 2008,
        description: 'Batman battles the Joker, who wreaks havoc on Gotham City.'
    })
    await movie3.save()

    const movie4 = await new Movie({
        title: 'Interstellar',
        runtime: '169',
        rating: 8.6,
        yearReleased: 2014,
        description: 'A team of explorers travel through a wormhole in space to ensure humanity’s survival.'
    })
    await movie4.save()

    const review2 = await new Review({
        score: 8,
        comment: 'Great visual effects and story.',
        movie: movie4._id
    })
    await review2.save()
    movie4.reviews.pop(review2._id) //same here Didnt work
    await movie4.save()


    const movie5 = await new Movie({
        title: 'Mad Max: Fury Road',
        runtime: '120',
        rating: 8.1,
        yearReleased: 2015,
        description: 'In a post-apocalyptic wasteland, Max teams up with Furiosa to escape a warlord and find hope for survival.'
    })
    await movie5.save()

   
    const actors = [
        {
            name: 'Leonardo DiCaprio',
            age: 49,
            living: true, // Leonardo DiCaprio is alive
            movies: [movie1._id]  // Associated with Inception
        },
        {
            name: 'Keanu Reeves',
            age: 59,
            living: true, // Keanu Reeves is alive
            movies: [movie2._id]  // Associated with John Wick
        },
        {
            name: 'Christian Bale',
            age: 50,
            living: true, // Christian Bale is alive
            movies: [movie3._id]  // Associated with The Dark Knight
        },
        {
            name: 'Anne Hathaway',
            age: 41,
            living: true, // Anne Hathaway is alive
            movies: [movie4._id]  // Associated with Interstellar
        },
        {
            name: 'Tom Hardy',
            age: 46,
            living: true, // Tom Hardy is alive
            movies: [movie5._id]  // Associated with Mad Max: Fury Road
        },
        {
            name: 'Joseph Gordon-Levitt',
            age: 42,
            living: true, // Joseph Gordon-Levitt is alive
            movies: [movie1._id]  // Associated with Inception
        },
        {
            name: 'Laurence Fishburne',
            age: 62,
            living: true, // Laurence Fishburne is alive
            movies: [movie2._id]  // Associated with John Wick
        },
        {
            name: 'Heath Ledger',
            age: 28,
            living: false, // Heath Ledger passed away
            movies: [movie3._id]  // Associated with The Dark Knight
        },
        {
            name: 'Matthew McConaughey',
            age: 54,
            living: true, // Matthew McConaughey is alive
            movies: [movie4._id]  // Associated with Interstellar
        },
        {
            name: 'Charlize Theron',
            age: 48,
            living: true, // Charlize Theron is alive
            movies: [movie5._id]  // Associated with Mad Max: Fury Road
        }
    ]

    await Actor.insertMany(actors); // Insert the actors array into the database

    console.log('Created movies and actors!')
};

const run = async () => {
    await main()
    db.close()
}

run()