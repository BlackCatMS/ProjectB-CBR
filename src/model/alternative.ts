import Link from '@/model/link'; 

export default class Alternative {

    name: string;
    image: string;
    description: string;
    references: Array<Link>;

    constructor(name: string, image: string, description: string, references: Array<Link>) {
        this.name = name;
        this.image = image;
        this.description = description;
        this.references = references;
    }
    
}