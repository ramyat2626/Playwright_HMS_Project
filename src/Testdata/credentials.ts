export const credentials = {
    admin: {username: 'miaaviAdmin', password: 'miaaviPassword'},
    doctor: {username: 'miaaviDoctor', password: 'miaaviPassword'},
    patient: {username: 'miaaviPatient', password: 'miaaviPassword'}
} as const

export type userRole = keyof typeof credentials