export type ApiUrl = {
  "/api/vehicles.json": VehicleOverview[];
  "/api/vehicle_xe.json": VehicleDetails;
  "/api/vehicle_xf.json": VehicleDetails;
  "/api/vehicle_xj.json": VehicleDetails;
  "/api/vehicle_ipace.json": VehicleDetails;
  "/api/vehicle_ftype.json": VehicleDetails;
  "/api/vehicle_fpace.json": VehicleDetails;
};

export type Media = {
  name: string;
  url: string;
};

export type Meta = {
  passengers: number;
  drivetrain: string[];
  bodystyles: string[];
  emissions: {
    template: string;
    value: number;
  };
};

export type VehicleDetails = {
  id: string;
  description: string;
  price: string;
  meta: Meta;
};

export type VehicleOverview = {
  id: string;
  modelYear: string;
  apiUrl: string;
  media: Media[];
};

export type MergedVehicleDetails = VehicleOverview & VehicleDetails;
