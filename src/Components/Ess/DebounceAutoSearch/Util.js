const getData=async (url)=>{
    let result = await fetch(url);
    let data = await result.json();
    return data;
}

const debounce=(fn,delay)=>{
    let timer;
    return (...args)=>{
    clearTimeout(timer);
    return new Promise((resolve,reject)=>{
        timer=setTimeout(async() => {
            let res= await fn(...args);
            resolve(res)
            }, delay);
        })
    }
}

let debounceObj = debounce(getData,1000);

export default debounceObj;