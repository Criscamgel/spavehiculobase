export class Domain {
    public multiDomain: boolean;
    public domain: string;
    public title: string;
    constructor() {
        this.multiDomain = false;
        this.domain = 'app-vehiculo';
        this.title = 'Santander';
    }
}

export interface Domains {
    name: string;
    title: string;
}
