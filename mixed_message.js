// My First Project Start



//array of composers (12 in total)
const composerList = ['Brahms', 'Mozart', 'Beethoven', 'Mendelssohn', 'Bach', 'Vivaldi', 'Wagner', 'Richard Strauss', 'Stravinsky', 'Schoenberg', 'Rachmaninoff', 'Shostakovich']
//array of locationactions (4 in total)
const locationActions = ['once went to',
                        'once stayed in',
                        'once travelled through',
                        'once performed in'];
//array of locations (12 in total)
const locationList = ['London',
                    'Paris',
                    'Bolivia',
                    'Pyongyang',
                    'Guadalajara',
                    'Timbuktu',
                    'Ouagadougou',
                    'Transylvania',
                    'Newcastle-upon-Tyne',
                    'Darkest Peru',
                    'Petropavlovsk',
                    'Djibouti'];
//array of verbs (12 in total)
const verbList = ['bonked',
                'ate fondue off',
                'received extremely poor-quality oral sex from',
                'gave an unwanted sensual massage to',
                'invented Reddit with',
                'very ineffectually punched',
                'pretended to be',
                'ran away from a murderous horde with',
                'played Dungeons and Dragons with',
                'roundly insulted',
                'defenstrated',
                'played naked leapfrog with'];
//array of other people (12 in total)
const otherPersonList = ['the Pope',
                        "Joe Biden's great-great-great-grandmother",
                        'Bruce Forsyth',
                        'the Holy Roman Emperor',
                        "a pulsating green blob from Kwx'trrrmooool",
                        'Zaphod Beebelbrox',
                        'a human statue',
                        "the period's greatest ostrich tickler",
                        'the entire nation of Macedonia',
                        'a Russian eunuch',
                        'the Emperor of Prussia',
                        "the first person ever to say 'Wazaaap'"];


//start of function to create random text
function composerFacts() {
    //create a random number based on the input array
    function getRandNum(array){
        return Math.floor(Math.random() * array.length);
    }

    //choosing random indexes from the different arrays
    let composer = composerList[getRandNum(composerList)];
    let locationVerb = locationActions[getRandNum(locationActions)];
    let location = locationList[getRandNum(locationList)];
    let verb = verbList[getRandNum(verbList)];
    let otherPerson = otherPersonList[getRandNum(otherPersonList)];

    //putting it all together!
    let fullString = `${composer} ${locationVerb} ${location} and ${verb} ${otherPerson}`;
    console.log("Did you know:")
    console.log(fullString + "?");
};

composerFacts();