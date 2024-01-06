import express from 'express'
import payload from 'payload'

require('dotenv').config()
const app = express()

// Redirect root to Admin panel
app.get('/', (_, res) => {
    res.redirect('/admin')
})

const start = async () => {
    // Initialize Payload
    await payload.init({
        secret: process.env.PAYLOAD_SECRET,
        express: app,
        onInit: async () => {
            payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
        },
    })

    // Add your own express routes here
    // Find the first port that is available to use (starting at 3000)
    const port = await findPort(3000)

    app.listen(port, () => {
        payload.logger.info(`Server running at http://localhost:${port}`)
    });
}

const findPort = async (port: number): Promise<number> => {
    return new Promise((resolve, reject) => {
        const server = app.listen(port)
        server.on('error', () => {
            resolve(findPort(port + 1))
        })
        server.on('listening', () => {
            server.close()
            resolve(port)
        })
    })
}

start()
