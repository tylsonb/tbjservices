import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { Resend } from 'resend'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const resend = new Resend(env.RESEND_API_KEY)

  return {
    plugins: [
      react(),
      {
        name: 'resend-middleware',
        configureServer(server) {
          server.middlewares.use('/api/send-email', (req, res, next) => {
            if (req.method !== 'POST') return next()

            let body = ''
            req.on('data', chunk => {
              body += chunk.toString()
            })

            req.on('end', async () => {
              try {
                const data = JSON.parse(body)
                const { nombre, email, telefono, equipo, servicio, enciende, problema } = data

                const response = await resend.emails.send({
                  from: 'onboarding@resend.dev',
                  to: 'tbj.computers@gmail.com', // IMPORTANTE: Cambia esto por tu correo real
                  subject: `Nueva cotización de ${nombre}`,
                  html: `
                    <h2>Nueva solicitud de servicio</h2>
                    <p><strong>Nombre:</strong> ${nombre}</p>
                    <p><strong>Email:</strong> ${email || 'No proporcionado'}</p>
                    <p><strong>Teléfono:</strong> ${telefono}</p>
                    <p><strong>Equipo:</strong> ${equipo}</p>
                    <p><strong>Servicio:</strong> ${servicio}</p>
                    <p><strong>¿Enciende?:</strong> ${enciende}</p>
                    <p><strong>Problema:</strong> ${problema}</p>
                  `
                })

                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({ success: true, data: response }))
              } catch (error) {
                console.error(error)
                res.statusCode = 500
                res.end(JSON.stringify({ error: error.message }))
              }
            })
          })
        }
      }
    ],
  }
})
