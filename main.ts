type Odber = {
    time: number; //s
    power: number;  //watty
}

let data: Array<Odber> = [
    { time: 3600, power: 3500 },
    { time: 1800, power: 3560, },
    { time: 1580, power: 3570, },
    { time: 1000, power: 1500, },
    { time: 2780, power: 5000, },
]

let cena = 6.80;

for (let i: number = 0; i < data.length; i += 1) {
    let kwh: number = (data[i].power / 1000) * (data[i].time / 3600);
    
    let fullPrice: number = kwh * cena;
    console.log(fullPrice)
}