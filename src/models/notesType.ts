export interface NoteType { 
    id?:number,
    text:string,
    priority?:'high' | 'low' | 'medium'
}

export interface NoteProps { 
    id:number,
    text:string,
    priority:'high' | 'low' | 'medium'
}
