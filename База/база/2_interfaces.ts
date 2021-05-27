interface Rect {
    readonly id: string;
    color?: string
    size: {
        width: number;
        heigth: number;
    }
}
const rect1: Rect = {
    id: '1234',
    size: {
        width: 20,
        heigth: 30
    },
    color: '#ccc'
}

const rect2: Rect = {
    id: '12345',
    size: {
        width: 10,
        heigth: 5
    }
}

rect2.color = 'black';

const rect3 = {} as Rect;
const rect4 = <Rect>{};

//========================

interface RectWithArea extends Rect {
    getArea: () => number;
}

const rect5: RectWithArea = {
    id: '213',
    size: {
        width:20,
        heigth: 20
    },
    getArea(): number {
        return this.size.width * this.size.heigth;
    }
}

interface IClock {
    time: Date;
    setTime(date: Date): void;
}

class Clock implements IClock{
    time: Date = new Date();
    setTime(date: Date): void {
        this.time = date;
    }
}

//==============================

interface Styles {
    [key: string]: string; 
}

const css: Styles = {
    border: '1px solid black',
    marginTop: '2px',
    borderRedius: '5px',
}