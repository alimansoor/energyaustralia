const response = [{
        "name": "LOL-palooza",
        "bands": [{
                "name": "Frank Jupiter",
                "recordLabel": "Pacific Records"
            },
            {
                "name": "Jill Black",
                "recordLabel": "Fourth Woman Records"
            },
            {
                "name": "Werewolf Weekday",
                "recordLabel": "XS Recordings"
            },
            {
                "name": "Winter Primates",
                "recordLabel": ""
            }
        ]
    },
    {
        "name": "Small Night In",
        "bands": [{
                "name": "Squint-281",
                "recordLabel": "Outerscope"
            },
            {
                "name": "Green Mild Cold Capsicum",
                "recordLabel": "Marner Sis. Recording"
            },
            {
                "name": "The Black Dashes",
                "recordLabel": "Fourth Woman Records"
            },
            {
                "name": "Yanke East",
                "recordLabel": "MEDIOCRE Music"
            },
            {
                "name": "Wild Antelope",
                "recordLabel": "Marner Sis. Recording"
            }
        ]
    },
    {
        "name": "Trainerella",
        "bands": [{
                "name": "Manish Ditch",
                "recordLabel": "ACR"
            },
            {
                "name": "YOUKRANE",
                "recordLabel": "Anti Records"
            },
            {
                "name": "Wild Antelope",
                "recordLabel": "Still Bottom Records"
            },
            {
                "name": "Adrian Venti",
                "recordLabel": "Monocracy Records"
            }
        ]
    },
    {
        "bands": [{
                "name": "Critter Girls",
                "recordLabel": "ACR"
            },
            {
                "name": "Propeller",
                "recordLabel": "Pacific Records"
            }
        ]
    },
    {
        "name": "Twisted Tour",
        "bands": [{
                "name": "Auditones",
                "recordLabel": "Marner Sis. Recording"
            },
            {
                "name": "Summon",
                "recordLabel": "Outerscope"
            },
            {
                "name": "Squint-281"
            }
        ]
    }
];

/*
const festivals = [
  recordLabel: {
    name: "",
    bands: [{ name: "", festival: ""}]
  }
] 
*/

let bands = [];
let recordLabel = null;

const festivals = [];

response.forEach((element, index, array) => {
    const festival = element.name || null;
    if (festival) {
        const bandsInFestival = element.bands || [];
        bandsInFestival.forEach(band => {
            let recordLabel = band.recordLabel || null;
            if (recordLabel) {
                let xyz = {
                    name: band.name,
                    festival: festival,
                }
                let obj = { recordLabel: recordLabel, bands: [xyz] }
                festivals.push(obj);
            }
        });
    }
});

for (let i = 0; i < festivals.length - 1; i++) {
    for (let j = i + 1; j < festivals.length; j++) {
        if (festivals[i].recordLabel == festivals[j].recordLabel) {
            festivals[i].bands.push(festivals[j].bands[0])
            festivals[i].bands.sort(compareBands)
            festivals.splice(j, 1);
        }
    }
}

function compareBands(a, b) {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0;
}

function compareFestivals(a, b) {
    if (a.recordLabel < b.recordLabel) {
        return -1;
    }
    if (a.recordLabel > b.recordLabel) {
        return 1;
    }
    return 0;
}

console.log(festivals.sort(compareFestivals));