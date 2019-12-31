export class Pokemon {
    public constructor(init?: Partial<Pokemon>) {
        Object.assign(this, init);
    }
    public name: string;
    public stats: Array<Stat>;
    public sprites: any;
    public types: Array<Type>; //has url to type damage relationships
}

export class Type {
    public constructor(init?: Partial<Type>) {
        Object.assign(this, init);
    }

    public slot: number;
    public type: UrlNamePair;
}

export class Stat {
    public constructor(init?: Partial<Type>) {
        Object.assign(this, init);
    }

    public stat: UrlNamePair;
    public effort: number;
    public base_state: number;
}

export class UrlNamePair {
    public constructor(init?: Partial<Type>) {
        Object.assign(this, init);
    }

    public url: string;
    public name: string;
}