export type TVehicle ={
    id:string;
    modelYear:string;
    apiUrl:string;
    media:TVehicleMedia[];
    detail?: TVehicleDetail
}

export type TVehicleMedia= { name:string; url:string};
export type TVehicleDetail ={
    id:string;
    description:string;
    price:string;
    meta:TVehicleMeta;
}

export type TVehicleMeta ={
    passengers: number;
    drivetrain: string[];
    bodystyles: string[];
    emissions: {
        template: string;
        value: number;
    };
}
