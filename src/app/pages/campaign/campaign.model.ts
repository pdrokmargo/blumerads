export interface Campaign {
    name: String;
    state: Number;
    saldo: Number;
    clicks: Number;
    date: Date;
  }

export const CAMPAIGNS: Campaign[] = [
    {
        name:'Blackhost Soluciones digitales',
        state: 1,
        saldo: 150,
        clicks: 42,
        date: new Date('17/07/1990')
    },
    {
        name:'Rappy',
        state: 1,
        saldo: 350,
        clicks: 95,
        date: new Date('17/07/1990')
    },
    {
        name:'Rappy',
        state: 1,
        saldo: 255,
        clicks: 70,
        date: new Date('17/07/1990')
    },
]