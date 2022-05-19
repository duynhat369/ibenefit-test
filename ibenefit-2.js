import fetch from "node-fetch";
const JsonUrl = "https://metanode.vipn.net/eng.json"

const server = (async () => {
    const response = await fetch(JsonUrl);
    const data = await response.json();

    const randomNum = (array) => {
        return array[Math.floor(Math.random() * array.length)];
    }

    // create 24 elements from data (unduplicated)
    const array24ElementsFromData = []
    for (let i = 0; i < 24; i++) {
        const checkDuplicate = []
        const nameInData = randomNum(data);

        if (checkDuplicate.includes(nameInData)) {
            nameInData = randomNum(data);
        } else {
            checkDuplicate.push(nameInData)
            let item = {
                "name": nameInData,
                "index": i,
            }
            array24ElementsFromData.push(item)
        }
    }
    // console.log("array24ElementsFromData", array24ElementsFromData)
    // create 18 elements from array 24 elements (unduplicated)
    const array18ElementsFromArray24Elements = []
    for (let i = 0; i < 18; i++) {
        const nameInArray = randomNum(array24ElementsFromData);
        let item = {
            "name": nameInArray.name,
            "index": nameInArray.index,
        }
        array18ElementsFromArray24Elements.push(item)
    }
    // console.log("array18ElementsFromArray24Elements", array18ElementsFromArray24Elements)
    // create a list from array 18 elements (unduplicated)
    const array6ElementsFromArray8Elements = []
    for (let i = 0; i < 6; i++) {
        let list = []
        

     
        console.log("list", list)
        for (let j = 0; j < 3; j++) {
            list.push(array18ElementsFromArray24Elements[i])
            array18ElementsFromArray24Elements.splice(i,1)
            let item = {
                "list": list,
                // "primary": nameIn,
            }
            array6ElementsFromArray8Elements.push(item)
        }
    }
    console.log("array6ElementsFromArray8Elements", array6ElementsFromArray8Elements)
    // ["abc", "hkt", "xyz", "123" ,"dog", "cat"] =>  [
    //     {
    //         name: "abc",
    //         index: 0,
    //     },
    //     {
    //         name: "hkt",
    //         index: 1,
    //     },
    //     {
    //         name: "xyz",
    //         index: 2,
    //     },
    //     {
    //         name: "123",
    //         index: 3,
    //     },
    // ]
})()