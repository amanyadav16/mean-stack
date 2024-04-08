export interface TableData {
    // _id: string
    enrollmentId: string
    firstName: string
    lastName: string
    gender: string
    year: string
    semester: string
    address: Address
    // __v: number
  }
  
  export interface Address {
    city: string
    state: string
    // _id: string
  }

  export type Action='add'| 'edit';