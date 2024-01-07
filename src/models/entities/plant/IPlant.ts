export interface IPlant{
    name: string;
    class:string;
    latinName: string;
    family: string;
    kingdom: string;
    maintenance: IMaintenanceItem[];
}

interface IMaintenanceItem{
    type: string;
    description: string;
}