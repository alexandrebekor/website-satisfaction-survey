import React from 'react'
import Link from 'next/link'

const Pesquisa = () => {
    const save = async () => {
        const form = {
            Nome: 'Alexandre Bekor',
            Email: 'teste@teste',
            Whatsapp: 'teste11'
        }
        try {
            const response = await fetch('/api/save', {
                method: 'POST',
                body: JSON.stringify(form)
            })
            const data = await response.json()
        } catch (err) {
            console.log(data)
        }
    }

    return (
        <div>
            <h1>Pesquisa</h1>
            <label>Nome:</label>
            <input type="text" />
            <button onClick={ save }>Enviar</button>
        </div>
    )
}

export default Pesquisa