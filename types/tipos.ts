interface IUsuario {
    id?: number
    createdAt?: Date
    updatedAt?: Date
    email?: string
    nombre?: string
    password?: string
    empresa?: string
}

interface IError {
    message: string
}