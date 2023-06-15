import Reference from '@/model/reference'; 

export default class Alternative {

    name: string;
    image: string;
    description: string;
    references: Array<Reference>;

    constructor(name: string, image: string, description: string, references: Array<Reference>) {
        this.name = name;
        this.image = image;
        this.description = description;
        this.references = references;
    }
    
}