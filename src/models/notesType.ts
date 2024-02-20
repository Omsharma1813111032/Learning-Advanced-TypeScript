export type Priority = 'high' | 'low' | 'medium'


export interface NoteType { 
    id?:number,
    text:string,
    priority?:Priority
}

export interface NoteProps { 
    id:number | string,
    text:string,
    priority:Priority
}
