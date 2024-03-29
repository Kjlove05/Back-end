// require('dotenv').config()
// const express = require('express')
// const app = express()
// const cors = require('cors')
// app.use(cors())
// const mongoose = require('mongoose')
// const Note = require('./models/note')


// const requestLogger = (request, response, next) => {
//   console.log('Method:', request.method)
//   console.log('Path:  ', request.path)
//   console.log('Body:  ', request.body)
//   console.log('---')
//   next()
// }

// app.use(express.static('build'))
// app.use(express.json())
// app.use(requestLogger)



// let notes = [
//   {
//     id: 1,
//     content: 'HTML is easy',
//     date: '2022-05-30T17:30:31.098Z',
//     important: true
//   },
//   {
//     id: 2,
//     content: 'Browser can execute only Javascript',
//     date: '2022-05-30T18:39:34.091Z',
//     important: false
//   },
//   {
//     id: 3,
//     content: 'GET and POST are the most important methods of HTTP protocol',
//     date: '2022-05-30T19:20:14.298Z',
//     important: true
//   }
// ]


// // app.get('/', (request, response) => {
// //   response.send('<h1>Hello World!</h1>')
// // })

// // app.get('/api/notes', (request, response) => {
// //   response.json(notes)
// // })
// app.get('/api/notes', (request, response) => {
//   Note.find({}).then(notes => {
//     response.json(notes)
//   })
// })

// app.get('/api/notes/:id', (request, response) => {
//   const id = Number(request.params.id)
//   const note = notes.find(note => {
//     console.log(note.id, typeof note.id, id, typeof id, note.id === id)
//     return note.id === id
//   })
//   console.log(note)
//   response.json(note)
// })
// app.delete('/api/notes/:id', (request, response, next) => {
//   Note.findByIdAndRemove(request.params.id)
//     .then(result => {
//       response.status(204).end()
//     })
//     .catch(error => next(error))
// })

// // app.delete('/api/notes/:id', (request, response) => {
// //   const id = Number(request.params.id)
// //   notes = notes.filter(note => note.id !== id)

// //   response.status(204).end()
// // })

// app.get('/api/notes/:id', (request, response, next) => {
//   Note.findById(request.params.id).
//     then(note => {
//       if (note) {
//         response.json(note)
//       } else {
//         response.status(404).end()
//       }
//     })
//     .catch(error => next(error))
// })


// // const generateId = () => {
// //   const maxId = notes.length > 0
// //     ? Math.max(...notes.map(n => n.id))
// //     : 0
// //   return maxId + 1
// // }

// // app.post('/api/notes', (request, response) => {
// //   const body = request.body

// //   if (!body.content) {
// //     return response.status(400).json({
// //       error: 'content missing'
// //     })
// //   }

// //   const note = {
// //     content: body.content,
// //     important: body.important || false,
// //     date: new Date(),
// //     id: generateId(),
// //   }

// //   notes = notes.concat(note)

// //   response.json(note)
// // })
// app.post('/api/notes', (request, response, next) => {
//   const body = request.body


//   const note = new Note({
//     content: body.content,
//     important: body.important || false,
//     date: new Date(),
//   })

//   note.save().then(savedNote => {
//     response.json(savedNote)
//   })
//     .catch(error => next(error))
// })


// const unknownEndpoint = (request, response) => {
//   response.status(404).send({ error: 'unknown endpoint' })
// }
// app.use(unknownEndpoint)

// const errorHandler = (error, request, response, next) => {
//   console.error(error.message)

//   if (error.name === 'CastError') {
//     return response.status(400).send({ error: 'malformatted id' })
//   }
//   else if (error.name === 'ValidationError') {
//     return response.status(400).json({ error: error.message })
//   }

//   next(error)
// }

// // this has to be the last loaded middleware.
// app.use(errorHandler)


// app.put('/api/notes/:id', (request, response, next) => {
//   const { content, important } = request.body



//   Note.findByIdAndUpdate(request.params.id,
//     { content, important },
//     { new: true, runValidators: true, context: 'query' })
//     .then(updatedNote => {
//       response.json(updatedNote)
//     })
//     .catch(error => next(error))
// })

// // const Note = mongoose.model('Note', noteSchema)
// const PORT = process.env.PORT
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`)
// })
const app = require('./app') // the actual Express application
const http = require('http')
const config = require('./utils/config')
const logger = require('./utils/logger')

const server = http.createServer(app)

server.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`)
})