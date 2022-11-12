export interface TargetAudience {
    name: String;
    date: Date;
    usedBalance: Number;
    clicks: Number;
    linkedCampaigns: Number;
  }

export const TARGET_AUDIENCE: TargetAudience[] = [
    {
        name:'Joven-Adulto',
        date: new Date('17/07/1990'),
        usedBalance: 355,
        clicks: 45,
        linkedCampaigns: 2
    },
    {
        name:'Joven-Adolescente',
        date: new Date('17/07/1990'),
        usedBalance: 450,
        clicks: 26,
        linkedCampaigns: 15
    }
]