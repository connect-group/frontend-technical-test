const vehiclesMock = [
    {
        id: "xe",
        modelYear: "k17",
        apiUrl: "/api/vehicle_xe.json",
        media: [
            {
                name: "vehicle",
                url: "/images/16x9/xe_k17.jpg",
            },
            {
                name: "vehicle",
                url: "/images/1x1/xe_k17.jpg",
            },
        ],
        detail: {
            id: "xe",
            description:
                "The most advanced, efficient and refined sports saloon that Jaguar has ever produced",
            price: "£30,000",
            meta: {
                passengers: 5,
                drivetrain: ["AWD", "RWD"],
                bodystyles: ["saloon"],
                emissions: {
                    template: "CO2 Emissions $value g/km",
                    value: 99,
                },
            },
        },
    },
    {
        id: "fpace",
        modelYear: "k17",
        apiUrl: "/api/vehicle_fpace.json",
        media: [
            {
                name: "vehicle",
                url: "/images/16x9/fpace_k17.jpg",
            },
            {
                name: "vehicle",
                url: "/images/1x1/fpace_k17.jpg",
            },
        ],
        detail: {
            id: "fpace",
            description: "Jaguar's luxury performance SUV.",
            price: "£40,000",
            meta: {
                passengers: 5,
                drivetrain: ["AWD", "RWD"],
                bodystyles: ["SUV"],
                emissions: {
                    template: "CO2 Emissions $value g/km",
                    value: 100,
                },
            },
        },
    },
    {
        id: "ftype",
        modelYear: "k17",
        apiUrl: "/api/vehicle_ftype.json",
        media: [
            {
                name: "vehicle",
                url: "/images/16x9/ftype_k17.jpg",
            },
            {
                name: "vehicle",
                url: "/images/1x1/ftype_k17.jpg",
            },
        ],
        detail: {
            id: "ftype",
            description: "Pulse-quickening, pure Jaguar sports car.",
            price: "£60,000",
            meta: {
                passengers: 2,
                drivetrain: ["AWD", "RWD"],
                bodystyles: ["COUPÉ", "CONVERTIBLE"],
                emissions: {
                    template: "CO2 Emissions $value g/km",
                    value: 234,
                },
            },
        },
    },
    {
        id: "ipace",
        modelYear: "k21",
        apiUrl: "/api/vehicle_ipace.json",
        media: [
            {
                name: "vehicle",
                url: "/images/16x9/ipace_k21.jpg",
            },
            {
                name: "vehicle",
                url: "/images/1x1/ipace_k21.jpg",
            },
        ],
        detail: {
            id: "ipace",
            description:
                "Introducing Jaguar's first all-electric performance SUV.",
            price: "£65,100",
            meta: {
                passengers: 4,
                drivetrain: ["AWD", "RWD"],
                bodystyles: ["COUPÉ", "CONVERTIBLE"],
                emissions: {
                    template: "CO2 Emissions $value g/km",
                    value: 0,
                },
            },
        },
    },
];
export default vehiclesMock;
