export interface IDrawShape {
    name: string;
    size: number;
    color?: string;
    calculateSquare(): number;
}

export class Circle implements IDrawShape {
    name: string;
    size: number;
    color?: string;

    constructor(name: string, size: number, color?: string) {
        this.name = name;
        this.size = size;
        this.color = color;
    }

    public calculateSquare(): number {
        return Math.PI * this.size ** 2;
    }
}

export class Square implements IDrawShape {
    name: string;
    size: number;
    color?: string;

    constructor(name: string, size: number, color?: string) {
        this.name = name;
        this.size = size;
        this.color = color;
    }

    public calculateSquare(): number {
        return this.size ** 2;
    }
}


export function sortShapes(array: IDrawShape[]): string[] {
    return array
        .slice()
        .sort((a, b) => a.calculateSquare() - b.calculateSquare())
        .map(shape => shape.name);
}


interface IPaintShape extends IDrawShape {
    color: string;
}


interface IChangeShape extends IDrawShape {
    increaseSize(value: number): void;
    decreaseSize(value: number): void;
}


export class FilledFlexibleCircle implements IPaintShape, IChangeShape{
    name: string;
    size: number;
    color: string;

    constructor(name: string, size: number, color: string) {
        this.name = name;
        this.size = size;
        this.color = color;
    }

    public calculateSquare(): number {
        return Math.PI * this.size ** 2;
    }

    public increaseSize(value: number): void {
        this.size *= value
    }

    public decreaseSize(value: number): void{
        this.size /=  value
    }
}

