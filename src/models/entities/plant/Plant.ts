import { IPlant } from "./IPlant";

const maintenanceType={
    water: "Watering",
    prune: "Pruning",
    sun: "Sunlight",
    temp: "Temperature",
    soil: "SoilType"
}

export const PlantDatabase : IPlant[] =[
    {
        class: "Aglaonema",
        name: "Chinese Evergreen",
        latinName: "Aglaonema",
        family: "Araceae",
        kingdom: "Plantae",
        maintenance:[
            {
                type: maintenanceType.water,
                description: "Keep soil consistently moist, watering when the top 1-2 inches (2.5-5 cm) are dry, and reduce frequency during winter.",
            },
            {
                type: maintenanceType.prune,
                description: "Trim yellow or damaged leaves regularly and remove flowers to promote new growth.",
            },
            {
                type: maintenanceType.sun,
                description: "Thrives in low to moderate light, avoid direct sun, and ensure it receives at least 10-12 hours of light per day.",
            },
            {
                type: maintenanceType.temp,
                description: "Maintain an ideal range between 65-75°F (18-24°C) and shield from drafts or sudden temperature changes.",
            },
            {
                type: maintenanceType.soil,
                description: "Use well-draining, peat-based mix with a slightly acidic to neutral pH for optimal growth.",
            },
        ]
    },
    {
        class: "Alocasia",
        name: "Elephant Ear Plant",
        latinName: "Alocasia",
        family: "Araceae",
        kingdom: "Plantae",
        maintenance:[
            {
                type: maintenanceType.water,
                description: "Keep the soil consistently moist, aiming for 1-2 inches (2.5-5 cm) of water per week, allowing the top inch (2.5 cm) to dry between waterings.",
            },
            {
                type: maintenanceType.prune,
                description: "Trim yellow or damaged leaves regularly and remove any spent flowers or stems to encourage new growth.",
            },
            {
                type: maintenanceType.sun,
                description: "Provide bright, indirect light, avoiding prolonged exposure to direct sunlight to prevent leaf scorch.",
            },
            {
                type: maintenanceType.temp,
                description: "Maintain a warm environment, ideally between 65-80°F (18-27°C), and avoid temperatures below 50°F (10°C).",
            },
            {
                type: maintenanceType.soil,
                description: "Use a well-draining potting mix rich in organic matter, and ensure the container has drainage holes to prevent waterlogging.",
            },
        ]
    },
    {
        class: "BegoniaRex",
        name: "Rex Begonia",
        latinName: "Begonia rex",
        family: "Begoniaceae",
        kingdom: "Plantae",
        maintenance:[
            {
                type: maintenanceType.water,
                description: "Keep the soil consistently moist but not waterlogged, providing water when the top 1-2 inches (2.5-5 cm) of soil feels dry.",
            },
            {
                type: maintenanceType.prune,
                description: "Pinch or trim back leggy stems regularly and remove any damaged or yellow leaves for a bushier appearance.",
            },
            {
                type: maintenanceType.sun,
                description: "Provide bright, indirect light; protect from intense, direct sunlight, favoring dappled or filtered sunlight conditions.",
            },
            {
                type: maintenanceType.temp,
                description: "Maintain a warm environment between 60-75°F (15-24°C), and avoid exposure to temperatures below 50°F (10°C).",
            },
            {
                type: maintenanceType.soil,
                description: "Use a well-draining, peat-based potting mix to ensure proper aeration and water drainage for optimal growth.",
            },
        ]
    },
    {
        class: "BostonFern",
        name: "Boston Fern",
        latinName: "Nephrolepis exaltata",
        family: "Lomariopsidaceae",
        kingdom: "Plantae",
        maintenance:[
            {
                type: maintenanceType.water,
                description: "Keep the soil consistently moist, providing 1-1.5 inches (2.5-3.8 cm) of water per week and ensuring the soil doesn't dry out completely.",
            },
            {
                type: maintenanceType.prune,
                description: "Trim away yellow or damaged fronds regularly and remove any dead material to encourage new growth and maintain a tidy appearance",
            },
            {
                type: maintenanceType.sun,
                description: "Provide bright, indirect light; Boston Ferns thrive in filtered sunlight and can tolerate some shade.",
            },
            {
                type: maintenanceType.temp,
                description: "Maintain a cool to moderate environment, ideally between 60-75°F (15-24°C), and avoid exposure to drafts or extreme temperatures.",
            },
            {
                type: maintenanceType.soil,
                description: "Use a well-draining, acidic potting mix with added organic matter, and ensure good aeration for the fern's root system.",
            },
        ]
    },
    {
        class: "BunnyEarCactus",
        name: "Bunny Ear Cactus",
        latinName: "Opuntia microdasys",
        family: "Cactaceae",
        kingdom: "Plantae",
        maintenance:[
            {
                type: maintenanceType.water,
                description: "Allow the soil to dry out completely between waterings, providing approximately 1 inch (2.5 cm) of water every 2-3 weeks during the growing season and reducing in winter.",
            },
            {
                type: maintenanceType.prune,
                description: "Minimal pruning is needed; remove any damaged or dead pads using tongs or gloves to avoid the cactus's spines.",
            },
            {
                type: maintenanceType.sun,
                description: "Thrives in full sun; provide at least 6 hours of direct sunlight daily for optimal growth.",
            },
            {
                type: maintenanceType.temp,
                description: "Prefers warm temperatures; keep Bunny Ear Cactus in an environment with temperatures between 70-100°F (21-38°C) and protect from frost.",
            },
            {
                type: maintenanceType.soil,
                description: "Plant in well-draining cactus mix or sandy soil, ensuring good drainage to prevent root rot.",
            },
        ]
    },
    {
        class: "Chlorophytum comosum",
        name: "Spider Plant",
        latinName: "Chlorophytum comosum",
        family: "Asparagaceae",
        kingdom: "Plantae",
        maintenance:[
            {
                type: maintenanceType.water,
                description: "Keep the soil consistently moist, watering approximately 1-2 inches (2.5-5 cm) deep every 1-2 weeks, allowing the top inch (2.5 cm) to dry between waterings.",
            },
            {
                type: maintenanceType.prune,
                description: "Trim or remove brown or yellow leaves regularly and cut back baby spiderettes to encourage a fuller appearance.",
            },
            {
                type: maintenanceType.sun,
                description: "Thrives in bright, indirect light; can tolerate some direct sunlight but avoid prolonged exposure to prevent leaf scorch.",
            },
            {
                type: maintenanceType.temp,
                description: "Maintain a moderate environment between 60-75°F (15-24°C), avoiding extremes in temperature.",
            },
            {
                type: maintenanceType.soil,
                description: "Use well-draining, lightweight potting mix, and consider repotting every 1-2 years to refresh the soil and provide space for growth.",
            },
        ]
    },
    {
        class: "CrassulaPortulaca",
        name: "Moss Rose",
        latinName: "Portulaca grandiflora",
        family: "Portulacaceae",
        kingdom: "Plantae",
        maintenance:[
            {
                type: maintenanceType.water,
                description: "Water sparingly, allowing the soil to dry between waterings; provide approximately 1 inch (2.5 cm) of water every 1-2 weeks, depending on the weather.",
            },
            {
                type: maintenanceType.prune,
                description: "Pinch or trim spent flowers regularly to encourage continuous blooming and a tidy appearance.",
            },
            {
                type: maintenanceType.sun,
                description: "Thrives in full sun; requires at least 6 hours of direct sunlight daily for optimal growth and flowering.",
            },
            {
                type: maintenanceType.temp,
                description: "Prefers warm temperatures; Portulaca thrives in temperatures between 75-90°F (24-32°C).",
            },
            {
                type: maintenanceType.soil,
                description: "Plant in well-draining soil with a sandy or loamy texture, ensuring good drainage for the best performance.",
            },
        ]
    },
    {
        class: "Echeveria",
        name: "Echeveria",
        latinName: "Echeveria spp.",
        family: "Crassulaceae",
        kingdom: "Plantae",
        maintenance:[
            {
                type: maintenanceType.water,
                description: "Allow the soil to dry out between waterings, providing water when the top 1-2 inches (2.5-5 cm) are dry; avoid overwatering.",
            },
            {
                type: maintenanceType.prune,
                description: "Remove dead or damaged leaves at the base of the plant; Echeverias generally require minimal pruning.",
            },
            {
                type: maintenanceType.sun,
                description: "Place in bright, indirect light; Echeverias prefer at least 6 hours of sunlight daily for vibrant colors.",
            },
            {
                type: maintenanceType.temp,
                description: "Keep in a warm environment; Echeverias thrive between 65-75°F (18-24°C).",
            },
            {
                type: maintenanceType.soil,
                description: "Plant in well-draining succulent or cactus mix; ensure the pot has drainage holes to prevent water stagnation.",
            },
        ]
    },
    {
        class: "Epipremnum",
        name: "Devil's Ivy",
        latinName: "Epipremnum aureum",
        family: "Araceae",
        kingdom: "Plantae",
        maintenance:[
            {
                type: maintenanceType.water,
                description: "Allow the top inch (2.5 cm) of soil to dry between waterings, providing water when the soil feels slightly dry; water approximately every 1-2 weeks.",
            },
            {
                type: maintenanceType.prune,
                description: " Trim or cut back overgrown stems as needed to maintain the desired shape, and remove any yellow or damaged leaves.",
            },
            {
                type: maintenanceType.sun,
                description: "Thrives in bright, indirect light but can tolerate low light conditions; avoid direct sunlight, as it may scorch the leaves.",
            },
            {
                type: maintenanceType.temp,
                description: "Keep in a moderate environment; Epipremnum does well in temperatures between 60-80°F (15-27°C).",
            },
            {
                type: maintenanceType.soil,
                description: "Use well-draining potting mix; adaptable to various soil types, but good drainage is essential to prevent waterlogged roots.",
            },
        ]
    },
    {
        class: "FicusElastica",
        name: "Rubber Plant",
        latinName: "Ficus elastica",
        family: "Moraceae",
        kingdom: "Plantae",
        maintenance:[
            {
                type: maintenanceType.water,
                description: "Keep the soil consistently moist but not waterlogged; water when the top 1-2 inches (2.5-5 cm) of soil feels dry, typically every 1-2 weeks.",
            },
            {
                type: maintenanceType.prune,
                description: "Trim or remove any yellow or damaged leaves and prune for shape as needed, especially in the growing season.",
            },
            {
                type: maintenanceType.sun,
                description: "Thrives in bright, indirect light; can tolerate some direct sunlight but avoid prolonged exposure to prevent leaf burn.",
            },
            {
                type: maintenanceType.temp,
                description: "Maintain a warm environment; Rubber Plants do well in temperatures between 60-75°F (15-24°C).",
            },
            {
                type: maintenanceType.soil,
                description: "Use well-draining, aerated potting mix; a mix of peat, perlite, and pine bark works well for optimal growth.",
            },
        ]
    },
    {
        class: "Ficusbenjamina",
        name: "Weeping Fig",
        latinName: "Ficus benjamina",
        family: "Moraceae",
        kingdom: "Plantae",
        maintenance:[
            {
                type: maintenanceType.water,
                description: "Keep the soil consistently moist, watering when the top 1-2 inches (2.5-5 cm) of soil feels dry, typically every 1-2 weeks.",
            },
            {
                type: maintenanceType.prune,
                description: "Prune for shape and remove any yellow or damaged leaves regularly to encourage a bushy appearance.",
            },
            {
                type: maintenanceType.sun,
                description: "Thrives in bright, indirect light; can tolerate some direct sunlight but avoid sudden changes and prolonged exposure to prevent leaf drop.",
            },
            {
                type: maintenanceType.temp,
                description: "Maintain a warm environment; Weeping Figs prefer temperatures between 65-75°F (18-24°C).",
            },
            {
                type: maintenanceType.soil,
                description: "Use well-draining potting mix with added organic matter; a mix of peat, perlite, and pine bark is suitable for optimal growth.",
            },
        ]
    },
    {
        class: "Fiddle-leaf",
        name: "Fiddle-leaf Fig",
        latinName: "Ficus lyrata",
        family: "Moraceae",
        kingdom: "Plantae",
        maintenance:[
            {
                type: maintenanceType.water,
                description: "Allow the top 2-3 inches (5-7.5 cm) of soil to dry between waterings; water when the soil feels slightly dry, typically every 1-2 weeks.",
            },
            {
                type: maintenanceType.prune,
                description: "Minimal pruning is needed; remove any dead or yellow leaves, and prune for shape as necessary.",
            },
            {
                type: maintenanceType.sun,
                description: "Thrives in bright, indirect light; place near a window with filtered sunlight and avoid direct sun to prevent leaf burn.",
            },
            {
                type: maintenanceType.temp,
                description: "Maintain a warm environment; Fiddle-leaf Figs prefer temperatures between 65-75°F (18-24°C).",
            },
            {
                type: maintenanceType.soil,
                description: "Use well-draining potting mix; a blend of peat, perlite, and pine bark provides a suitable medium for optimal growth.",
            },
        ]
    },
    {
        class: "Jade plant",
        name: "Jade Plant",
        latinName: "Crassula ovata",
        family: "Crassulaceae",
        kingdom: "Plantae",
        maintenance:[
            {
                type: maintenanceType.water,
                description: "Allow the soil to dry out between waterings, providing water when the top 1-2 inches (2.5-5 cm) are dry; water approximately every 2-3 weeks.",
            },
            {
                type: maintenanceType.prune,
                description: "Trim or remove dead or leggy growth regularly to maintain a compact and bushy appearance.",
            },
            {
                type: maintenanceType.sun,
                description: "Thrives in bright, indirect light; provide at least 4 hours of direct sunlight daily for optimal growth.",
            },
            {
                type: maintenanceType.temp,
                description: "Keep in a moderate environment; Jade Plants prefer temperatures between 65-75°F (18-24°C).",
            },
            {
                type: maintenanceType.soil,
                description: "Plant in well-draining succulent or cactus mix; ensure the pot has drainage holes to prevent waterlogged roots.",
            },
        ]
    },
    {
        class: "Kalanchoe",
        name: "Kalanchoe",
        latinName: "Kalanchoe spp.",
        family: "Crassulaceae",
        kingdom: "Plantae",
        maintenance:[
            {
                type: maintenanceType.water,
                description: "Allow the soil to dry out between waterings, providing water when the top 1-2 inches (2.5-5 cm) are dry; water approximately every 2 weeks.",
            },
            {
                type: maintenanceType.prune,
                description: "Trim spent flowers regularly to promote continuous blooming and remove leggy growth for a compact shape.",
            },
            {
                type: maintenanceType.sun,
                description: "Thrives in bright, indirect light; provide at least 4-6 hours of sunlight daily for optimal growth.",
            },
            {
                type: maintenanceType.temp,
                description: "Keep in a warm environment; Kalanchoe prefers temperatures between 60-85°F (15-29°C).",
            },
            {
                type: maintenanceType.soil,
                description: " Use well-draining succulent or cactus mix; ensure the pot has drainage holes to prevent waterlogged roots.",
            },
        ]
    },
    {
        class: "Monstera deliciosa",
        name: "Swiss Cheese Plant",
        latinName: "Monstera deliciosa",
        family: "Araceae",
        kingdom: "Plantae",
        maintenance:[
            {
                type: maintenanceType.water,
                description: "Allow the top 1-2 inches (2.5-5 cm) of soil to dry between waterings, providing water every 1-2 weeks.",
            },
            {
                type: maintenanceType.prune,
                description: "Trim or cut back unruly or damaged leaves, and remove any yellowing leaves; allow for natural fenestration to develop.",
            },
            {
                type: maintenanceType.sun,
                description: "Thrives in bright, indirect light; can tolerate some shade, but avoid direct sunlight to prevent leaf burn.",
            },
            {
                type: maintenanceType.temp,
                description: " Keep in a warm environment; Monstera deliciosa prefers temperatures between 65-80°F (18-27°C).",
            },
            {
                type: maintenanceType.soil,
                description: "Plant in well-draining potting mix with added organic matter; a mix of peat, perlite, and pine bark is suitable for optimal growth.",
            },
        ]
    },
    {
        class: "Peperomia caperata",
        name: "Ripple Peperomia",
        latinName: "Peperomia caperata",
        family: "Piperaceae",
        kingdom: "Plantae",
        maintenance:[
            {
                type: maintenanceType.water,
                description: "Keep the soil consistently moist, watering when the top 1 inch (2.5 cm) of soil feels dry; water approximately every 7-10 days.",
            },
            {
                type: maintenanceType.prune,
                description: "Trim or pinch back leggy growth regularly to maintain a bushy shape, and remove any yellow or damaged leaves.",
            },
            {
                type: maintenanceType.sun,
                description: "Thrives in medium to low light conditions; avoid direct sunlight, as it can scorch the leaves.",
            },
            {
                type: maintenanceType.temp,
                description: "Keep in a warm environment; Peperomia caperata prefers temperatures between 65-75°F (18-24°C).",
            },
            {
                type: maintenanceType.soil,
                description: "Plant in well-draining soil mix; a combination of peat, perlite, and vermiculite provides a suitable medium for optimal growth",
            },
        ]
    },
    {
        class: "Philodendron Hope Selloum",
        name: "Philodendron Hope Selloum",
        latinName: "Philodendron bipinnatifidum",
        family: "Araceae",
        kingdom: "Plantae",
        maintenance:[
            {
                type: maintenanceType.water,
                description: "Keep the soil consistently moist, watering when the top 1-2 inches (2.5-5 cm) of soil feels dry; water approximately every 1-2 weeks.",
            },
            {
                type: maintenanceType.prune,
                description: "Trim yellow or damaged leaves regularly and prune for shape as needed; remove any stems that become leggy.",
            },
            {
                type: maintenanceType.sun,
                description: "Thrives in bright, indirect light; can tolerate some shade, but avoid direct sunlight to prevent leaf burn.",
            },
            {
                type: maintenanceType.temp,
                description: "Maintain a warm environment; Philodendron Hope Selloum prefers temperatures between 65-80°F (18-27°C).",
            },
            {
                type: maintenanceType.soil,
                description: "Plant in well-draining potting mix with added organic matter; a mix of peat, perlite, and pine bark is suitable for optimal growth.",
            },
        ]
    },
    {
        class: "PonytailPalm",
        name: "Ponytail Palm",
        latinName: "Beaucarnea recurvata",
        family: "Asparagaceae",
        kingdom: "Plantae",
        maintenance:[
            {
                type: maintenanceType.water,
                description: "Allow the soil to dry out between waterings, providing water every 2-3 weeks; ensure thorough watering, letting water reach a depth of 3-4 inches (7.5-10 cm).",
            },
            {
                type: maintenanceType.prune,
                description: "Minimal pruning is needed; remove any brown or damaged leaves at the base of the plant.",
            },
            {
                type: maintenanceType.sun,
                description: "Thrives in bright, indirect light; can tolerate some direct sunlight, but avoid prolonged exposure to prevent leaf burn.",
            },
            {
                type: maintenanceType.temp,
                description: "Keep in a warm environment; Ponytail Palms prefer temperatures between 60-75°F (15-24°C).",
            },
            {
                type: maintenanceType.soil,
                description: "Plant in well-draining soil mix; a combination of sandy and loamy soil is suitable for optimal growth.",
            },
        ]
    },
    {
        class: "Schefflera",
        name: "Umbrella Tree",
        latinName: "Schefflera spp.",
        family: "Araliaceae",
        kingdom: "Plantae",
        maintenance:[
            {
                type: maintenanceType.water,
                description: "Keep the soil evenly moist, providing water when the top 1-2 inches (2.5-5 cm) of soil feels dry; water approximately every 1-2 weeks.",
            },
            {
                type: maintenanceType.prune,
                description: "Trim or cut back leggy growth regularly to maintain a bushy shape, and remove any yellow or damaged leaves.",
            },
            {
                type: maintenanceType.sun,
                description: "Thrives in bright, indirect light; can tolerate some shade, but avoid direct sunlight to prevent leaf burn.",
            },
            {
                type: maintenanceType.temp,
                description: "Keep in a warm environment; Schefflera prefers temperatures between 60-75°F (15-24°C).",
            },
            {
                type: maintenanceType.soil,
                description: "Plant in well-draining potting mix; a blend of peat, perlite, and pine bark provides a suitable medium for optimal growth.",
            },
        ]
    },
    {
        class: "Solenostemon",
        name: "Coleus",
        latinName: "Solenostemon spp.",
        family: "Lamiaceae",
        kingdom: "Plantae",
        maintenance:[
            {
                type: maintenanceType.water,
                description: "Keep the soil consistently moist, providing water when the top 1 inch (2.5 cm) feels dry; water approximately every 1-2 weeks, depending on environmental conditions.",
            },
            {
                type: maintenanceType.prune,
                description: "Pinch back the growing tips regularly to encourage bushiness and remove any flower spikes to maintain vibrant foliage.",
            },
            {
                type: maintenanceType.sun,
                description: "Thrives in bright, indirect light; can tolerate some direct sunlight, but partial shade is ideal, especially in hot climates.",
            },
            {
                type: maintenanceType.temp,
                description: "Maintain a warm environment; Coleus prefers temperatures between 60-75°F (15-24°C).",
            },
            {
                type: maintenanceType.soil,
                description: "Plant in well-draining soil mix with added organic matter; a mix of peat, perlite, and compost provides a suitable medium for optimal growth.",
            },
        ]
    },
    {
        class: "Syngonium",
        name: "Arrowhead Plant",
        latinName: "Syngonium spp.",
        family: "Araceae",
        kingdom: "Plantae",
        maintenance:[
            {
                type: maintenanceType.water,
                description: "Keep the soil consistently moist, watering when the top 1-2 inches (2.5-5 cm) feel dry; water approximately every 1-2 weeks.",
            },
            {
                type: maintenanceType.prune,
                description: "Trim or pinch back leggy growth regularly to maintain a bushy shape, and remove any yellow or damaged leaves.",
            },
            {
                type: maintenanceType.sun,
                description: "Thrives in bright, indirect light; can tolerate some lower light conditions, but avoid prolonged direct sunlight.",
            },
            {
                type: maintenanceType.temp,
                description: "Keep in a warm environment; Syngonium prefers temperatures between 60-75°F (15-24°C)",
            },
            {
                type: maintenanceType.soil,
                description: "Plant in well-draining potting mix; a combination of peat, perlite, and pine bark is suitable for optimal growth.",
            },
        ]
    },
    {
        class: "Tradescantia fluminensis",
        name: "Wandering Jew",
        latinName: "Tradescantia fluminensis",
        family: "Commelinaceae",
        kingdom: "Plantae",
        maintenance:[
            {
                type: maintenanceType.water,
                description: "Keep the soil consistently moist, watering when the top 1 inch (2.5 cm) feels dry; water approximately every 7-10 days.",
            },
            {
                type: maintenanceType.prune,
                description: "Trim or pinch back leggy growth regularly to encourage bushiness, and remove any yellow or damaged leaves.",
            },
            {
                type: maintenanceType.sun,
                description: "Thrives in bright, indirect light; can tolerate some shade, but prefers moderate to bright light conditions.",
            },
            {
                type: maintenanceType.temp,
                description: "Maintain a warm environment; Wandering Jew prefers temperatures between 60-75°F (15-24°C).",
            },
            {
                type: maintenanceType.soil,
                description: "Plant in well-draining potting mix; a blend of peat, perlite, and vermiculite provides a suitable medium for optimal growth.",
            },
        ]
    },
    {
        class: "snake plant",
        name: "Snake Plant",
        latinName: "Sansevieria trifasciata",
        family: "Asparagaceae",
        kingdom: "Plantae",
        maintenance:[
            {
                type: maintenanceType.water,
                description: "Allow the soil to dry between waterings; water approximately every 2-3 weeks, ensuring the top 1-2 inches (2.5-5 cm) of soil are dry.",
            },
            {
                type: maintenanceType.prune,
                description: "Trim or remove any yellow or damaged leaves at the base, and divide the plant if it becomes too large.",
            },
            {
                type: maintenanceType.sun,
                description: "Thrives in indirect light but can tolerate low light conditions; provide at least 4 hours of sunlight per day.",
            },
            {
                type: maintenanceType.temp,
                description: "Adaptable to various temperatures; prefers a range between 70-90°F (21-32°C) but can tolerate lower temperatures.",
            },
            {
                type: maintenanceType.soil,
                description: "Plant in well-draining, sandy soil; a mix of potting soil and perlite or sand is suitable for optimal growth.",
            },
        ]
    },
    {
        class: "zz plant",
        name: "ZZ Plant",
        latinName: "Zamioculcas zamiifolia",
        family: "Araceae",
        kingdom: "Plantae",
        maintenance:[
            {
                type: maintenanceType.water,
                description: "Allow the soil to dry between waterings; water approximately every 2-3 weeks, ensuring the top 2-3 inches (5-7.5 cm) of soil are dry.",
            },
            {
                type: maintenanceType.prune,
                description: "Trim or remove any yellow or damaged leaves at the base, and wipe the leaves occasionally to keep them dust-free.",
            },
            {
                type: maintenanceType.sun,
                description: "Thrives in low to bright, indirect light; ZZ Plants can tolerate low light conditions but prefer bright, indirect light for optimal growth.",
            },
            {
                type: maintenanceType.temp,
                description: "Adaptable to various temperatures; ZZ Plants prefer temperatures between 65-75°F (18-24°C) but can tolerate lower temperatures.",
            },
            {
                type: maintenanceType.soil,
                description: "Plant in well-draining, sandy soil; a mix of potting soil and perlite or sand is suitable for optimal growth.",
            },
        ]
    },
]

